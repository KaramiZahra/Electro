import "./ProductCard.css";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import pic from "../../assets/testImg1.jpg";
/* eslint-disable react/prop-types */

export default function ProductCard({
  _id,
  name,
  price,
  images = [pic],
  category,
}) {
  return (
    <>
      <Link
        to={`/Electro/ProductDetails/${_id}`}
        className="card-wrapper"
        id={_id}
      >
        <img src={images?.[0] || pic} alt={name} />
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
            <button>ADD TO CART</button>
          </div>
        </div>
      </Link>
    </>
  );
}
