import React, { useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Fade from "embla-carousel-fade"
import Autoplay from "embla-carousel-autoplay"
import "../EmblaCss/CateFade.css"

export function CategoryFadeCarousel({ images }) {
  const autoplayRef = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, draggable: false },
    [Fade(), autoplayRef.current]
  )

  // Start autoplay once Embla is ready
  

  return (
    <div className="embla h-full w-full" ref={emblaRef}>
      <div className="embla__container h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className="embla__slide group h-full overflow-hidden rounded-md"
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
