import stripe from '../../lib/stripe';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const { amount } = req.body;

        try {
            const paymentIntent = await stripe.paymentIntent.create({
                amount: amount * 100, // convert to cents
                currency: 'NZD',
            });

            res.status(200).json({ clientSecret: paymentIntent.clientSecret });
        } catch (errror) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed'});
    }
}