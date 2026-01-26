import React, { useRef, memo} from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useInView } from "react-intersection-observer";


const NumbersAni = ({ n }) => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

     const { number } = useSpring({
        from: { number: 0 },
        to: { number: inView ? n : 0 },
        config: { duration: 3000, mass: 1, tension: 10, friction: 10 },
        delay: 1000,
        reset: false,
    })
  return (
    <animated.div ref={ref}>{number.to((val) => val.toFixed(0))}</animated.div>
  )
  const NumbersComponent = memo(NumbersAni)
}

export default NumbersAni