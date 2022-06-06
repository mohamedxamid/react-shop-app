import React from "react";
import GoodItem from "./GoodItem";

const GoodList = ({ goods = [], addToBasket }) => {
  return goods.length !== 0 ? (
    <div className="w-4/5 mx-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4">
      {goods.map((good) => (
        <GoodItem key={good.id} {...good} addToBasket={addToBasket} />
      ))}
    </div>
  ) : (
    <h1>Nothing found</h1>
  );
};

export default GoodList;
