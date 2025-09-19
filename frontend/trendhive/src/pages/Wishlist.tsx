import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import ProductCard from "../components/ProductCard";

const Wishlist: React.FC = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {wishlistItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={true}
              toggleWishlist={() => dispatch(toggleWishlist(product))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
