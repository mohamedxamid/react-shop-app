import React, { useContext, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import { ShopContext } from "../context";
import Loader from "../Components/Loader";
import GoodList from "../Components/GoodList";
import Cart from "../Components/Cart";
import BasketList from "../Components/BasketList";

const Main = () => {
  const { setLoading, loading, setGoods, isBasketShow, order } =
    useContext(ShopContext);

  // const addToBasket = (item) => {
  //   const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //     toast.success("Good added to basket successfully!");
  //   } else {
  //     const newOrder = order.map((order, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...order,
  //           quantity: order.quantity + 1,
  //         };
  //       } else {
  //         return order;
  //       }
  //     });
  //     setOrder(newOrder);
  //   }
  // };

  // function handleBasketShow() {
  //   setIsBasketShow(!isBasketShow);
  // }

  // function removeItem(itemId) {
  //   const newOrder = order.filter((item) => item.id !== itemId);
  //   setOrder(newOrder);
  //   toast.error("Good removed from basket successfully!");
  // }

  // function incrementQuantity(itemId) {
  //   const newOrder = order.map((item) => {
  //     if (item.id === itemId) {
  //       const newQuantity = item.quantity + 1;
  //       return {
  //         ...item,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setOrder(newOrder);
  // }

  // function decrementQuantity(itemId) {
  //   const newOrder = order.map((item) => {
  //     if (item.id === itemId) {
  //       const newQuantity = item.quantity - 1;
  //       return {
  //         ...item,
  //         quantity: newQuantity <= 1 ? 1 : newQuantity,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setOrder(newOrder);
  // }

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList />}
      {isBasketShow && <BasketList />}
    </div>
  );
};

export default Main;
