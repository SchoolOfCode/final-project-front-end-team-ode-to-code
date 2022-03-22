import Head from 'next/head';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';
import { images } from '../lib/images';
import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import {City, Country} from '../interfaces';

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
  cities: City[];
  countries: Country[];
}) {
  const [input, setInput] = useState<string>('');
  const [randCity, setRandCity] = useState<string>('');
  const router = useRouter();

  // changes the input state according to what is typed in search box
  function handleChange(e: FormEvent<HTMLInputElement>): void {
    setInput(e.currentTarget.value);
  }

  // page redirect to search results if enter is pressed in search box
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    e.currentTarget.reset();
    router.push(`/result?search=${input}`);
  }

  // redirect to random city page
  function luckyDip(): void {
    router.push(`/cities/${randCity}`);
  }

  // select a random city on each page load
  useEffect(() => {
    function randomCity(): void {
      let randomCity: any = Math.floor(Math.random() * cities.length);
      setRandCity(cities[randomCity].city_name);
    }
    randomCity();
  }, []);

  return (
    <>
      <Head>
        <title>beyonderbound | Home</title>
      </Head>
      <Layout imageUrl={images.homepage}>
        <SearchSection
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          luckyDip={luckyDip}
        />
        {input && (
          <div data-cy="search-results" className={styles.searchResult}>
            {cities.map((city: City) => (
              <div key={city.id}>
                <Link href={`/cities/${city.city_name}`}>
                  <a>
                    {city.city_name === input ||
                    city.country === input ||
                    city.continent === input ||
                    city.rating === parseInt(input) ||
                    city.great_for.join(',').includes(input) ||
                    city.tags.join(',').includes(input) ||
                    city.budget === input ||
                    city.holiday_type === input
                      ? city.city_name
                      : false}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="wrapper wrapper--lg">
          <Heading text="Countries to discover..." justify="left" />
        </div>
        <Carousel countries={countries} />
        <Glasssection />
      </Layout>
    </>
  );
}

export default Home;
