import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bebeji-nappa.com",
  description: "nappa のポートフォリオサイト",
  openGraph: {
    title: "bebeji-nappa.com",
    description: "nappa のポートフォリオサイト",
    images: [
      {
        url: "/ogp/title_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
