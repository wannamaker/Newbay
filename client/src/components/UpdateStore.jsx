import React, { Component } from 'react'
import './UpdateStore.css'

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

  closeModal = (e) => {
    const history = this.props.history
    if (e.target.className === 'Update-container') {
      // this.props.toggleModal()
      history.push('/stores')
    }
  }

  render() {
    const history = this.props.history
    return (
      <div className="Update-container" onClick={this.closeModal}>
            <div className="Update-form-container">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.handleUpdateStore(this.props.match.params.id, this.state);
                  history.push('/stores')
                }}>
                <input type="text" name="name" placeholder='name' value={this.state.name} onChange={this.handleChange} className="input-update" />
                <input type="text" name="description" placeholder='description' value={this.state.description} onChange={this.handleChange} className="input-update" />
                  <button className="submit-update">Submit Update</button>
                </form>
            </div>
              {/* <button onClick={this.props.deleteStore}>Delete Store</button> */}
      </div>
    )
  }
}

// {`${store.name}`}{`${store.description}`}