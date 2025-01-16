import React from 'react'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Education from './components/education/Education.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home