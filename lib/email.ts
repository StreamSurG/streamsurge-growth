import { resend } from "./resend";

export async function sendProjectStartedEmail(email: string) {
  return resend.emails.send({
    from: "StreamSurge <noreply@YOURDOMAIN.COM>",
    to: email,
    subject: "✅ Your StreamSurge Project Has Started",
    html: `
      <div style="font-family:Arial;padding:40px">

        <h2>Welcome to StreamSurge 🚀</h2>

        <p>Your project has officially started.</p>

        <p><strong>Status:</strong> 🟢 In Progress</p>

        <p><strong>Estimated Delivery:</strong> 4–6 Hours</p>

        <p><strong>Assigned Developer:</strong> STREAMSURGE.DEV</p>

      </div>
    `,
  });
}

export async function sendProjectCompletedEmail(email: string) {
  return resend.emails.send({
    from: "StreamSurge <noreply@YOURDOMAIN.COM>",
    to: email,
    subject: "🎉 Your StreamSurge Project is Complete",
    html: `
      <div style="font-family:Arial;padding:40px">

        <h1>🎉 Project Completed</h1>

        <p>Your StreamSurge project has been completed successfully.</p>

        <p><strong>Status:</strong> ✅ Completed</p>

        <p><strong>Developer:</strong> STREAMSURGE.DEV</p>

        <p>Login to your dashboard to download your audit.</p>

        <a
          href="https://streamsurge-site.vercel.app/dashboard"
          style="
            background:#7c3aed;
            color:#fff;
            padding:14px 24px;
            border-radius:8px;
            text-decoration:none;
            display:inline-block;
            margin-top:20px;
          "
        >
          Open Dashboard
        </a>

      </div>
    `,
  });
}