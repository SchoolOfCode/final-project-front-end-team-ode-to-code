import { createContext, useContext, useState, useEffect } from 'react';

// const citiesApi = 'https://four-week-project.herokuapp.com/cities';
// const countriesApi = 'https://four-week-project.herokuapp.com/countries';


export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={{data, setData}}>
      {children}
    </AppContext.Provider>
  );
}
