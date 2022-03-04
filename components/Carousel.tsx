import {Navigation, Pagination, FreeMode, Mousewheel} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { images } from "../lib/images"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

import styles from './styles/Carousel.module.css';

export default function Carousel () {
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
        <SwiperSlide className={styles.swiperSlide}><Image src={images.card} alt="Slide 1" width="232" height="324"/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 8</SwiperSlide>
      </Swiper>
    </div>
  );
};