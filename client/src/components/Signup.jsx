import React, { Component } from 'react'
import './Signup.css'

export default class Signup extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    currentUser: '',
    showModal: ''
  };
  
   handleChange = (e) => {
     e.preventDefault()
     const { name, value } = e.target;
     this.setState({
       [name]: value
     })
   }
  
  closeModal = (e) => {
     const history = this.props.history
    if (e.target.className === 'signup-container') {
      // this.props.toggleModal()
      history.push('/')
    }
  }

  render() {
    const { handleSignup, history } = this.props;

    return (
      <div className="signup-container" onClick={this.closeModal}>
         <div className="signup-form-container">
       <h1>Please provide your info</h1>
        {/* <form onSubmit={this.handleSignup}> */} 
         <form className="form-login" onSubmit={(e) => {
        e.preventDefault();
        handleSignup(this.state);
        history.push('/');
      }}>
              
              <input
                name='first_name'
                placeholder='firstName'
                type='text'
                // disabled={signingUp}
                value={this.state.first_name}
              onChange={this.handleChange}
              className="input-login"
              />
              <input
                name='last_name'
                placeholder='last_name'
                type='text'
                // disabled={signingUp}
                value={this.state.last_name}
              onChange={this.handleChange}
              className="input-login"
              />
          
              <input
                name='email'
                placeholder='email'
                type='text'
                // disabled={signingUp}
                value={this.state.email}
              onChange={this.handleChange}
              className="input-login"
              />
              <input
                name='password'
                placeholder='password'
                type='password'
                // disabled={signingUp}
                value={this.state.password}
              onChange={this.handleChange}
              className="input-login"
              />
              <input
                name='confirmPassword'
                placeholder='Repeat password'
                type='password'
                // disabled={signingUp}
                value={this.state.confirmPassword}
              onChange={this.handleChange}
              className="input-login"
              />

              <button className="button-login">Signup</button>
          </form>
        </div>
      </div>
    )
  }
}
