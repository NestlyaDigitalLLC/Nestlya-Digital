import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nestlyadigital.com"),

  title: {
    default: "Nestlya Digital",
    template: "%s | Nestlya Digital",
  },

  description:
    "Nestlya Digital helps businesses grow through web design, web development, SEO, e-commerce and digital marketing services.",

  keywords: [
    "Nestlya Digital",
    "Web Design",
    "Web Development",
    "SEO",
    "Digital Marketing",
    "E-Commerce",
    "Website Design Agency",
    "Business Website",
  ],

  authors: [
    {
      name: "Nestlya Digital",
    },
  ],

  creator: "Nestlya Digital",

  openGraph: {
    title: "Nestlya Digital",
    description:
      "Web Design, Development, SEO & Digital Growth Solutions.",
    url: "https://nestlyadigital.com",
    siteName: "Nestlya Digital",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}