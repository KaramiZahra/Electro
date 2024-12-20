import "./Navbar.css";
import { IoIosCall, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp, IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";

export default function Navbar() {
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
              <select name="category" id="category">
                <option value="All">All</option>
                <option value="Laptop">Laptops</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Cameras">Cameras</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <input type="text" placeholder="Search here" />
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
              <div className="cart-count">7</div>
              <IoCartOutline size={20} />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
