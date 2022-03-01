import Head from 'next/head';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';
import { images } from '../lib/images';
import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { useState } from 'react';

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

const[input,setInput]=useState('')
const [word,setWord]= useState('')

///////Search functionality
function handleChange(e:any){
  setInput(e.target.value)
}

function handleSubmit(e:any){
  e.preventDefault();
  setWord(input)
  e.target.reset()
}

/////



  return (
    <>
      <p>{word}</p>
      <Layout imageUrl={images.homepage}>
        <SearchSection input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div className="wrapper wrapper--lg">
          <Heading text="Countries to discover..." justify="left" />
        </div>
        <Carousel />
        <Glasssection />
        <div>
          {cities.map((city: any) => (
            <div key={city.id}>
              <h2>{(city.city_name=== word || city.country=== word || city.continent=== word || city.rating=== word || city.great_for=== word || city.tags=== word || city.budget=== word || city.holiday_type === word ) ? city.city_name : false }</h2>
              <h2>{city.tags}</h2>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Home;
