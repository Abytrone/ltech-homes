import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

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
  icons: {
    icon: '/ltech-logo.png',
    shortcut: '/ltech-logo.png',
    apple: '/ltech-logo.png',
  },
  openGraph: {
    title: "LTech Homes - Premium Real Estate in Ghana",
    description: "Your trusted partner in Ghana's real estate market. We provide exceptional property solutions with integrity, innovation, and excellence.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/ltech-logo.png',
        width: 1200,
        height: 630,
        alt: 'LTech Homes Logo',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${quicksand.variable} font-sans antialiased`}>
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
