import "./ProductDetails.css";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";
import pic from "../../assets/testImg1.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { fetchProducts } from "../../Utils/utils";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import CartContext from "../../Context/CartContext";

export default function ProductDetails() {
  const { productId } = useParams(); // Extract productId from the URL
  const [product, setProduct] = useState(null); // Store all the products
  const [isLoading, setIsLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  // Fetch products on component mount
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await fetchProducts();
        // Find the specific product by its ID
        const selectedProduct = data.products.find(
          (item) => item._id === productId
        );

        if (selectedProduct) {
          setProduct(selectedProduct); // If product is found, update the state
        } else {
          setError("Product not found"); // Otherwise, set error message
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false); // Set loading state to false after the API call is done
      }
    };

    fetchDetail();
  }, [productId]); // The effect runs whenever productId changes

  // Extract addToCart function from useCart hook with CartContext
  const { addToCart } = useCart(CartContext);

  return (
    <>
      <Header /> {/* Render the Header component */}
      {isLoading && <div className="loader"></div>}
      {error && <p className="error-msg">{error}</p>}
      {/* Render the product details when data is fully loaded */}
      {!isLoading && !error && product && (
        <>
          <div className="product-details-wrapper">
            {/* Display additional product images */}
            <div className="further-imgs">
              {product.images.slice(0, 3).map((image, _id) => (
                <img
                  key={_id}
                  src={image || pic}
                  alt={`Product image ${_id + 1}`}
                />
              ))}
            </div>
            {/* Display the main product image */}
            <div className="main-img">
              <img
                src={product.images?.[0] || pic}
                alt={`Product image ${product._id + 1}`}
              />
            </div>
            {/* Product description and details */}
            <div className="detail-desc">
              <h3>{product.name}</h3>
              <div className="stars">★★★★★</div>
              <p className="price">
                ${(product.price - product.price * 0.1).toFixed(2)}{" "}
                <del>${product.price.toFixed(2)}</del>
              </p>
              <p className="desc-text">{product.description}</p>
              <div className="size-color">
                <div className="size">
                  <p>SIZE:</p>
                  <select name="size-box" id="size-box">
                    <option value="S">S</option>
                    <option value="MD">MD</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div className="color">
                  <p>COLOR:</p>
                  <select name="color-box" id="color-box">
                    <option value="Red">Red</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Gray">Gray</option>
                  </select>
                </div>
              </div>
              {/* Wishlist and Add to Cart section */}
              <div className="wish-cart">
                <button
                  onClick={() =>
                    addToCart({
                      _id: product._id,
                      name: product.name,
                      price: product.price,
                      images: product.images,
                    })
                  }
                >
                  ADD TO CART
                </button>
                <IoMdHeartEmpty size={20} />
              </div>
              <p>Category</p>
              {/* Share options */}
              <div className="share">
                <p>SHARE: </p>
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <FaInstagram />
                </p>
                <p>
                  <FaPinterest />
                </p>
              </div>
            </div>
          </div>
          {/* Review section - Static */}
          <div className="review-wrapper">
            <h4>Reviews</h4>
            <div className="review-box">
              <div className="review-stars">
                <p className="star-rate">
                  <p>4.5</p>
                  <p>★★★★★</p>
                </p>
                {/* Repeat range inputs for different reviews */}
                {[...Array(5)].map((_, index) => (
                  <div className="star-range" key={index}>
                    <p>★★★★★</p>
                    <input type="range" min={0} max={5} />
                  </div>
                ))}
              </div>
              <div className="review-desc-wrapper">
                {/* Display individual reviews */}
                <div className="review-desc">
                  <div className="name-date">
                    <p className="name">John</p>
                    <p>10 Dec 2024</p>
                    <div className="stars">★★★★★</div>
                  </div>
                  <div className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima quia atque voluptate ad magnam sunt quidem ipsam
                    facere incidunt
                  </div>
                </div>
              </div>
              {/* Add a new review */}
              <div className="new-review">
                <input
                  className="name-email"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="name-email"
                  type="email"
                  placeholder="Your Email"
                />
                <textarea
                  className="text-area"
                  placeholder="Your Review"
                ></textarea>
                <p>Your Rating: ★★★★★</p>
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer /> {/* Render the Footer component */}
    </>
  );
}
