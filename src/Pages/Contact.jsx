import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import Klodinsuit from '../assets/Images/klodinsuit.jpeg'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mojepled'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const fd = new FormData()
      fd.append('name', form.name)
      fd.append('email', form.email)
      fd.append('phone', form.phone)
      fd.append('subject', form.subject)
      fd.append('message', form.message)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const whatsappLink = 'https://wa.me/2347066396836?text=' + encodeURIComponent('Hello P.Prance, I would like to schedule a fitting/consultation.')

  return (
    <div className="bg-[#0F1621] min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mt-8">
          <img
            src={Klodinsuit}
            alt="Atelier ambience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-white font-Playfair text-4xl md:text-5xl">Let’s Tailor Your Story</h1>
              <p className="text-slate-300 font-Nunito mt-4 max-w-2xl mx-auto">
                Bespoke fittings, styling consultations and couture craftsmanship. Reach out and we’ll begin something extraordinary.
              </p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg font-Manrope text-sm hover:bg-blue-700 transition-colors">
                <FaWhatsapp className="text-xl" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 rounded-2xl bg-[#192538] border border-gray-700 p-6 md:p-8">
            <h2 className="text-white font-Manrope text-2xl">Send Us a Message</h2>
            <p className="text-slate-400 font-Nunito mt-2">We reply within 24 hours on business days</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-slate-300 font-Nunito text-sm mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full bg-[#0F1621] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-300 font-Nunito text-sm mb-2">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="w-full bg-[#0F1621] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-300 font-Nunito text-sm mb-2">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                  className="w-full bg-[#0F1621] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="+234 123 456 7890"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-300 font-Nunito text-sm mb-2">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full bg-[#0F1621] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Fitting appointment / Wardrobe consultation"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-300 font-Nunito text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full bg-[#0F1621] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell us about your event, sizing, preferred fabrics or timeline"
                />
              </div>
              <div className="md:col-span-2 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-Manrope hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'success' && <span className="text-green-400 font-Nunito text-sm">Message sent successfully</span>}
                {status === 'error' && <span className="text-red-400 font-Nunito text-sm">Unable to send. Check connection or endpoint.</span>}
              </div>
            </form>
          </div>

          <div className="rounded-2xl bg-[#192538] border border-gray-700 p-6 md:p-8">
            <h3 className="text-white font-Manrope text-xl">Contact Details</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-Nunito">Lagos, Nigeria</p>
                  <p className="text-slate-400 font-Nunito text-sm">21 Olatunde Street, Bakery Bus Stop, Off Babs Animashaun, Surulere</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-400 mt-1" />
                <div>
                  <a href="tel:+2347066396836" className="text-white font-Nunito hover:text-blue-400 transition-colors">+234 706 639 6836</a>
                  <p className="text-slate-400 font-Nunito text-sm">Mon–Sat, 9:00–18:00 WAT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-400 mt-1" />
                <div>
                  <a href="tel:+2347035086122" className="text-white font-Nunito hover:text-blue-400 transition-colors">+234 703 508 6122</a>
                  <p className="text-slate-400 font-Nunito text-sm">Mon–Sat, 9:00–18:00 WAT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-blue-400 mt-1" />
                <div>
                  <a href="mailto:info@pprance-klodin.com" className="text-white font-Nunito hover:text-blue-400 transition-colors">info@pprance-klodin.com</a>
                  <p className="text-slate-400 font-Nunito text-sm">We reply within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                alt="Studio detail"
                className="rounded-xl w-full h-36 object-cover"
              />
              <img
                src='https://images.pexels.com/photos/5656671/pexels-photo-5656671.jpeg'
                alt="Fabric texture"
                className="rounded-xl w-full h-36 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
                alt="Tailoring tools"
                className="rounded-xl w-full h-36 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1764158302194-54b208aa7f2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJ1bndheSUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                alt="Runway vibe"
                className="rounded-xl w-full h-36 object-cover"
              />
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-8 w-full justify-center bg-blue-600 text-white px-5 py-3 rounded-lg font-Manrope text-sm hover:bg-blue-700 transition-colors">
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
