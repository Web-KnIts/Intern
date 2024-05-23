import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Whatweoffer from '../Components/whatWeoffer/Whatweoffer'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Blog from '../Components/Bloog/Blog.jsx'
import OurWork from '../Components/OurWork/OurWork.jsx'
1
function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Whatweoffer/>
        <About/>
        <Blog/>
        <OurWork/>
        <Footer/>
    </div>
  )
}

export default Home