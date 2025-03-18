import "./ProductGrid.css";
import { TbArrowBigLeftLine } from "react-icons/tb";
import { TbArrowBigRightLine } from "react-icons/tb";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/utils";
import useFilters from "../../Hooks/useFilters";
import useSearch from "../../Hooks/useSearch";

export default function ProductGrid() {
  // Store all fetched products
  const [products, setProducts] = useState([]);
  // Manage loading state
  const [isLoading, setIsLoading] = useState(false);
  // Manage error state
  const [error, setError] = useState(undefined);
  // Get filters from useFilters hook
  const { filters } = useFilters();
  // Store filtered products based on user input
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Manage the current page of products
  const [currentPage, setCurrentPage] = useState(1);
  // Store the total number of pages for pagination
  const [totalPages, setTotalPages] = useState(1);
  // Manage the number of items to display per page
  const [itemsPerPage, setItemsPerPage] = useState(6);
  // Get search queries from useSearch hook
  const { searches } = useSearch();

  // Load products based on the current page and selected filters
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null); // Reset any previous error state
      try {
        // Fetch products from API with pagination parameters
        const data = await fetchProducts(currentPage, itemsPerPage);
        setProducts(data.products);
        // Initially set filtered products as all fetched products
        setFilteredProducts(data.products);
        // Store total number of pages for pagination
        setTotalPages(data.pagination.totalPages);
      } catch {
        setError("Failed to load products! Please try again...");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [currentPage, filters.categories, itemsPerPage]); // The effect runs when currentPage, filters, or itemsPerPage change

  // Filter products based on search and filter criteria
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
      // Return products that match both category and search query
      return matchesCategory && matchesQuery;
    });

    // Update the filteredProducts state with the matching products
    setFilteredProducts(filtered);
  }, [searches, products, filters.categories]); // The effect runs when searches or filters change

  // Handle page changes for pagination
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      // Update the current page when page is changed
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="product-grid-wrapper">
        <div className="grid-boxes">
          {/* Sort options */}
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
            <select
              name="show-box"
              id="show-box"
              value={itemsPerPage}
              onChange={(e) => {
                // Update items per page when user selects a new value
                setItemsPerPage(Number(e.target.value));
                // Reset to the first page when items per page changes
                setCurrentPage(1);
              }}
            >
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
          {/* Display message if no products are available */}
          {!isLoading && !error && products.length === 0 && (
            <p>No product is available :(</p>
          )}
          {/* Display filtered products */}
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>

      {/* Display pagination controls */}
      {!isLoading && !error && filteredProducts.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1} // If already on the first page
          >
            <TbArrowBigLeftLine />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages} // If already on the last page
          >
            <TbArrowBigRightLine />
          </button>
        </div>
      )}
    </>
  );
}
