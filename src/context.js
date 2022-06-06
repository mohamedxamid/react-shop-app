import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: false,
  order: [],
  isBasketShow: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.incrementQuantity = (itemId) => {
    dispatch({ type: "INCREMENT", payload: itemId });
  };

  value.decrementQuantity = (itemId) => {
    dispatch({ type: "DECREMENT", payload: itemId });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "HANDLE_BASKET_SHOW" });
  };

  value.removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  value.setLoading = (boolen) => {
    dispatch({ type: "SET_LOADING", payload: boolen });
  };

  value.setGoods = (goods) => {
    dispatch({ type: "SET_GOODS", payload: goods });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
