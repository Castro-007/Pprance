import React, { useState, useEffect } from 'react'
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
import Couplesclo1 from '../assets/Images/Shops/Couplesclo1.png'
import Couplesclo2 from '../assets/Images/Shops/Couplesclo2.png'
import Coupleswear2 from '../assets/Images/Shops/Coupleswear2.png'
import FSuit1 from '../assets/Images/Shops/FSuit1.png'
import FSuit3 from '../assets/Images/Shops/FSuit3.png'
import FSuit2 from '../assets/Images/Shops/FSuit2.png'
import FSuit4 from '../assets/Images/Shops/FSuit4.png'
import FSuit5 from '../assets/Images/Shops/FSuit5.png'
import FSuit6 from '../assets/Images/Shops/FSuit6.png'
import FSuit7 from '../assets/Images/Shops/FSuit7.png'
import FSuit8 from '../assets/Images/Shops/FSuit8.png'
import FSuit9 from '../assets/Images/Shops/FSuit9.png'
import FSuit10 from '../assets/Images/Shops/FSuit10.png'
import FSuit11 from '../assets/Images/Shops/FSuit11.png'
import FSuit12 from '../assets/Images/Shops/FSuit12.png'
import Ftrad1 from '../assets/Images/Shops/Ftrad1.png'
import Ftrad2 from '../assets/Images/Shops/Ftrad2.png'
import Ftrad3 from '../assets/Images/Shops/Ftrad3.png'
import Ftrad4 from '../assets/Images/Shops/Ftrad4.png'
import Ftrad5 from '../assets/Images/Shops/Ftrad5.png'
import Ftrad6 from '../assets/Images/Shops/Ftrad6.png'
import Ftrad7 from '../assets/Images/Shops/Ftrad7.png'
import Ftrad8 from '../assets/Images/Shops/Ftrad8.png'
import Ftrad9 from '../assets/Images/Shops/Ftrad9.png'
import Ftrad10 from '../assets/Images/Shops/Ftrad10.png'
import Ftrad11 from '../assets/Images/Shops/Ftrad11.png'
import Ftrad12 from '../assets/Images/Shops/Ftrad12.png'
import Ftrad13 from '../assets/Images/Shops/Ftrad13.png'
import Ftrad14 from '../assets/Images/Shops/Ftrad14.png'
import Ftrad15 from '../assets/Images/Shops/Ftrad15.png'
import Ftrad16 from '../assets/Images/Shops/Ftrad16.png'
import Ftrad17 from '../assets/Images/Shops/Ftrad17.png'
import Ftrad18 from '../assets/Images/Shops/FTrad18.png'
import Fwear1 from '../assets/Images/Shops/FWear1.png'
import Fwear2 from '../assets/Images/Shops/FWear2.png'
import Fwear3 from '../assets/Images/Shops/FWear3.png'
import Fwear4 from '../assets/Images/Shops/FWear4.png'
import MSuit1 from '../assets/Images/Shops/MSuit1.png'
import MSuit2 from '../assets/Images/Shops/MSuit2.png'
import MSuit3 from '../assets/Images/Shops/MSuit3.png'
import MSuit4 from '../assets/Images/Shops/MSuit4.png'
import MSuit5 from '../assets/Images/Shops/MSuit5.png'
import MSuit6 from '../assets/Images/Shops/MSuit6.png'
import MSuit7 from '../assets/Images/Shops/MSuit7.png'
import MSuit8 from '../assets/Images/Shops/MSuit8.png'
import MSuit9 from '../assets/Images/Shops/MSuit9.png'
import MSuit10 from '../assets/Images/Shops/MSuit10.png'
import Mtrad1 from '../assets/Images/Shops/Mtrad1.png'
import Mtrad2 from '../assets/Images/Shops/Mtrad2.png'
import Mtrad3 from '../assets/Images/Shops/Mtrad3.png'
import Mtrad4 from '../assets/Images/Shops/Mtrad4.png'
import Mtrad5 from '../assets/Images/Shops/Mtrad5.png'
import Mtrad6 from '../assets/Images/Shops/Mtrad6.png'
import Mtrad7 from '../assets/Images/Shops/Mtrad7.png'
import Mtrad8 from '../assets/Images/Shops/Mtrad8.png'
import Mtrad9 from '../assets/Images/Shops/Mtrad9.png'
import Mtrad10 from '../assets/Images/Shops/Mtrad10.png'
import Mtrad11 from '../assets/Images/Shops/Mtrad11.png'
import Mtrad12 from '../assets/Images/Shops/Mtrad12.png'
import Mtrad13 from '../assets/Images/Shops/Mtrad13.png'
import Mtrad14 from '../assets/Images/Shops/Mtrad14.png'
import Mtrad15 from '../assets/Images/Shops/Mtrad15.png'
import Mtrad16 from '../assets/Images/Shops/Mtrad16.png'
import Mwear3 from '../assets/Images/Shops/Mwear3.png'
import FWear2 from '../assets/Images/Shops/FWear2.png'
import FWear4 from '../assets/Images/Shops/FWear4.png'




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
    { id: 'ag-5', name: 'Couples Red Love Piece', category: '', image: Couplesclo1, price: '₦450,000' },
    { id: 'ag-6', name: 'Couples Classic Piece', category: '', image: Couplesclo2, price: '₦150,000' },
    { id: 'ag-7', name: 'Couples Love Piece', category: '', image: Coupleswear2, },
    { id: 'ag-8', name: 'Royal Blue Agbada', category: 'Agbada', image: Mtrad7, },

    // Male Traditional
    { id: 'mt-1', name: 'Aso-Oke Heritage Set', category: 'Male Traditional', image: AsoOkeMale1, price: '₦250,000' },
    { id: 'mt-2', name: 'Festac Loom Classic', category: 'Male Traditional', image: AsoOkeMale2, price: '₦270,000' },
    { id: 'mt-3', name: 'Black Kaftan', category: 'Male Traditional', image: Mtrad1, },
    { id: 'mt-4', name: 'White Kaftan', category: 'Male Traditional', image: Mtrad2, },
    { id: 'mt-5', name: 'White mens Trad', category: 'Male Traditional', image: Mtrad3, },
    { id: 'mt-6', name: 'White Classic mens Trad', category: 'Male Traditional', image: Mtrad5, },
    { id: 'mt-7', name: 'White Floral mens Trad', category: 'Male Traditional', image: Mtrad6, },
    { id: 'mt-8', name: 'Brown Classic Trad', category: 'Male Traditional', image: Mtrad8, },
    { id: 'mt-9', name: 'Black-White Chest Pocket Trad', category: 'Male Traditional', image: Mtrad9, },
    { id: 'mt-10', name: 'Luxury Mandarin Collar ', category: 'Male Traditional', image: Mtrad10 },
    { id: 'mt-11', name: 'Short-Sleeve Senator Wear', category: 'Male Traditional', image: Mtrad11 },
    { id: 'mt-12', name: 'Long-Sleeve Kaftan ', category: 'Male Traditional', image: Mtrad12 },
    { id: 'mt-13', name: ' Luxury White Agbada ', category: 'Male Traditional', image: Mtrad13 },
    { id: 'mt-14', name: ' Northern Kaftan with Blazer ', category: 'Male Traditional', image: Mtrad15 },
    { id: 'mt-14', name: ' Premium Luxurious Agbada ', category: 'Male Traditional', image: Mtrad16 },
    { id: 'mt-14', name: 'Green Jacket with Trousers', category: 'Male Traditional', image: Mwear3 },
    // Female Traditional
    { id: 'ft-1', name: 'Asoebi Bloom Ensemble', category: 'Female Traditional', image: FemaleTrad1, price: '₦220,000' },
    { id: 'ft-2', name: 'Corset Asoebi Couture', category: 'Female Traditional', image: FemaleTrad2, price: '₦260,000' },
    { id: 'ft-3', name: 'Floral Asoebi Gown', category: 'Female Traditional', image: Ftrad1,  },
    { id: 'ft-4', name: 'Off-Shoulder Gown', category: 'Female Traditional', image: Ftrad2,  },
    { id: 'ft-5', name: 'Knee-Length Off-Shoulder Gown', category: 'Female Traditional', image: Ftrad3,  },
    { id: 'ft-6', name: 'Beautiful Two-piece', category: 'Female Traditional', image: Ftrad4,  },
    { id: 'ft-7', name: 'Beautiful Ball Gown', category: 'Female Traditional', image: Ftrad5,  },
    { id: 'ft-8', name: 'Princess Stone Gown', category: 'Female Traditional', image: Ftrad7,  },
    { id: 'ft-9', name: 'Two piece Open-Gown', category: 'Female Traditional', image: Ftrad8,  },
    { id: 'ft-10', name: 'Female Gown', category: 'Female Traditional', image: Ftrad9, },
    { id: 'ft-11', name: 'Plitted Gown with Blouse', category: 'Female Traditional', image: Ftrad10, },
    { id: 'ft-12', name: 'Elegant Green Gown', category: 'Female Traditional', image: Ftrad11, },
    { id: 'ft-13', name: ' Blue Gown', category: 'Female Traditional', image: Ftrad12, },
    { id: 'ft-14', name: ' Off-Shoulder Princess Gown', category: 'Female Traditional', image: Ftrad13, },
    { id: 'ft-15', name: ' Two-color Elegant Gown', category: 'Female Traditional', image: Ftrad14, },
    { id: 'ft-16', name: ' Elegant Silk Slio Dress ', category: 'Female Traditional', image: Ftrad15, },
    { id: 'ft-17', name: ' A-LINE FAUX GOWN ', category: 'Female Traditional', image: Ftrad17, },
    { id: 'ft-18', name: ' A-LINE RED GOWN ', category: 'Female Traditional', image: Ftrad18, },
    { id: 'ft-19', name: ' WHITE SHEALTH DRESS', category: 'Female Traditional', image: FWear2, },
    // Male Suits
    { id: 'ms-1', name: 'Black Designer Lounge Suit', category: 'Male Suits', image: SuitMale1, price: '₦420,000' },
    { id: 'ms-2', name: 'Sapphire Two-Piece', category: 'Male Suits', image: SuitMale2, price: '₦390,000' },
    { id: 'ms-3', name: 'Onyx Executive Suit', category: 'Male Suits', image: SuitMale3, price: '₦450,000' },
    { id: 'ms-4', name: 'Prance Tuxedo Suit', category: 'Male Suits', image: SuitMale4, price: '₦480,000' },
    { id: 'ms-5', name: 'Prance 803 Suit', category: 'Male Suits', image: SuitMale5, price: '₦520,000' },
    { id: 'ms-6', name: 'Blue Double-Breasted Suit', category: 'Male Suits', image: MSuit1,  },
    { id: 'ms-7', name: 'Deep Blue Double-Breasted Classic Suit', category: 'Male Suits', image: MSuit2,  },
    { id: 'ms-9', name: 'Pink Lounge Suit', category: 'Male Suits', image: MSuit4,  },
    { id: 'ms-10', name: 'Brown Tuxedo Suit', category: 'Male Suits', image: MSuit6,  },
    { id: 'ms-11', name: 'Black Peacoat Suit', category: 'Male Suits', image: MSuit7,  },
    { id: 'ms-11', name: 'Double-Breasted Suit', category: 'Male Suits', image: MSuit8,  },
    { id: 'ms-12', name: 'Wine Tuxedo Suit', category: 'Male Suits', image: MSuit10,  },
    { id: 'ms-13', name: 'Red Short-Sleeve Tuxedo Suit', category: 'Male Suits', image: Mtrad14,  },
    // Female Suits
    { id: 'fs-1', name: 'Editorial Suit Dress', category: 'Female Suits', image: SuitFemale1, price: '₦360,000' },
    { id: 'fs-2', name: 'Runway Ready Suit', category: 'Female Suits', image: SuitFemale2, price: '₦380,000' },
    { id: 'fs-3', name: 'Chic Couture Suit', category: 'Female Suits', image: SuitFemale3, price: '₦400,000' },
    { id: 'fs-4', name: 'Elegant Sunflare Suit', category: 'Female Suits', image: FSuit1, price: '₦150,000' },
    { id: 'fs-5', name: 'Burgundy Straight Suit', category: 'Female Suits', image: FSuit2, price: '₦150,000' },
    { id: 'fs-6', name: 'Mafia Lady Suit', category: 'Female Suits', image: FSuit3, price: '₦150,000' },
    { id: 'fs-7', name: 'White Classic Suit', category: 'Female Suits', image: FSuit4, price: '₦150,000' },
    { id: 'fs-8', name: 'Skirt-Blouse Classic Suit', category: 'Female Suits', image: FWear4 },
    { id: 'fs-9', name: 'White Italian Classic Suit', category: 'Female Suits', image: FSuit11 },
    { id: 'fs-10', name: 'Offwhite-Brown Classic Suit', category: 'Female Suits', image: FSuit7 },
    { id: 'fs-11', name: 'Boss-Lady Grey Classic Suit', category: 'Female Suits', image: FSuit8 },
    { id: 'fs-12', name: 'Boss-Lady Brown Classic Suit', category: 'Female Suits', image: FSuit9 },
    { id: 'fs-13', name: 'Floral Classic Suit', category: 'Female Suits', image: FSuit10 },
   
]

const Shop = () => {

  const [images, setImages] = useState([])
    const [imagesperpage, setImagesperpage] = useState(8)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [disabledbtn, setdisabledbtn] = useState(false)
    const [active, setActive] = useState('All')

    
      const filteredProducts = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  useEffect(() => {
      setImages(filteredProducts.slice(0, page * imagesperpage))
    },[page, imagesperpage, active])

    useEffect(() => {
  setPage(1)
}, [active])


     const handleMoreLoad = () => {
      setLoading(true)
      setTimeout(() => {
        setPage((prev) => prev + 1)
        setLoading(false)
      }, 2000);
    }

    useEffect(() => {
      if(images.length === filteredProducts.length){
        setdisabledbtn(true)
      }else{
        setdisabledbtn(false)
      }
    },[images, filteredProducts])




  const WHATSAPP_NUMBER = '2347066396836' // replace with your WhatsApp number without +
  const waLinkFor = (p) => {
    const msg = encodeURIComponent(`Hello P.Prance, I'm interested in "${p.name}" (${p.category}). Can we discuss availability and sizing?`)
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
          {images.map(p => (
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
                <h3 className="text-white capitalize font-Manrope text-lg">{p.name}</h3>
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
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-slate-400 font-Nunito">No items found in this category.</p>
          </div>
        )}
        <button disabled={disabledbtn} onClick={handleMoreLoad} className="mt-8 w-fit flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-Manrope text-lg rounded-lg hover:bg-blue-700 transition-colors">
          {loading ? 'Loading...' : disabledbtn ? 'No More Items' : 'Load More'}
        </button>
      </section>
    </div>
  )
}

export default Shop
