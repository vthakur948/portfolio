import { useEffect, useMemo, useState } from 'react'
import { Check } from 'lucide-react'
import { SiKotlin } from 'react-icons/si'

type CodeFile = { name: string; lines: string[] }

const CODE_FILES: CodeFile[] = [
  {
    name: 'MultiCamPlayer.kt',
    lines: [
      '@Composable',
      'fun MultiCamPlayer(',
      '  feeds: List<CamFeed>',
      ') {',
      '  val player = remember {',
      '    ExoPlayer.Builder(ctx)',
      '      .build()',
      '  }',
      '',
      '  LaunchedEffect(feeds) {',
      '    player.setMediaItems(',
      '      feeds.toMediaItems()',
      '    )',
      '    player.prepare()',
      '  }',
      '',
      '  CamGrid(feeds.size) { feed ->',
      '    CameraTile(feed, player)',
      '  }',
      '}',
    ],
  },
  {
    name: 'SDKAnalytics.kt',
    lines: [
      'class SDKAnalytics(',
      '  private val client: CleverTap',
      ') {',
      '  fun trackPlay(streamId: String) {',
      '    val event = mapOf(',
      '      "stream_id" to streamId,',
      '      "platform" to "Android"',
      '    )',
      '    client.pushEvent(',
      '      "video_play", event',
      '    )',
      '  }',
      '}',
    ],
  },
  {
    name: 'DeepLinkRouter.kt',
    lines: [
      'object DeepLinkRouter {',
      '  fun resolve(uri: Uri): Screen {',
      '    return when (uri.host) {',
      '      "watch" -> Screen.Player(',
      '        uri.getQueryParameter("id")',
      '      )',
      '      "channel" -> Screen.Channel(',
      '        uri.lastPathSegment',
      '      )',
      '      else -> Screen.Home',
      '    }',
      '  }',
      '}',
    ],
  },
]

const KOTLIN_KEYWORDS = new Set([
  'fun', 'val', 'var', 'class', 'object', 'interface', 'if', 'else', 'for', 'while',
  'return', 'private', 'public', 'override', 'suspend', 'import', 'package',
  'true', 'false', 'null', 'when',
])

function highlightLine(line: string, lineKey: string) {
  const regex = /\/\/.*|@\w+|"[^"]*"|\s+|\w+|[^\w\s]/g
  const nodes: { text: string; cls: string }[] = []
  let m: RegExpExecArray | null
  while ((m = regex.exec(line))) {
    const tok = m[0]
    const end = m.index + tok.length
    let cls = 'text-white/85'
    if (tok.startsWith('//')) cls = 'text-[#6a9955]'
    else if (tok.startsWith('@')) cls = 'text-[#dcdcaa]'
    else if (tok.startsWith('"')) cls = 'text-[#ce9178]'
    else if (KOTLIN_KEYWORDS.has(tok)) cls = 'text-[#c586c0]'
    else if (/^[A-Z]/.test(tok)) cls = 'text-[#4ec9b0]'
    else if (/^[a-z_]\w*$/.test(tok) && line[end] === '(') cls = 'text-[#dcdcaa]'
    nodes.push({ text: tok, cls })
  }
  return nodes.map((n, i) => (
    <span key={`${lineKey}-${i}`} className={n.cls}>
      {n.text}
    </span>
  ))
}

export function CodeEditorPreview() {
  const [fileIndex, setFileIndex] = useState(0)
  const [visibleChars, setVisibleChars] = useState(0)
  const file = CODE_FILES[fileIndex]
  const fullText = useMemo(() => file.lines.join('\n'), [file])

  useEffect(() => {
    let cancelled = false
    let timer: number | undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setVisibleChars(fullText.length)
      return
    }

    function step(v: number) {
      if (cancelled) return
      if (v >= fullText.length) {
        timer = window.setTimeout(() => {
          if (cancelled) return
          setVisibleChars(0)
          timer = window.setTimeout(() => step(0), 400)
        }, 2200)
        return
      }
      setVisibleChars(v)
      timer = window.setTimeout(() => step(v + 1), 22)
    }

    setVisibleChars(0)
    step(0)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [fullText])

  const shownLines = fullText.slice(0, visibleChars).split('\n')
  const isComplete = visibleChars >= fullText.length

  return (
    <>
      <div className="relative mx-3 mt-3 aspect-[9/14] overflow-hidden rounded-xl bg-[#1e1e1e] font-mono">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#252526] px-2.5 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
          <span className="ml-2 flex items-center gap-1 rounded bg-[#1e1e1e] px-2 py-0.5 text-[8px] text-white/70">
            <SiKotlin size={8} className="text-[#7F52FF]" />
            {file.name}
          </span>
        </div>

        <div className="flex h-[calc(100%-26px)] overflow-hidden px-1.5 py-2 text-[8.5px] leading-[13px]">
          <div aria-hidden className="select-none pr-2 text-right text-white/25">
            {file.lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="min-w-0 flex-1">
            {file.lines.map((_, i) => {
              const shown = shownLines[i]
              const isCurrent = i === shownLines.length - 1 && !isComplete
              return (
                <div key={i} className="whitespace-pre text-white/90">
                  {shown !== undefined ? highlightLine(shown, `l${i}`) : ' '}
                  {isCurrent && <span className="animate-pulse text-[var(--color-accent)]">▍</span>}
                </div>
              )
            })}
          </div>
        </div>

        {isComplete && (
          <div className="animate-fade-in absolute inset-x-2 bottom-2 flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-[8px] font-medium text-emerald-400 backdrop-blur-sm">
            <Check size={9} aria-hidden />
            Build successful
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-1.5 px-4 pt-3" role="group" aria-label="Switch file">
        {CODE_FILES.map((f, i) => (
          <button
            key={f.name}
            type="button"
            onClick={() => setFileIndex(i)}
            aria-pressed={fileIndex === i}
            className={`rounded-full px-2.5 py-1 text-[8px] font-semibold transition-colors ${
              fileIndex === i
                ? 'bg-[var(--color-accent)] text-[#191008]'
                : 'bg-[var(--color-surface-2)] text-[var(--color-text-dim)] hover:text-[var(--color-heading)]'
            }`}
          >
            {f.name.replace('.kt', '')}
          </button>
        ))}
      </div>
    </>
  )
}
