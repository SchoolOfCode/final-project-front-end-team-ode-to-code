import { AppContext } from '../context/state';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { images } from '../lib/images';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { useRouter } from 'next/router';
import styles from '../styles/Results.module.css';

function Result() {
  const { query } = useRouter();
  const { data, isLoading } = useContext(AppContext);

  const [citySearchResults, setCitySearchResults] = useState([]);
  const [countrySearchResults, setCountrySearchResults] = useState([]);

  function filterData(data) {
    let cityList = [];
    let countryList = [];
    let newValue;
    let searchCriteria;
    data.cities && data.cities.map((city) => {
      searchCriteria = (query.search).toLowerCase()
      if (
        (city.city_name).toLowerCase() === searchCriteria ||
        (city.country).toLowerCase() === searchCriteria ||
        (city.continent).toLowerCase() === searchCriteria ||
        (city.city_attractions.join(',')).toLowerCase().includes(searchCriteria) ||
        (city.great_for.join(',')).toLowerCase().includes(searchCriteria) ||
        (city.tags.join(',')).toLowerCase().includes(searchCriteria) ||
        (city.budget).toLowerCase() === searchCriteria ||
        (city.holiday_type).toLowerCase() === searchCriteria
      ) {
        newValue = city.city_name;
        cityList = [...cityList, newValue];
      }
      return;
    });
    setCitySearchResults(cityList);

    data.countries && data.countries.map((country) => {
      if (
        (country.cities.join(',')).toLowerCase().includes(searchCriteria) ||
        (country.country).toLowerCase() === searchCriteria ||
        (country.continent).toLowerCase() === searchCriteria
      ) {
        newValue = country.country;
        countryList = [...countryList, newValue];
      }
      return;
    });
    setCountrySearchResults(countryList);
  }

  useEffect(() => {
    filterData(data);
  }, [data]);

  return (
    <Layout imageUrl={images.search}>
      <PageTitle text="Search Results" />
      <div className={styles.body}>
      <ul>
        {countrySearchResults.length > 0 &&
          countrySearchResults.map((country) => (
            <li key={country} className={styles.listItem}>
              <Link href={`/countries/${country}`}>{country}</Link>
            </li>
          ))}
        {citySearchResults.length > 0 &&
          citySearchResults.map((city) => (
            <li key={city} className={styles.listItem}>
              <Link href={`/cities/${city}`}>{city}</Link>
            </li>
          ))}
        {countrySearchResults.length === 0 && citySearchResults.length === 0 && !isLoading && (
          <p className={styles.error}>
            No Search Results Found! <br />
            Go <Link href="/">back to homepage</Link>.
          </p>
        )}
        {isLoading && (<p className={styles.error}>Search results loading...</p>)}
      </ul>
      </div>
    </Layout>
  );
}

export default Result;
