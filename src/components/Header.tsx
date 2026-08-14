import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { personal } from '../data/resume'
import portraitSmall from '../assets/profile/portrait-small.jpg'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={portraitSmall}
            alt=""
            aria-hidden
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-[var(--color-border)] object-cover"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-heading)]">
            Nitin<span className="text-[var(--color-accent)]">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-heading)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={personal.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-heading)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Download size={15} aria-hidden />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[#191008] transition-transform hover:scale-[1.03]"
          >
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-heading)] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-heading)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={personal.resumeFile}
              download
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-heading)]"
            >
              <Download size={15} aria-hidden />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-[#191008]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
