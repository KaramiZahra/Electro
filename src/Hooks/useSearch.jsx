import { useContext } from "react";
import SearchContext from "../Context/SearchContext";

// Custom hook - Returns the context value from SearchContext
const useSearch = () => useContext(SearchContext);

export default useSearch;
