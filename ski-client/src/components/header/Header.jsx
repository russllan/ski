import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Логотип */}
      <Link to={"/"} className="text-2xl font-bold">
        TooDo
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
        <div className="cursor-pointer" onClick={() => navigate("/cart")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4h2l3.6 7.59a1 1 0 00.92.61h7.36a1 1 0 00.92-.61L21 6H7"
            />
            <circle cx="9" cy="20" r="2" />
            <circle cx="17" cy="20" r="2" />
          </svg>
        </div>
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
