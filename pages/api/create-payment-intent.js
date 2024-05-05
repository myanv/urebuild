// import stripe from '../../lib/stripe';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // amount = amount * 100 convert to cents
            currency: 'nzd',
            automatic_payment_methods: {
                enabled: true,
            }
        });

        res.send({ 
            clientSecret: paymentIntent.client_secret, 
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}