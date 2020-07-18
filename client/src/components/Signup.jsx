import React, { Component } from 'react'


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
  
  // handleSignup = () => {
  //   history.push('/');
  //  }

  render() {
    const { handleSignup, history } = this.props;

    return (
      <div>
       <h1>Please provide your info</h1>
        {/* <form onSubmit={this.handleSignup}> */} 
         <form onSubmit={(e) => {
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
              />
              <input
                name='last_name'
                placeholder='last_name'
                type='text'
                // disabled={signingUp}
                value={this.state.last_name}
                onChange={this.handleChange}
              />
          
              <input
                name='email'
                placeholder='email'
                type='text'
                // disabled={signingUp}
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                name='password'
                placeholder='password'
                type='password'
                // disabled={signingUp}
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input
                name='confirmPassword'
                placeholder='Repeat password'
                type='password'
                // disabled={signingUp}
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />

              <button>Signup</button>
          </form>
      </div>
    )
  }
}
