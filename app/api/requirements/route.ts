import { NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";
import { sendProjectStartedEmail } from "../../../lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      package: packageName,
      platform,
      channel_url,
      email,
      discord,
      followers,
      average_viewers,
      goal,
      biggest_challenge,
      notes,
      session_id,
    } = body;

    // -------------------------------------------------
    // Verify Stripe Payment (if session_id is provided)
    // -------------------------------------------------

    let paymentStatus = "Pending";

    if (session_id) {
      try {
        const session =
          await stripe.checkout.sessions.retrieve(session_id);

        if (session.payment_status === "paid") {
          paymentStatus = "Paid";
        }
      } catch (err) {
        console.error("Stripe Verification Error:", err);
      }
    }

    const estimatedCompletion = new Date(
      Date.now() + 6 * 60 * 60 * 1000
    ).toISOString();

    const { data, error } = await supabaseAdmin
      .from("requirements")
      .insert([
        {
          package: packageName,

          platform,

          channel_url,

          email,

          discord,

          followers:
            followers === "" ||
            followers === null ||
            followers === undefined
              ? null
              : Number(followers),

          average_viewers:
            average_viewers === "" ||
            average_viewers === null ||
            average_viewers === undefined
              ? null
              : Number(average_viewers),

          goal,

          biggest_challenge,

          notes,

          payment_status: paymentStatus,

          status: "In Progress",

          assigned_developer: "STREAMSURGE.DEV",

          estimated_completion: estimatedCompletion,
        },
      ])
      .select();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    try {
      await sendProjectStartedEmail(
        data[0].email,
        data[0].package,
        `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?id=${data[0].id}`,
        data[0].discord || "Creator"
      );
    } catch (err) {
      console.error("START EMAIL ERROR:", err);
    }

    console.log("Dashboard URL:", `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?id=${data[0].id}`);return NextResponse.json(
      {
        success: true,

        order: data[0],

        dashboardUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?id=${data[0].id}`,

        message: "Project Started Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}