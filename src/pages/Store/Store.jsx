import Footer from "../../components/Footer/Footer.jsx"
import Hero2 from "../../components/Hero2/Hero2.jsx"
import Shop from "../../components/Shop/Shop.jsx"
import Top from "../../components/Top/Top.jsx"
import "./Store.scss"
import React from 'react'

function Store() {
  return (
      <div className="store">
        <Top/>
        <Shop/>
        <Hero2/>
        <Footer/>
      </div>
  )
}

export default Store
