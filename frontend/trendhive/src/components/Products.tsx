import { ArrowDownUp, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const user = useSelector((state: RootState) => state.auth.user); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleToggleWishlist = (product: Product) => {
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch(toggleWishlist(product));
  };

  return (
    <div className="grid mt-4 p-4 gap-4">
      <span className="text-2xl font-semibold">Shop</span>

      <div className="flex justify-between">
        <a href="#" className="flex flex-1 gap-1 items-center">
          <Menu />
          <span>Show Sidebar</span>
        </a>
        <ArrowDownUp />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={wishlistItems.some((p) => p.id === product.id)}
            toggleWishlist={() => handleToggleWishlist(product)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
