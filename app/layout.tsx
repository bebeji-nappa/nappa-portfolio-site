import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <div className="container max-w-4xl mx-auto mt-5 px-5 flex flex-col gap-8">
          <div style={{ display: 'block', position: 'relative', width: '300px', height: '75px' }}>
            <Link href="/">
            <Image
              src='/logo.svg'
              alt='title_logo'
              sizes='100vw'
              fill
              style={{
                width: '100%'
              }}
            />
            </Link>
          </div>
          {children}
        </div>
        <footer className="text-center text-sm text-gray-500 my-5">
          © 2025 bebeji-nappa.com
        </footer>
      </body>
    </html>
  );
}
