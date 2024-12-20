import "./ProductCard.css";
import { IoMdHeartEmpty } from "react-icons/io";
import pic from "../../assets/testImg1.jpg"

export default function ProductCard() {
  return (
    <>
      <div className="card-wrapper">
        <img src={pic} alt="" />
        <div className="card-desc">
          <p>category</p>
          <h4>product name</h4>
          <p className="price">
            $newPrice <del>$prevPrice</del>
          </p>
          <div className="stars">★★★★★</div>
          <div className="wish-cart">
            <IoMdHeartEmpty size={17} />
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}
