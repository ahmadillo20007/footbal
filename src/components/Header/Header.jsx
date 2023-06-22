import './Header.css'
import Navbar from '../NavBar/NavBar.jsx'
import Main from '../Main/Main'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
function Header() {
  return (
    <div className='header'>
<Navbar/>
<Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
            <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Main/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Header