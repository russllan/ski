import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const toursData = [
  {
    title: "Outdoor Getaways",
    image:
      "https://media.istockphoto.com/id/1369519317/photo/owner-of-ski-retail-shop.jpg?s=612x612&w=0&k=20&c=ptsedxX9yFsnvfVBobouQuhHB6fbI0F5HsRWC_QaxvU=",
    stays: "Ахунбаева 170",
  },
  {
    title: "Ski House",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gNnv1LVb1LuwQLw6pbkLZDX-cxTiy2vEdQ&s",
    stays: "162 ул. Шабдан баатыра",
  },
  {
    title: "Ski Park",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Pets Allowed",
    image:
      "https://media.istockphoto.com/id/872621650/photo/female-sales-assistant-tuning-up-skis-for-customer.jpg?s=612x612&w=0&k=20&c=3M9DFRNVtqf2X-d6TP_3638254J7yaAmetr1vhhlSB8=",
    stays: 131,
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
];

const ShopsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredTours =
    selectedLocation === "All"
      ? toursData
      : toursData.filter((tour) => tour.location === selectedLocation);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <hr className="w-full h-6" />
      <div className="flex">
        <div className="bg-stone-100 w-[150px] rounded-sm mr-5">
          <div className="mb-4 pl-4 pt-6">
            <label className="flex items-center">
              <input
                type="radio"
                value="All"
                checked={selectedLocation === "All"}
                onChange={handleLocationChange}
                className="mr-2"
              />
              All
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Jeti-Ogüz"
                checked={selectedLocation === "Jeti-Ogüz"}
                onChange={handleLocationChange}
                className="mr-2"
              />
              Jeti-Ogüz
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Grigorievka Gorge (Chong-Aksuu)"
                checked={selectedLocation === "Grigorievka Gorge (Chong-Aksuu)"}
                onChange={handleLocationChange}
                className="mr-2"
              />
              Grigorievka Gorge (Chong-Aksuu)
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Karakol"
                checked={selectedLocation === "Karakol"}
                onChange={handleLocationChange}
                className="mr-2"
              />
              Karakol
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Barskoon"
                checked={selectedLocation === "Barskoon"}
                onChange={handleLocationChange}
                className="mr-2"
              />
              Barskoon
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Bokonbayevo"
                checked={selectedLocation === "Bokonbayevo"}
                onChange={handleLocationChange}
                className="mr-2"
              />
              Bokonbayevo
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden relative w-[350px] cursor-pointer" // Задаем фиксированную ширину для карточек
              onClick={() => navigate('/branch')}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover" // Изменили высоту для улучшенного соотношения
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{tour.title}</h3>
                <p className="text-gray-600 opacity-50">{tour.location}</p>
                <div className="absolute bottom-0 left-0 right-0 text-white text-center py-2">
                  <span className="flex justify-center">
                    {/* {Array(5).fill(0).map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400" />
                  ))} */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopsPage;
