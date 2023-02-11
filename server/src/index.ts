import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';

import Stripe from 'stripe';
import { createStripeCheckoutSession } from './checkout';

dotenv.config({path: path.resolve(__dirname , "./config/.env")})
export const app = express()
app.use(cors())
app.use(express.json({verify: (req , res , buffer) => (req['rawBody'] = buffer),}))
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15'
})

export function Runner(callback : Function) {
  return (req : Request, res : Response, next : NextFunction) => {
    callback(req, res, next).catch(next)
  }
}

app.post('/checkouts/',Runner(async ({body} : Request, res : Response) => {
res.send(
  await createStripeCheckoutSession(body.line_items)
)
}))


const PORT =  process.env.PORT || 8000 
const server = app.listen(PORT, () => {
    console.log(`Server is listing on port ${PORT}`);
  });
 server.on('error', e => console.error("Error", e));







