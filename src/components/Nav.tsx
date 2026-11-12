import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CONTACT_EMAIL, PORTFOLIO_URL, SITE_NAME, WHATSAPP_URL } from '../constants'
import { categories } from '../products'
import logo from '../assets/jo-labs-logo.webp'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-page/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt={SITE_NAME} width={117} height={72} className="h-[72px] w-auto" />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {categories.map(c => {
            const active = c.products.some(p => p.path === pathname)
            return (
              // Opens on hover and on keyboard focus (focus-within); no JS state needed.
              <li key={c.key} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 text-sm transition-colors ${active ? 'text-ink underline decoration-rule-strong underline-offset-[6px]' : 'text-body hover:text-ink'}`}
                >
                  {c.short}
                  <svg className="h-3 w-3 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="m3 4.5 3 3 3-3" />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="w-80 rounded-2xl border border-rule bg-page p-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]">
                    {c.products.map(p => (
                      <li key={p.key}>
                        <NavLink
                          to={p.path}
                          onClick={e => e.currentTarget.blur()}
                          className={({ isActive }) => `flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-plate ${isActive ? 'bg-plate' : ''}`}
                        >
                          <img src={p.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0 rounded-lg" />
                          <span>
                            <span className="block text-sm font-medium text-ink">{p.name}</span>
                            <span className="mt-0.5 block text-xs leading-snug text-dim">{p.summary}</span>
                          </span>
                        </NavLink>
                      </li>
                    ))}
                    <li className="mt-1 border-t border-rule px-3 pb-1 pt-2.5">
                      <Link to={`/#${c.key}`} onClick={e => e.currentTarget.blur()} className="text-xs text-body hover:text-ink">All {c.short.toLowerCase()} →</Link>
                    </li>
                  </ul>
                </div>
              </li>
            )
          })}
          <li>
            <Link to="/#author" className="text-sm text-body hover:text-ink">About</Link>
          </li>
          <li className="flex items-center gap-2.5">
            <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line whitespace-nowrap !py-2">Portfolio ↗</a>
            <LetsTalk className="!py-2" />
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-rule px-4 py-2 lg:hidden">
          {categories.map(c => (
            <li key={c.key} className="border-b border-rule py-2">
              <p className="eyebrow pt-2">{c.title}</p>
              {c.products.map(p => (
                <NavLink key={p.key} to={p.path} onClick={() => setOpen(false)} className={({ isActive }) => `block py-2.5 text-lg ${isActive ? 'text-lit' : 'text-ink'}`}>
                  {p.name}
                </NavLink>
              ))}
            </li>
          ))}
          <li className="flex flex-wrap gap-3 py-4">
            <LetsTalk />
            <Link to="/#author" onClick={() => setOpen(false)} className="btn btn-line">About</Link>
            <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line">Portfolio ↗</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-line">Email</a>
          </li>
        </ul>
      )}
    </header>
  )
}

function LetsTalk({ className = '' }: { className?: string }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-brand whitespace-nowrap ${className}`}>
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z" />
      </svg>
      Let's talk
    </a>
  )
}
