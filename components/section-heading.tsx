import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  label: string
  title: string
  className?: string
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-14 md:mb-20', className)}>
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
