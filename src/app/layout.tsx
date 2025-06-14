import type { Metadata } from "next";
import { Navbar } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContoHome",
  description:
    "Experience seamless, high-performance animations with our GSAP-powered website. Designed for smooth transitions, engaging interactions, and a modern, intuitive user journey that captivates at every scroll.",
  icons: { icon: "https://conto-home.netlify.app/assets/img/city.svg" },
  openGraph: {
    images: [
      {
        url: "https://conto-home.netlify.app/assets/img/city.svg",
        width: 1200,
        height: 630,
        alt: "ContoHome - Seamless GSAP Animations",
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
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
