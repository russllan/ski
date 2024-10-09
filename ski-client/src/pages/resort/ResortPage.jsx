import React, { useState } from "react";
// import { FaStar } from 'react-icons/fa';

const toursData = [
  {
    title: "Karakol",
    rating: 4,
    image:
      "https://images.pexels.com/photos/7363842/pexels-photo-7363842.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Karakol",
  },
  {
    title: "Kapriz skis",
    rating: 5,
    image:
      "https://images.pexels.com/photos/16038051/pexels-photo-16038051.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    location: "Bishkek",
  },
  {
    title: "Kok-Jaiyk",
    rating: 3,
    image:
      "https://images.pexels.com/photos/7611382/pexels-photo-7611382.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    location: "Bishkek",
  },
  {
    title: "Skazka Canyon",
    rating: 5,
    image:
      "https://images.pexels.com/photos/15007485/pexels-photo-15007485.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    location: "Bishkek",
  },
  {
    title: "Karakol",
    image:
      "https://images.pexels.com/photos/7363842/pexels-photo-7363842.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    location: "Karakol",
  },
];

const ResortPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredTours =
    selectedLocation === "All"
      ? toursData
      : toursData.filter((tour) => tour.location === selectedLocation);

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
              className="bg-white shadow-lg overflow-hidden relative w-[350px]" // Задаем фиксированную ширину для карточек
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

export default ResortPage;
