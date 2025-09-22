import React from "react";
import { Heart } from "lucide-react";
import type { Product } from "../types/types";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  toggleWishlist: () => void;
  toggleCart: () => void;
  hideCartButton?: boolean; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  toggleWishlist,
  toggleCart,
  hideCartButton = false,
}) => {
  return (
    <div className="relative border rounded-xl p-4 shadow-md flex flex-col items-center">
      {/* Favorite Button */}
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

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain mb-2"
      />

      {/* Title & Price */}
      <h3 className="text-sm font-medium text-center line-clamp-2">{product.title}</h3>
      <p className="text-purple-600 font-semibold mt-1">${product.price}</p>
      <p className="text-purple-600 font-semibold mt-1">{product.category}</p>

      {/* Add to Cart Button */}
      {!hideCartButton && (
        <button
          onClick={toggleCart}
          className="absolute bottom-2 right-2 bg-purple-500 text-white px-2 py-1 rounded"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
