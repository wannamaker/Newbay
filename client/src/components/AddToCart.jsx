import React, { Component } from 'react';
import './AddToCart.css'
import { Link } from 'react-router-dom';

export default class AddToCart extends Component {


  closeModal = (e) => {
    if (e.target.className === 'out-cart-mod-container') {
      this.props.toggleMo()
    }
  }

  render() {
    return (
      <div className="out-cart-mod-container" onClick={this.closeModal}>
        
          <div className="cart-mod-container">
            <div className="cart-text-conf">
               <h3>Product added to cart</h3>
            </div> 
               
              <div className="link-to-home">
               <Link to='/' className="link-to-home"> Continue Shopping</Link>
              </div>
            <div className="link-to-cart">
               <Link to='/cart' className="link-to-home">Go To Cart</Link>
            </div>
          </div>
        
      </div>
    )
  }
}
