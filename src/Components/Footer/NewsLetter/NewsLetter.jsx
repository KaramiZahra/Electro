import "./NewsLetter.css";
import { HiMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <p className="news-letter-text">
        Sign Up for the <span>NEWSLETTER</span>
      </p>
      {/* Subscription section */}
      <div className="subscription">
        <input type="text" placeholder="Enter Your Email" />
        <button>
          <HiMail size={13} />
          <a href="#">Subscribe</a>
        </button>
      </div>
      {/* Social media links section */}
      <div className="social-media">
        <div className="social">
          <FaFacebookF />
        </div>
        <div className="social">
          <FaTwitter />
        </div>
        <div className="social">
          <FaInstagram />
        </div>
        <div className="social">
          <FaPinterest />
        </div>
      </div>
    </div>
  );
}
