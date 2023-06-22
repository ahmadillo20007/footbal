import Hero from "../../components/Hero/Hero.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import "./Store.scss"
import React from 'react'

function Store() {
  return (
      <div className="store">
        <NavBar/>
        <Hero/>
      </div>
  )
}

export default Store
