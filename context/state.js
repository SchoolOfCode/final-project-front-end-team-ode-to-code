import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const citiesApi = 'https://four-week-project.herokuapp.com/cities';
  const countriesApi = 'https://four-week-project.herokuapp.com/countries';

  useEffect(async () => {
    const resCities = await fetch(citiesApi);
    const resCountries = await fetch(countriesApi);
    const dataCities = await resCities.json();
    const dataCountries = await resCountries.json();
    setData({ cities: dataCities.payload, countries: dataCountries.payload });
    setIsLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ data, isLoading }}>
      {children}
    </AppContext.Provider>
  );
}
