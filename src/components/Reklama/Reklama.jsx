import React from 'react'
import "./Reklama.scss"
import { Link } from 'react-router-dom'
import reklamaLogo1 from "../../img/reklam-logo1.png"
import reklamaLogo2 from "../../img/reklam-logo2.png"
import reklamaLogo3 from "../../img/reklam-logo3.png"
import reklamaLogo4 from "../../img/reklam-logo4.png"
import reklamaLogo5 from "../../img/reklam-logo5.png"

function Reklama() {
  return (
    <div className='container'>
        <div className='reklama-wrapper'>
            <Link to={"https://www.adidas.com/us"}>
                <img src={reklamaLogo1} alt="" />
            </Link>
            <Link to={"https://futboltv.asia/"}>
                <img src={reklamaLogo2} alt="" />
            </Link>
            <Link to={"https://fcdinamo.uz/"}>
                <img src={reklamaLogo3} alt="" />
            </Link>
            <Link to={"https://chevrolet.uz/damas"}>
                <img src={reklamaLogo4} alt="" />
            </Link>
            <Link to={"https://www.sporttv.pt/"}>
                <img src={reklamaLogo5} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Reklama