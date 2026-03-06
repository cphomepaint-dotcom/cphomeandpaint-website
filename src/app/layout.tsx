import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CP Home & Paint | Home Improvements in DC, Virginia & Maryland",
  description:
    "Professional home improvement services including bathroom remodels, kitchen remodels, custom carpentry, flooring, painting, and more. Serving Washington DC, Virginia, and Maryland.",
  keywords: [
    "home improvement",
    "bathroom remodel",
    "kitchen remodel",
    "painting",
    "flooring",
    "carpentry",
    "Washington DC contractor",
    "Virginia home improvement",
    "Maryland contractor",
    "DMV area contractor",
  ],
  openGraph: {
    title: "CP Home & Paint | Home Improvements in DC, Virginia & Maryland",
    description:
      "Professional home improvement services including bathroom remodels, kitchen remodels, custom carpentry, flooring, painting, and more. Serving the DC metro area.",
    url: "https://cphomeandpaint.com",
    siteName: "CP Home & Paint",
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
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
