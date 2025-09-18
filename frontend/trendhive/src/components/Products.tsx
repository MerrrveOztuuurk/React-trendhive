import { ArrowDownUp, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

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

      <div className="grid grid-cols-2 gap-4">
       {products.length > 0 &&
    products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
      </div>
    </div>
  );
};

export default Products;
