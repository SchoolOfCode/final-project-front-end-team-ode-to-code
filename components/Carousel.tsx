import { useEffect, useState } from "react";
import {Navigation, Pagination, FreeMode, Mousewheel} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { images } from "../lib/images"
import Link from 'next/link'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

import styles from './styles/Carousel.module.css';

export default function Carousel ({countries}:any) {
const [sixCountrie,setSixCountries]=useState([])

// 5 random countries
useEffect(()=>{
let randomCountries:any = countries.sort(() => Math.random() - 0.5)
let sixCountries:any = randomCountries.slice(0,6) 
  setSixCountries(sixCountries)
},[])

////////

  return (
    <div className={styles.carousel}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, FreeMode, Mousewheel]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          0: {
            width: 300,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {/* <SwiperSlide className={styles.swiperSlide}><Image src={images.card} alt="Slide 1" width="232" height="324"/></SwiperSlide> */}
        {sixCountrie.map((country:any)=>{
          return(
          <SwiperSlide className={styles.swiperSlide}>
            <div style={{position:'relative'}}>
            <Link href={`/countries/${country.country}`}>
                <Image src={country.image2} alt={country.country} width="232" height="324"/>
            </Link>  
            <p style={{zIndex:'2',textAlign:'center',position:'absolute',marginLeft:'40%',top:'0',right:'0%',color:'white',borderRadius:'10px',fontSize:'20px',backgroundColor:'rgba(0, 0, 0, 0.3)'}}>{country.country}</p>
            </div> 
          </SwiperSlide>)
        })}
      </Swiper>
    </div>
  );
};