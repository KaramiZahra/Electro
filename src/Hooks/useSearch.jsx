import { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const useSearch = () => useContext(SearchContext);

export default useSearch;
