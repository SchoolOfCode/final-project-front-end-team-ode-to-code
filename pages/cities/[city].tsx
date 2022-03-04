import React from 'react';
import styles from '../../styles/City.module.css';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Heading from '../../components/Heading';
import Link from 'next/link'

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
  const stars = '⭐️';
  let icons = ['👨‍👩‍👧‍👦 ', '🚶‍♀️ ', '💆 ', '👫 ', '👢 ', '🌞 ', '🌝 ', '💃🕺🏻 '];
  return (
    <>
      <Layout imageUrl={city.image}>
        <PageTitle text={city.city_name} />
        <div className={styles.body}>
          <div className={styles.stats}>
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
                if (element === 'families') {
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
              })}
            </p>
          </div>
          <Heading text={`About ${city.city_name}`} justify="left" />
          <p className={styles.description}>{city.city_description}</p>
          {/* set actual country link site */}
          <h2 className={styles.country}>
            Back to{' '}
            <a
              href={`http://localhost:3000/countries/${capitalizeFirstLetter(
                city.country
              )}`}
            >
              {city.country}
            </a>
          </h2>
        </div>
      </Layout>
    </>
  );
}

export default City;
