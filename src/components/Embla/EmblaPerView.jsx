import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { SlidesPerView } from '../../Utils/index'
import { FaArrowRight } from 'react-icons/fa';

const EmblaPerView = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      ...options
    }, 
    [ 
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {SlidesPerView.map((slide) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0" key={slide.Id}>
              <div className="relative group overflow-hidden rounded-xl h-[400px]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={slide.Image} 
                  alt={`Slide ${slide.Id}`} 
                loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {slide.Desc && <h3 className="text-white text-2xl font-Playfair mb-2">{slide.Desc}</h3>}
                    <NavLink to="/Collection" className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-Nunito text-sm inline-block">
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 justify-between items-center mt-8 px-4">
        <div className="flex gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="w-12 h-12 rounded-full border border-gray-600 text-white flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300" />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className="w-12 h-12 rounded-full border border-gray-600 text-white flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300" />
        </div>

      </div>
        <NavLink to="/Collection">
          <button className='text-white gap-3 mt-8 flex items-center border border-blue-500 px-3 py-2 hover:bg-blue-500 transition-all duration-300 rounded-lg font-Nunito text-base group'>
            Explore More Designs
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </NavLink>
    </section>
  )
}

export default EmblaPerView
