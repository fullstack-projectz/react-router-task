import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const discountedTotal = calculateTotal() * 0.9;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-b py-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-cover mr-4"
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>Price: ${item.price}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
                      className="bg-gray-300 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <h2 className="mt-4 text-xl font-semibold">Total: ${calculateTotal()}</h2>
          <h2 className="text-xl font-semibold text-red-500">
            Discounted Total: ${discountedTotal.toFixed(2)}
          </h2>
        </div>
      )}
      <Link
        to="/"
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;
