import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination, FreeMode, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

import styles from './styles/Carousel.module.css';

interface CountriesData {
  country: string;
  continent: string;
  image: string;
  image2: string;
  country_description: string;
  cities: string[]
}


export default function Carousel({ countries }: any) {
  const [sixCountries, setSixCountries] = useState([]);

  // 5 random countries
  useEffect(() => {
    let randomCountries: any = countries.sort(() => Math.random() - 0.5);
    let sixCountries: any = randomCountries.slice(0, 6);
    setSixCountries(sixCountries);
  }, []);
  //

  return (
    <div data-cy="carousel" className={styles.carousel}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, Navigation, Pagination, FreeMode, Mousewheel]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        navigation={true}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
        {sixCountries.map((country: CountriesData) => {
          return (
            <SwiperSlide key={country.country} className={styles.swiperSlide}>
              <div>
                <div style={{ position: 'relative' }}>
                  <Link href={`/countries/${country.country}`} passHref>
                    <>
                    <Image
                      className={styles.image}
                      src={country.image2}
                      alt={country.country}
                      width="232"
                      height="324"
                    />
                    </>
                  </Link>
                </div>
                <div className={styles.imageText}>
                  <p>
                    <Link href={`/countries/${country.country}`}>
                      {country.country}
                    </Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
