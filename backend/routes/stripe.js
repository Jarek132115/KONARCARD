const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
    const { product } = req.body;

    console.log("📦 Received product:", product);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: product?.name || "Missing Name",
                            images: [product?.image || "https://via.placeholder.com/300"],
                        },
                        unit_amount: Math.round(product?.price * 100 || 0),
                    },
                    quantity: 1,
                },
            ],
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });

        console.log("✅ Stripe session created:", session.id);

        res.status(200).json({ url: session.url });
    } catch (err) {
        console.error("❌ Stripe session creation failed:", err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
