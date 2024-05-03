import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements.getElement('card');

    try {
      const { data } = await axios.post('../pages/api/create-payment-intent', {
        amount: 89,
      });

      const clientSecret = data.clientSecret;

      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      // Payment successful, handle success scenario
    } catch (error) {
      console.log(error);
      // Payment failed, handle error scenario
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <p>HTML test payment form</p>
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
}