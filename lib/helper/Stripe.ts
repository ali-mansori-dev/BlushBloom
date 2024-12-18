import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-11-20.acacia", // Ensure compatibility with your Stripe version
});

interface LineItem {
  name: string;
  price: number;
  quantity: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        items,
        successUrl,
        cancelUrl,
      }: { items: LineItem[]; successUrl: string; cancelUrl: string } =
        req.body;

      // Map items to Stripe line items
      const lineItems = items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Convert dollars to cents
        },
        quantity: item.quantity,
      }));

      // Create the checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: successUrl,
        cancel_url: cancelUrl,
      });

      res.status(200).json({ id: session.id });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
