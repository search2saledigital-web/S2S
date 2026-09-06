import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./compoents/Navbar";
import Footer from "./compoents/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Digital Marketing Agency in Delhi | Search2Sale Digital",
  description:
    "Search2Sale Digital is a leading digital marketing agency in Delhi offering SEO, Google Ads, Meta Ads, social media marketing, website development and lead generation services",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
        }}
      />
    </html>
  );
}
