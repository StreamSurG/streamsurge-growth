import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendProjectCompletedEmail } from "../../../../lib/email";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    const { data: project, error: fetchError } = await supabase
      .from("requirements")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        {
          status: 404,
        }
      );
    }

    const { error: updateError } = await supabase
      .from("requirements")
      .update({
        status: "Completed",
        completed_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (updateError) {
      return NextResponse.json(
        {
          success: false,
          message: updateError.message,
        },
        {
          status: 500,
        }
      );
    }

    // Send completion email
    try {
      await sendProjectCompletedEmail(
        project.email,
        project.audit_url || "",
        project.discord || "Creator"
      );

      console.log("Completion email sent successfully.");
    } catch (err) {
      console.error("Email Error:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Project completed successfully.",
    });

  } catch (err) {
    console.error(err);

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