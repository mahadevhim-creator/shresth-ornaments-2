import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0804]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-[72px] h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800"
          alt="About Shresth Ornaments" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0804]/60 to-[#0a0804]" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.6em] uppercase font-semibold mb-4">Est. 1994</p>
            <h1 className="font-serif text-5xl md:text-7xl font-black text-[#f0e6cc] mb-4">Our Heritage</h1>
            <div className="w-24 h-0.5 bg-[#c9a84c] mx-auto" />
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16">

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-4">Our Story</p>
            <h2 className="font-serif text-4xl font-black text-[#f0e6cc] mb-6">Three Decades of Craftsmanship</h2>
            <p className="text-[#f0e6cc]/60 leading-relaxed mb-4 font-light">
              Founded in 1994 in the heart of Jaipur's historic Johri Bazaar, Shresth Ornaments began as a small family workshop with a singular vision — to create gold jewelry that honors India's rich artistic heritage while standing the test of time.
            </p>
            <p className="text-[#f0e6cc]/60 leading-relaxed font-light">
              Over three decades, we have grown into a trusted name for discerning customers who value authenticity, craftsmanship, and transparent dealings. Every piece we create is a testament to the skill of our master artisans, many of whom carry generations of goldsmithing knowledge.
            </p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700"
              alt="Craftsmanship" className="w-full h-80 object-cover border border-[#c9a84c]/20" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a84c]/15 -z-10" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-3">Our Values</p>
            <h2 className="font-serif text-4xl font-black text-[#f0e6cc]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚖️', title: 'Purity', desc: 'Every piece is BIS hallmarked and tested to ensure genuine 22KT gold purity. No compromises, ever.' },
              { icon: '🤝', title: 'Trust', desc: 'Transparent pricing, honest dealings, and customer satisfaction have been our foundation for 30 years.' },
              { icon: '🎨', title: 'Craftsmanship', desc: 'Our master artisans bring generations of skill to each unique design, blending tradition with contemporary aesthetics.' },
            ].map((v, i) => (
              <div key={i} className="bg-[#120f08] border border-[#c9a84c]/15 p-8 text-center hover:border-[#c9a84c]/40 transition">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif font-bold text-[#c9a84c] text-xl mb-3">{v.title}</h3>
                <p className="text-[#f0e6cc]/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#c9a84c] p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '1994', l: 'Established' },
              { n: '50,000+', l: 'Happy Customers' },
              { n: '1200+', l: 'Unique Designs' },
              { n: '22KT', l: 'Purity Standard' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-serif text-3xl font-black text-[#0a0804]">{s.n}</div>
                <div className="text-[#0a0804]/60 text-xs tracking-widest uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-black text-[#f0e6cc] mb-4">Come Visit Us</h2>
          <p className="text-[#f0e6cc]/50 mb-8">Experience our collection firsthand at our Jaipur showroom</p>
          <Link href="/contact"
            className="inline-block bg-[#c9a84c] hover:bg-[#e8c96d] text-[#0a0804] px-12 py-4 font-bold tracking-widest uppercase text-sm transition">
            Contact Us
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
