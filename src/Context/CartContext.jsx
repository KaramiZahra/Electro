/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

// Create the CartContext to manage the cart state globally
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Hold the current cart items
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart); // Update cart state with the loaded cart
  }, []);

  // Update whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // The effect runs whenever the cart state changes

  // Add a product to the cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item._id === product._id);
      if (!isProductInCart) {
        return [...prevCart, product];
      }
      return prevCart;
    });
  };

  return (
    // Provide the cart state and addToCart function to the entire app via context
    <CartContext.Provider value={{ cart, addToCart }}>
      {/* Render child components that will have access to the CartContext */}
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
