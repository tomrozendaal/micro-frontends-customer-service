import React, { Component } from 'react'

export default class WebComponent extends Component {
  render() {
    return (
      <div className="mf-customer-service">
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Customer-Free-Download-PNG.png"
          alt="customer-service"
        />
        <div className="content">
          <h2>Customer service</h2>
          <p>Need help? Contact our customer service.</p>
          <button>Chat</button>
        </div>
      </div>
    )
  }
}
