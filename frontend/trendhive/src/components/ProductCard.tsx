import { Heart } from "lucide-react";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) return null; // koruma amaçlı

  return (
    <div className="relative border p-3 rounded-xl shadow">
      {/* Kalp ikonu sağ üstte */}
      <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
        <Heart size={20} />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-2"
      />

      <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-2">${product.price}</p>

      {/* Add to cart sağa yaslı */}
      <div className="flex justify-end">
        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
