import Webcomponent from './webcomponent2'
import React from 'react'
import ReactDOM from 'react-dom'
import { getProps } from '../util'

export default class Microfrontend extends HTMLElement {
  attachedCallback() {
    const props = getProps(this.attributes)
    ReactDOM.render(<Webcomponent {...props} />, this.attachShadow({ mode: 'open' }))
  }
}
