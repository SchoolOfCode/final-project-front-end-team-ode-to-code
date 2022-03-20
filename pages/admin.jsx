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
import DropDown from '../components/DropDown';
import CityForm from '../components/CityForm';
import CountryForm from '../components/CountryForm';
import AmendForm from '../components/AmendForm';

function Admin() {
  const { data, isLoading, fetchData } = useContext(AppContext);
  const citiesApi = 'https://four-week-project.herokuapp.com/cities';
  const countriesApi = 'https://four-week-project.herokuapp.com/countries';
  const [action, setAction] = useState('');
  const [cityOrCountry, setCityOrCountry] = useState('');
  const [submitted, setSubmitted] = useState('');
   

  function resetPage() {
    setAction('');
    setCityOrCountry('');
    setSubmitted('');
  }

  function selectedAction(e) {
    const value = e.target.value;
    setAction(value);
    if (value === 'get') {
      fetchData();
    }
    setCityOrCountry('');
    setSubmitted('');
  }

  function selectCityorCountry(value, text) {
    setSubmitted('');
    setCityOrCountry(value);
  }

  async function postData(newData) {
    let url;
    if (cityOrCountry === 'city')  {url = citiesApi}
    else if (cityOrCountry === 'country') {url = countriesApi}
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    };
    const response = await fetch(url, settings);
    const payload = await response.json();
    setSubmitted(payload.payload);
  }

  async function replaceData(newData) {
    let url;
    if (cityOrCountry==='city') {
     url =  `${citiesApi}?name=${newData.city_name}`
    }
    else if (cityOrCountry==='country') {
      url =  `${countriesApi}?name=${newData.country}`
     }
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    };
    const response = await fetch(
      url,
      settings
    );
    const payload = await response.json();
    setSubmitted(payload.payload);
  }

  async function amendData(newData, type) {
    let url;
    console.log(type)
    if (type === 'city') { url = `${citiesApi}?name=${newData.name}`}
    else if (type === 'country') { url = `${countriesApi}?name=${newData.name}` }
    const settings = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({column: newData.column, data: newData.data}),
    };
    const response = await fetch(
      url,
      settings
    );
    const payload = await response.json();
    setSubmitted(payload.payload);
  }

  let pageContent;

  switch (action) {
    case 'get':
      pageContent = (
        <>
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
              .map((city) => <CityTile key={city.city_name} city={city} />)}
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
                <CountryTile key={country.country} country={country} />
              ))}
        </>
      );
      break;
    case 'post':
      pageContent = (
        <>
          {/* if city selected, display form for city submission */}
          {cityOrCountry === 'city' && !submitted.length && (
            <CityForm action={postData} />
          )}
          {cityOrCountry === 'city' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully submitted the below:</p>{' '}
              <CityTile city={submitted[0]} />
            </>
          ) : (<></>) }
          {/* if country selected, display form for country submission */}
          {cityOrCountry === 'country' && !submitted.length && (
            <CountryForm action={postData} />
          )}
          {cityOrCountry === 'country' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully submitted the below:</p>{' '}
              <CountryTile country={submitted[0]} />
            </>) : (<></>) }
        </>
      );
      break;
    case 'put':
      pageContent = (
        <>
          {/* if city selected, display form for city replacement */}
          {cityOrCountry === 'city' && !submitted.length && (
            <CityForm action={replaceData} />
          )}
          {cityOrCountry === 'city' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully submitted the below:</p>{' '}
              <CityTile city={submitted[0]} />
            </>
          ) : (<></>) }

          {/* if country selected, display form for country replacement */}
          {cityOrCountry === 'country' && !submitted.length && (
            <CountryForm action={replaceData} />
          )}
          {cityOrCountry === 'country' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully submitted the below:</p>{' '}
              <CountryTile country={submitted[0]} />
            </>
          ) : (<></>) }
        </>
      );
      break;
    case 'patch':
      pageContent = (
        <>
          {/* display form for patch request, regardless of whether city or country is selected*/}
          {cityOrCountry.length && !submitted.length ? (
              <AmendForm action={amendData} type={cityOrCountry} />
          ) : (<></>)}
          {cityOrCountry === 'city' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully submitted the below:</p>{' '}
              <CityTile country={submitted[0]} />
            </>
          ) : (<></>) }
          {cityOrCountry === 'country' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully submitted the below:</p>{' '}
              <CountryTile country={submitted[0]} />
            </>
          ) : (<></>) }
        </>
      );
      break;
    case 'delete':
      pageContent = (
        <>
          {/* if city selected, display form for city deletion */}
          {cityOrCountry === 'city' && <p>City deletion form</p>}
          {/* if country selected, display form for country deletion */}
          {cityOrCountry === 'country' && <p>Country deletion form</p>}
        </>
      );
      break;
    default:
      pageContent = <></>;
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
            <label htmlFor="actionType">Select action: </label>
            <select onChange={selectedAction} id="actionType" value={action}>
              <option value="">...</option>
              <option value="get">GET all cities/countries</option>
              <option value="post">POST a new city/country</option>
              <option value="put">REPLACE a city/country</option>
              <option value="patch">EDIT a city/country</option>
              <option value="delete">DELETE a city/country</option>
            </select>
          </form>
          {action && (
            <DropDown
              defaultvalue={cityOrCountry}
              values={[
                { value: 'city', option: 'City' },
                { value: 'country', option: 'Country' },
              ]}
              id="selectCityorCountry"
              label="Select City or Country"
              layout="regular"
              action={selectCityorCountry}
            />
          )}
          <Button text="Reset" action={resetPage} />
          {pageContent}
        </div>
      </Layout>
    </>
  );
}

export default Admin;
