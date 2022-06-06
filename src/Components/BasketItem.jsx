import React, { useContext } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ShopContext } from "../context";
import { toast } from "react-toastify";

const BasketItem = ({ id, name, price, quantity }) => {
  const {
    removeItem = Function.prototype,
    incrementQuantity,
    decrementQuantity,
  } = useContext(ShopContext);

  return (
    <li className="w-full bg-gray-800 py-2 px-4 flex justify-between items-center">
      {name} X {quantity}: {quantity * price}$
      <span className="flex gap-2 items-center">
        <AiOutlinePlus
          className="cursor-pointer"
          onClick={() => incrementQuantity(id)}
        />
        <AiOutlineMinus
          className="cursor-pointer"
          onClick={() => decrementQuantity(id)}
        />
        <MdOutlineDeleteSweep
          className="text-2xl cursor-pointer"
          onClick={() => {
            removeItem(id);
            toast.error("Good removed from basket successfully!");
          }}
        />
      </span>
    </li>
  );
};

export default BasketItem;
