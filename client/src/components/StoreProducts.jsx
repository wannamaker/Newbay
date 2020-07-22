import React, { Component } from 'react';
import { getProducts, deleteProduct } from '../services/products';
import { Link } from 'react-router-dom';
import Product from './Products';

export default class StoreProducts extends Component {

  state = {
    products: [],
    currentStore: null
  }
  
  componentDidMount = () => {
    this.setState({ products: this.props.products, currentStore: this.props.currentStore})
  }
  
  render() {
    const id = this.props.currentStore.id
    console.log(id);
    const products = this.state.products
    const thisProduct = products.filter(ele => ele.store_id === id)
    console.log(thisProduct[0]);
    console.log(thisProduct.name);
    
    const PRODUCTS = thisProduct.map((product, index) =>
      <Product id={product.id} name={product.name} images={product.images} price={product.price} key={index} />
    )
    return (
      <div>
        {/* {PRODUCTS} */}
        <div>
          {thisProduct.map(product => (
            <>
            <img className="product-image" src={product.images} alt={product.name} />
            <div className="product-name">{product.name}</div>
              <div className="price-in">{`$${product.price}`}</div>
              <div>
                      <button className="button-delete-product" onClick={() => this.props.handleProductDelete(product.id)}>Delete Store</button>
                  </div>
              </>
          ))}
        </div>
      </div>
    )
  }
}
