import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <div className="flex gap-4">
              <button
                onClick={() => (isInCart(product.id) ? removeFromCart(product.id) : addToCart(product))}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${isInCart(product.id) ? 'bg-red-500' : 'bg-blue-500'}`}
              >
                {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
              </button>
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
