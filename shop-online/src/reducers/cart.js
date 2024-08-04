export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        {
          id: action.id,
          quantity: 1,
          info: action.info
        }
      ]
    case "UPDATE_CART":
      return state.map((item) => item.id === action.id ? { ...item, quantity: item.quantity + action.step } : item)
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.id)
    case "DELETE_ALL":
      return []
    default:
      return state;
  }
}