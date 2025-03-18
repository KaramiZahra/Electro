/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create the FilterContext to manage the filter state globally
const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // Hold the current filters - initially with an empty categories array
  const [filters, setFilters] = useState({ categories: [] });

  return (
    // Provide the filters state and setFilters function to the entire app via context
    <FilterContext.Provider value={{ filters, setFilters }}>
      {/* Render child components that will have access to the FilterContext */}
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
