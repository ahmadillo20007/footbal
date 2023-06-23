import React from 'react'
import "./Collect.scss"
import CollectImg from "../../img/collect-img.jpg"
import CollectImg2 from "../../img/collect-img2.jpg"
import CollectImg3 from "../../img/collect-img3.jpg"
import CollectImg4 from "../../img/collect-img4.jpg"
import CollectImg5 from "../../img/collect-img5.jpg"
import CollectImg6 from "../../img/collect-img6.jpg"
import CollectImg7 from "../../img/collect-img7.jpg"
import CollectImg8 from "../../img/collect-img8.jpg"
import { Link } from 'react-router-dom'

function Collect() {
  return (
    <div>
        <div className='container collect-wrapper'>
            <div className='collect-item'><Link><img src={CollectImg} alt="" /></Link></div>
            <div className='collect-item'><Link><img src={CollectImg2} alt="" /></Link></div>
            <div className='collect-item'><Link><img src={CollectImg3} alt="" /></Link></div>
        </div>
        <h2>Collections</h2>
        <div className='container collect-wrapper2'>
            <Link><img src={CollectImg4} alt="" /></Link>
            <Link><img src={CollectImg5} alt="" /></Link>
            <Link><img src={CollectImg6} alt="" /></Link>
            <Link><img src={CollectImg7} alt="" /></Link>
            <Link><img src={CollectImg8} alt="" /></Link>
        </div>
    </div>
    
  )
}

export default Collect