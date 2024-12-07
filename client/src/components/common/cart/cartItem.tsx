import React from "react";
import { X } from "lucide-react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, action: "increment" | "decrement") => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <li className="flex items-center gap-4 p-4 bg-card border-2 border-foreground shadow-cartoon rounded-md">
      {/* Item Image */}
      <div className="relative rounded-md w-24 h-24 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      {/* Item Details */}
      <div className="flex-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">₹{price.toLocaleString()}</p>
        {/* Quantity Controls */}
        <div className="flex items-center mt-2 space-x-2">
          <button
            onClick={() => onQuantityChange(id, "decrement")}
            className="px-2 py-1 bg-muted text-muted-foreground rounded hover:bg-muted/90"
          >
            -
          </button>
          <span className="px-4 py-1 border border-border rounded">{quantity}</span>
          <button
            onClick={() => onQuantityChange(id, "increment")}
            className="px-2 py-1 bg-muted text-muted-foreground rounded hover:bg-muted/90"
          >
            +
          </button>
        </div>
      </div>
      {/* Remove Button */}
      <button
        onClick={() => onRemove(id)}
        className="text-destructive hover:text-destructive-foreground"
      >
        <X size={20} />
      </button>
    </li>
  );
};

export default CartItem;
