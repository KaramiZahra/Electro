import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/utils";
import useFilters from "../../Hooks/useFilters";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { filters } = useFilters();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch {
        setError("Failed to load products! Please try again...");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      filters.categories.length === 0
        ? true
        : filters.categories.includes(product.category.name)
    );
    setFilteredProducts(filtered);
  }, [filters, products]);

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

        {isLoading && <div className="loader"></div>}
        {error && <p className="error-msg">{error}</p>}

        <div className="products-wrapper">
          {!isLoading && !error && products.length === 0 && (
            <p>No product is available :(</p>
          )}
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
