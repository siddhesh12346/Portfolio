import { Reveal } from '@/components/reveal'
import { about } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {about.heading}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={160 + i * 80}>
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={120}>
            <p className="text-sm font-medium text-muted-foreground">Interests</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {about.interests.map((interest) => (
                <li
                  key={interest}
                  className="py-4 text-base text-foreground/90 transition-colors hover:text-foreground"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
