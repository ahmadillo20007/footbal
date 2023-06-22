import Footer from "../../components/Footer/Footer.jsx"
import Hero from "../../components/Hero/Hero.jsx"
import Shop from "../../components/Shop/Shop.jsx"
import Top from "../../components/Top/Top.jsx"
import "./Store.scss"
import React from 'react'

function Store() {
  return (
      <div className="store">
        <Top/>
        <Shop/>
        <Hero/>
        <Footer/>
      </div>
  )
}

export default Store
