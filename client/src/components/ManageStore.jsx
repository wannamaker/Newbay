import React, { Component } from 'react'
import Nav from './shared/Nav'
import StoreList from './StoreList'

export default class ManageStore extends Component {

  state = {
    user_id: '',
    name: '',
    description: '',
    createStore: false
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    <br />
    <StoreList stores={this.props.stores} handleStoreDelete= {this.props.handleStoreDelete} currentUser={this.props.currentUser} />
    

    <button onClick={() => this.setState({createStore: !this.state.createStore})}>Create new store</button>
    <br />
     
    <br />
    {this.state.createStore &&
      <form onSubmit={this.handleStoreSubmit}>
        <label>
          Store name
            <input type="text" name="name" value={this.state.name} onChange={this.handleStoreChange} />
        </label>
        <label>
          Store Description
          {/* <textarea  cols="30" rows="4" name="description" /> */}
          <input type="text" name="description" value={this.state.description} onChange={this.handleStoreChange} />
        </label>
      
        <button>Submit</button>
    
      </form>
    }
    
      </div>
    )
  }
}
