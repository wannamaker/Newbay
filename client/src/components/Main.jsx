import React, { Component } from 'react'
// import './Main.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Signout from './Signout'
import ManageStore from './ManageStore'
import { createStore } from '../services/stores'
import StoreDetails from './StoreDetails'
import UpdateStore from './UpdateStore'
import ProductDetails from './ProductDetails'
import StoreList from './StoreList'
import AddToCart from './AddToCart'

class Main extends Component {
  state = {
    name: '',
    description: '',
    stores:[]
  }



  render() {
    const { handleLogin, handleSignup, handleLogout } = this.props;
    return (
      <div className="App">
        {/* <h1>Hello Rails</h1> */}
        <Switch>
          <Route exact path="/" render={(props) => (
            <Home
              {...props}
              toggleLogin={this.props.toggleLogin} currentUser={this.props.currentUser} handleLogin={this.props.handleLogin}
            />
            )}/>
          <Route path="/stores" render={(props) => (
            <ManageStore
              {...props}
              currentUser={this.props.currentUser} handleStoreSubmit={this.props.handleStoreSubmit}
              fetchStores={this.props.fetchStores} stores={this.props.stores} handleStoreDelete={this.props.handleStoreDelete}
              products={this.props.products}
            />
          )}/>
        <Route exact path="/signup" render={(props) => (
        <Signup
          {...props}
              handleSignup={handleSignup}
            />
          )}/>
      
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={handleLogin}
          />
          )} />
          <Route path="/signout" render={(props) => (
            <Signout
              {...props}
              handleLogout={handleLogout}
            />
          )} /> 
          {this.props.stores.length > 0 && <Route exact path='/store/:id' render={(props) => (
            <StoreDetails
              {...props}
              fetchStores={this.props.fetchStores} stores={this.props.stores} handleSubmitProduct={this.props.handleSubmitProduct}
              products={this.props.products} handleProductDelete={this.props.handleProductDelete}
            />
          )} />}

          <Route exact path='/store/' render={(props) => (
            <StoreList
              {...props}
              fetchStores={this.props.fetchStores} stores={this.props.stores} handleSubmitProduct={this.props.handleSubmitProduct}
              products={this.props.products} 
            />
          )} />

          <Route path='/store/:id/update' render={(props) => (
            <UpdateStore
              {...props}
              handleUpdateStore={this.props.handleUpdateStore} updateStore={this.updateStore} stores={this.props.stores}
            />
          )} />
          
          <Route path='/products/:id' render={(props) => (
            <ProductDetails
              {...props}
              products={this.props.products} fetchProduct = {this.props.fetchProduct} product={this.props.product}
            />
          )} />
          
          <Route path='/products/:id/to-cart' render={(props) => (
            <AddToCart
              {...props}
            />
          )}/>
          {/* <Route path='/products/:id/to-cart' component={AddToCart}/> */}

        </Switch>
      </div>
    );
  }
}

export default Main;