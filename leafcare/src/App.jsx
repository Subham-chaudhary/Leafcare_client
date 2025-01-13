import { useState } from 'react'
import Body from './main/body.jsx'
import Header from './main/header.jsx'
import FooterCarousel from './main/footer-carousel.jsx'
import Footer from './main/footer.jsx';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AnimatedSwitch } from 'react-router-dom-transition';


function App() {

  return (
    <>
      <Header />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<><Body />
            <FooterCarousel /></>} >
          </Route>
          <Route path="/a" element={<><Body />
          </>} >
          </Route>
          <Route path="/*" element={<h1 className='not-found bg-dark text-light'>404</h1>} >
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
