import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// Removed fade for continuous sliding
import TailorPrecise from '../assets/Images/tailorprecise.jpeg'
import PatternDraft from '../assets/Images/patterndraft.jpg'
import NigerianPair from '../assets/Images/SiteImg/HomgBg1.jpg'
import { ReadyWearColl } from "../utils";
import Readysuit from '../assets/Images/Readysuits.jpg'

const Services = () => {
  return (
    <div className="bg-[#0F1621] pb-8">
      <section className="mx-8 ">
        <div
          loading="lazy"
          className="bg-Sewing bg-[url('./src/assets/Images/AboutSuitss.jpg')] bg-cover bg-center group relative w-full h-[500px] rounded-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/60  rounded-2xl">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-4xl sma:text-2xl mda:text-2xl font-Anek font-bold text-white mb-5">
                THE CRAFT OF ELEGANCE
              </h2>
              <p className="text-xl sma:text-lg mda:text-lg text-white text-center lg:px-12 lg:w-[90%]  font-Nunito">
                Defining Nigerian Excellence in Fashion. Experience bespoke
                luxury and contemporary design tailored to perfection.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6">
          <h1 className="text-4xl font-Anek font-bold mb-3 text-white">
            OUR OFFERINGS
          </h1>
          <p className="text-slate-400">
            Discover our range of premium satorial services designed for
            distinguished individuals
          </p>
          <div className=" mt-8">
            <div className="flex justify-between sma:flex-col mda:flex-col">
              <div className="basis-[40%]">
                <h3 className="font-Azeret text-2xl text-blue-500 mb-3">
                  SIGNATURE SERVICE
                </h3>
                <h2 className="text-4xl font-Manrope text-white capitalize mb-3">
                  BESPOKE TAILORING
                </h2>
                <p className="text-slate-300 font-Nunito text-base">
                  Precision-cut suits and traditional wears crafted to your
                  exact measurement. Experience the luxury of perfect fit
                  with our signature Nigerian aesthetics combined with modern
                  European cuts. We source the finest wools and linens, ensuring
                  breathable comforts for every season without compromising on
                  structure.
                </p>
                <div className="mt-5">
                  {[
                    {
                      Id: 1,
                      text: "Over 1000 precise body measurements",
                    },
                    {
                      Id: 2,
                      text: "Hand stiched detailing and finishing",
                    },
                    {
                      Id: 3,
                      text: "Specific time alteration guarantee",
                    },
                  ].map((x) => (
                    <div key={x.Id} className="flex gap-4 mt-2">
                      <FaCheckDouble className="text-blue-500" />
                      <p className="text-slate-300 font-Nunito text-base">
                        {x.text}
                      </p>
                    </div>
                  ))}
                </div>
                <a href="/Shop" className='text-white border mt-8 sma:mb-5 mda:mb-5 border-white px-4 py-2 rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300 font-Nunito text-sm inline-block'>
                  START YOUR JOURNEY
                </a>
              </div>
              <div className="basis-[40%] sma:basis-full mda:basis-full grid grid-cols-2 sma:grid-cols-1 mda:grid-cols-1 auto-rows-[180px] lg:auto-rows-[220px] gap-3">
                <img 
                  src={TailorPrecise} 
                  alt="Tailoring Precision" 
                  className="col-span-1 row-span-2 rounded-xl w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]" 
                />
                <img 
                  src={NigerianPair} 
                  alt="Nigerian Pair" 
                  className="col-start-2 row-start-1 rounded-xl w-[300px] h-[230px] object-cover transition-transform duration-500 hover:scale-[1.02]" 
                />
                <img 
                  src={PatternDraft} 
                  alt="Pattern Drafting" 
                  className="col-start-2 row-start-2 rounded-xl w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]" 
                />
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col justify-center bg-[#192538] mt-8 py-12 lg-mx-12">
            <div>

            <h1 className="text-white text-4xl sma:text-2xl mda:text-2xl mb-3 font-Sora ">Ready-to-Wear Collection</h1>
            <p className="text-slate-300 font-Nunito lg:px-12"> Curated seasonal pieces designed for the luxurious individuals. Available for immediate purchaseand delivery worldwide.Fusing traditional Nigerian cuts with streetwear sensibilities.</p>
            <a href="/Shop" className=" border mt-8 sma:mb-5 mda:mb-5 border-white px-2 py-2 rounded bg-blue-700 hover:bg-opacity-70 text-white transition-all duration-300 font-Nunito text-sm inline-block">SHOP THE COLLECTION</a>
            </div>
            <div>
              <div className="flex sma:flex-col mda:flex-col items-center justify-center gap-8 mt-12">
                {ReadyWearColl.map((x) => (
                  <div key={x.Id} className="border hover:shadow-lg hover:shadow-blue-500 transition-all duration-300 border-slate-500 rounded-md w-[300px] items-center flex flex-col justify-center gap-2 p-4">
                  <div className="bg-blue-900 p-2 rounded-full">
                    <x.SocialIcon className="text-2xl text-blue-600" />
                  </div>
                    <h3 className="text-white font-Manrope text-lg capitalize">{x.HeadTxt}</h3>
                    <p className="text-slate-300 font-Nunito text-sm text-center ">{x.DescTxt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex sma:flex-col justify-around mda:flex-col">
              <div className="relative">
                <img src={Readysuit} className="w-[400px] rounded h-[400px] object-cover" alt="" />
                <div className="absolute -bottom-10 left-20 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md">
                  <h3 className="font-Manrope text-2xl text-blue-500 capitalize">1000+</h3>
                  <p className="font-Nunito text-base text-slate-400">Clients styled across <br /> 20+ countries</p>
                </div>
              </div>
              <div className="basis-[40%]">
                <h4 className="text-blue-500 font-Manrope text-base font-medium uppercase mb-5">Personal Branding</h4>
                <h1 className="text-4xl font-Sora text-white mb-3">Styling Consultation</h1>
                <p className="text-base font-Nunito text-slate-400">Elevate your personal brand with expert advice on wardrobe management and event styling. Whether it's for a wedding, a gala or a complete wardrobe change, We create looks that resonates with your identity.</p>
                <div className="flex gap-4 mt-8">
                  <div className="w-0.5 h-32 bg-blue-500"></div>
                  <div className="">
                    <div className="mb-4">
                    <h3 className="text-xl font-Sora text-white font-medium ">Event Styling</h3>
                    <p className="text-slate-400 font-Nunito">Curated Looks for special occasions</p>
                    </div>
                    <div className="mb-4">
                    <h3 className="text-xl font-Sora text-white font-medium ">Wardrobe Audit</h3>
                    <p className="text-slate-400 font-Nunito">Reviewing and refreshing your current collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Slider */}
        <div className="mt-20">
          <h2 className="text-center text-white text-4xl sma:text-2xl mda:text-2xl font-Playfair">What Clients Say</h2>
          <TestimonialsSlider />
        </div>
      </section>
    </div>
  );
};

export default Services;

const TestimonialsSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const testimonials = [
    {
      name: 'Tola A.',
      role: 'Entrepreneur',
      quote: 'The suit fit like a second skin. Attention to detail is unmatched and the styling consultation elevated my public image.',
      rating: 5,
    },
    {
      name: 'Chinedu O.',
      role: 'Creative Director',
      quote: 'Their mastery of traditional silhouettes with modern cuts is impeccable. A true luxury experience from start to finish.',
      rating: 5,
    },
    {
      name: 'Amaka I.',
      role: 'Bride',
      quote: 'They crafted outfits that told our story beautifully. Every stitch felt intentional. Couldn’t have asked for better.',
      rating: 5,
    },
    {
      name: 'Logan K.',
      role: 'Consultant',
      quote: 'Consistent excellence. Fabrics, fit, and finish all speak luxury. My wardrobe has never felt more curated.',
      rating: 5,
    },
  ]

  return (
    <section className="relative mt-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
              <div className="rounded-2xl bg-[#F4F4F4] border border-gray-700 p-6 h-full flex flex-col gap-4 shadow-lg shadow-black/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center">
                      <span className="text-blue-500 font-Manrope text-sm">{t.name.split(' ').map(n => n[0]).join('').slice(0,2)}</span>
                    </div>
                    <div>
                      <p className="text-black font-Manrope text-sm">{t.name}</p>
                      <p className="text-slate-600 font-Nunito text-xs">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-800 font-Nunito text-sm leading-relaxed">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
