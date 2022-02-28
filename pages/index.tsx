import Head from 'next/head';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';
import { images } from '../lib/images';
import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Layout from '../components/Layout';

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
  return (
    <>
      <Layout imageUrl={images.homepage}>
        <SearchSection />
        <div className="wrapper wrapper--lg">
          <Heading text="Countries to discover..." justify="left" />
        </div>
        <Carousel />
        <Glasssection />
        <div>
          {cities.map((city: any) => (
            <div key={city.id}>
              <h2>{city.city_name}</h2>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Home;
