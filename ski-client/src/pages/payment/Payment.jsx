import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  return (
    <div className="bg-blue-900 p-8 rounded-lg max-w-md mx-auto">
      <h2 className="text-white text-lg mb-4">Card Details</h2>

      {/* Выбор типа карты */}
      <div className="mb-4">
        <h3 className="text-white mb-2">Card Type</h3>
        <div className="flex space-x-4">
          <button className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Visa"
            />
          </button>
          <button className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <img src="data:image/jpeg;base64,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" alt="Mastercard" />
          </button>
          <button className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8lO4AXm9cVMHuOlrUAl9YlNHsegr4AI3X6+/2NxecRmtcyotkAldUAktQWntoAIHUZM3wAJ3gmMXissccNLHrl5+4AHHMkO4AmL3cfN34PLXpga5rZ2+XQ0t/BxNVpdJ95gqiZyukqSInt9vtLqdzY6vagpr+Ciq1JWI+Vm7kvQoTIzNpUYZTp6/A6S4hqiLO4vM8Rd7VzfaUmaaW01+4pXptwuOIqUZDQ5vSu1O02SIdEp9sAFHEiVpZ3uuPR4Wa5AAAEaElEQVR4nO3bjVKbQBQF4CwRkojEROJPUGtrtImxta1a/1rr+79VMbGOyL0EdndmL/R8T7BnFvawC7RaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNN1orYT4dfdlxPVJNs0G7jP3t7e7j2fyD6+FqGKrykvbWcK12U7lbIeGz9u7BoesxV7LTrZgwncndjxeuh13B0XblhEoNByPX4y5vtK+RUKnuQc/1yMuatbUSqqGqy5V6kOglVEm3JgvOuWbA1KAeEQf6CVW3DtW4Y5IwGdZgufmiUxavhl9dj381zbL4Z2vqOsBKa5pl8WJvV3xnaJfFi+TAdYJVDMpiaSB9P9XdM0yYnLmOUOyi+s4iN4mye//DlnHC4SfXIQqNjOpwqSu69g3LYmH7yHWKIh+rnNIwZF+m3wzrcMl1iiJVj6FIA8HPNRcmO4tXW4JL30JZpPYFH0v9MNtZvGjPXefgzS2URbqYzlzn4F1ZKIs04ZXrHDw7ZSE5oYVnNiW68i+s1KFqy70P7ZSFGn53HYT1w85VGlyeuk7CsVMWKuiEG66jMOyUhYo9zxca8cxKWajJZhpR5oVq5ZlNJddpQi86dp2GcGJlZ6HiznNCr//ZdZ68QztloRYBPYmrjZ2yCK6XCb3op+tAOVMrZTEOlwG90HMdKOeTjbJIbl6mUOIkWimLsf8voBeKawzzE/03d+FiOT1xHSmrZ2Vn8Sag5z+4zpRloyzGnUzCW9eZsrS+98rKXKPyVtOp8UNbcpcJmN6Isl7SGJdFMtkMswkjWUvNV9NX+Ofee9G961AZidkL7mCSCygsoWFZxH82pSc8NCr88SURUFhCk7IIJhEV0ItE7RH1yyJQ5ASKa4uZXlkkcZqPCSis8XXKIgjimw6XT9xTG98VASkeq7vrNB6bT9qTd489hgouO5TI2yyM50nbPfF/kowXUXK8sDCdJ24HXPBxcPFE8YSdYvAfB080E4ah60xZ/J8kN5oJI1HrTMHHwe92teWnUNqJMHsXBh29hNJO9fmdRdDRCijuzUxBWaxsBYq8t2t8WQQ6F6nAN6R2y8LfELWpWGA/Dk40ykLeJdqyWhZh/8l1GsovNiG3u2Un0Bd1dPGqoCwqJfT7666j0PjfDuMKZRFG0bqoDdMb1coiJPh+FN3K2kxk8H+SEGURbuSc3q4/CHtKe4cvC+KgV9YZYUnsnyRUWcg6nCipUln4rkerg339S5RF+Nv1aDXwf5LEfn4KZZ2ClsN/HEyUhS9t51cG/yfJOZFQcOux/uOySKiykLf3W439k6QxZcH+o/4flEXU9LIYN6QsDh+5hE0pi9Z80M3bj+NxU8oi1ctpPYXkC9BalgXtlD6/qGVZ0PLP3IuykHgWquekT0+hyMNQLff5KqxtWdCO6au0nmVBeqIT1rUsCBv0UtqcsujRC02DyuIznbCWOwtG6FP6zVlKWyfH64TmrKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANr+AtbYXHYB9448AAAAAElFTkSuQmCC" alt="PayPal" />
          </button>
        </div>
      </div>

      {/* Поля для ввода данных карты */}
      <div className="space-y-4">
        {/* Номер карты */}
        <div className="text-white">
          <label className="block mb-1">Card Number</label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-gray-800 text-white"
            placeholder="•••• •••• •••• ••••"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        {/* Имя владельца карты */}
        <div className="text-white">
          <label className="block mb-1">Name To Card</label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-gray-800 text-white"
            placeholder="Adriana Abramson"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Срок действия карты */}
        <div className="flex space-x-4">
          <div className="text-white">
            <label className="block mb-1">Expiration Date</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </div>

          {/* CVV код */}
          <div className="text-white">
            <label className="block mb-1">CVV</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              placeholder="•••"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Кнопка для подтверждения оплаты */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white p-2 rounded-md">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
