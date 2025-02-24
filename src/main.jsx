import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FilterProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </FilterProvider>
  </BrowserRouter>
);
