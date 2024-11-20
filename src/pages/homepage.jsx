import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Chatbot from '../components/chatbot'
import '../stylesheets/Homepage.css'
import About from '../components/About'
import Contact from '../components/Contact'


const Homepage = () => {

  return (
    <div className='home'>
      <Navbar/>
      <Hero/>
      <About/>
      <Chatbot/>
      <Contact/>
      
    </div>
  )
}

export default Homepage