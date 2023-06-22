import React from 'react'
import './NavBar.css'
import shirt1 from '../../assets/Img/futbolka1.png'
import cap1 from '../../assets/Img/kepka1.png'
import tap1 from '../../assets/Img/tapchika.png'
import bag1 from '../../assets/Img/sumka.png'

function NavBar() {
  return (
    <div className='Navbar'> 
        <div className="container">
            <div className='Left__right'>
                <div className="Left">
                    <div className='Left__card'>
                        <img className='Card__img1' src={shirt1} alt="" />
                        <h3 className='Card__title1'>New Shirt from ROMA FC</h3>
                        <button className='Card__button1'>Buy Now <i className="bi bi-arrow-right  Card__arrow"></i></button>
                    </div>
                </div>
                <div className="Right">
                <div className="Right__card1">
                        <img className='Right__img1' src={cap1} alt="" />
                        <h3 className='Right__card__title1'>New Cap from ROMA FC</h3>
                        <button className='Right__btn1'>Buy Now <i className="bi bi-arrow-right  Card__arrow"></i></button>
                </div>
                <div className="Card__right__left">
                    <div className="Card__left">
                        <img className='Card__left__img1' src={tap1} alt="" />
                        <h3 className='Card__left__title1'>New accessories</h3>
                        <button className='Card__left__btn1'>Buy Now <i className="bi bi-arrow-right  Card__arrow"></i></button>
                    </div>
                    <div className="Card__right">
                    <img className='Card__right__img1' src={bag1} alt="" />
                        <h3 className='Card__right__title1'>New Bag</h3>
                        <button className='Card__right__btn1'>Buy Now <i className="bi bi-arrow-right  Card__arrow"></i></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar