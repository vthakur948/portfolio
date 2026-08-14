import { Briefcase, Building2, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { experience } from '../data/resume'
import { Section } from './Section'

export function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Section id="experience" eyebrow="Experience" icon={Briefcase} title="Where I've worked">
      <div ref={ref} data-reveal-group className="relative space-y-10">
        <div
          aria-hidden
          className="absolute left-[23px] top-2 bottom-2 hidden w-px bg-[var(--color-border)] sm:block"
        />
        {experience.map((job) => (
          <article key={job.company} data-reveal className="relative pl-0 sm:pl-16">
            <span
              aria-hidden
              className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] sm:flex"
            >
              <Building2 size={20} />
            </span>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--color-heading)]">{job.role}</h3>
                <span className="font-mono text-xs text-[var(--color-accent)]">{job.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--color-text-dim)]">{job.company}</p>
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text)]">
                    <CheckCircle2 size={15} className="mt-0.5 flex-none text-[var(--color-accent)]" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
