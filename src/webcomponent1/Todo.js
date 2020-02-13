import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const { todo } = this.props
    return <li>{todo.title}</li>
  }
}
