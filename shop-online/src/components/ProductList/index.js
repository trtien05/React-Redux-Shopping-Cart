import { useState, useEffect, React } from 'react'
import { getListProduct } from '../../services/productService';
import './Product.css'
import ProductItem from './ProductItem';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const respone = await getListProduct();
      setProducts(respone);
    }
    fetchApi();
  }, [])
  return (
    <div className='product__list'>
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default ProductList