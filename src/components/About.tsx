import { Languages, MapPin, Smartphone, Target, UserRound } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { personal } from '../data/resume'
import { Section } from './Section'
import portrait from '../assets/profile/portrait.jpg'

const FACTS = [
  { label: 'Role', value: 'Android Developer', icon: Smartphone },
  { label: 'Location', value: personal.location, icon: MapPin },
  { label: 'Focus', value: 'Native Android, SDKs, OTT streaming', icon: Target },
  { label: 'Languages', value: personal.languages.join(', '), icon: Languages },
]

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Section id="about" eyebrow="About" icon={UserRound} title="Building Android experiences end to end">
      <div ref={ref} data-reveal-group className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-[var(--color-text)]" data-reveal>
          <p>
            I'm an Android developer with a track record across R&amp;D, retail diagnostics tooling, and
            large-scale OTT streaming platforms. Over the past 7+ years I've worked through the full mobile
            development lifecycle &mdash; from hardware-level R&amp;D and data-erasure compliance tooling to
            building whitelabel streaming apps used by multiple sports and entertainment brands.
          </p>
          <p>
            My current work at NexGen IOT Solutions centers on end-to-end Android SDK development for video
            playback, monetization, and analytics, shared across several client applications. Earlier, at
            Veridic Technologies and Cellde Innovation Labs, I worked on ADISA-certified data erasure systems
            and Android hardware testing for buy-back solutions.
          </p>
          <p>
            I care about clean architecture (MVI/MVVM, Clean Architecture), dependable release delivery, and
            working closely with product, design, and QA to ship features that hold up in production.
          </p>
        </div>

        <div className="space-y-6" data-reveal>
          <div className="relative mx-auto w-full max-w-[220px] lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl"
              style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
            />
            <img
              src={portrait}
              alt={`Portrait of ${personal.name}`}
              width={220}
              height={220}
              className="aspect-square w-full rounded-2xl border border-[var(--color-border)] object-cover shadow-2xl"
            />
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">
              Quick facts
            </h3>
            <dl className="mt-5 space-y-4">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <fact.icon size={15} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-dim)]">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-[var(--color-heading)]">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}
