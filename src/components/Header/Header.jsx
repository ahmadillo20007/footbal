import './Header.css'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
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