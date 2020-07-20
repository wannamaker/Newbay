import React, { Component } from 'react'

export default class UpdateStore extends Component {
  state = {
    name: '',
    description: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.handleUpdateStore(this.props.match.params.id, this.state);
                  // history.push('/');
                }}>
                <input type="text" name="name" placeholder='name' value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="description" placeholder='description' value={this.state.description} onChange={this.handleChange} />
                  <button>Submit</button>
                </form>
              
              {/* <button onClick={this.props.deleteStore}>Delete Store</button> */}
      </div>
    )
  }
}

// {`${store.name}`}{`${store.description}`}