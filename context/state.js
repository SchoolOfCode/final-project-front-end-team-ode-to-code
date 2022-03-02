import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchCriteria, setSearchCriteria] = useState(['initial', 'data']);

  return (
    <AppContext.Provider
      value={{
        searchCriteria,
        setSearchCriteria,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
