/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create the SearchContext to manage the search state globally
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  // Hold the current search criteria: categories and search query
  const [searches, setSearches] = useState({ categories: [], query: "" });

  return (
    // Provide the searches state and setSearches function to the entire app via context
    <SearchContext.Provider value={{ searches, setSearches }}>
      {/* Render child components that will have access to the SearchContext */}
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
