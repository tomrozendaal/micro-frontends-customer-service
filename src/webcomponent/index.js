import Webcomponent from './webcomponent'
import React from 'react'
import ReactDOM from 'react-dom'
import { getProps } from '../util'

export default class Microfrontend extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)

    const props = getProps(this.attributes)
    ReactDOM.render(<Webcomponent {...props} />, mountPoint)
  }
}
