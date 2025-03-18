import { useContext } from "react";
import CartContext from "../Context/CartContext";

// Custom hook - Returns the context value from CartContext
const useCart = () => useContext(CartContext);

export default useCart;
