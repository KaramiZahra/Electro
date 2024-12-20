import "./InfoLinks.css";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function InfoLinks() {
  return (
    <>
      <div className="info-links-wrapper">
        <div className="info-links">
          <ul>
            <li className="links-title">ABOUT US</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
              alias.
            </li>
            <li>
              <IoLocationSharp color="red" />
              <p>1734 Stonecoal Road</p>
            </li>
            <li>
              <IoIosCall color="red" />
              <p>+021-95-51-84</p>
            </li>
            <li>
              <MdOutlineEmail color="red" />
              <p>email@email.com</p>
            </li>
          </ul>
          <ul>
            <li className="links-title">CATEGORIES</li>
            <li>Hot Deals</li>
            <li>Laptops</li>
            <li>Smartphones</li>
            <li>Cameras</li>
            <li>Accessories</li>
          </ul>
          <ul>
            <li className="links-title">INFORMATION</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Orders & Returns</li>
            <li>Terms & Conditions</li>
          </ul>
          <ul>
            <li className="links-title">SERVICE</li>
            <li>My Account</li>
            <li>View Cart</li>
            <li>Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </>
  );
}
