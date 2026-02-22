import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { NavLink } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Img11 from "../../assets/Images/SiteImg/prance777.jpg"
import Unsplash2 from "../../assets/Images/SiteImg/prance713.jpg"
import Img10 from "../../assets/Images/SiteImg/prance767.jpg"
import Img9 from "../../assets/Images/SiteImg/HomeBg4.jpg"


const EmblaCarousel = (props) => {
  const CarouselData = [
    {
      Id: 1,
      Image: Img9,
      Title: "Female Traditional Collections",
      Desc: "Explore our exquisite Female Traditional collection, featuring vibrant colors and intricate designs.",
    },
    {
      Id: 2,
      Image: Img10,
      Title: "Aso-Oke Collection",
      Desc: "Discover our cozy autumn collection, perfect for layering and embracing the fall vibes.",
    },
    {
      Id: 3,
      Image: Img11,
      Title: "Suit Collection",
      Desc: "Stay Classy and Elegant with our exclusive Suit Collection."
    },
    {
      Id: 4,
      Image: Unsplash2,
      Title: "Traditional Collection",
      Desc: "Shop from our exclusive varieties Traditional Collection.",
    }
  ]
  const isMobile = window.innerWidth < 768
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      draggable: false,
      speed: 6,
      ...options,
    },
     [
        Fade(),
        Autoplay({ delay: 6000, stopOnInteraction: false })
      ]
  )


  return (
    <div className="w-full relative h-[800px] py-6  overflow-hidden">
      <div className="w-full flex justify-center items-center h-full" ref={emblaRef}>
        <div className="flex w-full rounded-lg h-[100%]">
          {CarouselData.map((item) => (
            <div className="flex-[0_0_100%] w-full h-full relative" key={item.Id}>
              <img
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 1920px"
                src={item.Image}
                alt={item.Title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-start px-16 sma:px-5">
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-white text-6xl sma:text-4xl font-Playfair font-bold leading-tight md:animate-fade-in-up">
                    {item.Title}
                  </h1>
                  <p className="text-gray-200 text-xl sma:text-lg font-Nunito max-w-lg leading-relaxed">
                    {item.Desc}
                  </p>
                  <NavLink 
                    to="/Shop" 
                    className="inline-flex items-center gap-3 sma:mt-5 mda:mt-5 bg-blue-500 text-white px-8 sma:text-px-4 mda:text-px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-Manrope font-semibold"
                  >
                    Explore Collection <MdOutlineArrowRightAlt size={24} />
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
