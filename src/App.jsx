import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    // Define routes
    <Routes>
      {/* Home route */}
      <Route path="/Electro" element={<Home />} />
      {/* Product details route with dynamic productId */}
      <Route
        path="/Electro/ProductDetails/:productId"
        element={<ProductDetails />}
      />
      {/* Fallback route for undefined paths - 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
