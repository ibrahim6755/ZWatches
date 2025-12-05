import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/ToastProvider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ZWatches — Premium Luxury Timepieces & Modern Watch Collections",
  description:
    "ZWatches is built for collectors — featuring iconic models, expert insights, and authentic luxury watches from the worlds most respected brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <ToastProvider />
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
