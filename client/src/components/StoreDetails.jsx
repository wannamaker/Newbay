import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class StoreDetails extends Component {
  state = {
    name: '',
    images: '',
    description: '',
    price: '',
    quantity: ''
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
}
  
  render() {
    // const stores = this.props.stores
    let thisStoreID = this.props.match.params.id
    console.log((thisStoreID));
    
    let thisStore = this.props.stores.find(ele => ele.id === parseInt(thisStoreID))
    console.log(this.props)
    return (
      <div>
        {this.props.stores &&
          <h2>{thisStore.name}</h2>
        }
          <button>Add Products</button>
  
        <form onSubmit={(e) => {
        e.preventDefault();
          this.props.handleSubmitProduct(thisStore.id,this.state);
        // history.push('/store/:id');
      }}>
              
              <input
                name='name'
                placeholder='Product name'
                type='text'
                // disabled={signingUp}
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                name='description'
                placeholder='Product description'
                type='text'
                // disabled={signingUp}
                value={this.state.description}
                onChange={this.handleChange}
              />
          
              <input
                name='images'
                placeholder='Product image'
                type='text'
                // disabled={signingUp}
                value={this.state.images}
                onChange={this.handleChange}
              />
              <input
                name='price'
                placeholder='price'
                type='text'
                // disabled={signingUp}
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input
                name='quantity'
                placeholder='Quantity of this product'
                type='text'
                // disabled={signingUp}
                value={this.state.quantity}
                onChange={this.handleChange}
              />

              <button>Submit</button>
          </form>
      </div>
    )
  }
}


export default withRouter(StoreDetails)