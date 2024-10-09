import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const ResortsSlider = () => {
  const sights = [
    {
      name: "Karakol",
      rating: 4,
      image:
        "https://images.pexels.com/photos/7363842/pexels-photo-7363842.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Kapriz skis",
      rating: 5,
      image:
        "https://images.pexels.com/photos/16038051/pexels-photo-16038051.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      name: "Kok-Jaiyk",
      rating: 3,
      image:
        "https://images.pexels.com/photos/7611382/pexels-photo-7611382.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      name: "Skazka Canyon",
      rating: 5,
      image:
        "https://images.pexels.com/photos/15007485/pexels-photo-15007485.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      name: "Karakol",
      image:
        "https://images.pexels.com/photos/7363842/pexels-photo-7363842.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4,
    },
  ];

  return (
    <section className="py-8  cursor-pointer">
      <div className="flex justify-between items-center px-8">
        <h2 className="text-2xl font-semibold">Горнолыжные курорты</h2>
        <Link to={'/resorts'} className="text-sm text-gray-500 hover:text-black">
          More
        </Link>
      </div>
      <hr className="my-2 mx-8" />

      {/* Слайдер */}
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        className="px-8 mt-6"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {sights.map((sight, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={sight.image}
                alt={sight.name}
                className="w-full h-64 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 ease-in-out hover:opacity-100">
                {sight.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ResortsSlider;
