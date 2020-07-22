import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product(props) {

  
  return (
    <div>
      <Link className="product" to={`/products/${props.id}`}>
                <img className="product-image" src={props.images} alt={props.name} />
                <div className="product-name">{props.name}</div>
                <div className="price">{`$${props.price}`}</div>
            </Link>
    </div>
  )
}
