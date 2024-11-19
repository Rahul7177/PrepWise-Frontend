// import axios from '../axios'
import React ,{useEffect,useState}from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Chatbot from '../components/chatbot'
import '../stylesheets/Homepage.css'
import About from '../components/About'
import Contact from '../components/Contact'
// import Hero from '../components/Hero'
// import Brands from '../components/Brands'
// import Latest from '../components/Latest'
// import Info from '../components/Info'
// import Footer from '../components/Footer'

const Homepage = () => {

  return (
    <div className='home'>
      <Navbar/>
      <Hero/>
      <About/>
      <Chatbot/>
      <Contact/>
      
      {/* <ContactSection/> */}
      {/* <Hero/>
      <Latest/>
      <Brands/>
      <Info/>
      <Footer/> */}
    </div>
  )
}

export default Homepage