import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={{data, setData}}>
      {children}
    </AppContext.Provider>
  );
}
