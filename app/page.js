'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { products, categories } from './data/products'

export default function Home() {
  const [selectedCat, setSelectedCat] = useState(null)

  const filtered = selectedCat
    ? products.filter(p => p.cat === selectedCat)
    : products

  return (
    <div className="min-h-screen bg-[#0a0804]">
      <Navbar />

      {/* ── MARQUEE ── */}
      <div className="bg-[#c9a84c] text-[#0a0804] py-2 overflow-hidden mt-[88px]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[11px] tracking-[0.3em] uppercase font-bold mx-10 flex-shrink-0">
              ✦ Free Shipping above ₹50,000 &nbsp;
              ✦ BIS Hallmarked 22KT Gold &nbsp;
              ✦ 7-Day Easy Returns &nbsp;
              ✦ Authentic Craftsmanship Since 1994 &nbsp;
              ✦ Jaipur Showroom Open Daily &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
<section className="relative overflow-hidden" style={{minHeight: '100vh'}}>          <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800"
          alt="Royal Gold Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0804]/95 via-[#0a0804]/70 to-transparent" />
        {/* Ornamental corners */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-[#c9a84c]/40" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-[#c9a84c]/40" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#c9a84c]/40" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#c9a84c]/40" />

        <div className="relative h-full flex items-center pb-24">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="max-w-2xl">
              <p className="text-[#c9a84c] text-xs tracking-[0.6em] uppercase mb-5 font-semibold">
                Crafted in Jaipur · Since 1994
              </p>
              <h1 className="font-serif font-black leading-none mb-6 text-white"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
                Timeless<br />
                <span className="gold-shimmer">Gold</span><br />
                Elegance
              </h1>
              <div className="w-24 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-[#f0e6cc]/70 text-lg max-w-lg mb-10 leading-relaxed font-light">
                Premium 22KT gold ornaments, handcrafted by master artisans with three decades of heritage and trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/categories"
                  className="bg-[#c9a84c] hover:bg-[#e8c96d] text-[#0a0804] px-10 py-4 font-bold tracking-widest uppercase text-sm transition-all shadow-lg shadow-[#c9a84c]/20">
                  Explore Collections
                </Link>
                <Link href="/about"
                  className="border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] px-10 py-4 font-bold tracking-widest uppercase text-sm transition-all">
                  Our Heritage
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 bg-[#060402]/80 backdrop-blur-sm border-t border-[#c9a84c]/15">
          <div className="max-w-7xl mx-auto px-8 py-5 grid grid-cols-4 divide-x divide-[#c9a84c]/15">
            {[
              { n: '30+', l: 'Years of Excellence' },
              { n: '50K+', l: 'Happy Customers' },
              { n: '1200+', l: 'Unique Designs' },
              { n: '22KT', l: 'Purity Guaranteed' },
            ].map((s, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-[#c9a84c] font-serif text-2xl font-black">{s.n}</div>
                <div className="text-[#f0e6cc]/40 text-[10px] uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="py-16 bg-[#0d0b07]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-3">Browse By</p>
            <h2 className="font-serif text-4xl font-black text-[#f0e6cc]">Collections</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCat(null)}
              className={`px-6 py-2 text-xs font-bold tracking-widest uppercase border transition-all ${
                !selectedCat
                  ? 'bg-[#c9a84c] text-[#0a0804] border-[#c9a84c]'
                  : 'border-[#c9a84c]/30 text-[#f0e6cc]/60 hover:border-[#c9a84c] hover:text-[#c9a84c]'
              }`}
            >
              All Pieces
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-6 py-2 text-xs font-bold tracking-widest uppercase border transition-all ${
                  selectedCat === cat.id
                    ? 'bg-[#c9a84c] text-[#0a0804] border-[#c9a84c]'
                    : 'border-[#c9a84c]/30 text-[#f0e6cc]/60 hover:border-[#c9a84c] hover:text-[#c9a84c]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(product => (
              <Link href={`/product/${product.id}`} key={product.id}
                className="product-card group bg-[#120f08] border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 block overflow-hidden">

                <div className="relative aspect-square overflow-hidden bg-black">
                  <img src={product.img} alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0804]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-[#c9a84c] text-[#0a0804] text-[10px] font-black px-3 py-1 tracking-widest uppercase">
                    {product.tag}
                  </span>
                  {/* Wishlist */}
                  <button onClick={e => e.preventDefault()}
                    className="absolute top-4 right-4 bg-[#0a0804]/80 border border-[#c9a84c]/30 p-2 opacity-0 group-hover:opacity-100 transition hover:border-[#c9a84c]">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-5 border-t border-[#c9a84c]/10">
                  <p className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase mb-1">{product.code}</p>
                  <h3 className="font-serif font-bold text-[#f0e6cc] text-lg mb-3 group-hover:text-[#c9a84c] transition leading-tight">{product.name}</h3>
                  <div className="flex justify-between text-xs text-[#f0e6cc]/40 mb-4 pb-4 border-b border-[#c9a84c]/10">
                    <span>Wt: <b className="text-[#f0e6cc]/70">{product.weight}</b></span>
                    <span>Wastage: <b className="text-[#c9a84c]">{product.wastage}</b></span>
                    <b className="text-[#f0e6cc]/70">{product.purity}</b>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-black text-[#c9a84c]">{product.price}</span>
                    <button onClick={e => e.preventDefault()}
                      className="bg-[#c9a84c] hover:bg-[#e8c96d] text-[#0a0804] text-[11px] font-black px-4 py-2 tracking-wider uppercase transition">
                      Enquire
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/categories"
              className="inline-block border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] px-12 py-4 font-bold tracking-widest uppercase text-sm transition-all hover:bg-[#c9a84c]/5">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROMISE STRIP ── */}
      <section className="bg-[#c9a84c] py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#b8973b] divide-y md:divide-y-0 md:divide-x divide-[#b8973b]">
            {[
              { icon: '✓', t: 'BIS Hallmarked', d: '100% Certified Pure Gold' },
              { icon: '🚚', t: 'Free Delivery', d: 'On orders above ₹50,000' },
              { icon: '↻', t: '7-Day Returns', d: 'Hassle-free exchange' },
            ].map((f, i) => (
              <div key={i} className="bg-[#c9a84c] py-8 px-6 text-center">
                <div className="text-[#0a0804] text-2xl mb-2">{f.icon}</div>
                <div className="text-[#0a0804] font-bold text-sm tracking-wider uppercase">{f.t}</div>
                <div className="text-[#0a0804]/60 text-xs mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#0d0b07] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-3">Testimonials</p>
            <h2 className="font-serif text-4xl font-black text-[#f0e6cc]">Customer Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Priya Sharma', city: 'Mumbai', text: 'Beautiful designs and exceptional quality! Bought my entire bridal set from Shresth and received compliments all evening.', rating: 5 },
              { name: 'Rahul Patel', city: 'Delhi', text: 'Genuine 22KT gold with proper hallmark. Transparent pricing and honest service. My go-to jeweler for traditional pieces.', rating: 5 },
              { name: 'Anjali Singh', city: 'Jaipur', text: 'The temple jewelry collection is simply divine. Each piece is crafted with such care and detail. Will definitely return!', rating: 5 },
            ].map((r, i) => (
              <div key={i} className="bg-[#120f08] border border-[#c9a84c]/15 p-8 hover:border-[#c9a84c]/40 transition-all">
                <div className="flex gap-1 mb-5">
                  {[...Array(r.rating)].map((_, j) => (
                    <span key={j} className="text-[#c9a84c] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#f0e6cc]/60 italic text-sm leading-relaxed mb-6">"{r.text}"</p>
                <div>
                  <p className="font-serif font-bold text-[#c9a84c] text-sm">{r.name}</p>
                  <p className="text-[#f0e6cc]/30 text-xs tracking-wider">{r.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600"
          alt="Jewelry showroom"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#c9a84c]/10" />
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.6em] uppercase font-semibold mb-4">Experience Luxury</p>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-[#f0e6cc] mb-6">
            Visit Our Jaipur<br />
            <span className="gold-shimmer">Showroom</span>
          </h2>
          <p className="text-[#f0e6cc]/60 text-lg mb-10 max-w-xl mx-auto">
            Discover our complete collection in person. Our experts will guide you to find the perfect piece.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="bg-[#c9a84c] hover:bg-[#e8c96d] text-[#0a0804] px-10 py-4 font-bold tracking-widest uppercase text-sm transition-all">
              Get Directions
            </Link>
            <Link href="/contact"
              className="border border-[#c9a84c]/50 hover:border-[#c9a84c] text-[#c9a84c] px-10 py-4 font-bold tracking-widest uppercase text-sm transition-all">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
