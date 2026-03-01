'use client'
import { use } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { products } from '../../data/products'
import { products } from '../../data/products'

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }))
}
export default function ProductPage({ params }) {
  const { id } = use(params)
  const product = products.find(p => p.id === parseInt(id))
  const related = products.filter(p => p.id !== parseInt(id)).slice(0, 3)

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0804] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#c9a84c] font-serif text-2xl mb-4">Product not found</p>
          <Link href="/categories" className="text-[#f0e6cc]/60 underline">Back to Collections</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0804]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-[100px] pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#f0e6cc]/30 tracking-widest uppercase mb-10">
          <Link href="/" className="hover:text-[#c9a84c] transition">Home</Link>
          <span>›</span>
          <Link href="/categories" className="hover:text-[#c9a84c] transition">Collections</Link>
          <span>›</span>
          <span className="text-[#c9a84c]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-[#120f08] border border-[#c9a84c]/15 overflow-hidden relative">
              <img src={product.img} alt={product.name}
                className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#c9a84c] text-[#0a0804] text-[10px] font-black px-3 py-1 tracking-widest uppercase">
                {product.tag}
              </div>
            </div>
            {/* Ornamental corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-[#c9a84c]/40" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-[#c9a84c]/40" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.4em] uppercase mb-3">{product.code}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-black text-[#f0e6cc] mb-2 leading-tight">
              {product.name}
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a84c] mb-6" />

            <p className="text-[#f0e6cc]/60 text-base leading-relaxed mb-8 font-light">
              {product.desc}
            </p>

            {/* Specs Table */}
            <div className="bg-[#120f08] border border-[#c9a84c]/15 mb-8">
              {[
                { label: 'Net Weight', value: product.weight },
                { label: 'Wastage', value: product.wastage },
                { label: 'Purity', value: product.purity },
                { label: 'Category', value: product.cat.charAt(0).toUpperCase() + product.cat.slice(1) },
                { label: 'Sub Category', value: product.sub },
                { label: 'Availability', value: 'In Stock' },
              ].map((row, i) => (
                <div key={i} className={`flex justify-between px-5 py-3 text-sm ${i < 5 ? 'border-b border-[#c9a84c]/10' : ''}`}>
                  <span className="text-[#f0e6cc]/40 tracking-wider">{row.label}</span>
                  <span className={`font-bold ${row.label === 'Wastage' ? 'text-[#c9a84c]' : 'text-[#f0e6cc]/80'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[#f0e6cc]/30 text-xs tracking-widest uppercase mb-1">Price</p>
                <p className="font-serif text-4xl font-black text-[#c9a84c]">{product.price}</p>
                <p className="text-[#f0e6cc]/30 text-xs mt-1">*Inclusive of making charges</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="flex-1 bg-[#c9a84c] hover:bg-[#e8c96d] text-[#0a0804] py-4 font-black tracking-widest uppercase text-sm transition text-center">
                Enquire Now
              </Link>
              <Link href="/contact"
                className="flex-1 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] py-4 font-bold tracking-widest uppercase text-sm transition text-center">
                Visit Showroom
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['BIS Hallmarked', '22KT Certified', 'Authentic Craft', '7-Day Return'].map(b => (
                <span key={b} className="border border-[#c9a84c]/20 text-[#c9a84c]/60 text-[10px] tracking-widest uppercase px-3 py-1">
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-3">You May Also Like</p>
            <h2 className="font-serif text-3xl font-black text-[#f0e6cc]">Related Pieces</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map(p => (
              <Link href={`/product/${p.id}`} key={p.id}
                className="product-card group bg-[#120f08] border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 block overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100" />
                </div>
                <div className="p-4 border-t border-[#c9a84c]/10">
                  <p className="font-serif font-bold text-[#f0e6cc] text-sm mb-1 group-hover:text-[#c9a84c] transition">{p.name}</p>
                  <p className="text-[#c9a84c] font-serif font-black text-base">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
