import "./CategorySidebar.css";
import TopSelling from "./TopSelling/TopSelling";
import { useState, useEffect } from "react";
import { fetchTopSellings } from "../../Utils/utils";

export default function CategorySidebar() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchTopSellings()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="category-side-bar">
        {/* Categories  */}
        <section className="categories">
          <h3>CATEGORIES</h3>
          <div className="cats">
            <input type="checkbox" id="Laptops" name="Laptops" />
            <label htmlFor="Laptops">Laptops</label>
          </div>
          <div className="cats">
            <input type="checkbox" id="Smartphones" name="Smartphones" />
            <label htmlFor="Smartphones">Smartphones</label>
          </div>
          <div className="cats">
            <input type="checkbox" id="Cameras" name="Cameras" />
            <label htmlFor="Cameras">Cameras</label>
          </div>
          <div className="cats">
            <input type="checkbox" id="Accessories" name="Accessories" />
            <label htmlFor="Accessories">Accessories</label>
          </div>
        </section>
        {/* prices  */}
        <section className="prices">
          <h3>PRICE</h3>
          <input type="range" name="price" id="price" min={0} max={1000} />
          <div className="price-wrapper">
            <div className="min-price">
              <div className="min-price-num">0</div>
              <div className="add-subtract-price">
                <div>+</div>
                <div>-</div>
              </div>
            </div>
            <p>-</p>
            <div className="max-price">
              <div className="max-price-num">1000</div>
              <div className="add-subtract-price">
                <div>+</div>
                <div>-</div>
              </div>
            </div>
          </div>
        </section>
        {/* brands  */}
        <section className="brands">
          <h3>BRANDS</h3>
          <div className="cats">
            <input type="checkbox" id="Samsung" name="Samsung" />
            <label htmlFor="Samsung">Samsung</label>
          </div>
          <div className="cats">
            <input type="checkbox" id="LG" name="LG" />
            <label htmlFor="LG">LG</label>
          </div>
          <div className="cats">
            <input type="checkbox" id="Sony" name="Sony" />
            <label htmlFor="Sony">Sony</label>
          </div>
        </section>

        {products?.length > 0 && (
          <section className="top-sellings">
            <h3>TOP SELLING</h3>
            {products.slice(0, 4).map((product) => (
              <TopSelling key={product._id} {...product} />
            ))}
          </section>
        )}
      </div>
    </>
  );
}
