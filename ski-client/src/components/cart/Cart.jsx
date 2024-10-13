import { useEffect, useState } from "react";
import { CartItem } from "../basket/Basket";

const Cart = () => {
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
    let cart = JSON.parse(localStorage.getItem("basketData"));
    localStorage.setItem(
      "basketData",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("basketData")) || [];
    setItems(cartData);
  }, []);

  return (
    <div className="p-6">
      {items.length > 0 ? (
        items.map((item, index) => <CartItem key={index} item={item} handleDelete={handleDelete} />)
      ) : (
        <p>Your cart is empty</p>
      )}
      <div>
        <p>Общая сумма: {items.length > 0 ? items?.reduce((acc, cur) => acc + cur.price, 0) : null}</p>
      </div>
    </div>
  );
};

export default Cart;
