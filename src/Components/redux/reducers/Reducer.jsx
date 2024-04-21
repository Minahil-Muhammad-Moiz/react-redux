const InitialState = {
  carts: [],
};

export const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "AddToCart":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case 'DeleteItem':
      const newData = state.carts.filter((i)=>i.id !== action.payload)
      return {
        ...state,
        carts: newData
      }
    default:
      return state;
  }
};
