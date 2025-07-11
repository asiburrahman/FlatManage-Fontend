import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
     const location = useLocation();
  const paymentInfo = location.state;
  console.log(paymentInfo);
  
console.log(stripePromise);


    return (
        <Elements
         stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripePayment;