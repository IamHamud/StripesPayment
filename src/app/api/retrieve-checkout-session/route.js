import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    // Extract the session ID from the query parameters
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    // Validate the session ID
    if (!sessionId) {
      return new Response(
        JSON.stringify({ error: "Session ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Retrieve the checkout session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer"], // Expand related objects for more details
    });

    // Return the session details
    return new Response(JSON.stringify(session), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Log the error for debugging purposes
    console.error("Error retrieving checkout session:", err.message);

    // Return an error response
    return new Response(JSON.stringify({ error: err.message }), {
      status: err.statusCode || 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
