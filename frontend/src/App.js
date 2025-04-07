import React from 'react'
import TopNav from './components/TopNav'
import SecondTopNav from './components/SecondTopNav'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <TopNav/>
    <SecondTopNav/>
    <Navbar/>
    <Slider/>
     <Outlet />
     <Footer/>
    </div>
  )
}

export default App
