import { useContext } from "react";
import CartContext from "../Context/CartContext";

const useCart = () => useContext(CartContext);

export default useCart;
