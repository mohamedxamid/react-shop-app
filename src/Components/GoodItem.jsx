import React, { useContext } from "react";
import { ShopContext } from "../context";
import { toast } from "react-toastify";

const GoodItem = ({ id, name, description, price, full_background }) => {
  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="shadow-xl flex flex-col rounded">
      <div className="min-h-[240px]">
        <img src={full_background} alt={name} className="w-full rounded" />
      </div>
      <div className="grow my-2 px-3 flex flex-col">
        <div className="text-3xl grow">{name}</div>
        <div className="mt-2">{description}</div>
      </div>
      <div className="my-2 px-3 py-2 flex justify-between items-center border-t-2 border-green-300">
        <button
          className="bg-green-300 hover:bg-green-400 shadow-md px-3 py-1"
          onClick={() => {
            addToBasket({ id, name, price });
            toast.success("Good added to basket successfully!");
          }}
        >
          BUY
        </button>
        <div className="text-2xl">{price}$</div>
      </div>
    </div>
  );
};

export default GoodItem;
