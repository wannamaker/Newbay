import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StoreList.css'


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
      <div className="component-container">
        <div className="text-manage-store">
          <h2>Manage Your Store(s)</h2>
        </div>

        
        {store.map(store => (
          <React.Fragment key={store.id} >
            <div className="storeList-container">
                  <div className="store-name">
                    <Link to={`/store/${store.id}`} className="store-name-link">
                     {store.name}
                    </Link>
                  </div>

                  <div className="update-store">
                     <Link to={`/store/${store.id}/update`} className="update-store">
                       Update Store
                     </Link>
                  </div>

                  <div>
                      <button className="button-delete-store" onClick={() => this.props.handleStoreDelete(store.id)}>Delete Store</button>
                  </div>
            </div>
          </React.Fragment>
          
        ))}
        
      </div>
    )
  }
}


// <Link to={`store/${store.id}`}>