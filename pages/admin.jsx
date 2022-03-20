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
import DeleteForm from '../components/DeleteForm';

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

  function selectedAction(value) {
    setAction(value);
    if (value === 'get') {
      fetchData();
    }
    setCityOrCountry('');
    setSubmitted('');
  }

  function selectCityorCountry(value) {
    // setSubmitted('');
    setCityOrCountry(value);
  }

  async function postData(newData) {
    let url;
    if (cityOrCountry === 'city') {
      url = citiesApi;
    } else if (cityOrCountry === 'country') {
      url = countriesApi;
    }
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
    if (cityOrCountry === 'city') {
      url = `${citiesApi}?name=${newData.city_name}`;
    } else if (cityOrCountry === 'country') {
      url = `${countriesApi}?name=${newData.country}`;
    }
    const settings = {
      method: 'PUT',
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

  async function amendData(newData, type) {
    let url;
    const jsonData = { column: newData.column, data: newData.data };
    if (type === 'city') {
      url = `${citiesApi}?name=${newData.name}`;
    } else if (type === 'country') {
      url = `${countriesApi}?name=${newData.name}`;
    }
    const settings = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };
    const response = await fetch(url, settings);
    const payload = await response.json();
    setSubmitted(payload.payload);
  }

  async function deleteData(newData, type) {
    let url;
    if (type === 'city') {
      url = `${citiesApi}?name=${newData.name}`;
    } else if (type === 'country') {
      url = `${countriesApi}?name=${newData.name}`;
    }
    const settings = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, settings);
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
          ) : (
            <></>
          )}
          {/* if country selected, display form for country submission */}
          {cityOrCountry === 'country' && !submitted.length && (
            <CountryForm action={postData} />
          )}
          {cityOrCountry === 'country' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully submitted the below:</p>{' '}
              <CountryTile country={submitted[0]} />
            </>
          ) : (
            <></>
          )}
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
              <p className={styles.alert}>Successfully replaced the below:</p>{' '}
              <CityTile city={submitted[0]} />
            </>
          ) : (
            <></>
          )}

          {/* if country selected, display form for country replacement */}
          {cityOrCountry === 'country' && !submitted.length && (
            <CountryForm action={replaceData} />
          )}
          {cityOrCountry === 'country' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully replaced the below:</p>{' '}
              <CountryTile country={submitted[0]} />
            </>
          ) : (
            <></>
          )}
        </>
      );
      break;
    case 'patch':
      pageContent = (
        <>
          {/* display form for patch request, regardless of whether city or country is selected*/}
          {cityOrCountry.length && !submitted.length ? (
            <AmendForm action={amendData} type={cityOrCountry} />
          ) : (
            <></>
          )}
          {cityOrCountry === 'city' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully updated the below:</p>{' '}
              <CityTile city={submitted[0]} />
            </>
          ) : (
            <></>
          )}
          {cityOrCountry === 'country' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully updated the below:</p>{' '}
              <CountryTile country={submitted[0]} />
            </>
          ) : (
            <></>
          )}
        </>
      );
      break;
    case 'delete':
      pageContent = (
        <>
          {/* display form for deletion request, regardless of whether city or country is selected*/}
          {cityOrCountry.length && !submitted.length ? (
            <DeleteForm action={deleteData} type={cityOrCountry} />
          ) : (
            <></>
          )}
          {cityOrCountry === 'city' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully deleted the below:</p>{' '}
              <CityTile city={submitted[0]} />
            </>
          ) : (
            <></>
          )}
          {cityOrCountry === 'country' && submitted.length ? (
            <>
              <p className={styles.alert}>Successfully deleted the below:</p>{' '}
              <CountryTile country={submitted[0]} />
            </>
          ) : (
            <></>
          )}
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
          <DropDown
            values={[
              { value: 'get', option: 'GET all cities/countries' },
              { value: 'post', option: 'POST a new city/country' },
              { value: 'put', option: 'REPLACE a city/country' },
              { value: 'patch', option: 'EDIT a city/country' },
              { value: 'delete', option: 'DELETE a city/country' },
            ]}
            defaultvalue={action}
            id="actionType"
            label="Select action:"
            layout="regular"
            action={selectedAction}
          />
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
