import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://streamsurge-growth.vercel.app"),

  title: {
    default: "StreamSurge | Twitch, Kick & YouTube Growth Experts",
    template: "%s | StreamSurge",
  },

  description:
    "Grow your Twitch, Kick, and YouTube channel with StreamSurge. We help creators increase real viewers, build active communities, improve engagement, and move closer to monetization with proven growth strategies.",

  keywords: [
    "Twitch promotion",
    "Twitch growth",
    "Twitch viewers",
    "Twitch affiliate",
    "Kick promotion",
    "Kick growth",
    "Kick viewers",
    "YouTube live growth",
    "YouTube streaming",
    "Streamer growth",
    "Streaming promotion",
    "Stream optimization",
    "OBS optimization",
    "Live streaming",
    "Gaming community",
    "Real Twitch viewers",
    "Real Kick viewers",
    "Streaming community",
    "Content creator growth",
    "StreamSurge"
  ],

  authors: [
    {
      name: "StreamSurge",
    },
  ],

  creator: "StreamSurge",

  publisher: "StreamSurge",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "StreamSurge | Grow Your Twitch, Kick & YouTube Channel",

    description:
      "Helping creators grow on Twitch, Kick and YouTube with real community growth, better engagement and monetization strategies.",

    url: "https://streamsurge-growth.vercel.app",

    siteName: "StreamSurge",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StreamSurge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "StreamSurge",

    description:
      "Helping creators grow on Twitch, Kick & YouTube.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Technology",
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