import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading label="Experience" title="Where I've worked." />

      <div className="relative">
        {/* timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-2 bottom-2 hidden w-px bg-border md:block"
        />

        <div className="space-y-16">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <div className="relative md:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-[-4px] top-2 hidden size-[9px] rounded-full bg-accent md:block"
                />
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{job.company}</h3>
                    <p className="mt-2 text-base text-foreground/90">{job.role}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{job.period}</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
