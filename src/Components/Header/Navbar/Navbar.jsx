import "./Navbar.css";
import { IoIosCall, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import {
  IoLocationSharp,
  IoPersonOutline,
  IoCartOutline,
} from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { fetchProducts } from "../../../Utils/utils";
import { useEffect, useState } from "react";
import useSearch from "../../../Hooks/useSearch";
import useFilters from "../../../Hooks/useFilters";
import useCart from "../../../Hooks/useCart";

export default function Navbar() {
  const { searches, setSearches } = useSearch(); // Handles search query and category selection
  const { setFilters } = useFilters(); // Updates filters based on search input
  const [categories, setCategories] = useState([]); // Stores the list of product categories
  const { cart } = useCart(); // Retrieves cart data

  // Fetch products on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchProducts();
        // Extract unique categories
        const uniqueCategories = [
          ...new Map(
            data.products.map((product) => [
              product.category._id,
              product.category.name,
            ])
          ).entries(),
        ].map(([id, name]) => ({ id, name }));

        // Store categories in state
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    loadCategories();
  }, []);

  // Handles category selection in the dropdown
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    // Reset search and filters if "All" is selected
    if (selectedCategory === "All") {
      setSearches((prev) => ({ ...prev, categories: [] }));
      setFilters((prev) => ({ ...prev, categories: [] }));
    }
    // Otherwise, apply selected category to search and filter states
    else {
      setSearches((prev) => ({ ...prev, categories: [selectedCategory] }));
      setFilters((prev) => ({ ...prev, categories: [selectedCategory] }));
    }
  };

  // Handles changes in the search input field
  const handleSearchChange = (e) => {
    const query = e.target.value;

    // Updates search and filter states with the query
    setSearches((prev) => ({ ...prev, query }));
    setFilters((prev) => ({ ...prev, query }));
  };

  return (
    <>
      {/* Top bar section */}
      <div className="top-bar-container">
        <div className="top-bar">
          <ul>
            <li>
              <IoIosCall color="red" />
              <p>+021-95-51-84</p>
            </li>
            <li>
              <MdOutlineEmail color="red" />
              <p>email@email.com</p>
            </li>
            <li>
              <IoLocationSharp color="red" />
              <p>1734 Stonecoal Road</p>
            </li>
          </ul>
          <ul>
            <li>
              <FaDollarSign color="red" />
              <p>USD</p>
            </li>
            <li>
              <IoPersonOutline color="red" />
              <p>My Account</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Nav bar section */}
      <div className="nav-bar-container">
        <div className="nav-bar">
          {/* Logo */}
          <div className="logo">
            Electro<span></span>
          </div>
          {/* Search box */}
          <div className="search-box">
            {/* Dropdown for selecting product category */}
            <div className="select-wrapper">
              <select
                name="category"
                id="category"
                onChange={handleCategoryChange}
                value={searches.categories[0] || "All"} // Default to "All"
              >
                <option value="All">All</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Search Input Field */}
            <input
              type="text"
              placeholder="Search here"
              onChange={handleSearchChange}
              value={searches.query}
            />
            <button>Search</button>
          </div>
          {/* Wishlist and Cart section */}
          <div className="wishlist-cart">
            {/* Wishlist Section */}
            <div className="wishlist">
              <div className="wishlist-count">10</div> {/* Hardcoded */}
              <IoMdHeartEmpty size={20} />
              <p>Wishlist</p>
            </div>
            {/* Cart Section */}
            <div className="cart">
              {/* Displays cart count dynamically */}
              <div className="cart-count">
                {cart.length > 0 ? cart.length : "0"}
              </div>
              <IoCartOutline size={20} />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
