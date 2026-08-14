import { useEffect, useRef, useState } from 'react'
import { Cast, Code2, MonitorPlay, MousePointerClick, Pause, Play, Signal } from 'lucide-react'
import { SiFirebase, SiJetpackcompose, SiKotlin } from 'react-icons/si'
import { projects } from '../data/resume'
import { CodeEditorPreview } from './CodeEditorPreview'
import heroVideo from '../assets/video/hero-loop.mp4'

// Background loop: Mixkit "Purple Blue Gradient" (free stock video,
// no attribution required — https://mixkit.co/license/#videoFree).
// Stands in for real app footage — decorative only.
const CAM_FILTERS = [
  'hue-rotate(0deg) saturate(1.1)',
  'hue-rotate(70deg) saturate(1.2)',
  'hue-rotate(-50deg) saturate(1.1)',
  'hue-rotate(150deg) saturate(1.15)',
]

const CHANNELS = projects.find((p) => p.subApps)?.subApps ?? []
const CAM_LAYOUTS = [1, 2, 3, 4] as const
const DURATION_SECONDS = 8 * 60

function formatTime(totalSeconds: number) {
  const clamped = Math.max(0, Math.round(totalSeconds))
  const m = Math.floor(clamped / 60)
  const s = clamped % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function HeroVisual() {
  const [view, setView] = useState<'code' | 'app'>('code')
  const [channelIndex, setChannelIndex] = useState(0)
  const [camMode, setCamMode] = useState<(typeof CAM_LAYOUTS)[number]>(3)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(28)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const channel = CHANNELS[channelIndex]

  useEffect(() => {
    if (!isPlaying) return
    const id = window.setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.6))
    }, 150)
    return () => window.clearInterval(id)
  }, [isPlaying])

  useEffect(() => {
    videoRefs.current.slice(0, camMode).forEach((v) => {
      if (!v) return
      if (isPlaying) v.play().catch(() => {})
      else v.pause()
    })
  }, [isPlaying, camMode, view])

  const elapsed = (progress / 100) * DURATION_SECONDS
  const remaining = DURATION_SECONDS - elapsed

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full opacity-25 blur-[70px]"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
      />

      {/* Phone frame */}
      <div className="relative rounded-[2.2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 shadow-2xl">
        <div className="overflow-hidden rounded-[1.7rem] border border-[var(--color-border)] bg-[var(--color-bg)]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-medium text-[var(--color-text-dim)]">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <Signal size={11} />
              <Cast size={11} />
            </div>
          </div>

          {/* View switcher */}
          <div className="flex items-center justify-center gap-1.5 px-4 pt-3" role="group" aria-label="Preview mode">
            <button
              type="button"
              onClick={() => setView('code')}
              aria-pressed={view === 'code'}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-semibold transition-colors ${
                view === 'code'
                  ? 'bg-[var(--color-accent)] text-[#191008]'
                  : 'bg-[var(--color-surface-2)] text-[var(--color-text-dim)] hover:text-[var(--color-heading)]'
              }`}
            >
              <Code2 size={11} aria-hidden />
              Code
            </button>
            <button
              type="button"
              onClick={() => setView('app')}
              aria-pressed={view === 'app'}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-semibold transition-colors ${
                view === 'app'
                  ? 'bg-[var(--color-accent)] text-[#191008]'
                  : 'bg-[var(--color-surface-2)] text-[var(--color-text-dim)] hover:text-[var(--color-heading)]'
              }`}
            >
              <MonitorPlay size={11} aria-hidden />
              App Preview
            </button>
          </div>

          {view === 'code' ? (
            <CodeEditorPreview />
          ) : (
            <>
              {/* Video player */}
              <div className="relative mx-3 mt-3 aspect-[9/14] overflow-hidden rounded-xl bg-[#12141a]">
                <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-white backdrop-blur-sm">
                  <span className={`h-1.5 w-1.5 rounded-full bg-red-500 ${isPlaying ? 'animate-pulse' : ''}`} />
                  LIVE
                </div>

                {channel && (
                  <img
                    src={channel.icon}
                    alt=""
                    aria-hidden
                    className="absolute right-3 top-3 z-10 h-6 w-6 rounded-md border border-white/20 object-cover shadow"
                  />
                )}

                <div
                  className={`absolute inset-0 grid gap-[3px] p-[3px] ${camMode > 1 ? 'pt-8' : ''} ${
                    camMode === 1 ? 'grid-cols-1' : camMode === 2 ? 'grid-cols-1 grid-rows-2' : 'grid-cols-2 grid-rows-2'
                  }`}
                >
                  {Array.from({ length: camMode }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIsPlaying((v) => !v)}
                      aria-label={
                        camMode === 1
                          ? isPlaying
                            ? 'Pause preview'
                            : 'Play preview'
                          : `Camera ${i + 1}${isPlaying ? ', playing' : ', paused'} — toggle playback`
                      }
                      aria-pressed={isPlaying}
                      className={`group relative flex items-center justify-center overflow-hidden rounded-md ${
                        camMode === 3 && i === 2 ? 'col-span-2' : ''
                      }`}
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el
                        }}
                        src={heroVideo}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-hidden
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ filter: CAM_FILTERS[i % CAM_FILTERS.length] }}
                      />
                      <div aria-hidden className="absolute inset-0 bg-black/25" />
                      {isPlaying && (
                        <span
                          aria-hidden
                          className="animate-video-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        />
                      )}
                      {camMode > 1 && (
                        <span className="absolute left-1.5 top-1.5 z-10 rounded bg-black/40 px-1 py-0.5 text-[7px] font-semibold text-white/80">
                          CAM {i + 1}
                        </span>
                      )}
                      <span
                        className={`relative z-10 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-[#191008] shadow-lg transition-transform group-hover:scale-105 ${
                          camMode === 1 ? 'h-11 w-11' : 'h-6 w-6 opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        {isPlaying ? (
                          <Pause size={camMode === 1 ? 18 : 11} fill="currentColor" />
                        ) : (
                          <Play size={camMode === 1 ? 18 : 11} fill="currentColor" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-x-3 bottom-3">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-[var(--color-accent)] motion-reduce:transition-none"
                      style={{ width: `${progress}%`, transition: isPlaying ? 'width 150ms linear' : 'width 200ms ease' }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-[8px] font-medium text-white/70">
                    <span>
                      {channel?.name ?? 'OTT Platform'} · {camMode > 1 ? `${camMode}-UP` : 'Single Cam'}
                    </span>
                    <span>−{formatTime(remaining)}</span>
                  </div>
                </div>
              </div>

              {/* Camera layout switcher */}
              <div className="flex items-center justify-center gap-1.5 px-4 pt-3" role="group" aria-label="Camera layout">
                {CAM_LAYOUTS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCamMode(n)}
                    aria-pressed={camMode === n}
                    className={`rounded-full px-2.5 py-1 text-[9px] font-semibold transition-colors ${
                      camMode === n
                        ? 'bg-[var(--color-accent)] text-[#191008]'
                        : 'bg-[var(--color-surface-2)] text-[var(--color-text-dim)] hover:text-[var(--color-heading)]'
                    }`}
                  >
                    {n}-UP
                  </button>
                ))}
              </div>

              {/* Channel switcher — same codebase, multiple whitelabel apps */}
              <div className="flex items-center gap-2 overflow-x-auto px-4 py-3" role="group" aria-label="Switch app">
                {CHANNELS.map((app, i) => (
                  <button
                    key={app.name}
                    type="button"
                    onClick={() => setChannelIndex(i)}
                    aria-label={`Show ${app.name}`}
                    aria-pressed={channelIndex === i}
                    className={`flex-none rounded-lg border p-0.5 transition-colors ${
                      channelIndex === i ? 'border-[var(--color-accent)]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={app.icon} alt="" aria-hidden className="h-6 w-6 rounded-md object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-[var(--color-text-dim)]">
        <MousePointerClick size={13} aria-hidden />
        {view === 'code' ? 'Tap to explore the codebase' : 'Tap to switch camera angles & apps'}
      </p>

      {/* Floating skill badges */}
      <div
        aria-hidden
        className="absolute -left-6 top-10 hidden h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[#7F52FF] shadow-lg lg:flex"
      >
        <SiKotlin size={18} />
      </div>
      <div
        aria-hidden
        className="absolute -right-5 top-1/3 hidden h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[#4285F4] shadow-lg lg:flex"
      >
        <SiJetpackcompose size={18} />
      </div>
      <div
        aria-hidden
        className="absolute -left-4 bottom-32 hidden h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[#FFCA28] shadow-lg lg:flex"
      >
        <SiFirebase size={18} />
      </div>
    </div>
  )
}
