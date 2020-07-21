import React, { Component} from 'react'
import './Home.css'
import Layout from './shared/Layout'
import Products from './Products';

class Home extends Component {
  

  render() {
    const currentUser = this.props.currentUser
    console.log(currentUser);
    
    return (
      <Layout toggleLogin={this.props.toggleLogin} currentUser={this.props.currentUser} handleLogin={this.props.handleLogin}>
        <div className="home">
          <Products/>
        </div>
      </Layout>
    )
  }
}

export default Home