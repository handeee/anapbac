import React from 'react'
import sepet from './resimler/sepet.png';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  return (
    <div>
     
        <Link to="/sepet">
        <img src={sepet} alt="" />
        </Link>
    </div>
  )
}

export default ShoppingCart
