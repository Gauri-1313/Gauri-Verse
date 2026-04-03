import React from 'react'
import Header from'./components/Header'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Project from './pages/Project/Project'
import Footer from './pages/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/> 
      <About/>
      <Contact/>
      <Project/>
      <Footer/>
    
    </div>
  )
}

export default App