import { resend } from "./resend";
import { emailTemplate } from "./emailTemplate";

const DEVELOPER = "STREAMSURGE.DEV";

export async function sendProjectStartedEmail(
  email: string,
  packageName: string,
  dashboardUrl: string,
  customerName = "Creator"
) {
  console.log("========== PROJECT START EMAIL ==========");
  console.log("Recipient:", email);

  const response = await resend.emails.send({
    from: "StreamSurge <onboarding@resend.dev>",
    to: email,
    subject: `🚀 Your ${packageName} Project Has Started`,

    html: emailTemplate({
      title: `${packageName} Started`,
      subtitle: `Your project has officially entered production.`,
      customerName,

      status: "🟢 In Progress",

      developer: DEVELOPER,

      delivery: "4–6 Hours",

      progressStep: 2,

      buttonText: "Open My Dashboard",

      buttonUrl: dashboardUrl,

      message:
        "Our team has received your project requirements and has officially started working on your order. You can monitor progress anytime from your personal dashboard.",
    }),
  });

  console.log(response);

  return response;
}

export async function sendProjectCompletedEmail(
  email: string,
  packageName: string,
  reportUrl: string,
  customerName = "Creator"
) {
  const response = await resend.emails.send({
    from: "StreamSurge <onboarding@resend.dev>",
    to: email,
    subject: `🎉 ${packageName} Completed`,

    html: emailTemplate({
      title: `${packageName} Completed`,
      subtitle: "Your report is ready.",

      customerName,

      status: "✅ Completed",

      developer: DEVELOPER,

      delivery: "Delivered",

      progressStep: 4,

      buttonText: "Download My Report",

      buttonUrl: reportUrl,

      message:
        "Your personalized StreamSurge report is now available. Click below to download it.",
    }),
  });

  return response;
}

export async function sendReviewRequestEmail(
  email: string,
  customerName = "Creator"
) {
  const response = await resend.emails.send({
    from: "StreamSurge <onboarding@resend.dev>",
    to: email,
    subject: "⭐ We'd Love Your Feedback",

    html: emailTemplate({
      title: "Thank You!",

      subtitle: "We appreciate working with you.",

      customerName,

      status: "⭐ Review Requested",

      developer: DEVELOPER,

      delivery: "Completed",

      progressStep: 4,

      buttonText: "Leave a Review",

      buttonUrl: "https://www.fiverr.com/",

      message:
        "If you enjoyed working with StreamSurge, we'd truly appreciate your feedback.",
    }),
  });

  return response;
}