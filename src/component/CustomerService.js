import React from 'react'

class CustomerService extends React.Component {
  render() {
    return (
      <div className="mf-customer-service">
        <img src="http://getdrawings.com/free-icon/customer-care-icon-61.png" alt="customer-service" />
        <div className="content">
          <h2>Customer service</h2>
          <p>Need help? Contact our customer service.</p>
          <button>Chat</button>
        </div>
      </div>
    )
  }
}

export default CustomerService
