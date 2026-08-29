import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading label="Skills" title="Tools I build with." />

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 80}>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">{group.group}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm text-foreground/90 transition-colors hover:border-foreground/25 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
