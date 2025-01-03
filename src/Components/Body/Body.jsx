import "./Body.css";
import CategorySidebar from "../CategorySideBar/CategorySideBar";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Body() {
  return (
    <>
      <div className="content-wrapper">
        <div className="side-bar">
          <CategorySidebar />
        </div>
        <div className="grid-bar">
          <ProductGrid />
        </div>
      </div>
    </>
  );
}
