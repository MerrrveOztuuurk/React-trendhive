import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation, Grid } from "swiper/modules";

import "swiper/css"
import "swiper/css/grid";

const Categories = () => {
  const categories = [
    {
      url: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Computer-Office.jpg.webp",
      title: "Computer & Office",
      subtitle: "96 Products",
    },
    {
      url: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Computer-Office.jpg.webp",
      title: "Computer & Office",
      subtitle: "96 Products",
    },
    {
      url: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Computer-Office.jpg.webp",
      title: "Computer & Office",
      subtitle: "96 Products",
    },
    {
      url: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Computer-Office.jpg.webp",
      title: "Computer & Office",
      subtitle: "96 Products",
    },
  ];

  return (
    <div className="relative mx-4 bg-white rounded-xl shadow-lg shadow-gray-100">
      {/* Custom Prev Button */}
      <button className="prevBtn absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2">
        <ArrowLeft size={20} />
      </button>

      {/* Custom Next Button */}
      <button className="nextBtn absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2">
        <ArrowRight size={20} />
      </button>

      <Swiper
        modules={[Navigation, Grid]}
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        breakpoints={{
          320: { 
            slidesPerView: 1, 
            grid: { rows: 2 }, 
            spaceBetween: 10 
          }, // mobile (1 sütun x 2 satır)
          640: { 
            slidesPerView: 2, 
            grid: { rows: 2 }, 
            spaceBetween: 20 
          }, // tablet (2 sütun x 2 satır)
          1024: { 
            slidesPerView: 3, 
            grid: { rows: 2 }, 
            spaceBetween: 30 
          }, // desktop
        }}
        className="mySwiper"
      >
        {categories.map(({ url, title, subtitle }, index) => (
          <SwiperSlide key={index}>
            <div className="grid place-items-center py-4">
              <img src={url} className="w-40" />
              <span className="font-semibold">{title}</span>
              <span className="text-gray-500">{subtitle}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
