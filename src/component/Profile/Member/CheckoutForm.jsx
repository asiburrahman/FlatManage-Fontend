import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import React from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div className="w-11/12 md:w-5/12  mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Make Your Payment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <CardElement
          className="p-4 border border-gray-300 rounded bg-gray-50"
          options={{
            style: {
              base: {
                fontSize: '14px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe}
          className="btn btn-primary w-full text-white"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;