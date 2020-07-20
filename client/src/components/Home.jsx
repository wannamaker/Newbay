import React, { Component} from 'react'
import './Home.css'
import Layout from './shared/Layout'

class Home extends Component {
  

  render() {
    const currentUser = this.props.currentUser
    console.log(currentUser);
    
    return (
      <Layout toggleLogin={this.props.toggleLogin} currentUser={this.props.currentUser} handleLogin={this.props.handleLogin}>
        <div className="home">
          <h1>Products to be displayed</h1>
        </div>
      </Layout>
    )
  }
}

export default Home