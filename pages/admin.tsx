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
import { City, Country, Changes} from '../interfaces';


function Admin() {
  const { data, isLoading, fetchData } = useContext(AppContext);
  const citiesApi: string = 'https://four-week-project.herokuapp.com/cities';
  const countriesApi: string =
    'https://four-week-project.herokuapp.com/countries';
  const [action, setAction] = useState<string>('');
  const [cityOrCountry, setCityOrCountry] = useState<string>('');
  const [submitted, setSubmitted] = useState('');

  let pageContent: JSX.Element;
  let actionType: string = '';

  
  //functionality for reset page button: resets the chosen action, resets city/country choice and resets any stored data
  function resetPage() {
    setAction('');
    setCityOrCountry('');
    setSubmitted('');
  }

  //functionality for drop down menu to select CRUD action. Also does a fresh fetch of data if GET is selected, and makes sure city/country choice and stored data is reset
  function selectedAction(value: string) {
    setAction(value);
    if (value === 'GET') {
      fetchData();
    }
    setCityOrCountry('');
    setSubmitted('');
  }

  // functionality for drop down menu to select city or country. Also resets any stored data
  function selectCityorCountry(value: string) {
    setSubmitted('');
    setCityOrCountry(value);
  }

  // functionality for CRUD
  async function handleData(newData: City | Country | Changes): Promise<void> {
    let url: string = '';
    let settings: RequestInit = {
      method: '',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (action === 'POST' || action === 'PUT') {
      settings = {
        method: action,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      };
    }

    if (action === 'PATCH') {
      settings = {
        method: action,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          column: newData.column,
          data: newData.data,
        }),
      };
    }

    if (action === 'DELETE') {
      settings = {
        method: action,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
    }

    if (cityOrCountry === 'city') {
      switch (action) {
        case 'POST':
          url = citiesApi;
          break;
        case 'PATCH':
        case 'DELETE':
          url = `${citiesApi}?name=${newData.name}`;
          break;
        case 'PUT':
          url = `${citiesApi}?name=${newData.city_name}`;
          break;
      }
    }

    if (cityOrCountry === 'country') {
      switch (action) {
        case 'POST':
          url = countriesApi;
          break;
        case 'PATCH':
        case 'DELETE':
          url = `${countriesApi}?name=${newData.name}`;
          break;
        case 'PUT':
          url = `${countriesApi}?name=${newData.country}`;
          break;
      }
    }

    const response = await fetch(url, settings);
    const payload = await response.json();
    setSubmitted(payload.payload);
  }

  // conditional rendering for each CRUD action
  switch (action) {
    case 'GET':
      pageContent = (
        <>
          {/* if GET & city selected, display tiles with all city data, sorted alphabetically */}
          {cityOrCountry === 'city' &&
            !isLoading &&
            data.cities
              .sort(function (a: City, b: City) {
                return a.city_name < b.city_name
                  ? -1
                  : a.city_name > b.city_name
                  ? 1
                  : 0;
              })
              .map((city: City) => (
                <CityTile key={city.city_name} city={city} />
              ))}
          {/* if GET & country selected, display tiles with all country data, sorted alphabetically */}
          {cityOrCountry === 'country' &&
            !isLoading &&
            data.countries
              .sort(function (a: Country, b: Country) {
                return a.country < b.country
                  ? -1
                  : a.country > b.country
                  ? 1
                  : 0;
              })
              .map((country: Country) => (
                <CountryTile key={country.country} country={country} />
              ))}
          {/* If data is still loading, display notification */}
          {isLoading && <p className={styles.alert}>Data loading...</p>}
        </>
      );
      break;
    case 'POST':
      actionType = 'submitted';
      pageContent = (
        <>
          {/* if POST selected and no data is stored from a form yet, display the form */}
          {!submitted.length && cityOrCountry.length ? (
            <Form cityOrCountry={cityOrCountry} action={handleData} />
          ) : (
            <></>
          )}
        </>
      );
      break;
    case 'PUT':
      actionType = 'replaced';
      pageContent = (
        <>
          {/* if PUT selected and no data is stored from a form yet, display the form */}
          {!submitted.length && cityOrCountry.length ? (
            <Form cityOrCountry={cityOrCountry} action={handleData} />
          ) : (
            <></>
          )}
        </>
      );
      break;
    case 'PATCH':
      actionType = 'edited';
      pageContent = (
        <>
          {/* if PATCH selected and no data is stored from a form yet, display the form */}
          {cityOrCountry.length && !submitted.length ? (
            <AmendForm action={handleData} />
          ) : (
            <></>
          )}
        </>
      );
      break;
    case 'DELETE':
      actionType = 'deleted';
      pageContent = (
        <>
          {/* if DELETE selected and no data is stored from a form yet, display the form */}
          {cityOrCountry.length && !submitted.length ? (
            <DeleteForm action={handleData} />
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
              { value: 'GET', option: 'GET all cities/countries' },
              { value: 'POST', option: 'POST a new city/country' },
              { value: 'PUT', option: 'REPLACE a city/country' },
              { value: 'PATCH', option: 'EDIT a city/country' },
              { value: 'DELETE', option: 'DELETE a city/country' },
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
          {/* if a form has been submitted, display the results */}
          {action !== 'GET' && submitted.length && cityOrCountry.length ? (
            <Tile
              cityOrCountry={cityOrCountry}
              data={submitted[0]}
              actionType={actionType}
            />
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Admin;
