import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <FilterProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </FilterProvider>
);
