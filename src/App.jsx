import React,{ useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About className='mt-5'/>
      <Projects className='mt-5'/>
      <Skills className='mt-5'/>
      <Contact className='mt-5'/>
      <Footer className = 'mt-5'/>
    </div>
  )
}

export default App
