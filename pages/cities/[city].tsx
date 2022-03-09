import { useState, useEffect } from 'react';
import styles from '../../styles/City.module.css';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Heading from '../../components/Heading';
import Link from 'next/link';
import Head from 'next/head';

const citiesApi = 'https://four-week-project.herokuapp.com/cities';

export async function getStaticPaths() {
  const resCities = await fetch(citiesApi);
  const dataCities = await resCities.json();

  const paths = dataCities.payload.map((city: any) => {
    return {
      params: {
        city: city.city_name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

////capitalize all string
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getStaticProps(context: any) {
  const cityName = context.params.city;
  const response = await fetch(
    `https://four-week-project.herokuapp.com/cities/?name=${capitalizeFirstLetter(
      cityName
    )}`
  );
  const data = await response.json();
  return {
    props: {
      city: data.payload[0],
    },
  };
}

function City({ city }: { city: any }) {
  // Fetching weather API
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.city_name}&APPID=50b40a5db92361b0367f15385971300e`
      );
      let data = await res.json();
      setWeather(data);
    }

    fetchMyAPI();
  }, []);

  const stars = '⭐️';
  let icons = [
    '👨‍👩‍👧‍👦   ',
    '🚶‍♀️   ',
    '💆   ',
    '👫   ',
    '👢  ',
    '🌞   ',
    '🌝   ',
    '💃🕺🏻   ',
    '🧗🏼‍♀️   ',
    '⛺️  ',
  ];
  return (
    <>
      <Head>
        <title>beyonderbound | {city.city_name}</title>
      </Head>
      <Layout imageUrl={city.image}>
        <PageTitle text={city.city_name} />
        <div className={styles.body}>
          <div data-cy="stats" className={styles.stats}>
            <div className={styles.tags}>
              <p>
                <strong>Rating: </strong>
                {stars.repeat(city.rating)}
              </p>
              <p>
                <strong>Great for: </strong>
                {city.great_for.join(', ')}
              </p>
              <p className={styles.emojis}>
                {city.great_for.map((element: string) => {
                  if (element === 'family') {
                    return (element = icons[0]);
                  }
                  if (element === 'solo') {
                    return (element = icons[1]);
                  }
                  if (element === 'city break') {
                    return (element = icons[2]);
                  }
                  if (element === 'romance') {
                    return (element = icons[3]);
                  }
                  if (element === 'shopping') {
                    return (element = icons[4]);
                  }
                  if (element === 'sun') {
                    return (element = icons[5]);
                  }
                  if (element === 'honeymoon') {
                    return (element = icons[6]);
                  }
                  if (element === 'nightlife') {
                    return (element = icons[7]);
                  }
                  if (element === 'adventure') {
                    return (element = icons[8]);
                  }
                  if (element === 'backpacking') {
                    return (element = icons[9]);
                  }
                  if (element === 'families') {
                    return (element = icons[0]);
                  }
                })}
              </p>
            </div>

            {weather && (
              <div data-cy="weather" className={styles.weather}>
                <h2>Current Weather in {city.city_name}:</h2>
                <p>
                  <strong>Conditions:</strong> {weather.weather[0].description}
                </p>
                <p>
                  <strong>Temp:</strong> {weather.main.temp}˚C
                </p>
                <p>
                  <strong>Today's High:</strong> {weather.main.temp_max}˚C
                </p>
                <p>
                  <strong>Today's Low:</strong> {weather.main.temp_min}˚C
                </p>
              </div>
            )}
          </div>
          <Heading text={`About ${city.city_name}`} justify="left" />
          <p data-cy="city-description" className={styles.description}>
            {city.city_description}
          </p>
          {/* set actual country link site */}
          <h2 data-cy="city-back-button" className={styles.country}>
            Back to{' '}
            <Link href={`/countries/${capitalizeFirstLetter(city.country)}`}>
              <a data-cy="country">{city.country}</a>
            </Link>
          </h2>
        </div>
      </Layout>
    </>
  );
}

export default City;
