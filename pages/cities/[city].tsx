import React from 'react';

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
  return (
    <div>
      <h1>{city.city_name}</h1>
    </div>
  );
}

export default City;
