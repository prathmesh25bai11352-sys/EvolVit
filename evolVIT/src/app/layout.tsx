import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "EvolVIT | Beyond the Syntax",
  description:
    "The official tech club of VIT Bhopal dedicated to research, multi-language programming, and exploring the frontiers of technology.",
  keywords: [
    "EvolVIT",
    "VIT Bhopal",
    "tech club",
    "programming",
    "research",
    "coding club",
  ],
  openGraph: {
    title: "EvolVIT | Beyond the Syntax",
    description:
      "Join the Evolution. VIT Bhopal's premier hub for polyglot programming, deep research, and technical disruption.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EvolVIT — Join the Evolution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvolVIT | Beyond the Syntax",
    description: "VIT Bhopal's premier tech collective.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
