import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaEnvelope } from 'react-icons/fa'
import { NavBlink } from '../Utils/index'

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
      fd.append('email', form.email)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ email: ''})
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="bg-[#0F1621] text-white pt-12 md:pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-Playfair font-bold text-white">
              P.<span className="text-blue-500">Prance</span>
            </h2>
            <p className="text-gray-400 font-Nunito text-sm leading-relaxed max-w-sm">
              Elevating traditional Nigerian fashion with contemporary elegance. 
              Weaving culture into every stitch for the modern individual.
            </p>
            <div className="flex space-x-4 pt-4">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/share/1AVMfomYuA/" },
                { icon: FaTwitter, href: "#" },
                { icon: FaInstagram, href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=l05rkc" },
                { icon: FaEnvelope, href: "mailto:ppranceklodin@ymail.com" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="author"
                  className="w-10 h-10 rounded-full bg-[#192538] flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-Manrope font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 font-Nunito text-base md:text-base">
              {NavBlink.map((item) => (
                <li key={item.Id}>
                  <NavLink 
                    to={item.Link}
                    className="text-gray-400 hover:text-blue-500 hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-500">›</span> {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-Manrope font-semibold mb-6 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 font-Nunito text-base md:text-base">
              {['Bespoke Tailoring', 'Ready-To-Wear', 'Styling Consulting', 'Wedding Collections', 'Suits', 'Traditional Wears'].map((service, index) => (
                <li key={index}>
                  <div className="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-blue-500 md:hidden">›</span> {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-Manrope font-semibold mb-6 text-white relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-500 rounded-full"></span>
            </h3>
            <p className="text-gray-400 font-Nunito text-base mb-4">
              Subscribe to get the latest updates on new collections and exclusive offers.
            </p>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input 
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email" 
                placeholder="Your email address" 
                className="bg-[#192538] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700 font-Nunito text-sm placeholder-gray-500"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-blue-500 text-white px-4 py-3 rounded-lg font-Manrope font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? 'SENDING...' : 'SUBSCRIBE'} <FaPaperPlane size={14} />
              </button>
              {status === 'success' && <span className="text-green-400 font-Nunito text-sm">Subscribed successfully</span>}
                {status === 'error' && <span className="text-red-400 font-Nunito text-sm">Unable to send. Check connection or endpoint.</span>}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-Nunito text-sm text-center md:text-left">
            &copy; {currentYear} P.Prance Kloding. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-Nunito">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
        <a href="https://sanniolayinka-dxz1.onrender.com/" target="_blank" className="font-Anek hover:opacity-50 ease-linear delay-75 flex gap-1 justify-center items-center my-4 text-white text-center mb-4 sma:text-base mda:text-base">
        Developed by{" "} <span className="text-blue-400"> CASTRO</span>
      </a>
      </div>
    </footer>
  )
}

export default Footer