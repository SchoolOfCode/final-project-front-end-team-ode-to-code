import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import WaveImage from '../components/WaveImage';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';

const citiesApi = 'https://four-week-project.herokuapp.com/cities';
const countriesApi = 'https://four-week-project.herokuapp.com/countries';

export async function getStaticProps() {
  const resCities = await fetch(citiesApi);
  const resCountries = await fetch(countriesApi);
  const dataCities = await resCities.json();
  const dataCountries = await resCountries.json();

  return {
    props: { cities: dataCities.payload, countries: dataCountries.payload },
  };
}

function Home<NextPage>({ cities, countries }) {
  return (
    <>
      <WaveImage />
      <SearchSection />
      <Glasssection />
      <div>
        {cities.map((city) => (
          <div key={city.id}>
            <h2>{city.city_name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
