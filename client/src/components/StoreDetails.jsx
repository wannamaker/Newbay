import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Nav from './shared/Nav';
import './StoreDetails.css'
import StoreProducts from './StoreProducts';

class StoreDetails extends Component {
  state = {
    store: {
      name: '',
      images: '',
      description: '',
      price: '',
      quantity: ''
    },
    currentStore: null
    }

      handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        this.setState({
          [name]: value
        })
      }


  componentDidMount = () => {
    const stores = this.props.stores
    let thisStoreID = this.props.match.params.id
    
    let currentStore = stores.find(ele => ele.id === parseInt(thisStoreID))
    this.setState({currentStore})
}
  
  render() {
   const { currentStore } = this.state
    return (

      <div>
        <Nav />
        <div className="grid-container">
          <div className="product-list">
            {currentStore &&
              <p className="store-name">{currentStore.name}</p>
            }
            {this.state.currentStore && <StoreProducts stores={this.props.stores} products={this.state.currentStore.products} currentStore={this.state.currentStore} handleProductDelete={this.props.handleProductDelete} />}
               </div>
               <div className="storeDetails-container">
                 
                       <button className="add-product" className="button-add-product" >Add Products</button>
  
                       <form onSubmit={(e) => {
                          e.preventDefault();
                         this.props.handleSubmitProduct(this.state.currentStore.id,this.state.store);
                           // history.push('/store/:id');
                           }}>
              
                          <input
                           name='name'
                           placeholder='Product name'
                           type='text'
                           // disabled={signingUp}
                           value={this.state.name}
                          onChange={this.handleChange}
                          className="input-add-product"
                         />
                        <input
                        name='description'
                        placeholder='Product description'
                        type='text'
                        // disabled={signingUp}
                        value={this.state.description}
                        onChange={this.handleChange}
                        className="input-add-product"
                       />
          
                      <input
                        name='images'
                        placeholder='Product image'
                        type='text'
                        // disabled={signingUp}
                        value={this.state.images}
                        onChange={this.handleChange}
                        className="input-add-product"
                      />
                      <input
                        name='price'
                        placeholder='price'
                        type='text'
                        // disabled={signingUp}
                        value={this.state.password}
                        onChange={this.handleChange}
                        className="input-add-product"
                      />
                      <input
                        name='quantity'
                        placeholder='Quantity of this product'
                        type='text'
                      // disabled={signingUp}
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        className="input-add-product"
                       />

                <button className="button-add-product">Submit</button>
            </form>
            </div>
        </div>
      </div>
    )
  }
}


export default withRouter(StoreDetails)