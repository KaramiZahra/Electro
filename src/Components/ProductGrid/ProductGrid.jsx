import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/utils";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(undefined);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="product-grid-wrapper">
        <div className="grid-boxes">
          <div className="sort">
            <p>SORT BY:</p>
            <select name="sort-box" id="sort-box">
              <option value="All">All</option>
              <option value="Popular">Popular</option>
              <option value="Cheap">Cheap</option>
              <option value="Expensive">Expensive</option>
            </select>
          </div>
          <div className="show">
            <p>SHOW:</p>
            <select name="show-box" id="show-box">
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
            </select>
          </div>
        </div>
        <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
        </div>
      </div>
    </>
  );
}
