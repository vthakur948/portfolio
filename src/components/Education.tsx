import { GraduationCap } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { education } from '../data/resume'
import { Section } from './Section'

export function Education() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Section
      id="education"
      eyebrow="Education"
      icon={GraduationCap}
      title="Academic background"
      className="bg-[var(--color-surface)]/40"
    >
      <div ref={ref} data-reveal-group className="grid gap-4 sm:grid-cols-2">
        {education.map((entry) => (
          <div
            key={entry.degree}
            data-reveal
            className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <GraduationCap size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-[var(--color-heading)]">{entry.degree}</h3>
                <span className="font-mono text-xs text-[var(--color-accent)]">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-text-dim)]">{entry.school}</p>
              <p className="mt-2 text-sm font-medium text-[var(--color-text)]">{entry.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
