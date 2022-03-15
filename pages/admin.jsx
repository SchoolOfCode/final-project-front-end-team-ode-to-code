import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../styles/Admin.module.css';
import Head from 'next/head';
import { useState, useContext } from 'react';
import Button from '../components/Button';
import { AppContext } from '../context/state';
import CityTile from '../components/CityTile';
import CountryTile from '../components/CountryTile';
import CityCountryDropDown from '../components/CityCountryDropDown';

function Admin() {
  const { data, isLoading } = useContext(AppContext);
  const citiesApi = 'https://four-week-project.herokuapp.com/cities';
  const countriesApi = 'https://four-week-project.herokuapp.com/countries';
  const [action, setAction] = useState('');
  const [cityOrCountry, setCityOrCountry] = useState('');

  function selectedAction(e) {
    const value = e.target.value;
    setAction(value);
    setCityOrCountry("");
  }

  function selectCityorCountry(e) {
    const value = e.target.value;
    setCityOrCountry(value);
  }

  return (
    <>
      <Head>
        <title>beyonderbound | Admin</title>
      </Head>
      <Layout imageUrl={images.admin}>
        <PageTitle text="Admin" />
        <div className={styles.body}>
          <form className={styles.dropdown}>
            <label for="actionType">Select action: </label>
            <select onChange={selectedAction} name="actionType">
              <option value="">...</option>
              <option value="get">GET all cities/countries</option>
              <option value="post">POST a new city/country</option>
              <option value="put">REPLACE a city/country</option>
              <option value="patch">EDIT a city/country</option>
              <option value="delete">DELETE a city/country</option>
            </select>
          </form>
          {action === 'get' && (
            <>
              <CityCountryDropDown action={selectCityorCountry}/>
              {/* if city selected, display tiles with all city data, sorted alphabetically */}
              {cityOrCountry === 'city' &&
                data.cities
                  .sort(function (a, b) {
                    return a.city_name < b.city_name
                      ? -1
                      : a.city_name > b.city_name
                      ? 1
                      : 0;
                  })
                  .map((city) => <CityTile key={city} city={city} />)}
              {/* if country selected, display tiles with all country data, sorted alphabetically */}
              {cityOrCountry === 'country' &&
                data.countries
                  .sort(function (a, b) {
                    return a.country < b.country
                      ? -1
                      : a.country > b.country
                      ? 1
                      : 0;
                  })
                  .map((country) => (
                    <CountryTile key={country} country={country} />
                  ))}
            </>
          )}
          {action === "post" && (<CityCountryDropDown action={selectCityorCountry}/>)}
        </div>
      </Layout>
    </>
  );
}

export default Admin;
