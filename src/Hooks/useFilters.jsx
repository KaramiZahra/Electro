import { useContext } from "react";
import FilterContext from "../Context/FilterContext";

const useFilters = () => useContext(FilterContext);

export default useFilters;
