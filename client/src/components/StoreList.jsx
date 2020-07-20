import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'


export default class StoreList extends Component {
  
  handleStoreChange = (e) => {
    
    e.preventDefault()
     const { name, value } = e.target;
     this.setState({
       [name]: value
     })
  }
  
  render() {
    
    const id = this.props.currentUser.id
    console.log(id)
    const store = this.props.stores.filter(ele => ele.user_id === id)
    console.log(this.props.stores);
    
    return (
      <div>
        <h2>Your Store(s)</h2>
        {store.map(store => (
           <React.Fragment key={store.id}>
          <Link to={`/store/${store.id}`}>
              {store.name}
            </Link>
            <Link to={`/store/${store.id}/update`}>
              Update Store
              </Link>
            <button onClick={() => this.props.handleStoreDelete(store.id)}>Delete</button>
            <br />
            <br />
            
           </React.Fragment>
          
        ))}
        
      </div>
    )
  }
}


// <Link to={`store/${store.id}`}>