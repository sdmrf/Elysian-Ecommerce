import React from "react";
import { Link } from "react-router-dom";

interface CartSummaryProps {
  totalAmount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ totalAmount }) => {
  return (
    <div className="w-full lg:w-1/3 bg-card shadow-cartoon border-2 border-foreground rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span className="text-sm">₹{totalAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Shipping</span>
          <span className="text-sm">₹0</span>
        </div>
        <hr className="border-border" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{totalAmount.toLocaleString()}</span>
        </div>
      </div>
      <button className="w-full bg-primary text-primary-foreground py-2 rounded-md mt-6 font-medium hover:bg-primary/90">
        Proceed to Checkout
      </button>
      <Link
        to="/"
        className="block text-center text-sm text-primary mt-4 hover:underline"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
