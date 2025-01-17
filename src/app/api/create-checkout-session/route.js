import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    // Log the incoming request for debugging
    console.log("Creating a Stripe Checkout session");

    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    if (!domain) {
      throw new Error("NEXT_PUBLIC_DOMAIN environment variable is not set.");
    }

    // Parse the incoming request to get the priceId and quantity (optional)
    const body = await req.json();
    const { priceId, quantity = 1 } = body;

    if (!priceId) {
      throw new Error("Price ID is required to create a checkout session.");
    }

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId, // Use the price ID provided in the request
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${domain}/success?session_id={CHECKOUT_SESSION_ID}`, // Success URL with session ID
      cancel_url: `${domain}/cancel`, // Cancel URL
    });

    // Respond with the session URL
    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error creating Stripe Checkout session:", err.message);

    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: err.statusCode || 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
