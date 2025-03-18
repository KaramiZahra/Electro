import "./TopSelling.css";
/* eslint-disable react/prop-types */

export default function TopSelling({ _id, name, price, images, category }) {
  return (
    // Wrapper div for each top-selling product
    <div className="top-selling-wrapper" id={_id}>
      {/* Product image */}
      <img src={images?.[0]} alt={name} />
      {/* Container for product details */}
      <div className="sellings-text">
        {/* Product category name  */}
        <p>{category?.name}</p>
        {/* Product name */}
        <h5>{name}</h5>
        {/* Display the price */}
        <p className="price">
          ${(price - price * 0.1).toFixed(2)} <del>${price.toFixed(2)}</del>
        </p>
      </div>
    </div>
  );
}
