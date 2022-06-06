import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const BasketItem = ({
  id,
  name,
  price,
  quantity,
  removeItem,
  incrementQuantity,
  decrementQuantity,
}) => {
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
          onClick={() => removeItem(id)}
        />
      </span>
    </li>
  );
};

export default BasketItem;
