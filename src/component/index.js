import CustomerService from './CustomerService'
import React from 'react'
import ReactDOM from 'react-dom'
import { getProps } from '../util'

import css from '!!raw-loader!./style.css'

class Microfrontend extends HTMLElement {
  constructor() {
    super()
    const mountPoint = document.createElement('div')
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(mountPoint)

    const style = document.createElement('style')

    style.textContent = css
    shadow.appendChild(style)

    const props = getProps(this.attributes)
    ReactDOM.render(<CustomerService {...props} />, mountPoint)
  }
}

export default Microfrontend
