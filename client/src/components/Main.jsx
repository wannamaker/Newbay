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
        <Route exact path="/" component={Home} />
          {/* <Route path="/stores" component={ManageStore} currentUser={this.currentUser}/> */}
          <Route path="/stores" render={(props) => (
            <ManageStore
              {...props}
              currentUser={this.props.currentUser} handleStoreSubmit={this.props.handleStoreSubmit}
              fetchStores={this.props.fetchStores} stores={this.props.stores}
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
          <Route path='/store/:id' render={(props) => (
            <StoreDetails
              {...props}
              fetchStores={this.props.fetchStores} stores={this.props.stores} handleSubmitProduct={this.props.handleSubmitProduct}
            />
          )} />
        </Switch>
      </div>
    );
  }
}

export default Main;