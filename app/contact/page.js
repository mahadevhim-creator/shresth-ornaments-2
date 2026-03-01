'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#0a0804]">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-[72px] pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#c9a84c]/3" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16">
          <p className="text-[#c9a84c] text-xs tracking-[0.6em] uppercase font-semibold mb-4">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-[#f0e6cc] mb-4">Contact Us</h1>
          <div className="w-24 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-20">

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Showroom Address',
              lines: ['Shop No. 245, Johri Bazaar', 'Near Hawa Mahal', 'Jaipur, Rajasthan 302003'],
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: 'Call Us',
              lines: ['+91 98765 43210', '+91 98765 43211', 'Mon–Sat: 10 AM – 8 PM'],
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Email Us',
              lines: ['info@shresth.com', 'sales@shresth.com', '24/7 Email Support'],
            },
          ].map((c, i) => (
            <div key={i} className="bg-[#120f08] border border-[#c9a84c]/15 p-8 text-center hover:border-[#c9a84c]/40 transition">
              <div className="w-12 h-12 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-5">
                {c.icon}
              </div>
              <h3 className="font-serif font-bold text-[#c9a84c] text-lg mb-4">{c.title}</h3>
              {c.lines.map((line, j) => (
                <p key={j} className="text-[#f0e6cc]/50 text-sm leading-loose">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Form + Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-3">Send a Message</p>
            <h2 className="font-serif text-3xl font-black text-[#f0e6cc] mb-8">We'd Love to Hear From You</h2>

            {sent && (
              <div className="bg-[#c9a84c]/10 border border-[#c9a84c] text-[#c9a84c] px-5 py-4 mb-6 text-sm font-bold tracking-wider">
                ✓ Message sent! We will get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[#f0e6cc]/50 text-xs tracking-widest uppercase mb-2">Full Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your full name"
                  className="w-full bg-[#120f08] border border-[#c9a84c]/20 focus:border-[#c9a84c] text-[#f0e6cc] px-4 py-3 text-sm outline-none transition placeholder-[#f0e6cc]/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#f0e6cc]/50 text-xs tracking-widest uppercase mb-2">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="you@email.com"
                    className="w-full bg-[#120f08] border border-[#c9a84c]/20 focus:border-[#c9a84c] text-[#f0e6cc] px-4 py-3 text-sm outline-none transition placeholder-[#f0e6cc]/20" />
                </div>
                <div>
                  <label className="block text-[#f0e6cc]/50 text-xs tracking-widest uppercase mb-2">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#120f08] border border-[#c9a84c]/20 focus:border-[#c9a84c] text-[#f0e6cc] px-4 py-3 text-sm outline-none transition placeholder-[#f0e6cc]/20" />
                </div>
              </div>
              <div>
                <label className="block text-[#f0e6cc]/50 text-xs tracking-widest uppercase mb-2">Subject *</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                  placeholder="How can we help?"
                  className="w-full bg-[#120f08] border border-[#c9a84c]/20 focus:border-[#c9a84c] text-[#f0e6cc] px-4 py-3 text-sm outline-none transition placeholder-[#f0e6cc]/20" />
              </div>
              <div>
                <label className="block text-[#f0e6cc]/50 text-xs tracking-widest uppercase mb-2">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell us about the jewelry you're looking for..."
                  className="w-full bg-[#120f08] border border-[#c9a84c]/20 focus:border-[#c9a84c] text-[#f0e6cc] px-4 py-3 text-sm outline-none transition resize-none placeholder-[#f0e6cc]/20" />
              </div>
              <button type="submit"
                className="w-full bg-[#c9a84c] hover:bg-[#e8c96d] text-[#0a0804] py-4 font-black tracking-widest uppercase text-sm transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Hours & FAQ */}
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-3">Opening Hours</p>
            <h2 className="font-serif text-3xl font-black text-[#f0e6cc] mb-8">When to Visit</h2>

            <div className="bg-[#120f08] border border-[#c9a84c]/15 mb-8">
              {[
                { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
                { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
                { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
              ].map((s, i) => (
                <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i < 2 ? 'border-b border-[#c9a84c]/10' : ''}`}>
                  <span className="text-[#f0e6cc]/50">{s.day}</span>
                  <span className="text-[#c9a84c] font-bold">{s.time}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-semibold mb-4">FAQ</p>
            <div className="space-y-3">
              {[
                { q: 'Do you offer custom jewelry design?', a: 'Yes! We offer full customization. Share your design ideas and our master craftsmen will bring them to life.' },
                { q: 'What certification do you provide?', a: 'All our jewelry comes with BIS hallmark certification and a detailed invoice. We are a certified 22KT gold jeweler.' },
                { q: 'What is your return policy?', a: 'We offer a 7-day return policy. The jewelry must be in original condition with all tags and certificates.' },
                { q: 'Do you ship across India?', a: 'Yes, we ship across India. Free shipping on orders above ₹50,000. Standard delivery takes 5–7 business days.' },
              ].map((faq, i) => (
                <details key={i} className="bg-[#120f08] border border-[#c9a84c]/15 group">
                  <summary className="flex justify-between items-center px-5 py-4 cursor-pointer text-sm font-bold text-[#f0e6cc]/80 hover:text-[#c9a84c] transition list-none">
                    {faq.q}
                    <span className="text-[#c9a84c] text-lg group-open:rotate-45 transition-transform origin-center ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-[#f0e6cc]/50 leading-relaxed border-t border-[#c9a84c]/10 pt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
