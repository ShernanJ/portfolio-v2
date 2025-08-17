import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shernan Javier - Portfolio",
  description: "my portfolio lol",
  keywords: ["Shernan Javier", "Portfolio", "Toronto"],
  authors: [{ name: "Shernan Javier" }],
  creator: "Shernan Javier",
  publisher: "Shernan Javier",
  robots: "index, follow",
  openGraph: {
    title: "Shernan Javier - Portfolio",
    description: "my portfolio lol",
    url: "https://shernanjavier.com",
    siteName: "Shernan Javier Portfolio",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shernan Javier - Portfolio",
    description: "my portfolio lol",
    creator: "@shernanjavier",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
