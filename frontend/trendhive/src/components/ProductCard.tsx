import React from "react";
import { Heart } from "lucide-react";
import type { Product } from "../types/types";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  toggleWishlist: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite, toggleWishlist }) => {
  return (
    <div className="relative border rounded-xl p-4 shadow-md flex flex-col items-center">
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2"
      >
        <Heart
          className={`w-5 h-5 ${
            isFavorite ? "text-purple-500 fill-purple-500" : "text-gray-400"
          }`}
        />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain mb-2"
      />

      <h3 className="text-sm font-medium text-center line-clamp-2">{product.title}</h3>
      <p className="text-purple-600 font-semibold mt-1">${product.price}</p>
    </div>
  );
};

export default ProductCard;
