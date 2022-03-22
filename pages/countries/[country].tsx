import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import styles from '../../styles/Country.module.css';
import Button from '../../components/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Country } from '../../interfaces';

const countriesApi = 'https://four-week-project.herokuapp.com/countries';

export async function getStaticPaths() {
  const resCountries = await fetch(countriesApi);
  const dataCountries = await resCountries.json();

  const paths = dataCountries.payload.map((country: Country) => {
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

function Country({ country }: { country: Country }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>beyonderbound | {country.country}</title>
      </Head>
      <Layout imageUrl={country.image}>
        <PageTitle text={country.country} />
        <div className={styles.body}>
          <div className={styles.cityList}>
            {country.cities.map((city: string) => (
              <Link key={city} href={`/cities/${city}`}>
                <a data-cy="countries-link">
                  <Button
                    text={city}
                    action={() => router.push(`/cities/${city}`)}
                  />
                </a>
              </Link>
            ))}
          </div>
          <div>
            <p data-cy="all-about" className={styles.aboutCountry}>
              {' '}
              All About {country.country}
            </p>
          </div>
          <div className={styles.countryDescription}>
            <p>{country.country_description}</p>
          </div>
          <div
            className={styles.widget}
            data-skyscanner-widget="SearchWidget"
            data-locale="en-GB"
            data-market="GB"
            data-currency="GBP"
          ></div>
          <script
            src="https://widgets.skyscanner.net/widget-server/js/loader.js"
            async
          ></script>
        </div>
      </Layout>
    </>
  );
}

export default Country;
