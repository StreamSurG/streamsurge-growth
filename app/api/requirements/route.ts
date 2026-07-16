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
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

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
          average_viewers === "" || average_viewers == null
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
      console.error("SUPABASE ERROR:", error);

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

    const dashboardUrl = `${APP_URL}/dashboard/${data.id}`;

console.log("Dashboard URL:", dashboardUrl);

try {
  await sendProjectStartedEmail(
    email,
    packageName,
    dashboardUrl,
    discord || "Creator"
  );

      console.log("✅ Project Started Email Sent");
    } catch (emailError) {
      console.error("❌ Email Error:", emailError);
    }

    return NextResponse.json({
      success: true,
      project: data,
      dashboardUrl,
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);

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