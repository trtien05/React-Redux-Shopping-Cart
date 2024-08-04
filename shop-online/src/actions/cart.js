export const addToCart = (id, info) => {
  return {
    type: 'ADD_TO_CART',
    id: id,
    info: info
  }
}

export const updateCart = (id, step) => {
  return {
    type: 'UPDATE_CART',
    id: id,
    step: step
  }
}

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id: id,
  }
}

export const deleteAll = () => {
  return {
    type: 'DELETE_ALL',
  }
}