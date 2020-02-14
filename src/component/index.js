import CustomerService from './CustomerService'
import React from 'react'
import ReactDOM from 'react-dom'
import { getProps } from '../util'

import css from '!!raw-loader!./style.css'

export default class Microfrontend extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span')
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(mountPoint)

    const style = document.createElement('style')

    style.textContent = css
    shadow.appendChild(style)

    const props = getProps(this.attributes)
    ReactDOM.render(<CustomerService {...props} />, mountPoint)
  }
}
