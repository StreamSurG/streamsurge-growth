import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendProjectCompletedEmail } from "@/lib/email";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const id = formData.get("id") as string;

    if (!file || !id) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing file or project id.",
        },
        {
          status: 400,
        }
      );
    }

    // Fetch project
    const { data: project, error: fetchError } = await supabase
      .from("requirements")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !project) {
      console.error(fetchError);

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

    // Convert uploaded file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${id}-${Date.now()}-${file.name}`;

    // Upload to Storage
    const { error: uploadError } = await supabase.storage
      .from("audits")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error(uploadError);

      return NextResponse.json(
        {
          success: false,
          message: uploadError.message,
        },
        {
          status: 500,
        }
      );
    }

    // Generate public URL
    const { data: publicUrlData } = supabase.storage
      .from("audits")
      .getPublicUrl(fileName);

    const auditUrl = publicUrlData.publicUrl;

    // Save audit info
    const { error: updateError } = await supabase
      .from("requirements")
      .update({
        status: "Completed",
        completed_at: new Date().toISOString(),
        audit_file: fileName,
        audit_url: auditUrl,
      })
      .eq("id", id);

    if (updateError) {
      console.error(updateError);

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

    // Send email
    try {
      const emailResponse = await sendProjectCompletedEmail(
  project.email,
  auditUrl,
  project.discord || "Creator"
);

      console.log("================================");
      console.log("PROJECT COMPLETION EMAIL SENT");
      console.log(emailResponse);
      console.log("================================");
    } catch (emailError) {
      console.error("================================");
      console.error("EMAIL FAILED");
      console.error(emailError);
      console.error("================================");

      return NextResponse.json(
        {
          success: false,
          message: "Project completed, but email failed.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Audit uploaded successfully.",
      auditUrl,
    });

  } catch (error) {
    console.error("UPLOAD ERROR");
    console.error(error);

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