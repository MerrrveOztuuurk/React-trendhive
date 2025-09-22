import React from "react";
import {useNavigate } from "react-router-dom";
import clothes from '../assets/img/clothes.jpg';
import jewelry from "../assets/img/jewelry.jpg";
import computer from "../assets/img/computer.jpg";

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const categories = [
    { title: "Clothes", image: clothes },
    { title: "Jewelry", image: jewelry },
    { title: "Technology", image: computer },
  ];

  return (
    <div className="mx-4 bg-white rounded-xl shadow-lg shadow-gray-100 p-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {categories.map((cat, id) => (
          <div
            key={id}
            className="flex flex-col items-center p-2 border rounded-xl hover:shadow-lg shadow-purple-300/50 transition cursor-pointer"
            onClick={() => navigate(`/category/${cat.title.toLowerCase()}`)}
          >
            <img src={cat.image} className="w-48 h-48 object-contain mb-3" />
            <span className="font-semibold text-lg text-purple-500">{cat.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
