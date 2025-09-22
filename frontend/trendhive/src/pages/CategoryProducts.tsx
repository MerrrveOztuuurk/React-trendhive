import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/types";
import { useSelector, useDispatch } from "react-redux";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const CategoryProducts: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleToggleWishlist = (product: Product) => {
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch(toggleWishlist(product));
  };

    const handleToggleCart = (product: Product) => {
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch(toggleWishlist(product));
  };

  const filteredProducts = products.filter((p) => {
    if (!category) return false;

    switch (category) {
      case "clothes":
        return p.category === "men's clothing" || p.category === "women's clothing";
      case "jewelry":
        return p.category === "jewelery";
      case "technology":
        return p.category === "electronics";
      default:
        return false;
    }
  });

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <h2 className="text-2xl font-semibold col-span-2 mb-4">{category?.toUpperCase()}</h2>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={wishlistItems.some((p) => p.id === product.id)}
          toggleWishlist={() => handleToggleWishlist(product)}
          toggleCart={() => handleToggleCart(product)}
          hideCartButton={false}
        />
      ))}
    </div>
  );
};

export default CategoryProducts;
