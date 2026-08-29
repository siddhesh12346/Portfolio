
import { ArrowUpRight, FileText } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading label="Projects" title="Selected work." />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={`${project.category}-${i}`} delay={(i % 2) * 100}>
            <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-foreground/20 md:p-10">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {project.category}
              </span>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {/* GitHub Button */}
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-foreground/40 hover:bg-secondary"
                  >
                    <GithubIcon className="size-4" />
                    GitHub
                  </a>
                )}

                {/* Live Demo Button */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Live Demo
                    <ArrowUpRight className="size-4" />
                  </a>
                )}

                {/* Research Paper Button */}
                {project.Paperlink && (
                  <a
                    href={project.Paperlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-foreground/40 hover:bg-secondary"
                  >
                    <FileText className="size-4" />
                    View Paper
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          More projects coming soon.
        </p>
      </Reveal>
    </section>
  )
}
