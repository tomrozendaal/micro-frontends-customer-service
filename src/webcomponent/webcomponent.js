import React, { Component } from 'react'

export default class WebComponent extends Component {
  render() {
    return (
      <div>
        <p>Hallo {this.props.name}!</p>
      </div>
    )
  }
}
