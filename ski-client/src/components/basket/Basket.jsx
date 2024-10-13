import React, { useState } from "react";

export const CartItem = ({ item, handleDelete }) => {
  const [amount, setAmount] = useState(item.amount);
  const [size, setSize] = useState(item.size);
  const [color, setColor] = useState(item.color);
  const [weight, setWeight] = useState(item.weight);

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 1 ? amount - 1 : 1);

  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg mb-4 flex items-center justify-between">
        {/* Изображение и описание товара */}
        <div className="flex items-center space-x-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">Article: {item.article}</p>
            <p className="text-sm text-gray-600">Season: {item.season}</p>

            {/* Выбор размера */}
            <div className="mt-2">
              <label className="text-sm font-semibold">Size:</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="ml-2 border p-1 rounded-md"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            {/* Выбор цвета */}
            <div className="mt-2">
              <label className="text-sm font-semibold">Color:</label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="ml-2 border p-1 rounded-md"
              >
                <option value="Black">Black</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
              </select>
            </div>

            {/* Указание веса */}
            <div className="mt-2">
              <label className="text-sm font-semibold">Weight:</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="ml-2 border p-1 rounded-md w-20"
              />
              <span className="ml-1">kg</span>
            </div>
          </div>
        </div>

        {/* Цена и количество */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-lg font-semibold">${item.price}</p>
            <p className="text-gray-600">
              Total: ${(amount * item.price).toFixed(2)}
            </p>
          </div>

          {/* Управление количеством */}
          <div className="flex items-center">
            <button
              onClick={decreaseAmount}
              className="p-2 bg-gray-200 rounded-l-md"
            >
              -
            </button>
            <div className="p-2 bg-white border">{amount}</div>
            <button
              onClick={increaseAmount}
              className="p-2 bg-gray-200 rounded-r-md"
            >
              +
            </button>
          </div>

          {/* Удаление товара */}
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(item.id)}
          >
            🗑️
          </button>
        </div>
      </div>
    </>
  );
};
