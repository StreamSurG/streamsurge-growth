import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendProjectStartedEmail } from "../../../lib/email";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("========================================");
    console.log("NEW REQUIREMENT SUBMISSION");
    console.log("========================================");
    console.log("Request Body:", body);
    console.log("Email Received:", body.email);

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

    if (!packageName || !platform || !channel_url || !email) {
      console.log("❌ Missing required fields");

      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("Saving project to Supabase...");

    const { data, error } = await supabase
      .from("requirements")
      .insert({
        package: packageName,
        platform,
        channel_url,
        email,
        discord,

        followers:
          followers === "" || followers == null
            ? null
            : Number(followers),

        average_viewers:
          average_viewers === "" ||
          average_viewers == null
            ? null
            : Number(average_viewers),

        goal,
        biggest_challenge,
        notes,

        status: "In Progress",

        payment_status: session_id
          ? "Paid"
          : "Pending",

        assigned_developer: "STREAMSURGE.DEV",
      })
      .select()
      .single();

    if (error) {
      console.error("========================================");
      console.error("SUPABASE ERROR");
      console.error(error);
      console.error("========================================");

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

    console.log("✅ Saved Successfully");
    console.log("Database Email:", data.email);

    const dashboardUrl =
      `${APP_URL}/dashboard/${data.id}`;

    console.log("Dashboard URL:", dashboardUrl);

    try {
      console.log("========================================");
      console.log("SENDING EMAIL");
      console.log("Recipient:", email);
      console.log("Package:", packageName);
      console.log("Dashboard:", dashboardUrl);
      console.log("========================================");

      const emailResponse =
        await sendProjectStartedEmail(
          email,
          packageName,
          dashboardUrl,
          discord || "Creator"
        );

      console.log("✅ Email Sent");
      console.log(emailResponse);
    } catch (emailError) {
      console.error("========================================");
      console.error("EMAIL ERROR");
      console.error(emailError);
      console.error("========================================");
    }

    return NextResponse.json({
      success: true,
      project: data,
      dashboardUrl,
    });

  } catch (err) {
    console.error("========================================");
    console.error("SERVER ERROR");
    console.error(err);
    console.error("========================================");

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      }
    );
  }
}