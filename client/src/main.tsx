import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { QueryClient , QueryClientProvider , useQuery } from '@tanstack/react-query'
import axios from 'axios'

const query = new QueryClient()


export const stripePromise    = loadStripe("pk_test_51MMp6hDzFn2nyuHSzacZ1xnQKYcO42OzmcT6C1i4OZ64kd8AYgLWu9U5azHDj9TVIhYgW63UJo9uWLbkWvHGz0zy00haoA6NPj")
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<QueryClientProvider client={query}>
    <BrowserRouter>
<Elements stripe={stripePromise} >
<App />
  </Elements> 
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
