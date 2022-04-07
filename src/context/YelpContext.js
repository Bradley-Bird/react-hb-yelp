import { createContext, useContext, useState } from 'react';

const YelpContext = createContext();

const YelpProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  const yelpState = {
    businesses,
    setBusinesses,
    loading,
    setLoading,
  };
  return <YelpContext.Provider value={yelpState}>{children}</YelpContext.Provider>;
};
const useYelpContext = () => {
  const context = useContext(YelpContext);

  if (context === undefined) {
    throw new Error('useYelpContext must be used within a YelpProvider');
  }

  return context;
};

export { useYelpContext, YelpProvider };
