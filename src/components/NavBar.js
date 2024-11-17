import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { getCartItemCount } = useContext(CartContext);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Shop</h1>
      <div className="flex items-center gap-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/cart" className="relative text-white hover:text-gray-300">
          <i className="fas fa-shopping-cart text-xl"></i>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-l px-2">
            {"Cart " + getCartItemCount()}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
