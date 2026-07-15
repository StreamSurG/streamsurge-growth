import { resend } from "./resend";
import { emailTemplate } from "./emailTemplate";

const WEBSITE = "https://streamsurge-growth.vercel.app";
const DEVELOPER = "STREAMSURGE.DEV";

export async function sendProjectStartedEmail(
  email: string,
  packageName: string,
  dashboardUrl: string,
  customerName = "Creator"
) {
  console.log("================================");
  console.log("START EMAIL");
  console.log("Recipient:", email);
  console.log("================================");

  const response = await resend.emails.send({
    from: "StreamSurge <onboarding@resend.dev>",
    to: email,
    subject: `🚀 Your ${packageName} Has Started`,

    html: emailTemplate({
      title: `${packageName} Started`,
      subtitle: `Your ${packageName} is now underway.`,
      customerName,

      status: "🟢 In Progress",

      developer: DEVELOPER,

      delivery: "4–6 Hours",

      progressStep: 3,

      buttonText: "Open My Dashboard",

buttonUrl: dashboardUrl,

      message: `Our development team has officially started your ${packageName}. We are reviewing your project and preparing personalized recommendations to help you grow faster.`,
    }),
  });

  console.log("START EMAIL RESPONSE:");
  console.log(response);
  console.log("================================");

  return response;
}

export async function sendProjectCompletedEmail(
  email: string,
  auditUrl: string,
  packageName: string,
  customerName = "Creator"
) {
  console.log("================================");
  console.log("COMPLETION EMAIL");
  console.log("Recipient:", email);
  console.log("================================");

  try {
    const response = await resend.emails.send({
      from: "StreamSurge <onboarding@resend.dev>",
      to: email,
      subject: `🎉 Your ${packageName} Is Complete`,

      html: emailTemplate({
        title: `${packageName} Completed`,

        subtitle: `Your ${packageName} has been completed successfully.`,

        customerName,

        status: "✅ Completed",

        developer: DEVELOPER,

        delivery: "Delivered",

        progressStep: 4,

        buttonText: "📄 Download My Report",

        buttonUrl: auditUrl,

        message: `Congratulations! Your ${packageName} has been completed successfully by the StreamSurge team. Your personalized report is now ready. Click the button below to download your completed report instantly.`,
      }),
    });

    console.log("================================");
    console.log("COMPLETION EMAIL RESPONSE");
    console.log(response);
    console.log("================================");

    return response;
  } catch (error) {
    console.log("================================");
    console.log("COMPLETION EMAIL ERROR");
    console.error(error);
    console.log("================================");

    throw error;
  }
}

export async function sendReviewRequestEmail(
  email: string,
  customerName = "Creator"
) {
  console.log("================================");
  console.log("REVIEW EMAIL");
  console.log("Recipient:", email);
  console.log("================================");

  const response = await resend.emails.send({
    from: "StreamSurge <onboarding@resend.dev>",
    to: email,
    subject: "⭐ We'd Love Your Feedback",

    html: emailTemplate({
      title: "Thank You",

      subtitle: "We appreciate your trust in StreamSurge.",

      customerName,

      status: "⭐ Review Requested",

      developer: DEVELOPER,

      delivery: "Completed",

      progressStep: 4,

      buttonText: "Leave a Review",

      buttonUrl: "https://www.fiverr.com/",

      message:
        "Thank you for choosing StreamSurge. Your feedback helps us improve and allows other creators to confidently choose our services. If you enjoyed working with us, we'd truly appreciate a review.",
    }),
  });

  console.log("REVIEW EMAIL RESPONSE:");
  console.log(response);
  console.log("================================");

  return response;
}