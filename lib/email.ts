import { resend } from "./resend";

export async function sendProjectStartedEmail(email: string) {
  try {
    const response = await resend.emails.send({
      from: "StreamSurge <onboarding@resend.dev>",
      to: email,
      subject: "🚀 Your StreamSurge Project Has Started",
      html: `
        <div style="font-family:Arial;padding:40px">

          <h1>🚀 Project Started</h1>

          <p>Thank you for choosing <strong>StreamSurge</strong>.</p>

          <p>Your Stream Audit has officially started.</p>

          <hr />

          <p><strong>Status:</strong> 🟢 In Progress</p>

          <p><strong>Estimated Delivery:</strong> 4–6 Hours</p>

          <p><strong>Assigned Developer:</strong> STREAMSURGE.DEV</p>

        </div>
      `,
    });

    console.log("START EMAIL SENT:", response);

    return response;
  } catch (error) {
    console.error("START EMAIL ERROR:", error);
    throw error;
  }
}

export async function sendProjectCompletedEmail(email: string) {
  try {
    const response = await resend.emails.send({
      from: "StreamSurge <onboarding@resend.dev>",
      to: email,
      subject: "🎉 Your StreamSurge Project Is Complete",
      html: `
        <div style="font-family:Arial;padding:40px">

          <h1>🎉 Project Completed</h1>

          <p>Your StreamSurge audit has been completed.</p>

          <p><strong>Status:</strong> ✅ Completed</p>

          <p><strong>Developer:</strong> STREAMSURGE.DEV</p>

          <br/>

          <a
            href="https://streamsurge-growth.vercel.app/dashboard"
            style="
              background:#7c3aed;
              color:white;
              padding:14px 24px;
              border-radius:8px;
              text-decoration:none;
              display:inline-block;
            "
          >
            Open Dashboard
          </a>

        </div>
      `,
    });

    console.log("COMPLETE EMAIL SENT:", response);

    return response;
  } catch (error) {
    console.error("COMPLETE EMAIL ERROR:", error);
    throw error;
  }
}