import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import React, { useEffect, useState } from 'react';
import { ClipLoader } from "react-spinners";
import UseAxiosToken from '../../hooks/UseAxiosToken';
import useAuth from '../../hooks/UseAuth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CheckoutForm = ({paymentInfo}) => {
  const {rent, month, floor, email, discount, block, apartment} = paymentInfo || []
 
  const axiosSecure = UseAxiosToken()
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const {user} = useAuth()

  useEffect(() => {
    const getClientSecret = async () => {
      // server request...
      const { data } = await axiosSecure.post('/create-payment-secret', {
        paymentInfo
      })
      setClientSecret(data?.clientSecret)
    }
    getClientSecret()
  }, [axiosSecure, paymentInfo])
  console.log(clientSecret);
  

  const handleSubmit = async (event) => {
    setProcessing(true)
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
      setCardError(error.message)
      setProcessing(false)
      return
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }


    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    })

    console.log(result);




}

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
        {cardError && <p className='text-red-600 '>{cardError}</p> }
        <button
          type="submit"
          disabled={!stripe || processing}
          className="btn btn-primary w-full text-white space-x-1"
        >
         {processing ? <ClipLoader></ClipLoader> :`Pay Now ${rent}` } 
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;