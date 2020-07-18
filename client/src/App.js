import React, { Component } from 'react'
import Main from './components/Main'

import Nav from './components/shared/Nav'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import { createStore, getUserStores, getStores } from './services/stores'
import { createProduct, getProducts } from './services/products'
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: null,
    stores:[]
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleSignup = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
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
        />
      </div>
    )
  }
}

export default withRouter(App);
