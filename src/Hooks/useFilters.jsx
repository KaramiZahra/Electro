import { useContext } from "react";
import FilterContext from "../Context/FilterContext";

// Custom hook - Returns the context value from FilterContext
const useFilters = () => useContext(FilterContext);

export default useFilters;
