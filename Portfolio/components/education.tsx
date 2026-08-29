import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading label="Education" title="Learning path." />

      <div className="divide-y divide-border border-y border-border">
        {education.map((item, i) => (
          <Reveal key={i}>
            <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{item.degree}</h3>
                <p className="mt-1 text-muted-foreground">{item.institution}</p>
              </div>
              <span className="text-sm text-muted-foreground">{item.year}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
