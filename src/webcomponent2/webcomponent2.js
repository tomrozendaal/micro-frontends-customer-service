import React, { Component } from 'react'

export default class WebComponent2 extends Component {
  render() {
    return (
      <div>
        <p>Hallo {this.props.name}!</p>
      </div>
    )
  }
}
