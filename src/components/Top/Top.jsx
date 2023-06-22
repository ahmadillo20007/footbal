import React from 'react'
import "./Top.scss"
import { Link } from 'react-router-dom'
import navLogo from "../../img/logo.png"

function Top() {
  return (
    <header>
        <div className='container nav-wrapper'>
            <ul className='nav-list'>
                <li className='nav-item'><Link className='nav-link'>Bosh sahifa</Link></li>
                <li className='nav-item'><Link className='nav-link'>Yangiliklar</Link></li>
                <li className='nav-item'><Link className='nav-link'>Media</Link></li>
                <li className='nav-item'><Link className='nav-link'>Do’kon</Link></li>
            </ul>
            <div><img src={navLogo} alt="" /></div>
            <ul className='nav-list2'>
                <li className='nav-item2'><Link className='nav-link2'>Klub</Link></li>
                <li className='nav-item2'><Link className='nav-link2'>Muxlislar</Link></li>
                <li className='nav-item2'><Link className='nav-link2'>Akademiya</Link></li>
                <li className='nav-item2'><Link className='nav-link2'>Homiylar</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Top  