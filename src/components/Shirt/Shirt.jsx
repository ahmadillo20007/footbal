import React from 'react'
import "./Shirt.scss"
import shirtLogo1 from "../../img/shirt-img1.png"
import shirtLogo2 from "../../img/shirt-img2.png"
import shirtLogo3 from "../../img/shirt-img3.png"
import shirtLogo4 from "../../img/shirt-img4.png"
import shirtLogo5 from "../../img/shirt-img5.png"
import shirtStars from "../../img/shirt-stars.svg"

function Shirt() {
  return (
    <div>
        <div className='shirt-title__wrapper'>
            <span></span>
            <h3 className='shirt-title'>RECOMMENDATIONS FOR YOU</h3>
            <span></span>
        </div>
        <div className='container'>
          <ul className='shirt-list'>
            <li className='shirt-item'>
              <img src={shirtLogo1} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img src={shirtLogo2} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img src={shirtLogo3} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img src={shirtLogo4} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img src={shirtLogo5} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Shirt