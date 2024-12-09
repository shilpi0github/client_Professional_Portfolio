import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import Features from './Componants/features/Features'
import Banner from './Componants/banner/Banner'
import Projects from './Componants/projects/Projects'
import Resume from './Componants/resume/Resume'
import Contact from './Componants/contact/Contact'
import Footer from './Componants/footer/Footer'
import Blog from './Componants/blog/Blog'


const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText   '>
    <div className='max-w-screen-xl mx-auto'>
    <Navbar />

    <Banner/>
    <Features />
    <Projects />
    <Resume />
    <Blog />
    <Contact />
    <Footer />
    </div>
    </div>
  )
}

export default App