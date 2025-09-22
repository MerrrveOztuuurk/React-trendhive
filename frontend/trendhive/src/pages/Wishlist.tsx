import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import { toggleCart } from "../redux/slices/cartSlice";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/types";

const Wishlist: React.FC = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleWishlist = (product: Product) => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(toggleWishlist(product));
    }
  };

  const handleToggleCart = (product: Product) => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(toggleCart(product));
      navigate("/cart"); 
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {wishlistItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={true}
              toggleWishlist={() => handleToggleWishlist(product)}
              toggleCart={() => handleToggleCart(product)}
              hideCartButton={false} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
