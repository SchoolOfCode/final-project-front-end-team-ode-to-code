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
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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