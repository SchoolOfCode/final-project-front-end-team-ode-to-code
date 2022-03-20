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
import AmendForm from '../components/AmendForm';
import DeleteForm from '../components/DeleteForm';
import Form from '../components/Form';
import Tile from '../components/Tile';

function Admin() {
  const { data, fetchData } = useContext(AppContext);
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
    setSubmitted('');
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
          {/* If "post" is selected, and city or country is selected, but no form is submitted yet, display form */}
          {!submitted.length && cityOrCountry.length ? (
            <Form cityOrCountry={cityOrCountry} action={postData} />
          ) : (
            <></>
          )}
          {/* If data has been submitted, display the results */}
          {submitted.length && cityOrCountry.length ? (
            <Tile
              cityOrCountry={cityOrCountry}
              data={submitted[0]}
              actionType={'submitted'}
            />
          ) : (
            <></>
          )}
        </>
      );
      break;
    case 'put':
      pageContent = (
        <>
          {/* If "put" is selected, and city or country is selected, but no form is submitted yet, display form */}
          {!submitted.length && cityOrCountry.length ? (
            <Form cityOrCountry={cityOrCountry} action={replaceData} />
          ) : (
            <></>
          )}
          {/* If data has been submitted, display the results */}
          {submitted.length && cityOrCountry.length ? (
            <Tile
              cityOrCountry={cityOrCountry}
              data={submitted[0]}
              actionType={'replaced'}
            />
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
        {/* If data has been submitted, display the results */}
          {submitted.length && cityOrCountry.length ? (
            <Tile
              cityOrCountry={cityOrCountry}
              data={submitted[0]}
              actionType={'edited'}
            />
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
         {/* If data has been submitted, display the results */}
         {submitted.length && cityOrCountry.length ? (
            <Tile
              cityOrCountry={cityOrCountry}
              data={submitted[0]}
              actionType={'deleted'}
            />
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
            label="Select action"
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
