import type { Metadata } from "next";
import { Navbar } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContoHome",
  description:
    "Experience seamless, high-performance animations with our GSAP-powered website. Designed for smooth transitions, engaging interactions, and a modern, intuitive user journey that captivates at every scroll.",
  icons: { icon: "/assets/img/favicon.svg" },
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
