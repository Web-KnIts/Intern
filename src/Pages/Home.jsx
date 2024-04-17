import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Whatweoffer from '../Components/whatWeoffer/Whatweoffer'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Whatweoffer/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home