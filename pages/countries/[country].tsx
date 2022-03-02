import React from 'react';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import styles from '../../styles/Country.module.css';

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
        <div className= {styles.cityList}>
        <p className={styles.city}>{country.cities[0]}</p>
        <p className={styles.city}>{country.cities[1]}</p>
        <p className={styles.city}>{country.cities[2]}</p>
        </div>
        <div>
        <p className={styles.aboutCountry}> All About {country.country}</p>
        </div>
        <div className={styles.countryDescription}>
        <p>{country.country_description}</p>
        </div>
      </Layout>
    </>
  );
}

export default Country;
