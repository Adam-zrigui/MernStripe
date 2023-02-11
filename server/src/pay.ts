import { stripe } from ".";

export async function createPayment(amount:number) {
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd'
    })
    return paymentIntent
}