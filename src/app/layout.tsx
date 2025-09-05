import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "LTech Homes - Premium Real Estate in Ghana",
  description: "Your trusted partner in Ghana's real estate market. We provide exceptional property solutions with integrity, innovation, and excellence.",
  keywords: "real estate, Ghana, property, homes, LTech Homes, Accra, Kumasi, property sales, rentals",
  authors: [{ name: "LTech Homes" }],
  openGraph: {
    title: "LTech Homes - Premium Real Estate in Ghana",
    description: "Your trusted partner in Ghana's real estate market. We provide exceptional property solutions with integrity, innovation, and excellence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
