import Head from 'next/head';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';
import { images } from '../lib/images';
import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';


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
} : {
  cities: any;
  countries: any;
}) {

  const [input, setInput] = useState('');
  const [randCity,setRandCity] = useState('');
  const router = useRouter()

  ///////Search functionality
  function handleChange(e: any) {
    setInput(e.target.value);
  }
  
  function handleSubmit(e: any) {
    e.preventDefault();
    e.target.reset();
    router.push(`/result?search=${input}`)
  }

function luckyDip() { //function to get the city name  
    let url = `/cities/${randCity}`;
    router.push(url)
  }

useEffect(()=>{
  function randomCity(){
    let randomCity:any = Math.floor(Math.random() * cities.length)
    setRandCity(cities[randomCity].city_name)
  }
  randomCity()
},[])

  return (
      <Layout imageUrl={images.homepage}>
         <SearchSection
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          luckyDip={luckyDip} 
        />
        {input && 
        <div className={styles.searchResult}>
          {cities.map((city: any) => (
            <div key={city.id}>
              <Link href={`/cities/${city.city_name}`}>
                <a>
                  {city.city_name === input ||
                  city.country === input ||
                  city.continent === input ||
                  city.rating === input ||
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
        }
        <div className="wrapper wrapper--lg">
          <Heading text="Countries to discover..." justify="left" />
        </div>
        <Carousel countries={countries}/>
        <Glasssection />
      </Layout>
  );
}

export default Home;
