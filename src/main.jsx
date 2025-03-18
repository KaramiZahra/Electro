import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

// ReactDOM - to render the app into the root element of the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Context providers - to make global state available */}
    <FilterProvider>
      <SearchProvider>
        <CartProvider>
          <App /> {/* The main App component */}
        </CartProvider>
      </SearchProvider>
    </FilterProvider>
  </BrowserRouter>
);
