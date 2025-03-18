import "./CategorySidebar.css";
import TopSelling from "./TopSelling/TopSelling";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/utils";
import useFilters from "../../Hooks/useFilters";
import useSearch from "../../Hooks/useSearch";

export default function CategorySidebar() {
  const [products, setProducts] = useState([]); // Store all fetched products
  const [selectOptions, setSelectOptions] = useState([]); // Store available categories - for filtering
  // Custom hooks for managing filters and searches
  const { filters, setFilters } = useFilters();
  const { setSearches } = useSearch();

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data.products); // Store all products
        setSelectOptions(data.products); // Store products for category selection
      })
      .catch((err) => console.error(err));
  }, []);

  // Prevent duplicate category checkboxes
  const uniqueCategories = new Set();

  // Handle category selection - single selection only
  const toggleCategory = (categoryName) => {
    const updatedCategories = filters.categories.includes(categoryName)
      ? []
      : [categoryName];

    // Update filters state with the selected category change
    setFilters((prev) => ({
      ...prev,
      categories: updatedCategories,
    }));

    // Fetch products based on the new category filter
    fetchProducts({ categories: updatedCategories })
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  };

  // Handle category change
  const handleCategoryChange = (categoryName) => {
    // If "All" is selected, clear the filters
    if (categoryName === "All") {
      setSearches((prev) => ({ ...prev, categories: [] }));
      setFilters((prev) => ({ ...prev, categories: [] }));
    }
    // Otherwise, apply the selected category
    else {
      setSearches((prev) => ({ ...prev, categories: [categoryName] }));
      setFilters((prev) => ({ ...prev, categories: [categoryName] }));
    }
    // Fetch products based on the selected category
    fetchProducts({ categories: categoryName === "All" ? [] : [categoryName] })
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="category-side-bar">
        {/* Categories section */}
        <section className="categories">
          <h3>CATEGORIES</h3>
          {/* "All" category checkbox */}
          <label htmlFor="All" className="cats">
            <input
              type="checkbox"
              id="All"
              name="All"
              checked={filters.categories.length === 0} // Checked if no filters are applied
              onChange={() => handleCategoryChange("All")}
            />
            All
          </label>
          {/* Dynamically generated category checkboxes */}
          {selectOptions.map((selectOpt) => {
            const categoryName = selectOpt.category.name;

            // Ensure categories are unique - avoid duplication
            if (!uniqueCategories.has(categoryName)) {
              uniqueCategories.add(categoryName);
              return (
                <label
                  key={selectOpt.category._id}
                  htmlFor={categoryName}
                  className="cats"
                >
                  <input
                    type="checkbox"
                    id={categoryName}
                    name={categoryName}
                    checked={filters.categories.includes(categoryName)}
                    onChange={() => toggleCategory(categoryName)}
                  />
                  {categoryName}
                </label>
              );
            }
            return null;
          })}
        </section>
        {/* Prices section */}
        <section className="prices">
          <h3>PRICE</h3>
          {/* Range input for selecting price range */}
          <input type="range" name="price" id="price" min={0} max={1000} />
          <div className="price-wrapper">
            {/* Minimum price display */}
            <div className="min-price">
              <div className="min-price-num">0</div>
              <div className="add-subtract-price">
                <div>+</div>
                <div>-</div>
              </div>
            </div>
            <p>-</p>
            {/* Maximum price display */}
            <div className="max-price">
              <div className="max-price-num">1000</div>
              <div className="add-subtract-price">
                <div>+</div>
                <div>-</div>
              </div>
            </div>
          </div>
        </section>
        {/* Brands section */}
        <section className="brands">
          <h3>BRANDS</h3>
          {/* Static brand checkboxes */}
          <div className="cats">
            <input type="checkbox" id="Samsung" name="Samsung" />
            <label htmlFor="Samsung">Samsung</label>
          </div>
          <div className="cats">
            <input type="checkbox" id="LG" name="LG" />
            <label htmlFor="LG">LG</label>
          </div>
          <div className="cats">
            <input type="checkbox" id="Sony" name="Sony" />
            <label htmlFor="Sony">Sony</label>
          </div>
        </section>

        {/* Top selling products section */}
        {products?.length > 0 && (
          <section className="top-sellings">
            <h3>TOP SELLING</h3>
            {/* Display the first 4 products as top selling */}
            {products.slice(0, 4).map((product) => (
              <TopSelling key={product._id} {...product} />
            ))}
          </section>
        )}
      </div>
    </>
  );
}
