import React from 'react';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Link from 'next/link';

const countriesApi = 'https://four-week-project.herokuapp.com/countries';

export async function getStaticPaths() {
  const resCountries = await fetch(countriesApi);
  const dataCountries = await resCountries.json();

  const paths = dataCountries.payload.map((country: any) => {
    return {
      params: {
        country: country.country,
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
  const countryName = context.params.country;
  const response = await fetch(
    `https://four-week-project.herokuapp.com/countries/?name=${capitalizeFirstLetter(
      countryName
    )}`
  );
  const data = await response.json();

  return {
    props: {
      country: data.payload[0],
    },
  };
}

function Country({ country }: { country: any }) {
  return (
    <>
      <Layout imageUrl={country.image}>
        <PageTitle text={country.country} />
        <Link href={`/cities/${country.cities[0]}`}><p>{country.cities[0]}</p></Link>
        <p>{country.cities[1]}</p>
        <p>{country.cities[2]}</p>
        <p> All About {country.country}</p>
        <p>{country.country_description}</p>
      </Layout>
    </>
  );
}

export default Country;
