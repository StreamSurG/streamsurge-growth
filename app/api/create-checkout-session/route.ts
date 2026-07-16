import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const prices: Record<
  string,
  {
    amount: number;
    description: string;
  }
> = {
  Audit: {
    amount: 2900,
    description: "Professional Stream Audit",
  },

  Basic: {
    amount: 9900,
    description: "Basic Growth Package",
  },

  Advanced: {
    amount: 24900,
    description: "Advanced Growth Package",
  },

  Premium: {
    amount: 49900,
    description: "Premium Growth Package",
  },
};

export async function POST(req: Request) {
  try {
    const { packageName } = await req.json();

    if (!packageName || !prices[packageName]) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid package selected.",
        },
        { status: 400 }
      );
    }

    const selected = prices[packageName];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card"],

      line_items: [
        {
          quantity: 1,

          price_data: {
            currency: "usd",

            unit_amount: selected.amount,

            product_data: {
              name: `StreamSurge ${packageName}`,
              description: selected.description,
            },
          },
        },
      ],

      success_url:
        `${APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&package=${encodeURIComponent(
          packageName
        )}`,

      cancel_url:
        `${APP_URL}/payment/cancel`,
    });

    return NextResponse.json({
      success: true,
      url: session.url,
    });

  } catch (error) {
    console.error("Stripe Checkout Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create checkout session.",
      },
      {
        status: 500,
      }
    );
  }
}