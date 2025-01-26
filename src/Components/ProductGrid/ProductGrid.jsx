import "./ProductGrid.css";
import { TbArrowBigLeftLine } from "react-icons/tb";
import { TbArrowBigRightLine } from "react-icons/tb";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/utils";
import useFilters from "../../Hooks/useFilters";
import useSearch from "../../Hooks/useSearch";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { filters } = useFilters();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { searches } = useSearch();

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(currentPage, {
          categories: filters.categories,
        });
        setProducts(data.products);
        setFilteredProducts(data.products);
        setTotalPages(data.pagination.totalPages);
      } catch {
        setError("Failed to load products! Please try again...");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [currentPage, filters.categories]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        (filters.categories.length === 0 ||
          filters.categories.includes(product.category.name)) &&
        (searches.categories.length === 0 ||
          searches.categories.includes(product.category.name));
      const matchesQuery =
        searches.query === "" ||
        product.name.toLowerCase().includes(searches.query.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    setFilteredProducts(filtered);
  }, [searches, products, filters.categories]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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

      {!isLoading && !error && filteredProducts.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <TbArrowBigLeftLine />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <TbArrowBigRightLine />
          </button>
        </div>
      )}
    </>
  );
}
