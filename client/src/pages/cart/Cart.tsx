import React, { useState } from "react";
import CartItem from "@/components/common/cart/cartItem";
import CartSummary from "@/components/common/cart/cartSummary";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14",
      price: 79999,
      quantity: 1,
      image: "https://via.placeholder.com/100x100?text=iPhone+14",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      price: 29999,
      quantity: 1,
      image: "https://via.placeholder.com/100x100?text=Headphones",
    },
    {
      id: 3,
      name: "Apple Watch Series 7",
      price: 41999,
      quantity: 1,
      image: "https://via.placeholder.com/100x100?text=Apple+Watch",
    },
    {
      id: 4,
      name: "Apple AirPods Pro",
      price: 24999,
      quantity: 1,
      image: "https://via.placeholder.com/100x100?text=AirPods+Pro",
    },
  ]);
  

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (
    id: number,
    action: "increment" | "decrement"
  ) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onRemove={removeItem}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </ul>
          </div>
          {/* Summary */}
          <CartSummary totalAmount={totalAmount} />
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold text-muted-foreground">
            Your cart is empty.
          </h2>
          <a href="/" className="text-primary mt-4 inline-block hover:underline">
            Shop Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;
