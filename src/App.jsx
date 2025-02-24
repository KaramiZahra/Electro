import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/Electro" element={<Home />} />
      <Route
        path="/Electro/ProductDetails/:productId"
        element={<ProductDetails />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
