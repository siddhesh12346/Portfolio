'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, profile } from '@/lib/portfolio-data'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="text-sm font-medium tracking-tight">{profile.name}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pt-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
              className={cn(
                'border-b border-border py-4 text-2xl font-medium tracking-tight transition-all duration-500',
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
