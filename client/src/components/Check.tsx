import { useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React from 'react'
import Fetcher from './Help'

export default function Check() {
 const [pro , setPro] = React.useState({
    name: 'hat',
    description:' pug hat 69!',
    images: [
        'https://i.ytimg.com/vi/XFB5gzrZmW0/maxresdefault.jpg'
    ],
    amount: 899,
    currency: 'usd',
    quantity: 0

 })   
 const changer = (v : any) => setPro({...pro, quantity: Math.max(0, pro.quantity + v)}) 
const stripe =useStripe()
const handleClick =async (e : any) => {
    const body = {line_items: [pro]}
    const res = await axios.post(`http://localhost:5500/checkouts`, { body });
    const {id : sessionId} = res.data;
    const result = await stripe?.redirectToCheckout({
        sessionId
    });
    
    if (result && result.error) {
        console.error(result.error)
    }
    
    
}
  return (
    <>
    <h3>{pro.name}</h3>
    <h4>Amount : {pro.amount}</h4>
    <img src={pro.images[0]} alt="" />
<button onClick={() => changer(-1)}>
    -
</button>
<span>
    {pro.quantity}
</span>
<button onClick={() => changer(1)}>
    +
</button>
<hr />
<button disabled={pro.quantity < 1} onClick={handleClick}>buy!</button>
    </>
  )
}
