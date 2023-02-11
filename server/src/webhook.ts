import { stripe } from ".";
import Stripe from "stripe";

const webhookHandlers = {
    'payment_intent.succeeded':async (data: Stripe.PaymentIntent) => {
    
    },
    'payment_intent.failed':async (data: Stripe.PaymentIntent) => {

    }
}

export const handlerman =async (req, res) => {
    const sig = req.headers['stripe-signature']
    const event = stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.SSI )
try {
    await webhookHandlers[event.type](event.data.object)
    res.send({received: true})
} catch (error) {
     console.error(error)
     res.status(400).send(`Webhook failed: ${error.message}`)
}
}