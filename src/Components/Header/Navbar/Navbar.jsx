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
  const { searches, setSearches } = useSearch();
  const { setFilters } = useFilters();
  const [categories, setCategories] = useState([]);
  const { cart } = useCart();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchProducts();
        const uniqueCategories = [
          ...new Map(
            data.products.map((product) => [
              product.category._id,
              product.category.name,
            ])
          ).entries(),
        ].map(([id, name]) => ({ id, name }));

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "All") {
      setSearches((prev) => ({ ...prev, categories: [] }));
      setFilters((prev) => ({ ...prev, categories: [] }));
    } else {
      setSearches((prev) => ({ ...prev, categories: [selectedCategory] }));
      setFilters((prev) => ({ ...prev, categories: [selectedCategory] }));
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;

    setSearches((prev) => ({ ...prev, query }));
    setFilters((prev) => ({ ...prev, query }));
  };

  return (
    <>
      {/* top bar */}
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
      {/* nav bar */}
      <div className="nav-bar-container">
        <div className="nav-bar">
          {/* logo */}
          <div className="logo">
            Electro<span></span>
          </div>
          {/* search box */}
          <div className="search-box">
            <div className="select-wrapper">
              <select
                name="category"
                id="category"
                onChange={handleCategoryChange}
                value={searches.categories[0] || "All"}
              >
                <option value="All">All</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="Search here"
              onChange={handleSearchChange}
              value={searches.query}
            />
            <button>Search</button>
          </div>
          {/* wishlist and cart */}
          <div className="wishlist-cart">
            <div className="wishlist">
              <div className="wishlist-count">10</div>
              <IoMdHeartEmpty size={20} />
              <p>Wishlist</p>
            </div>
            <div className="cart">
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
