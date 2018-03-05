import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState = (() => ({ loading: true, purchasing: true }));
    const order  = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Victor Estopiñan',
        address: {
          street: 'Vapor entre Espada y Hospital apt 131',
          zipcode: '123233',
          country: 'Cuba'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState = (() => ({ loading: false}));
      })
      .catch(error => {
        this.setState = (() => ({ loading: false}));
      });
  }

  render() {
    return (
      <div>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name"/>
          <input type="email" name="email" placeholder="Your email"/>
          <input type="text" name="street" placeholder="Street"/>
          <input type="text" name="postal" placeholder="Postal Code"/>
          <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;
