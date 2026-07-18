import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thread-and-loop.ezcky.chatgpt.site"),
  title: "Thread & Loop — Style on Your Frequency",
  description:
    "A personalized clothing subscription delivering a considered capsule wardrobe every month.",
  icons: {
    icon: "/thread-loop-logo-transparent.png",
    shortcut: "/thread-loop-logo-transparent.png",
  },
  openGraph: {
    title: "Thread & Loop",
    description: "A personalized capsule wardrobe, curated monthly.",
    type: "website",
    images: ["/thread-loop-logo-transparent.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thread & Loop",
    description: "A personalized capsule wardrobe, curated monthly.",
    images: ["/thread-loop-logo-transparent.png"],
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
