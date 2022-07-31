import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import './donation.css'
import AboutUsImage from '../components/AboutUsImage';
import donationimage from '../img/donate.jpeg'

function Donation() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState();
  const [Name,nameSetHandler]= useState('');
  const [Email,emailSetHandler]= useState('');
  const [Phone,phoneSetHandler]= useState();

  const nameHandler=(event)=>{
    nameSetHandler(event.target.value)
}
const emailHandler=(event)=>{
    
    emailSetHandler(event.target.value);
}
const phoneHandler=(event)=>{
    phoneSetHandler(event.target.value)

}

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
            name: Name,
            email: Email,
            contact: Phone,
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
    
      <div>
        <Header/>
        <AboutUsImage heading="`Giving is not about making a donation, It's about making a difference!`" image={donationimage}/>
        <br/>
        <br/>
    <div className='donation-form'>
    <h2 style={{textAlign:"center"}}> DONATION</h2>
        <input type="text" placeholder="Enter Name" onChange={nameHandler} value={Name}/>
        <input type="text" placeholder="Enter Email" onChange={emailHandler} value={Email}/>
        <input type="text" placeholder="Enter Mobile Number" onChange={phoneHandler} value={Phone}/>
        
          <input
            placeholder="Enter Amount"
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
          ></input>
       

        <button style={{borderRadius:"10px"}} disabled={loading} onClick={loadRazorpay}>
          Donate
        </button>
    </div>
        {loading && <div>Loading...</div>}
        <Footer/>
      </div>
      

  );
}

export default Donation;