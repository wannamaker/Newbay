import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'
export default class StoreList extends Component {
  state = {
    update: false
  }

  render() {
    return (
      <div>
        <h2>Your Store(s)</h2>
        {this.props.stores.map(store => (
          <Link to={`store/${store.id}`}>
            <p key={store.id}>{store.name} <button onClick={this.props.updateStore}>Update Store</button>
              {this.state.update &&
                <form action="">
                  <input type="text" name="name" placeholder="Store name" value={this.state.name} onChange={this.handleStoreChange} />
                  <input type="text" name="description" placeholder="description name" value={this.state.description} onChange={this.handleStoreChange} />
                  <button>Submit</button>
                </form>
              }
              <button onClick={this.props.deleteStore}>Delete Store</button></p>
          </Link>
        ))}
        
      </div>
    )
  }
}


// <Link to={`store/${store.id}`}>