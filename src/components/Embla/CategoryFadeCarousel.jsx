import React, { useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Fade from "embla-carousel-fade"
import Autoplay from "embla-carousel-autoplay"
import { useInView } from "react-intersection-observer"
import "../EmblaCss/CateFade.css"

export function CategoryFadeCarousel({ images }) {
  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      draggable: false,
    },
    [Fade(), autoplay.current]
  )

  useEffect(() => {
    if (!emblaApi) return

    // 👇 CRITICAL GUARD
    if (!emblaApi.slideNodes().length) return

    if (inView) {
      autoplay.current?.play()
    } else {
      autoplay.current?.stop()
    }
  }, [emblaApi, inView])

  return (
    <div ref={ref} className="embla h-full w-full">
      <div ref={emblaRef} className="embla__viewport h-full">
        <div className="embla__container h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="embla__slide h-full overflow-hidden rounded-md"
            >
              <img
                src={img}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
