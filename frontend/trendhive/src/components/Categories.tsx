const Categories = () => {
  const categories = [
    {
      url: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg", // ayakkabı
      title: "Ayakkabı",
      subtitle: "120 Ürün",
    },
    {
      url: "https://img.freepik.com/free-photo/blue-tshirt_125540-727.jpg", // giyim
      title: "Giyim",
      subtitle: "85 Ürün",
    },
    {
      url: "https://img.freepik.com/free-photo/fashionable-leather-handbag_144627-3688.jpg", // çanta
      title: "Çanta",
      subtitle: "60 Ürün",
    },
    {
      url: "https://img.freepik.com/free-photo/close-up-elegant-jewelry_23-2148513648.jpg", // takı
      title: "Takı",
      subtitle: "45 Ürün",
    },
  ];

  return (
    <div className="mx-4 bg-white rounded-xl shadow-lg shadow-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(({ url, title, subtitle }, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-xl hover:shadow-lg transition"
          >
            <img src={url} className="w-32 h-32 object-contain mb-3" />
            <span className="font-semibold text-lg">{title}</span>
            <span className="text-gray-500 text-sm">{subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
