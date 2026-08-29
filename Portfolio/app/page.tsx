import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Achievements } from '@/components/achievements'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <span>Designed &amp; built with care.</span>
        </div>
      </footer>
    </>
  )
}
