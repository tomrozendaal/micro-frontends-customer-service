import Webcomponent from './webcomponent1'
import React from 'react'
import ReactDOM from 'react-dom'

export default class Microfrontend extends HTMLElement {
  attachedCallback() {
    ReactDOM.render(<Webcomponent />, this.attachShadow({ mode: 'open' }))
  }
}
