import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    showSignupModal: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  closeModal = (e) => {
    if (e.target.className === 'login-container') {
      this.props.toggleModal()
    }
  }

  toggleSignupModal = () => {
    this.setState(prevState => ({
      showSignupModal: !prevState.showSignupModal
    }))
  };


  render() {
    const { email, password } = this.state;
    const { handleLogin, history } = this.props;

    return (
      <div className="login-container" onClick={this.closeModal}>
        <div className="form-container">
           <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin({email: this.state.email, password: this.state.password});
        // history.push('/')
        this.props.toggleModal()
          }}
          className="form-login"
          >
        <h3>Login</h3>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="input-login"
          />
       
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="input-login"  
          />
          <button className="button-login">Submit</button>
             <div className="link-register">
            <Link to="/signup" onClick={this.toggleSignupModal} className="link-register">Register new account?</Link>
            </div>
          
          </form>
          </div>
    </div>
    )
  }
}
