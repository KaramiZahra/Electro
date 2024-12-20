import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid() {
  return (
    <>
      <div className="product-grid-wrapper">
        <div className="grid-boxes">
          <div className="sort">
            <p>SORT BY:</p>
            <select name="sort-box" id="sort-box">
              <option value="All">All</option>
              <option value="Popular">Popular</option>
              <option value="Cheap">Cheap</option>
              <option value="Expensive">Expensive</option>
            </select>
          </div>
          <div className="show">
            <p>SHOW:</p>
            <select name="show-box" id="show-box">
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
            </select>
          </div>
        </div>
        <div className="products-wrapper">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
