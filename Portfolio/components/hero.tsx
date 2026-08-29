'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

function useTypewriter(text: string, { speed = 90, startDelay = 900 } = {}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval)
            return c
          }
          return c + 1
        })
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { typed: text.slice(0, count), done: count >= text.length }
}

export function Hero() {
  const { typed, done } = useTypewriter(`${profile.name}.`)

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex justify-center animate-[fade-up_1.1s_cubic-bezier(0.16,1,0.3,1)_both]">
          <div className="relative size-28 overflow-hidden rounded-full ring-1 ring-border sm:size-32">
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/siddhesh.jpg"
              alt="Portrait of Siddhesh Kulkarni"
              className="size-full object-cover"
            />
          </div>
        </div>

        <p className="animate-[fade-in_1s_ease-out_0.15s_both] text-sm font-medium tracking-wide text-accent">
          {profile.roles.join('  •  ')}
        </p>

        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="block animate-[fade-up_1.1s_cubic-bezier(0.16,1,0.3,1)_0.1s_both] text-muted-foreground">
            Hi, I&apos;m
          </span>
          <span className="block min-h-[1.05em]">
            {typed}
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] rounded-full bg-accent align-middle ${
                done ? 'animate-[blink_1.1s_step-end_infinite]' : ''
              }`}
            />
            <span className="sr-only">{profile.name}</span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground animate-[fade-up_1.1s_cubic-bezier(0.16,1,0.3,1)_0.45s_both] sm:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 animate-[fade-up_1.1s_cubic-bezier(0.16,1,0.3,1)_0.6s_both] sm:flex-row">
          <a
            href="#projects"
            className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-secondary sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/60 transition-colors hover:text-foreground"
      >
        <ChevronDown className="size-6 animate-bounce" style={{ animationDuration: '2s' }} />
      </a>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
