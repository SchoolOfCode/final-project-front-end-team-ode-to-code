import Head from 'next/head';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';
import { images } from '../lib/images';
import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { useState, useContext } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import {AppContext} from '../context/state';


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

function Home<NextPage>({
  cities,
  countries,
}: {
  cities: any;
  countries: any;
}) {
  const {searchCriteria, setSearchCriteria} = useContext(AppContext);
  const [input, setInput] = useState('');
  const [word, setWord] = useState('');

  ///////Search functionality
  function handleChange(e: any) {
    setInput(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setWord(input);
    e.target.reset();
    setSearchCriteria("Testing more")
    window.location.href= '/result'
  }

  /////

  return (
      <Layout imageUrl={images.homepage}>
        <p>{searchCriteria}</p>
        <SearchSection
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className={styles.searchResult}>
          {cities.map((city: any) => (
            <div key={city.id}>
              <Link href={`/cities/${city.city_name}`}>
                <a>
                  {city.city_name === word ||
                  city.country === word ||
                  city.continent === word ||
                  city.rating === word ||
                  city.great_for.join(',').includes(word) ||
                  city.tags.join(',').includes(word) ||
                  city.budget === word ||
                  city.holiday_type === word
                    ? city.city_name
                    : false}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="wrapper wrapper--lg">
          <Heading text="Countries to discover..." justify="left" />
        </div>
        <Carousel />
        <Glasssection />
      </Layout>
  );
}

export default Home;
