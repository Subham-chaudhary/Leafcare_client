import { useState } from 'react'
import Body from './main/body.jsx'
import Header from './main/header.jsx'
import  FooterCarousel from './main/footer-carousel.jsx'
import Footer from './main/footer.jsx';
import './App.css'


function App() {

  return (
    <>
    <Header/>
    <Body/>
    <FooterCarousel/>
    <Footer/>
    </>
  )
}

export default App
