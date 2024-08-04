import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from './../../actions/cart';
import { cartReducer } from './../../reducers/cart';


function ProductItem(props) {
  const { item } = props;
  const percent = parseInt(item.discountPercentage).toFixed(0);
  const priceNew = (item.price * (100 - percent) / 100).toFixed(0);
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const isExist = cart.some((i) => {
      return i.id === item.id
    })
    if (isExist) {
      dispatch(updateCart(item.id, 1))
    } else {
      dispatch(addToCart(item.id, item))
    }
  }
  return (
    <div className='product__item' key={item.id}>
      <div className='product__image'>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className='product__content'>
        <div className='product__title'>
          {item.title}
        </div>
        <div className='product__price-new'>
          {priceNew}$
        </div>
        <div className='product__price-old'>
          {item.price}$
        </div>
        <div className='product__percent'>
          {item.discountPercentage}%
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  )
}
export default ProductItem;