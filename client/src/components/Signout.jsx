import React, { Component } from 'react'

export default class Signout extends Component {

   render() {
    const { history } = this.props;

    this.props.handleLogout();
        history.push('/')
    return (
      ''
    )
  }
}
