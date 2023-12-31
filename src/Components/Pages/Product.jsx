import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrums/Breadcrum';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const Product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum Product={Product}/>
    </div>
  )
}

export default Product;