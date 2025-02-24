import "./NotFound.css";
import pic from "../../assets/404NotFound.jpg";
export default function NotFound() {
  return (
    <div className="NotFound">
      <img src={pic} alt="404 | Not Found :(" />
    </div>
  );
}
