'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products, categories } from '../data/products'

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const allCategories = [{ id: 'all', label: 'All Jewelry', icon: '✦' }, ...categories]

  let filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.cat === activeCategory)

  if (sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.priceNum - b.priceNum)
  if (sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.priceNum - a.priceNum)
  if (sortBy === 'weight-low') filtered = [...filtered].sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight))

  return (
    <div className="min-h-screen bg-[#0a0804]">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-[72px] pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800"
            alt="Collections" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0804]/50 to-[#0a0804]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.6em] uppercase font-semibold mb-4">Shresth Ornaments</p>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-[#f0e6cc] mb-4">Our Collections</h1>
          <div className="w-24 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#f0e6cc]/50 text-lg max-w-2xl mx-auto">
            Discover our complete range of handcrafted 22KT gold jewelry
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-[72px] z-40 bg-[#0d0b07] border-y border-[#c9a84c]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 no-scrollbar">
            {allCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase whitespace-nowrap border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#c9a84c] text-[#0a0804] border-[#c9a84c]'
                    : 'border-[#c9a84c]/25 text-[#f0e6cc]/50 hover:border-[#c9a84c]/60 hover:text-[#c9a84c]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-[#f0e6cc]/40 text-xs tracking-widest uppercase">{filtered.length} Items</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-[#120f08] border border-[#c9a84c]/25 text-[#f0e6cc]/70 text-xs px-4 py-2 tracking-wider focus:outline-none focus:border-[#c9a84c]"
            >
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="weight-low">Weight: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#c9a84c] text-5xl mb-4">◇</p>
            <p className="font-serif text-xl text-[#f0e6cc]/60">No pieces found</p>
            <button onClick={() => setActiveCategory('all')}
              className="mt-4 text-[#c9a84c] text-sm underline underline-offset-4 hover:text-[#e8c96d]">
              View all collections
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(product => (
              <Link href={`/product/${product.id}`} key={product.id}
                className="product-card group bg-[#120f08] border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 block overflow-hidden">

                <div className="relative aspect-square overflow-hidden bg-black">
                  <img src={product.img} alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100" />
                  <span className="absolute top-3 left-3 bg-[#c9a84c] text-[#0a0804] text-[9px] font-black px-2.5 py-1 tracking-widest uppercase">
                    {product.tag}
                  </span>
                  <button onClick={e => e.preventDefault()}
                    className="absolute top-3 right-3 bg-[#0a0804]/80 border border-[#c9a84c]/30 p-1.5 opacity-0 group-hover:opacity-100 transition">
                    <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-4 border-t border-[#c9a84c]/10">
                  <p className="text-[#c9a84c] text-[9px] font-bold tracking-widest uppercase mb-1">{product.code}</p>
                  <h3 className="font-serif font-bold text-[#f0e6cc] text-sm mb-3 group-hover:text-[#c9a84c] transition leading-tight">{product.name}</h3>
                  <div className="flex justify-between text-[10px] text-[#f0e6cc]/40 mb-3 pb-3 border-b border-[#c9a84c]/10">
                    <span>Wt: <b className="text-[#f0e6cc]/60">{product.weight}</b></span>
                    <b className="text-[#c9a84c]">{product.wastage} wastage</b>
                    <b className="text-[#f0e6cc]/60">{product.purity}</b>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-black text-[#c9a84c]">{product.price}</span>
                    <button onClick={e => e.preventDefault()}
                      className="bg-[#c9a84c] hover:bg-[#e8c96d] text-[#0a0804] text-[10px] font-black px-3 py-1.5 tracking-wider uppercase transition">
                      Enquire
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#0d0b07] border-t border-[#c9a84c]/10 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🏆', t: 'BIS Certified', d: '100% Hallmarked' },
              { icon: '💯', t: 'Pure 22KT', d: 'Guaranteed Purity' },
              { icon: '🎨', t: '1200+ Designs', d: 'Exclusive Pieces' },
              { icon: '💰', t: 'Best Rates', d: 'Transparent Pricing' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-serif font-bold text-[#c9a84c] text-sm mb-1">{item.t}</div>
                <div className="text-[#f0e6cc]/40 text-xs">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
