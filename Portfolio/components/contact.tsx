import { ArrowUpRight, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const links = [
    { label: 'Email Me', href: `mailto:${profile.email}`, icon: Mail, primary: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
    { label: 'GitHub', href: profile.github, icon: GithubIcon },
  ]

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-32 text-center md:py-48"
    >
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Contact
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Let&apos;s build something.
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Have an idea, project, or opportunity? I&apos;d love to hear about it.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {links.map((link) => {
            const Icon = link.icon
            const isMail = link.href.startsWith('mailto:')
            return (
              <a
                key={link.label}
                href={link.href}
                {...(!isMail
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className={
                  link.primary
                    ? 'inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto'
                    : 'inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary sm:w-auto'
                }
              >
                <Icon className="size-4" />
                {link.label}
                {!link.primary && <ArrowUpRight className="size-4 opacity-60" />}
              </a>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
