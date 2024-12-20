import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

export const POST = async (request: NextRequest) => {
  const { products, successUrl, cancelUrl } = await request.json();
  let activeProducts = await stripe.products.list({ active: true });
  console.log(activeProducts);

  try {
    //  1. Find products from stripe that matches products from cart.
    for (const product of products) {
      const matchedProducts = activeProducts?.data?.find(
        (stripeProduct: any) =>
          stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      //  2. If product didn't exist in Stripe, then add this product to stripe.
      if (matchedProducts == undefined) {
        const prod = await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
          },
        });
      }
    }
  } catch (error) {
    console.log("Error in creating a new product", error);
    throw error;
  }

  //  3. Once the new product has been added to stripe, do FETCH Products again with updated products from stripe
  activeProducts = await stripe.products.list({ active: true });
  let stripeProducts = [];

  for (const product of products) {
    const stripeProduct = activeProducts?.data?.find(
      (stripeProduct: any) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
    );

    if (stripeProduct) {
      stripeProducts.push({
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: stripeProduct?.default_price,
        quantity: product.quantity,
      });
    }
  }

  // 4. Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    line_items: stripeProducts,
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return NextResponse.json({
    url: session.url,
  });
};

// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
//   apiVersion: "2024-11-20.acacia", // Ensure compatibility with your Stripe version
// });

// interface LineItem {
//   name: string;
//   price: number;
//   quantity: number;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   return res.status(200).json({ id: "dd" });
//   if (req.method === "POST") {
//     try {
//       const {
//         items,
//         successUrl,
//         cancelUrl,
//       }: { items: LineItem[]; successUrl: string; cancelUrl: string } =
//         req.body;

//       // Map items to Stripe line items
//       const lineItems = items.map((item) => ({
//         price_data: {
//           currency: "usd",
//           product_data: { name: item.name },
//           unit_amount: item.price * 100, // Convert dollars to cents
//         },
//         quantity: item.quantity,
//       }));

//       // Create the checkout session
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: lineItems,
//         mode: "payment",
//         success_url: successUrl,
//         cancel_url: cancelUrl,
//       });

//       res.status(200).json({ id: session.id });
//     } catch (err: any) {
//       res.status(500).json({ error: err.message });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end("Method Not Allowed");
//   }
// }
