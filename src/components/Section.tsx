import type { ComponentType, ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  icon?: ComponentType<{ size?: number; className?: string }>
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, icon: Icon, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl sm:mb-16" data-reveal>
          <p className="mb-3 flex items-center gap-2 font-mono text-sm font-medium tracking-wide text-[var(--color-accent)]">
            {Icon && (
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent-soft)]">
                <Icon size={13} />
              </span>
            )}
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-dim)]">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
