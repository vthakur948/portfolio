import { Braces, Database, Puzzle, Smartphone, Wrench } from 'lucide-react'
import { SiFirebase, SiGit, SiGradle, SiGraphql, SiJetpackcompose, SiKotlin } from 'react-icons/si'
import { useReveal } from '../hooks/useReveal'
import { skillCategories } from '../data/resume'
import { Section } from './Section'

const CATEGORY_ICONS: Record<string, typeof Braces> = {
  'Languages & Architecture': Braces,
  'Android & Jetpack': Smartphone,
  'Networking & Data': Database,
  'Third-Party Integrations': Puzzle,
  'Tools & Testing': Wrench,
}

const SKILL_ICONS: Record<string, typeof SiKotlin> = {
  Kotlin: SiKotlin,
  'Jetpack Compose': SiJetpackcompose,
  Firebase: SiFirebase,
  GraphQL: SiGraphql,
  Gradle: SiGradle,
  Git: SiGit,
}

export function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      icon={Braces}
      title="Technologies I work with"
      description="Core languages, Android frameworks, and tooling used across production apps and SDKs."
      className="bg-[var(--color-surface)]/40"
    >
      <div ref={ref} data-reveal-group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => {
          const CategoryIcon = CATEGORY_ICONS[group.category] ?? Braces
          return (
            <div
              key={group.category}
              data-reveal
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/40"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <CategoryIcon size={16} />
                </span>
                <h3 className="text-sm font-semibold text-[var(--color-heading)]">{group.category}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const SkillIcon = SKILL_ICONS[skill]
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--color-text)]"
                    >
                      {SkillIcon && <SkillIcon size={11} className="text-[var(--color-accent)]" />}
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
