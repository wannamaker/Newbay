import React, { Component } from 'react';
import { getProducts, deleteProduct } from '../services/products';
import { Link } from 'react-router-dom';

export default class StoreProducts extends Component {

  state = {
          products: []
  }
  
  componentDidMount = () => {
    this.setState({ products: this.props.products})
  }
  
  render() {
    console.log(this.state.products);
    
    return (
      <div>
        
      </div>
    )
  }
}
