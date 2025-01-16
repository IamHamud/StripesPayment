import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    // Log incoming request
    console.log("Incoming request received at /api/create-checkout-session");

    // Parse request body
    const { priceId } = await req.json();
    console.log("Price ID received:", priceId);

    // Log Stripe Secret Key to ensure it's loaded (do not do this in production)
    console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

    // Log success and cancel URLs for debugging
    console.log("Success URL:", `${process.env.NEXT_PUBLIC_DOMAIN}/success`);
    console.log("Cancel URL:", `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`);

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`, // Make sure this points to your live domain
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`, // Same for cancel URL
    });

    console.log("Stripe Checkout session created successfully:", session.id);

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Log error details
    console.error("Error creating Stripe Checkout session:", err.message);
    console.error("Error details:", err);

    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
