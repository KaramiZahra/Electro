import "./Body.css";
import CategorySidebar from "../CategorySideBar/CategorySideBar";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Body() {
  return (
    <div className="content-wrapper">
      {/* Sidebar section */}
      <div className="side-bar">
        <CategorySidebar />
      </div>
      {/* Main section for displaying products */}
      <div className="grid-bar">
        <ProductGrid />
      </div>
    </div>
  );
}
