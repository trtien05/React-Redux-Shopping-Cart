import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { deleteAll, deleteItem, updateCart } from '../../actions/cart';
const Cart = () => {
  const cart = useSelector(state => state.cartReducer);
  const totalMoney = cart.reduce((total, item) => {
    const percent = parseInt(item.info.discountPercentage).toFixed(0);
    const priceNew = (item.info.price * (100 - percent) / 100).toFixed(0);
    return total + priceNew * item.quantity;
  }, 0)
  const dispatch = useDispatch();

  const handleUp = (id) => {
    dispatch(updateCart(id, 1))
  }

  const handleDown = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateCart(id, -1))
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteItem(id))
  }

  const handleDeleteAll = () => {
    dispatch(deleteAll())
  }

  return (
    <div>
      <h2>
        Shopping Cart
      </h2>

      {cart.length > 0 ? (
        <>
          <div className="cart">
            <div className="cart__delete-all">
              <button onClick={handleDeleteAll}>Clear All</button>
            </div>
            <div className="cart__list">
              {cart.map((item) => {
                const percent = parseInt(item.info.discountPercentage).toFixed(
                  0
                );
                const priceNew = (
                  (item.info.price * (100 - percent)) /
                  100
                ).toFixed(0);

                return (
                  <div className="cart__item" key={item.id}>
                    <div className="cart__image">
                      <img src={item.info.thumbnail} alt={item.info.title} />
                    </div>
                    <div className="cart__info">
                      <div className="cart__title">{item.info.title}</div>
                      <div className="cart__price-new">{priceNew}$</div>
                      <div className="cart__price-old">{item.info.price}$</div>
                    </div>
                    <div className="cart__quantity">
                      <button onClick={() => handleDown(item.id, item.quantity)}>-</button>
                      <div className="cart__number">{item.quantity}</div>
                      <button onClick={() => handleUp(item.id)}>+</button>
                    </div>
                    <button onClick={() => handleDelete(item.id)}>Xóa</button>
                  </div>
                );
              })}
            </div>
            <div className="cart__total">Total Money: {totalMoney}$</div>
          </div>
        </>
      ) : (
        <>There are no products in the cart yet</>
      )}
    </div>

  )
}

export default Cart