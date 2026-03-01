import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#060402] border-t border-[#c9a84c]/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-[#c9a84c] flex items-center justify-center">
                <span className="text-[#c9a84c] font-serif font-black text-xl">S</span>
              </div>
              <div>
                <div className="text-[#c9a84c] font-serif font-bold text-xl tracking-wider">SHRESTH</div>
                <div className="text-[#c9a84c]/50 text-[10px] tracking-[0.4em] uppercase">ORNAMENTS</div>
              </div>
            </div>
            <p className="text-[#f0e6cc]/50 text-sm leading-relaxed mb-6">
              Handcrafted 22KT gold jewelry from the heart of Jaipur. Three decades of heritage, trust, and timeless elegance.
            </p>
            <div className="flex gap-3">
              {['M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
              ].map((path, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-[#c9a84c]/30 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 flex items-center justify-center transition">
                  <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a84c] font-serif font-bold text-base tracking-widest uppercase mb-6">Collections</h4>
            <ul className="space-y-3">
              {['Necklaces', 'Earrings', 'Bangles & Kadas', 'Rings', 'Bracelets', 'Pendants', 'Anklets'].map(item => (
                <li key={item}>
                  <Link href="/categories" className="text-[#f0e6cc]/50 hover:text-[#c9a84c] text-sm tracking-wide transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[#c9a84c] font-serif font-bold text-base tracking-widest uppercase mb-6">Information</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'BIS Hallmark Info', href: '/about' },
                { label: 'Shipping Policy', href: '/contact' },
                { label: 'Return Policy', href: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#f0e6cc]/50 hover:text-[#c9a84c] text-sm tracking-wide transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a84c] font-serif font-bold text-base tracking-widest uppercase mb-6">Visit Us</h4>
            <div className="space-y-4 text-sm text-[#f0e6cc]/50">
              <div>
                <p className="text-[#c9a84c]/80 font-semibold mb-1">Address</p>
                <p>Shop No. 245, Johri Bazaar<br/>Near Hawa Mahal<br/>Jaipur, Rajasthan 302003</p>
              </div>
              <div>
                <p className="text-[#c9a84c]/80 font-semibold mb-1">Phone</p>
                <a href="tel:+919876543210" className="hover:text-[#c9a84c] transition">+91 98765 43210</a>
              </div>
              <div>
                <p className="text-[#c9a84c]/80 font-semibold mb-1">Hours</p>
                <p>Mon–Sat: 10 AM – 8 PM<br/>Sun: 11 AM – 6 PM</p>
              </div>
              <div>
                <p className="text-[#c9a84c]/80 font-semibold mb-1">Email</p>
                <a href="mailto:info@shresth.com" className="hover:text-[#c9a84c] transition">info@shresth.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#f0e6cc]/30 text-xs tracking-widest">
            © 2024 Shresth Ornaments. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {['BIS Hallmarked', '22KT Gold', 'Since 1994'].map((badge, i) => (
              <span key={i} className="text-[#c9a84c]/40 text-[10px] tracking-widest uppercase border border-[#c9a84c]/20 px-3 py-1">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
