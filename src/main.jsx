import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FilterProvider>
      <SearchProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SearchProvider>
    </FilterProvider>
  </BrowserRouter>
);
