import React, { Component } from 'react';
import './Products.css';
import Product from './Product';
import Layout from './shared/Layout';
import { getProducts } from '../services/products'

export default class Products extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const products = await getProducts()
    this.setState({ products })
  }

  render() {
    const PRODUCTS = this.state.products.map((product, index) =>
      <Product id={product.id} name={product.name} images={product.images} price={product.price} key={index} />
    )
    return (
      <div>
        <div className="products">
          {PRODUCTS}
        </div>
      </div>
    )
  }
}
