import React, { useState } from 'react'
import { FaFilter, FaWhatsapp, FaTag } from 'react-icons/fa'
import AsoOkeMale1 from '../assets/Images/MTrad/Mtrad1.jpg'
import AsoOkeMale2 from '../assets/Images/MTrad/Mtrad2.jpg'
import Agbada1 from '../assets/Images/Agbada/Agbada1.jpg'
import Agbada2 from '../assets/Images/Agbada/Agbada2.jpg'
import Agbada4 from '../assets/Images/PerView/PerView9.jpg'
import FemaleTrad1 from '../assets/Images/FTrad/Ftrad1.jpg'
import FemaleTrad2 from '../assets/Images/FTrad/Ftrad2.jpg'
import SuitMale1 from '../assets/Images/MSuits/HomeBg6.jpg'
import SuitMale2 from '../assets/Images/MSuits/prance782_1.jpg'
import SuitMale3 from '../assets/Images/MSuits/SAMOHT-3-3203x.jpg'
import SuitMale4 from '../assets/Images/MSuits/prance808.jpg'
import SuitMale5 from '../assets/Images/MSuits/SAMOHT-3-3760x.jpg'
import SuitFemale1 from '../assets/Images/FSuits/FSuits.jpg'
import SuitFemale2 from '../assets/Images/FSuits/FSuits2.jpg'
import SuitFemale3 from '../assets/Images/FSuits/FSuits3.jpg'

const CATEGORIES = [
    'All',
    'Agbada',
    'Male Traditional',
    'Female Traditional',
    'Male Suits',
    'Female Suits',
]

const PRODUCTS = [
    // Agbada
    { id: 'ag-1', name: 'Royal Aso-Oke Agbada', category: 'Agbada', image: Agbada1, price: '₦350,000' },
    { id: 'ag-2', name: 'White Majesty Agbada', category: 'Agbada', image: Agbada2, price: '₦380,000' },
    { id: 'ag-4', name: 'Chocolate Elegant Agbada', category: 'Agbada', image: Agbada4, price: '₦420,000' },
    // Male Traditional
    { id: 'mt-1', name: 'Aso-Oke Heritage Set', category: 'Male Traditional', image: AsoOkeMale1, price: '₦250,000' },
    { id: 'mt-2', name: 'Festac Loom Classic', category: 'Male Traditional', image: AsoOkeMale2, price: '₦270,000' },
    // Female Traditional
    { id: 'ft-1', name: 'Asoebi Bloom Ensemble', category: 'Female Traditional', image: FemaleTrad1, price: '₦220,000' },
    { id: 'ft-2', name: 'Corset Asoebi Couture', category: 'Female Traditional', image: FemaleTrad2, price: '₦260,000' },
    // Male Suits
    { id: 'ms-1', name: 'Logan Midnight Suit', category: 'Male Suits', image: SuitMale1, price: '₦420,000' },
    { id: 'ms-2', name: 'Sapphire Two-Piece', category: 'Male Suits', image: SuitMale2, price: '₦390,000' },
    { id: 'ms-3', name: 'Onyx Executive Suit', category: 'Male Suits', image: SuitMale3, price: '₦450,000' },
    { id: 'ms-4', name: 'Prance 808 Suit', category: 'Male Suits', image: SuitMale4, price: '₦480,000' },
    { id: 'ms-5', name: 'Prance 803 Suit', category: 'Male Suits', image: SuitMale5, price: '₦520,000' },
    // Female Suits
    { id: 'fs-1', name: 'Editorial Suit Dress', category: 'Female Suits', image: SuitFemale1, price: '₦360,000' },
    { id: 'fs-2', name: 'Runway Ready Suit', category: 'Female Suits', image: SuitFemale2, price: '₦380,000' },
    { id: 'fs-3', name: 'Chic Couture Suit', category: 'Female Suits', image: SuitFemale3, price: '₦400,000' },
]

const Shop = () => {

  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)


  const WHATSAPP_NUMBER = '2348123456789' // replace with your WhatsApp number without +
  const waLinkFor = (p) => {
    const msg = encodeURIComponent(`Hello P.Prance, I'm interested in "${p.name}" (${p.category}) at ${p.price}. Can we discuss availability and sizing?`)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
  }

  return (
    <div className="bg-[#0F1621] min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-white text-4xl font-Manrope">Shop</h1>
            <p className="text-slate-400 font-Nunito mt-2">Curated collections tailored to perfection</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <FaFilter />
            <span className="font-Nunito text-sm">Filter by category</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 font-Manrope text-sm ${
                active === cat 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                  : 'border-gray-700 text-slate-300 hover:border-blue-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...filtered].sort(() => Math.random() - 0.5).map(p => (
            <div key={p.id} className="group rounded-2xl overflow-hidden bg-[#192538] border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="relative h-[320px]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full">
                  <FaTag className="text-blue-400" />
                  <span className="font-Nunito text-xs">{p.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-Manrope text-lg">{p.name}</h3>
                {/* <p className="text-blue-400 font-Manrope font-semibold mt-1">{p.price}</p> */}
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={waLinkFor(p)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-2 py-2 rounded-lg font-Manrope text-sm hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    WhatsApp Order
                  </a>
                  <button className="text-slate-300 font-Nunito text-sm hover:text-white transition-colors">
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-slate-400 font-Nunito">No items found in this category.</p>
          </div>
        )}
        <a href="/Collection" className="mt-8 w-fit flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-Manrope text-lg rounded-lg hover:bg-blue-700 transition-colors">
          View Collections
        </a>
      </section>
    </div>
  )
}

export default Shop
