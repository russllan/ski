import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Логотип */}
      <Link to={"/"} className="text-2xl font-bold">
        SkiHub
      </Link>

      {/* Навигационные ссылки */}
      <nav className="flex gap-8 text-gray-600">
        {[
          { name: "Магазины", link: "shops" },
          { name: "Горнолыжные базы", link: "resorts" },
          { name: "Контакты", link: "contacts" },
        ].map((item, index) => (
          <Link
            key={index}
            to={`/${item.link}`}
            className="relative group hover:text-black"
          >
            {item.name}
            {/* Линия под ссылкой */}
            <div className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#2e325a] transition-all duration-800 group-hover:w-full"></div>
          </Link>
        ))}
      </nav>

      {/* Кнопки входа и регистрации */}
      <div className="flex gap-6 text-gray-600">
        <Link to="/sign-up" className="hover:text-black">
          Sign Up
        </Link>
        <Link to="/sign-in" className="hover:text-black">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
