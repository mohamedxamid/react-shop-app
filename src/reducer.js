export function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_BASKET":
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((order, index) => {
          if (index === itemIndex) {
            return {
              ...order,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
      };

    case "INCREMENT":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload) {
            const newQuantity = item.quantity + 1;
            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };

    case "DECREMENT":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload) {
            const newQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: newQuantity <= 1 ? 1 : newQuantity,
            };
          } else {
            return item;
          }
        }),
      };

    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        order: state.order.filter((item) => {
          return item.id !== payload;
        }),
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };

    case "SET_GOODS":
      return {
        ...state,
        goods: payload,
      };

    default:
      return state;
  }
}
