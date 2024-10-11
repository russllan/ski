import React from "react";
import Header from "../../components/header/Header";
import ResortsSlider from "../../components/resorts/Resorts";
import ShopPage from "../shop/ShopPage";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Фоновое изображение */}
        <img
          src="https://images.unsplash.com/photo-1707037224487-3148d374819f?w=1080&auto=format&fit=crop&q=90&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpJTIwcmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Ski Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Полупрозрачный черный фон */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-50"></div>

        {/* Контейнер с текстом */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6 md:px-12 lg:px-24">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg mb-6 animate-fade-in">
              Добро пожаловать на наш сайт
            </h1>
            <p className="text-white text-lg md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto drop-shadow-md animate-fade-in delay-1s">
              Здесь ты можешь выбрать лучшее снаряжение и забронировать его
              прямо сейчас. Погрузись в мир снежных вершин и катайся с
              комфортом!
            </p>
            <button className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-lg md:text-xl rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 animate-bounce">
              Посмотреть снаряжение
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <ResortsSlider />
      </div>
      <div>
        <div className="flex justify-between items-center px-8">
          <h2 className="text-2xl font-semibold">Магазины проката снаряжения</h2>
          <Link
            to={"/shops"}
            className="text-sm text-gray-500 hover:text-black"
          >
            More
          </Link>
        </div>
        <hr className="my-2 mx-8" />
        <ShopPage />
      </div>
    </>
  );
};

export default HomePage;
