import "./TopSelling.css";
/* eslint-disable react/prop-types */

export default function TopSelling({ _id, name, price, images, category }) {
  return (
    <div className="top-selling-wrapper" id={_id}>
      <img src={images?.[0]} alt={name} />
      <div className="sellings-text">
        <p>{category?.name}</p>
        <h5>{name}</h5>
        <p className="price">
          ${(price - price * 0.1).toFixed(2)} <del>${price.toFixed(2)}</del>
        </p>
      </div>
    </div>
  );
}
