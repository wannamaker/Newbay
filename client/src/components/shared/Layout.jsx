import React, { Component } from 'react'
import './Layout.css'
import Nav from './Nav'
import Footer from './Footer'
import { render } from '@testing-library/react'

class Layout extends Component {
  render() {
    const currentUser = this.props.currentUser
  return(
  
    <div className='layout'>
        <Nav toggleLogin={this.props.toggleLogin} currentUser={this.props.currentUser} handleLogin={this.props.handleLogin}/>
        <div className="layout-children">
            {this.props.children}
        </div>
        <Footer />
    </div>
)
  }
}
export default Layout