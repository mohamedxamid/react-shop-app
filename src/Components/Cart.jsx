import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ShopContext } from "../context";

const Cart = ({ quantity = 0 }) => {
  const { handleBasketShow = Function.prototype } = useContext(ShopContext);

  return (
    <div
      className="text-xl fixed top-14 right-px sm:right-3 p-3 cursor-pointer hover:bg-indigo-400 hover:scale-110 rounded-full transition"
      onClick={handleBasketShow}
    >
      <MdOutlineShoppingCart />
      {quantity ? (
        <span className="absolute top-0 -right-2">{quantity}</span>
      ) : null}
    </div>
  );
};

export default Cart;
