import React, { useContext } from "react";
import BasketItem from "./BasketItem";
import { GrClose } from "react-icons/gr";
import { ShopContext } from "../context";

const BasketList = () => {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div
      className="w-full h-full fixed top-0 flex items-center bg-black/40 transition"
      id="modal"
      onClick={(e) => e.target.id === "modal" && handleBasketShow()}
    >
      <ul className="w-2/4 mx-auto transition text-gray-400 shadow-lg">
        <li className="w-full bg-gray-700 py-2 px-4 rounded-t-lg font-semibold flex justify-between items-center">
          BASKET{" "}
          <GrClose className="cursor-pointer" onClick={handleBasketShow} />
        </li>
        {order.length ? (
          order.map((item) => <BasketItem key={item.id} {...item} />)
        ) : (
          <li className="w-full bg-gray-800 py-2 px-4">Basket is empty</li>
        )}
        <li className="w-full bg-gray-700 py-2 px-4 rounded-b-lg">
          Total Cost: {totalPrice} <b>$</b>
        </li>
      </ul>
    </div>
  );
};

export default BasketList;
