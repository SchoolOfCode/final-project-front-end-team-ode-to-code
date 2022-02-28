import React from 'react';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';

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
  let icons = ['👨‍👩‍👧‍👦  ', '🚶‍♀️  ', '💆  ', '👫  ', '👢  ', '🌞  ', '🌝  ', '💃🕺🏻'];
  return (
    <>
      <Layout imageUrl={city.image}>
        <PageTitle text={city.city_name} />
        <p>
          Rating
          {stars.repeat(city.rating)}
        </p>
        <p>
          Great for...
          {city.great_for.join('   ')}
        </p>

        <p>
          Great for...
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
        <br />
        <h2>All About {city.city_name}</h2>
        <p>{city.city_description}</p>
        <br />
        {/* set actual country link site */}
        <h2>
          Back to{' '}
          <a
            href={`http://localhost:3000/countries/${capitalizeFirstLetter(
              city.country
            )}`}
          >
            {city.country}
          </a>
        </h2>
      </Layout>
    </>
  );
}

export default City;
