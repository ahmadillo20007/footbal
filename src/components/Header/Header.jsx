import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'

function Header() {
  return (
    <div className='header'>
<Navbar/>
<Main/>
    </div>
  )
}

export default Header