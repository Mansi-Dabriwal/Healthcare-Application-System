import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
    const [loading, setLoading] = useState(false);
    const [orderAmount, setOrderAmount] = useState(0);
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState(false);

    async function fetchOrders(){
        const { data } = await axios.get('http://localhost:4000/razorpay/list-orders');
        setOrders(data);
    }
    useEffect(() => {
        fetchOrders();
    },[]);

  function loadRazorpay(){
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror= () =>{
        alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
        try{
          setLoading(true);
          const result = await axios.post('http://localhost:4000/razorpay/create-order',{
            amount:orderAmount+"00",
          });

          const { amount, id:order_id, currency} = result.data;
          const {
            data: {key:razorpayKey},
          } = await axios.get('http://localhost:4000/razorpay/get-razorpay-key');

          const options = {
            key:razorpayKey,
            amount: amount.toString(),
            currency:currency,
            name:'Enter your details',
            description: 'example transaction',
            order_id: order_id,
            handler: async function(response){
                const result = await axios.post('http://localhost:4000/razorpay/pay-order',{
                    amount:amount,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.rzorpay_order_id,
                    razorpaySignature:response.razorpay_signature,
                });
                alert(result.data.msg);
                if(result.data.msg=='Payment was successfull'){
                    setMessage(true);
                }
                fetchOrders();
            },
            prefill:{
                name:'example name',
                email:'email@example.com',
                contacts:'11111',
            }, 
            notes:{
                address:'example address',
            },
            theme: {
                color:'#80c0f0',
            },
          };

          setLoading(false);
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        }catch(err) {
            alert(err);
            setLoading(false);
        }
    }
    document.body.appendChild(script);
}

  return (
    <div>
        <h1>Payment Portal</h1><br></br>
        <div>
        <label>
        Amount: {' '}
            <input 
            placeholder='INR'
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
            ></input>
            
        </label>  <br></br><br></br>
        <button disabled={loading} onClick={loadRazorpay} className="btn btn-default">
                Razorpay
            </button> <button className="btn btn-default"><Link to="/home" style={{ textDecoration: 'none',color: '#FFF' }}>Back</Link></button>
            {loading && <div>Loading....</div>}
        </div>
        <div className='list-orders'>
        <br></br>
        <h3>{orders.map((x,index) =>(
                   
                    index==(orders.length-1)&& message? 
                <p>Your payment of <b>{x.amount}Rs.</b> was successfull with payment id <b>{x.razorpay.paymentId}</b></p>
                    :null
                ))}</h3>
        {/* <button className="btn btn-default">Back</button> */}
       
        
        </div>
    </div>
  )
}
