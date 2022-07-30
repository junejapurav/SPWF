import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Donation() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);




  function loadRazorpay() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post('http://localhost:4000/razorpay/create-order', {
          amount: orderAmount + '00',
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get('http://localhost:4000/razorpay/get-api-key');

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: 'NGO',
          description: 'FOR CHARITY',
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post('http://localhost:4000/razorpay/pay-order', {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg);
            
          },
          prefill: {
            name: 'example name',
            email: 'email@example.com',
            contact: '111111',
          },
          notes: {
            address: 'example address',
          },
          theme: {
            color: '#80c0f0',
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  return (
    <div className="App">
      <hr />
      <div>
        <h2> DONATION</h2>
        <label>
          Amount:{' '}
          <input
            placeholder="INR"
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
          ></input>
        </label>

        <button disabled={loading} onClick={loadRazorpay}>
          Razorpay
        </button>
        {loading && <div>Loading...</div>}
      </div>
      
    </div>
  );
}

export default Donation;