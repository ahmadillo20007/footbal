import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import news from '../../img/new.png'
import med from '../../img/med.png'
import shop from '../../img/shop.png'
import team from '../../img/team.png'
import statis from '../../img/statis.png'
import aka from '../../img/aka.png'
import home from '../../img/home.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <img className='navbar__logo' src={logo} alt="" />
        <ul className='navbar__list'>
          <hr />
          <li className='navbar__list__item'>
            Bosh sahifa <img className='list__item' src={home} alt="" />
          </li>
          <hr />
          <li className='navbar__list__item'>
            Yangiliklar <img className='list__item' src={news} alt="" />
          </li>
          <hr />
          <Link to={'/store2'}> <li className='navbar__list__item'>
            Shop<img className='list__item' src={med} alt="" />
          </li></Link>
          <hr />
          <Link to={'/store'}>  <li className='navbar__list__item'>
            Do’kon <img className='list__item' src={shop} alt="" />
          </li></Link>
          <hr />
          <li className='navbar__list__item'>
            Klub <img className='list__item' src={team} alt="" />
          </li>
          <hr />
          <li className='navbar__list__item'>
            Statistika <img className='list__item' src={statis} alt="" />
          </li>
          <hr />
          <li className='navbar__list__item'>
            Akademiya <img className='list__item' src={aka} alt="" />
          </li>
          <hr />
        </ul>
      </div>
    </div>
  )
}

export default Navbar