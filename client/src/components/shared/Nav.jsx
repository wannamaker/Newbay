import React, { Component } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import { render } from '@testing-library/react';
import Login from '../Login';

class Nav extends Component {
  state = {
    showModal: false,
  }
  
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }))
  };

  
  render() {
    const currentUser = this.props.currentUser;
    console.log(this.props.currentUser);
    // this.state.toggleLogin = this.props.toggleLogin
    // this.props.handleLogout()
    return (
      <div>
        {this.state.showModal && (
          <Login 
            toggleModal={this.toggleModal} showModal={this.state.showModal}
            handleLogin={this.props.handleLogin}
          />
        )}
      
      <nav>
        <div className="nav">
          <NavLink className="logo" to="/"><img src={logo} alt="Logo" /></NavLink>
          <div className="search">
          <input type="text" placeholder="Search item" className="search-input"/>
            <button className="search-button">GO</button>
          </div>
          
          <div className="links">
            
          { currentUser &&
              <div className="userName"><p>Hi {currentUser.first_name}!</p></div>
            }
            { (this.props.toggleLogin) ?
              <Link className="link" to="/" onClick={this.toggleModal} >Login/Signup</Link> :
              <NavLink className="link" to="/signout">Signout</NavLink>
            }  
            <div className="cart-in-nav">
              <NavLink className="cart-link" to="/">
                <img className="cart-img" src={cart} alt="cart" />
                <p className="cart-in-cart">Cart</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav2">
          <NavLink className="link3" to="/stores">My Stores</NavLink>
        </div>
      </nav>
    </div>
    )
  }
}

export default Nav