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
              fetchStores={this.props.fetchStores} stores={this.props.stores} handleStoreDelete= {this.props.handleStoreDelete}
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
          <Route exact path='/store/:id' render={(props) => (
            <StoreDetails
              {...props}
              fetchStores={this.props.fetchStores} stores={this.props.stores} handleSubmitProduct={this.props.handleSubmitProduct}
            />
          )} />
          <Route path='/store/:id/update' render={(props) => (
            <UpdateStore
              {...props}
              handleUpdateStore={this.props.handleUpdateStore} updateStore={this.updateStore}
            />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default Main;