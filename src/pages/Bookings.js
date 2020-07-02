import React, { Component } from 'react'

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
     event.preventDefault()
      alert("We have received your request and will get back to you in 3 - 5 working days")   
  }

  render() {
    return (
      <div className="booking-form">
        <h1 className="heading-booking">Book a cocktail masterclass with us</h1>
          <form action="/">
            <div className="form-group">
              <label htmlFor="booking-name">Name   </label>
              <input id="booking-name" className="booking" name="name" type="text" placeholder="Name" required></input>
            </div>
            <div className="form-group">
              <label htmlFor="booking-email">Email   </label>
              <input id="booking-email" className="booking" name="password" type="email" placeholder="Email" required></input>
            </div>

            <button type="button" className="btn btn-booking btn-animated" onClick={this.handleSubmit}>Submit</button>
          </form>

        </div>
    )
  }
}
