import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchCriteria, setSearchCriteria] = useState(['initial', 'data']);

  return (
    <AppContext.Provider
      value={{
        data: searchCriteria,
        updateSearchCriteria: setSearchCriteria,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
