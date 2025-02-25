import "./ProductCard.css";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { IoMdHeartEmpty } from "react-icons/io";
import pic from "../../assets/testImg1.jpg";
import CartContext from "../../Context/CartContext";
/* eslint-disable react/prop-types */

export default function ProductCard({
  _id,
  name,
  price,
  images = [pic],
  category,
}) {
  const { addToCart } = useCart(CartContext);
  return (
    <>
      <div className="card-wrapper" id={_id}>
        <Link
          to={`/Electro/ProductDetails/${_id}`}
          className="card-img-wrapper"
        >
          <img src={images?.[0] || pic} alt={name} />
        </Link>
        <div className="card-desc">
          <p>{category?.name}</p>
          <h4>{name}</h4>
          <p className="price">
            ${(price - price * 0.1).toFixed(2)} <del>${price.toFixed(2)}</del>
          </p>
          <div className="stars">★★★★★</div>
          <div className="wish-cart">
            <div>
              <IoMdHeartEmpty size={20} color="black" />
            </div>
            <button onClick={() => addToCart({ _id, name, price, images })}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
