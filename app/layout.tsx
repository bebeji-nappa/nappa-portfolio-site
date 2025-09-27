import type { Metadata } from "next";
import "./globals.css";
import "@richmd/react/dist/richmd.css";
import "./style.css";

export const metadata: Metadata = {
  title: "bebeji-nappa.com",
  description: "nappa のポートフォリオサイト",
  openGraph: {
    title: "bebeji-nappa.com",
    description: "nappa のポートフォリオサイト",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <footer className="text-center text-sm text-gray-500 my-5">
          © 2025 bebeji-nappa.com
        </footer>
      </body>
    </html>
  );
}
