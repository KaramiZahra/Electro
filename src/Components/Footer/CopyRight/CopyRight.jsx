import "./CopyRight.css";
import { FaRegHeart } from "react-icons/fa6";

export default function CopyRight() {
  return (
    <div className="copyright">
      <p>
        &copy; 2024 All rights reserved | made with <FaRegHeart color="gray" />{" "}
        by<span> ZK</span>
      </p>
    </div>
  );
}
