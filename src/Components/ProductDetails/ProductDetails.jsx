import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../Utils/utils";
import CartContext from "../../Context/CartContext";
import useCart from "../../Hooks/useCart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";
import pic from "../../assets/testImg1.jpg";
/* eslint-disable react/prop-types */

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await fetchProducts();
        const selectedProduct = data.products.find(
          (item) => item._id === productId
        );

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetail();
  }, [productId]);

  const { addToCart } = useCart(CartContext);

  return (
    <>
      <Header />
      {isLoading && <div className="loader"></div>}
      {error && <p className="error-msg">{error}</p>}
      {!isLoading && !error && product && (
        <>
          <div className="product-details-wrapper">
            <div className="further-imgs">
              {product.images.slice(0, 3).map((image, _id) => (
                <img
                  key={_id}
                  src={image || pic}
                  alt={`Product image ${_id + 1}`}
                />
              ))}
            </div>
            <div className="main-img">
              <img
                src={product.images?.[0] || pic}
                alt={`Product image ${product._id + 1}`}
              />
            </div>
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
          <div className="review-wrapper">
            <h4>Reviews</h4>
            <div className="review-box">
              <div className="review-stars">
                <p className="star-rate">
                  <p>4.5</p>
                  <p>★★★★★</p>
                </p>
                <div className="star-range">
                  <p>★★★★★</p>
                  <input type="range" min={0} max={5} />
                </div>
                <div className="star-range">
                  <p>★★★★★</p>
                  <input type="range" min={0} max={5} />
                </div>
                <div className="star-range">
                  <p>★★★★★</p>
                  <input type="range" min={0} max={5} />
                </div>
                <div className="star-range">
                  <p>★★★★★</p>
                  <input type="range" min={0} max={5} />
                </div>
                <div className="star-range">
                  <p>★★★★★</p>
                  <input type="range" min={0} max={5} />
                </div>
                <div className="star-range">
                  <p>★★★★★</p>
                  <input type="range" min={0} max={5} />
                </div>
              </div>
              <div className="review-desc-wrapper">
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
      <Footer />
    </>
  );
}
