import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { equipment } from "../../constants/equipment";

function EquipmentPage() {
  const navigate = useNavigate();

  const addBasket = (item) => {
    console.log(item);

    let cart = JSON.parse(localStorage.getItem("basketData")) || [];

    cart?.push(item);

    localStorage.setItem("basketData", JSON.stringify(cart));
    navigate("/cart");
  };

  useEffect(() => {
    localStorage.setItem("equipmentData", JSON.stringify(equipment));
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Главный контейнер */}
      <div className="flex gap-6">
        {/* Левая часть с фильтрацией */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="font-semibold text-xl mb-4">Категории</h2>
          <ul className="mb-4">
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Лыжи</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Сноуборды</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Ботинки</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Очки</span>
              </label>
            </li>
          </ul>

          <h2 className="font-semibold text-xl mb-4">Сортировка по цене</h2>
          <div className="flex items-center justify-between mb-4">
            <input
              type="range"
              min="5"
              max="1000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none"
            />
          </div>

          <h2 className="font-semibold text-xl mb-4">Бренд</h2>
          <ul className="mb-4">
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Salamon</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Fischer</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Atom</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />{" "}
                <span className="ml-2">Capita</span>
              </label>
            </li>
          </ul>
        </aside>

        {/* Правая часть с карточками */}
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-6">
            {equipment?.map((product) => (
              <div
                key={product.id}
                className="relative p-4 rounded-lg shadow-lg bg-slate-200 w-full h-[470px]"
              >
                {product.special && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Special
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    -{product.discount}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <div className="flex justify-between items-center h-7">
                  <p className="text-sm text-gray-600 mb-2">
                    {product.category}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Кол-во: {product.amount}
                  </p>
                </div>
                <div className="flex items-center justify-between h-8">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="h-30">
                  <div className="flex gap-8 py-3">
                    <p>Бренд: {product.brand ? product.brand : "Нет"}</p>
                    <p>Размер: {product.size ? product.size : "Универсал"}</p>
                    <p>
                      Статус: {product.status ? product.status : "Стандарт"}
                    </p>
                  </div>
                  <div className="flex justify-between pt-2">
                    <p>Цвет: {product.color ? product.color : "Не указан"}</p>
                    <p>Пол: {product.gender ? product.gender : "Универсал"}</p>
                  </div>
                </div>
                <div className="flex justify-between h-16">
                  <button
                    onClick={() => addBasket(product)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  >
                    Добавить в корзину
                  </button>
                  <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">
              Показать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentPage;
