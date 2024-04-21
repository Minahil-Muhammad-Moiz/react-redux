const InitialState = {
  carts: [],
};

export const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "AddToCart":
      const prIndex = state.carts.findIndex(
        (item) => item.id == action.payload.id
      );
      if (prIndex >= 0) {
        state.carts[prIndex].qnty += 1;
      } else {
        const prQnty = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, prQnty],
        };
      }

    case "DeleteItem":
      const newData = state.carts.filter((i) => i.id !== action.payload);
      return {
        ...state,
        carts: newData,
      };

    case 'DecreaseQnty':
      const decQ = state.carts.findIndex(
        (item) => item.id == action.payload.id
      );
      if (state.carts[decQ].qnty>=1){
        const dltItem = state.carts[decQ].qnty -= 1
        return{
          ...state,
          carts: [...state.carts ]
        }
      }

    default:
      return state;
  }
};
