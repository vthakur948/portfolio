import { Mail, MessageCircle, Phone } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { personal } from '../data/resume'
import { Section } from './Section'
import { LinkedInIcon } from './icons/LinkedInIcon'

const CHANNELS = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, '')}`,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: personal.linkedinLabel,
    href: personal.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
]

export function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      icon={MessageCircle}
      title="Let's work together"
      description="Open to new Android developer opportunities. Reach out through any of the channels below."
    >
      <div ref={ref} data-reveal-group className="grid gap-4 sm:grid-cols-3">
        {CHANNELS.map(({ label, value, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
            data-reveal
            className="group flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/50"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <Icon size={18} aria-hidden />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-dim)]">{label}</p>
              <p className="mt-1 break-words text-sm font-semibold text-[var(--color-heading)]">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
