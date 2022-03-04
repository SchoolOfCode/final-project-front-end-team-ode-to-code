import { AppContext } from '../context/state';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { images } from '../lib/images';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { useRouter } from 'next/router';

function Result() {
  const { query } = useRouter();
  const { data, isLoading } = useContext(AppContext);

  const [citySearchResults, setCitySearchResults] = useState([]);
  const [countrySearchResults, setCountrySearchResults] = useState([]);

  function filterData(data) {
    let cityList = [];
    let countryList = [];
    let newValue;
    data.cities && data.cities.map((city) => {
      if (
        city.city_name === query.search ||
        city.country === query.search ||
        city.continent === query.search ||
        city.city_attractions.join(',').includes(query.search) ||
        city.great_for.join(',').includes(query.search) ||
        city.tags.join(',').includes(query.search) ||
        city.budget === query.search ||
        city.holiday_type === query.search
      ) {
        newValue = city.city_name;
        cityList = [...cityList, newValue];
      }
      return;
    });
    setCitySearchResults(cityList);

    data.countries && data.countries.map((country) => {
      if (
        country.cities.join(',').includes(query.search) ||
        country.country === query.search ||
        country.continent === query.search
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
      <ul>
        {countrySearchResults.length > 0 &&
          countrySearchResults.map((country) => (
            <li key={country}>
              <Link href={`/countries/${country}`}>{country}</Link>
            </li>
          ))}
        {citySearchResults.length > 0 &&
          citySearchResults.map((city) => (
            <li key={city}>
              <Link href={`/cities/${city}`}>{city}</Link>
            </li>
          ))}
        {countrySearchResults.length === 0 && citySearchResults.length === 0 && (
          <p>
            No Search Results Found! <br />
            Go <Link href="/">back to homepage</Link>.
          </p>
        )}
      </ul>
    </Layout>
  );
}

export default Result;
