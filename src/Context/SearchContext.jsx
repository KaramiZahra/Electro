/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searches, setSearches] = useState({ categories: [], query: "" });

  return (
    <SearchContext.Provider value={{ searches, setSearches }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
