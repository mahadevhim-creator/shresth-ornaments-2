'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/categories', label: 'Collections' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#0a0804]/95 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-2xl'
        : 'bg-transparent'
    }`}>
      {/* Top strip */}
      <div className="bg-[#c9a84c] text-[#0a0804] text-center py-1 text-xs font-semibold tracking-widest uppercase">
        ✦ BIS Hallmarked 22KT Gold · Free Shipping Above ₹50,000 · 7-Day Returns ✦
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[#c9a84c] flex items-center justify-center">
              <span className="text-[#c9a84c] font-serif font-black text-xl">S</span>
            </div>
            <div className="leading-tight">
              <div className="text-[#c9a84c] font-serif font-bold text-xl tracking-wider leading-none">SHRESTH</div>
              <div className="text-[#c9a84c]/60 text-[10px] tracking-[0.4em] uppercase">ORNAMENTS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#f0e6cc]/80 hover:text-[#c9a84c] text-sm tracking-widest uppercase font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-[#f0e6cc]/70 hover:text-[#c9a84c] transition p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-[#f0e6cc]/70 hover:text-[#c9a84c] transition p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <Link href="/contact" className="bg-[#c9a84c] text-[#0a0804] px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#e8c96d] transition-colors">
              Visit Showroom
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#c9a84c] p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#120f08] border-t border-[#c9a84c]/20 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[#f0e6cc]/80 hover:text-[#c9a84c] text-sm tracking-widest uppercase px-4 py-2 transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                className="block bg-[#c9a84c] text-[#0a0804] px-6 py-3 text-xs font-bold tracking-widest uppercase text-center hover:bg-[#e8c96d] transition">
                Visit Showroom
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
