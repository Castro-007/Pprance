import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Blog from './Pages/Blog.jsx'
import BlogPost from './Pages/BlogPost.jsx'

import ScrollToTop from './components/Scrolltotop.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LenisProvider from './components/Lenisprovider.jsx'
import './index.css'
import Shop from './Pages/Shop.jsx'


function App() {
 

  return (
    <>
    <LenisProvider>

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Blog/:slug' element={<BlogPost />} />
      </Routes>
      <Footer />
    </LenisProvider>
    </>
  )
}

export default App
