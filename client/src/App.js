import React, { Component } from 'react'
import Main from './components/Main'

import Nav from './components/shared/Nav'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import { createStore, getUserStores, getStores, updateStore, deleteStore } from './services/stores'
import { createProduct, getProducts, getProduct } from './services/products'
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: {},
    stores: [],
    products: [],
    product: null,
    toggleLogin: true
  }

  componentDidMount() {
    this.handleVerify();
    this.fetchStores();
    this.fetchProducts();
    this.fetchProduct();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState(prevState =>({
      currentUser: currentUser,
      toggleLogin: !prevState.toggleLogin
    }))
  }

  handleSignup = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState(prevState =>({
      currentUser: currentUser,
      toggleLogin: !prevState.toggleLogin
    }))
  }

  handleLogout = () => {
    this.setState({
      currentUser: null,
      toggleLogin: true
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  handleStoreSubmit = async (storeData) => {
    const store = await createStore(storeData)
  }

  fetchStores = async () => {
    const stores = await getStores();
    this.setState({ stores: stores });
    console.log(stores)
  }

  handleSubmitProduct = async (id, productData) => {
    const product = await createProduct (id, productData)
  }

  handleUpdateStore = async (id, storeData) => {
    
    const store = await updateStore(id, storeData)
  }

  handleStoreDelete = async (id) => {
    const store = await deleteStore(id)
    const stores = this.state.stores.filter(ele => ele.id !== id)
    this.setState({stores})
  }

  fetchProducts = async () => {
    const products = await getProducts()
    this.setState({ products })
  }

  fetchProduct = async (id) => {
    const product = await getProduct(id)
    this.setState({ product })
  }

  render() {
    return (
      <div>
        {/* <Nav
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />  */}
        <Main
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleSignup={this.handleSignup}
          handleLogout={this.handleLogout}
          handleStoreSubmit={this.handleStoreSubmit}
          fetchStores={this.fetchStores}
          stores={this.state.stores}
          handleSubmitProduct={this.handleSubmitProduct}
          handleUpdateStore={this.handleUpdateStore}
          updateStore={this.updateStore}
          handleStoreDelete={this.handleStoreDelete}
          toggleLogin={this.state.toggleLogin}
          products={this.state.products}
          fetchProduct={this.fetchProduct}
          product={this.state.product}
        />
      </div>
    )
  }
}

export default withRouter(App);
