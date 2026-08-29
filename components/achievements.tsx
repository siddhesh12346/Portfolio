import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { achievements } from '@/lib/portfolio-data'

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading label="Achievements" title="A few things I'm proud of." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 80}>
            <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-foreground/20 hover:bg-secondary/50">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {item.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-balance">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
