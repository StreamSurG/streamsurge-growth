import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendProjectStartedEmail } from "../../../lib/email";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
    } = body;

    const estimatedCompletion = new Date(
      Date.now() + 6 * 60 * 60 * 1000
    ).toISOString();

    const { data, error } = await supabase
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

          status: "In Progress",

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
      await sendProjectStartedEmail(email);
    } catch (emailError) {
      console.error("Email Error:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        order: data[0],
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