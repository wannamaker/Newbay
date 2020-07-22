import React, { Component } from 'react';
import './ProductDetails.css';
import Layout from './shared/Layout';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/products'
import AddToCart from './AddToCart';

export default class ProductDetails extends Component {
       
  state = {
    product: null,
    showModal: false,
    id: '',
    cart: 0
  }
  
  toggleMo = () => {
    const incremCart = this.state.cart + 1
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      cart: incremCart
    }))
  };

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
       },
       id: id
     })
}


  render() {
    const { product } = this.state
    return (
      <div>
        <Layout>
          {
            this.state.showModal && <AddToCart toggleMo={this.toggleMo} showModal={this.showModal} id={this.state.id} />
           }
         
          {product &&
            <>
            {/* // <div className="incremCart">{this.state.incremCart}</div> */}
            <div className="product-detail">
            
                 <div>
                     <img className="product-detail-image" src={product.images} alt={product.name} />
                     <div className="price">${product.price}</div>
                  </div>
                   
                       <div className="detail">
                           <div className="prod-details-name">{product.name}</div>
                           <div className="description">{product.description}</div>
                       
                           <div className="button-container">
                             <button className="button-add-to-card" onClick={this.toggleMo}><Link className="link-prod-detail" to={`/products/${this.state.id}`}>Add to cart</Link></button>
                          </div>
                        </div>
             </div>
         </> }
        </Layout>
      </div>
    )
  }
}
