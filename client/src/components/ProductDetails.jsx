import React, { Component } from 'react';
import './ProductDetails.css';
import Layout from './shared/Layout';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/products'

export default class ProductDetails extends Component {
       
  state = {
    product: null
    }

   componentDidMount = async() => {
    let { id } = this.props.match.params
    const product = await getProduct(id)
    console.log(product);
    
     this.setState({
       product: {
         name: product.name,
         description: product.description,
         images: product.images,
         price: product.price
       }
     })
}


  render() {
    return (
      <div>
        <Layout>
          { this.product &&
            <div className="product-detail">
              <img className="product-detail-image" src={this.product.images} alt={this.product.name} />
              <div className="detail">
                <div className="name">{this.product.name}</div>
                <div className="price">{this.product.price}</div>
                <div className="description">{this.product.description}</div>
                       
                <div className="button-container">
                  <button className="button-add-to-card"><Link className="link" to='/added-to-cart'>Add to cart</Link></button>
                </div>
              </div>
            </div>
          }
        </Layout>
      </div>
    )
  }
}
