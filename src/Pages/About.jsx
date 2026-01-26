import React from 'react'
import SuitHero from '../assets/Images/Aboutsuit.jpg'
import DressHero from '../assets/Images/DressHero.jpg'
import Aboutcity from '../assets/Images/Aboutcity.jpg'
import Accordion from '../components/Accordion'
import AboutSuitss from '../assets/Images/AboutSuitss.jpg'

const About = () => {
  return (
    <div>
      <section className='bg-[#0F1621] py-12 lg:px-12 sma:px-6 mda:px-6'>
        <h3 className='text-2xl font-semibold font-Nunito text-blue-500'>THE P.PRANCE'S ODYSSEY</h3>
        <div className='flex gap-8 sma:flex-col mda:flex-col justify-between items-center mt-8'>
          <div className='basis-[50%]'>
            <h1 className='text-7xl font-Anek text-white'>Crafting Sovreignty</h1>
            <img src={SuitHero} className='w-[600px] rounded object-cover ' alt="" />
          </div>
          <div className='basis-[30%] mt-36'>
            <h3 className='text-base font-Anek text-blue-500 mb-5'>A story etched in fabric, where the energy of Lagos meets the refined language of global high tailoring. This is the evolution of P.Prance.</h3>
            <img src={DressHero} className='w-[400px] h-[400px] rounded object-cover ' alt="" />
          </div>
        </div>
        <div className='flex gap-8 sma:flex-col mda:flex-col justify-around items-center pt-12 mt-20'>
          <div className='basis-[50%]'>
            <h2 className='text-5xl font-Sora mb-6 text-white'>The Roots <span className='text-blue-500'>& Heritage</span></h2>
            <h3 className='text-lg  font-Anek text-white mb-5'>Born from the rhythmic energy of Festac, Prance vision was tempered in the fires of artisan tradition. Each stitch is a reclamation of identity, transforming ancestral looms into architectural masterpieces.</h3>
            <p className='text-lg  font-Anek text-white'>We dont just tailors suits, we crafts experiences. Every garment tells a story, serving as vessels for stories that refused to be silenced by the passage of time.</p>
          </div>
          <div className='basis-[40%]'>
            <img src={Aboutcity} className='w-[600px] h-[400px] rounded object-cover ' alt="" />
            <h6 className='font-Manrope text-blue-500 text-sm float-right mt-3'>FIG. 01 - THE GENESIS OF <span className='text-white'>P.PRANCE</span></h6>
          </div>
        </div>
      </section>
      <section className='bg-[#D7D7D5] text-[#1F2A37] py-20 md:py-24 px-6 md:px-12'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-center font-Playfair text-4xl md:text-5xl'>The Timeline</h2>
          <div className='relative mt-16'>
            <div className='hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#D9C7A4]'></div>
            {[
              {
                year: '2015',
                title: 'THE INAUGURAL STITCH',
                desc: 'Opening of the Lagos atelier, a sanctuary dedicated to the intersection of Yoruba textile arts and contemporary silhouettes.'
              },
              {
                year: '2018',
                title: 'CONTINENTAL RECOGNITION',
                desc: 'Showcasing the “Odyssey” collection at London Fashion Week, bridging the gap between bespoke London tailoring and African soul.'
              },
              {
                year: '2021',
                title: 'ETHICAL INNOVATION',
                desc: 'Awarded for the Zero Waste initiative, redesigning the cutting process to honor every inch of hand-woven Aso Oke.'
              }
            ].map((item, idx) => (
              <div key={item.year} className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-20'>
                <div className={`${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                  <p className='font-Manrope text-[#C19B5E] text-lg'>{item.year}</p>
                  <h3 className='font-Manrope tracking-widest uppercase text-xs md:text-sm mt-1'>{item.title}</h3>
                  <p className={`font-Nunito text-sm sma:text-lg mda:text-lg text-[#374151] mt-3 max-w-md ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {item.desc}
                  </p>
                </div>
                <div className={`hidden md:flex items-center ${idx % 2 === 0 ? 'justify-start' : 'order-1 justify-end'}`}>
                  <span className='w-3 h-3 rounded-full border-2 border-[#D9C7A4] bg-[#F3E9D2]'></span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='pt-10'>
          <div className="bg-Sewingbg bg-cover bg-center group relative w-full h-[500px] rounded-2xl">
            <div className='absolute top-0 left-0 w-full h-full inset-0 bg-black/40 transition-opacity duration-300 flex items-center rounded-2xl justify-center'>
              <div className='text-center  duration-300'>
                <h3 className='text-white text-3xl font-Playfair mb-2'>The Artistry Behind Every stitch</h3>
                <p className='text-white text-xl font-Anek mb-4'>Discover the craftsmanship that transforms threads into masterpieces.</p>
                <a href="/Collection" className='text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-Nunito text-sm inline-block'>
                  View Collection
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 fix  bg-cover bg-center group relative w-full h-[500px]">
            <div className='absolute top-0 left-0 bg-[#CC8500] w-full h-full inset-0 rounded-2xl flex items-center justify-center'>
              <div className='text-center duration-300'>
               <h1 className='text-3xl text-white font-Playfair mb-8'>Frequently Asked Questions</h1>
                
               <div className='   rounded-lg py-5 px-5'>
                 <Accordion head='Quality Assurance' answer='We ensure that every garment is crafted with the highest standards of quality, using only the finest materials.' />
                 <Accordion head='Customer Satisfaction' answer='Our customers are at the heart of everything we do. We strive to exceed their expectations with every interaction.' />
                 <Accordion head='Ethical Practices' answer='We are committed to ethical practices in all aspects of our business, from sourcing to disposal.' />
               </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
