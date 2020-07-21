import React, { Component } from 'react'
import Nav from './shared/Nav'
import StoreList from './StoreList'
import './ManageStore.css'

export default class ManageStore extends Component {

  state = {
    user_id: '',
    name: '',
    description: '',
    createStore: false,
    stores: [],
  }
  
  handleStoreChange = (e) => {
    e.preventDefault()
    
    const { name, value } = e.target 
    this.setState({
      [name]: value,
       user_id: this.props.currentUser.id
    })
  } 

  componentDidMount() {
    const stores = this.props.fetchStores()
    this.setState({ stores })
    console.log(stores);
    
  }
    handleStoreSubmit = (e) => {
      e.preventDefault()

      // this.props.handleStoreSubmit(this.state)
      this.props.handleStoreSubmit({user_id: this.state.user_id,  name: this.state.name, description: this.state.description})
    }
  
  render() {
  
return (
      <div>
        <Nav />
     
    <div className={"manageStore-window"}>
         <div className={"storeList-window"}>
           <StoreList stores={this.props.stores} handleStoreDelete= {this.props.handleStoreDelete} currentUser={this.props.currentUser} />
         </div>

           <button className="button-create-store" onClick={() => this.setState({createStore: !this.state.createStore})}>Create new store</button>
    <br />
     
    <br />
    {this.state.createStore &&
      <form onSubmit={this.handleStoreSubmit}>
        <label className="label-name">
          Store name:
            <input className="input-store-name" type="text" placeholder="Meaningful name" name="name" value={this.state.name} onChange={this.handleStoreChange} />
        </label>
        <label className="label-description">
          Store Description:
          {/* <textarea  cols="30" rows="4" name="description" /> */}
          <input className="input-store-description" type="text" placeholder="Meaningful description" name="description" value={this.state.description} onChange={this.handleStoreChange} />
        </label>
      
        <button className="button-submit-store">Submit store</button>
    
      </form>
    }
    </div>
      </div>
    )
  }
}
