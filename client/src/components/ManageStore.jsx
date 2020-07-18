import React, { Component } from 'react'
import Nav from './shared/Nav'
import StoreList from './StoreList'

export default class ManageStore extends Component {

  state = {
    user_id: '',
    name: '',
    description: ''
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

      this.props.handleStoreSubmit(this.state)
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
    <StoreList stores={this.props.stores} />
    

    <button>Create Store</button>
    <br />
        <br />
    <form onSubmit={this.handleStoreSubmit}>
        <label>
        Store name 
            <input type="text" name="name" value={this.state.name} onChange={this.handleStoreChange}/>
      </label>
      <label>
          Store Description  
          {/* <textarea  cols="30" rows="4" name="description" /> */}
          <input type="text" name="description" value={this.state.description} onChange={this.handleStoreChange}/>
      </label>
      
      <button>Submit</button>
    
    </form>

    
      </div>
    )
  }
}
