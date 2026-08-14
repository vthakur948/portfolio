import { Mail } from 'lucide-react'
import { personal } from '../data/resume'
import { LinkedInIcon } from './icons/LinkedInIcon'

const SOCIALS = [
  { label: 'Email', href: `mailto:${personal.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', href: personal.linkedin, icon: LinkedInIcon, external: true },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] font-display text-sm font-semibold text-[var(--color-accent)]">
            NK
          </span>
          <div>
            <p className="font-display text-base font-semibold text-[var(--color-heading)]">{personal.name}</p>
            <p className="text-sm text-[var(--color-text-dim)]">{personal.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-dim)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Icon size={16} aria-hidden />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] px-6 py-5 text-center text-xs text-[var(--color-text-dim)]">
        © {year} {personal.name}. All rights reserved.
      </div>
    </footer>
  )
}
