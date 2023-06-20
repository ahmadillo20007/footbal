import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import home from '../../img/home.png'
import news from '../../img/new.png'
import med from '../../img/med.png'
import shop from '../../img/shop.png'
import team from '../../img/team.png'
import statis from '../../img/statis.png'
import aka from '../../img/aka.png'
import { Link,  } from 'react-router-dom'
function Header() {
  return (
    <div className='container'>
      <div className="header">
        <nav>
          <img className='nav__img' src={logo} alt="" />
          <ul className='header__list'>
            
<Link>
<li className='header__list__item'>Bosh sahifa     <img className='list__item' src={home} alt="" /></li>

</Link>
          <li className='header__list__item'>Yangiliklar   <img className='list__item' src={news} alt="" /></li>
          <li className='header__list__item'>Media     <img className='list__item' src={med} alt="" /></li>
          <li className='header__list__item'>Do’kon   <img className='list__item' src={shop} alt="" /></li>
          <li className='header__list__item'>Klub    <img className='list__item' src={team} alt="" /></li>
          <li className='header__list__item'>Statistika    <img className='list__item' src={statis} alt="" /></li>
            <li className='header__list__item'>Akademiya     <img className='list__item' src={aka} alt="" /></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
