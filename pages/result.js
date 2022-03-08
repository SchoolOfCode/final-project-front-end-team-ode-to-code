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

  useEffect(() => {
    data && (query.continent || query.rating || query.budget || query.holiday_type) &&
    advancedSearch(data); 
    data && query.search && basicSearch(data); 
  }, [data]);


  function basicSearch(data) {
    console.log("running basic search")
    let cityList = [];
    let countryList = [];
    let newValue;
    let searchCriteria;
    data.cities.map((city) => {
      searchCriteria = query.search.toLowerCase();
      if (
        city.city_name.toLowerCase() === searchCriteria ||
        city.country.toLowerCase() === searchCriteria ||
        city.continent.toLowerCase() === searchCriteria ||
        city.city_attractions
          .join(',')
          .toLowerCase()
          .includes(searchCriteria) ||
        city.great_for.join(',').toLowerCase().includes(searchCriteria) ||
        city.tags.join(',').toLowerCase().includes(searchCriteria) ||
        city.budget.toLowerCase() === searchCriteria ||
        city.holiday_type.toLowerCase() === searchCriteria
      ) {
        newValue = city.city_name;
        cityList = [...cityList, newValue];
      }
      return;
    });
    setCitySearchResults(cityList);

    data.countries.map((country) => {
      if (
        country.cities.join(',').toLowerCase().includes(searchCriteria) ||
        country.country.toLowerCase() === searchCriteria ||
        country.continent.toLowerCase() === searchCriteria
      ) {
        newValue = country.country;
        countryList = [...countryList, newValue];
      }
      return;
    });
    setCountrySearchResults(countryList);
  }

  function advancedSearch(data) {
    console.log('running advanced search');
    let cityList = [];
    let searchCriteria = {
      holiday_type: '',
      rating: '',
      budget: '',
      continent: '',
    };

    if (query.holiday_type) {
      searchCriteria.holiday_type = query.holiday_type;
    }

    if (query.rating) {
      searchCriteria.rating = query.rating;
    }

    if (query.budget) {
      searchCriteria.budget = query.budget;
    }

    if (query.continent) {
      searchCriteria.continent = query.continent;
    }
    console.log(searchCriteria);

    function filterData(data, searchCriteria) {
      const filterKeys = Object.keys(searchCriteria);
      return data.cities.filter((city) => {
        return filterKeys.every((key) => {
          if (!searchCriteria[key].length) {console.log(searchCriteria[key] + " has no length"); return true;}
          if (typeof city[key] === 'number') {
            console.log(city[key] + " is a number")
            if (Number(searchCriteria[key]) === city[key]) return true;
            }
          else {
            console.log(city[key] + " is not a number")
            if (searchCriteria[key] === city[key].toLowerCase()) return true;
          }
        });
      });
    }

    console.log(filterData(data, searchCriteria));

    // searchData = () => {
    //   const filteredData = filterData(data, searchCriteria)
    //   cityList = filteredData.filter(city => { return city.city_name})
    // }
    // setCitySearchResults(cityList);
  }

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
          {countrySearchResults.length === 0 &&
            citySearchResults.length === 0 &&
            !isLoading && (
              <p className={styles.error}>
                No Search Results Found! <br />
                Go <Link href="/">back to homepage</Link>.
              </p>
            )}
          {isLoading && (
            <p className={styles.error}>Search results loading...</p>
          )}
        </ul>
      </div>
    </Layout>
  );
}

export default Result;
