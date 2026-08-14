import { FolderGit2, HardDrive, Tv } from 'lucide-react'
import { SiGoogleplay } from 'react-icons/si'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/resume'
import { Section } from './Section'

const FALLBACK_ICONS: Record<string, typeof Tv> = {
  'Whitelabel OTT Streaming Platform': Tv,
  'Warehouse X': HardDrive,
}

export function Projects() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      icon={FolderGit2}
      title="Selected work"
      description="Apps and platforms built across NexGen IOT Solutions and Cellde Innovation Labs."
    >
      <div ref={ref} data-reveal-group className="space-y-6">
        {projects.map((project) => {
          const FallbackIcon = FALLBACK_ICONS[project.name] ?? FolderGit2
          return (
            <article
              key={project.name}
              data-reveal
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  {project.icon ? (
                    <img
                      src={project.icon}
                      alt={`${project.name} app icon`}
                      width={44}
                      height={44}
                      className="h-11 w-11 flex-none rounded-xl border border-[var(--color-border)] object-cover"
                    />
                  ) : (
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <FallbackIcon size={20} />
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-heading)]">{project.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{project.org}</p>
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-medium text-[var(--color-heading)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <SiGoogleplay size={12} aria-hidden />
                    {project.linkLabel ?? 'View Live'}
                  </a>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text)]">{project.description}</p>

              {project.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--color-text-dim)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.subApps && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.subApps.map((app) => (
                    <a
                      key={app.name}
                      href={app.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-colors hover:border-[var(--color-accent)]/50"
                    >
                      <img
                        src={app.icon}
                        alt={`${app.name} app icon`}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 flex-none rounded-lg border border-[var(--color-border)] object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-[var(--color-heading)]">{app.name}</span>
                          <SiGoogleplay
                            size={12}
                            aria-hidden
                            className="flex-none text-[var(--color-text-dim)] transition-colors group-hover:text-[var(--color-accent)]"
                          />
                        </div>
                        <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-text-dim)]">
                          {app.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}
