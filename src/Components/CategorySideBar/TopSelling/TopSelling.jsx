import "./TopSelling.css";
// /* eslint-disable react/prop-types */
import pic from "../../../assets/testImg1.jpg"

export default function TopSelling() {
  return (
    <div className="top-selling-wrapper">
      <img src={pic} alt="product name" />
      <div className="sellings-text">
        <p>category</p>
        <h5>product name</h5>
        <p className="price">
          $newPrice <del>$prevPrice</del>
        </p>
      </div>
    </div>
  );
}
// { name, imgSrc, category, prevPrice, newPrice }
