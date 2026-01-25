import React, { useState, useEffect } from 'react'
import { FaTimes, FaBars, FaArrowDown } from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom'
import Headroom from 'react-headroom'
import { NavBlink } from '../utils'
import Logo from '../assets/Images/SiteImg/imgi_1.png'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuScrolled, setMenuScrolled] = useState(false);
    const [moreBtn, setMoreBtn] = useState(false);
    const location = useLocation();

    // Determine if we are on the Home page to apply transparent header logic
    const isHomePage = location.pathname === '/';

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);

        setMoreBtn(false)
        
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);

    }, []);


    useEffect(() => {
      const handleMenuScroll = () => {
        setMenuScrolled(window.scrollY > 50);
      }
      window.addEventListener('scroll', handleMenuScroll);
      return () => window.removeEventListener('scroll', handleMenuScroll);
    }, []);

    // Logic for text color: 
    // - If scrolled: White text (on dark background)
    // - If not scrolled AND on Home page: White text (on dark/image background)
    // - If not scrolled AND NOT on Home page: Black text (on presumably white/light background)
    const textColorClass = (scrolled || isHomePage) ? 'text-gray-500' : 'text-slate-900';
    const logoClass = (scrolled || isHomePage) ? '' : 'brightness-0'; // Make logo black if background is white
    const hoverClass = (scrolled || isHomePage) ? 'hover:text-blue-400' : 'hover:text-blue-600';
    const activeClass = 'text-blue-500';

    // Background logic
    // - If scrolled: Dark + Blur
    // - If not scrolled: Transparent
    // - Exception: If not scrolled AND NOT on Home, we might need a background if the page content is white. 
    //   However, usually "transparent" is desired for overlay. 
    //   If the user wants a solid bar on other pages, we can adjust.
    //   Let's stick to transparent but with black text for visibility on light pages.
    const bgClass = scrolled 
      ? 'bg-[#0F1621]/95 backdrop-blur-md shadow-lg py-2' 
      : 'bg-transparent py-6';

    const menuBgClass = menuScrolled 
      ? 'bg-gray-500 text-white' 
      : 'bg-slate-900 ';
        
      
      


  return (
    <Headroom
      style={{
        zIndex: 9999,
        transition: 'all 0.3s ease-in-out'
      }}
    >
    <div className={`w-full transition-all duration-300 ${bgClass}`}>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                {/* Logo */}
                <div className='flex-shrink-0 z-10 transition-all duration-300'>
                  <NavLink to='/' className="block">
                    <img 
                      src={Logo} 
                      alt="P.Prance Logo" 
                      className={`h-12 w-auto object-contain transition-all duration-300 `} 
                    />
                  </NavLink>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex items-center gap-8'>
                  {NavBlink.map((x)=> (
                    <li key={x.Id} className='relative group'>
                      <NavLink 
                        to={x.Link} 
                        className={({ isActive }) =>
                          `font-Manrope text-sm uppercase tracking-wider transition-colors duration-300 ${
                            isActive ? activeClass : `${textColorClass} ${hoverClass}`
                          }`
                        }
                      >
                        {x.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                  <div>
                    <button
                    onClick={() => setMoreBtn(!moreBtn)}
                    className="bg-blue-500 flex gap-2 ease-linear delay-200 transition-transform transform duration-300 items-center text-white px-5 py-2 rounded-lg font-Manrope text-sm font-semibold hover:bg-blue-600">
                      Book Now
                     <FaArrowDown className={`ease-linear delay-200 transition-transform transform duration-200 ${!moreBtn ? 'rotate-0' : 'rotate-180 '}`}/>
                    </button>
                    <div className={`absolute ${menuBgClass} top-24 right-20 ease-linear delay-200 h-28 transition-transform transform duration-300 translate-x-10 text-white overflow-hidden rounded-md shadow-lg p-2 space-y-2 ${!moreBtn ? 'opacity-0' : 'opacity-100'}`}>
                      <NavLink to='/Shop' className={({ isActive }) =>
                        `font-Manrope text-sm uppercase tracking-wider mb-3 block transition-colors duration-300 ${
                          isActive ? activeClass : ` ${hoverClass}`
                        }`
                      }>
                        SHOP
                      </NavLink>
                      <NavLink to='/Collections' className={({ isActive }) =>
                        `font-Manrope text-sm uppercase tracking-wider transition-colors duration-300 ${
                          isActive ? activeClass : ` ${hoverClass}`
                        }`
                      }>
                        COLLECTIONS
                      </NavLink>
                    </div>
                  </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden z-50">
                  <button 
                    onClick={() => setIsMobile(!isMobile)}
                    className={`${textColorClass} hover:text-blue-500 transition-colors focus:outline-none`}
                  >
                    {isMobile ? <FaTimes size={24} className={isMobile ? 'text-white' : ''} /> : <FaBars size={24} />}
                  </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0F1621] z-40 transition-transform duration-500 lg:hidden flex flex-col ${isMobile ? 'translate-x-0' : 'translate-x-full'}`}>
              
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                 <img src={Logo} alt="P.Prance Logo" className="h-10 w-auto" />
                 {/* Close button handled by the absolute button above, but we need space for it */}
                 <div className="w-8"></div> 
              </div>

              {/* Mobile Menu Links */}
              <div className="flex flex-col items-center bg-[#0F1621] justify-center flex-grow space-y-8">
                {NavBlink.map((x) => (
                  <NavLink
                    key={x.Id}
                    to={x.Link}
                    onClick={() => setIsMobile(false)}
                    className={({ isActive }) =>
                      `text-3xl sma:text-2xl mda:text-2xl font-Anek font-medium tracking-wide transition-all duration-300 hover:scale-110 ${
                        isActive ? 'text-blue-500' : 'text-white hover:text-blue-400'
                      }`
                    }
                  >
                    {x.name}
                  </NavLink>
                ))}
                
              {/* Mobile Menu Footer */}
              <div className="p-6 text-center text-gray-500 font-Nunito text-sm border-t border-gray-800">
                <p>&copy; {new Date().getFullYear()} P.Prance Kloding</p>
              </div>
                
              </div>

            </div>
        </nav>
    </div>
    </Headroom>
  )
}

export default Navbar
