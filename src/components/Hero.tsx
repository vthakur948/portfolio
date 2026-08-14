import { ArrowRight, Download, MapPin } from 'lucide-react'
import { personal } from '../data/resume'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="animate-fade-up" style={{ animationDelay: '40ms' }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-text-dim)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Available for new opportunities
            </span>
          </div>

          <h1
            className="animate-fade-up mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-6xl"
            style={{ animationDelay: '120ms' }}
          >
            {personal.name}
            <span className="block text-[var(--color-text-dim)]">Android Developer</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-dim)]"
            style={{ animationDelay: '200ms' }}
          >
            {personal.summary}
          </p>

          <div
            className="animate-fade-up mt-6 flex items-center gap-2 text-sm text-[var(--color-text-dim)]"
            style={{ animationDelay: '240ms' }}
          >
            <MapPin size={15} aria-hidden />
            {personal.location}
          </div>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '280ms' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#191008] transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-heading)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Contact Me
            </a>
            <a
              href={personal.resumeFile}
              download
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-heading)]"
            >
              <Download size={16} aria-hidden />
              Download Resume
            </a>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '360ms' }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
