import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamSurge | Twitch, Kick & YouTube Growth Experts",

  description:
    "Grow your Twitch, Kick, and YouTube channel with StreamSurge. We help creators improve engagement, build active communities, reach monetization, and optimize their streaming strategy.",

  keywords: [
    "Twitch Growth",
    "Kick Growth",
    "YouTube Live",
    "Twitch Affiliate",
    "Twitch Promotion",
    "Kick Promotion",
    "Streamer Growth",
    "Real Twitch Viewers",
    "Stream Optimization",
    "Streaming Community",
    "OBS Optimization",
    "Stream Audit",
    "Streamer Coaching",
    "Monetization",
  ],

  authors: [
    {
      name: "StreamSurge",
    },
  ],

  creator: "StreamSurge",

  publisher: "StreamSurge",

  metadataBase: new URL("https://streamsurge-growth.vercel.app"),

  openGraph: {
    title: "StreamSurge | Grow Your Twitch, Kick & YouTube Channel",

    description:
      "Helping streamers attract real viewers, build active communities, and reach monetization.",

    url: "https://streamsurge-growth.vercel.app",

    siteName: "StreamSurge",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "StreamSurge",

    description:
      "Helping creators grow on Twitch, Kick & YouTube.",

    creator: "@StreamSurge",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}