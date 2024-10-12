import React from "react";
import { useNavigate } from "react-router-dom";

const shopsData = [
  {
    title: "Ski Park",
    description: "Магазин аренды снаряжения. Лучшее снаряжение в городе",
    image:
      "https://media.istockphoto.com/id/940902304/photo/quality-service-and-attention-to-detail.jpg?s=612x612&w=0&k=20&c=tba20StrSQ38I9EPkQH484_y5sxGISLfQ6OzS-eCovo=",
    date: "7:00—20:00",
    time: "Мадиева 89",
    comments: "39 отзывов",
  },
  {
    title: "Ski Park",
    description: "Магазин аренды снаряжения. Лучшее снаряжение в городе",
    image:
      "https://media.istockphoto.com/id/1304692479/photo/woman-putting-on-her-ski-boots-in-the-locker-room.jpg?s=612x612&w=0&k=20&c=kjfwCR6St59jA_LTOnUcQ3Ylcq4XBKMPetN2MiCUitM=",
    date: "7:00—20:00",
    time: "Чуй 107",
    comments: "21 отзывов",
  },
  {
    title: "Ski Park",
    description: "Магазин аренды снаряжения. Лучшее снаряжение в городе",
    image:
      "https://media.istockphoto.com/id/538647607/photo/man-working-on-skis.jpg?s=612x612&w=0&k=20&c=ptqqmOqPZSuPdnLJonE7As5vwuQfPu0ucTFfRkhSl8Y=",
    date: "7:00—21:00",
    time: "Масалиева 57",
    comments: "54 отзыва",
  },
];

function BranchPage() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {shopsData.map((shop, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg shadow-lg overflow-hidden mb-4 cursor-pointer"
          onClick={() => navigate('/equipment')}
        >
          <img
            className="w-full h-48 object-cover"
            src={shop.image}
            alt={shop.title}
          />
          <div className="relative p-4">
            <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full text-center p-2 text-sm">
              <span className="block text-xs">{shop.date.split(" ")[0]}</span>
              <span className="block text-xs">{shop.date.split(" ")[1]}</span>
            </div>
            <span className="text-sm text-red-500 font-bold">{shop.time}</span>
            <h2 className="mt-2 text-lg font-semibold">{shop.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{shop.description}</p>
            <div className="flex items-center mt-4 text-gray-400 text-xs">
              <span>{shop.time}</span>
              <span className="mx-2">•</span>
              <span>{shop.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BranchPage;
