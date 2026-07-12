import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StackUnleash | Premium IT & Software Solutions Agency",
  description:
    "We build automated business systems powered by AI-driven workflows, smart portals, and seamless web-to-mobile solutions. Enterprise-grade solutions from $1,000 to $5,000+.",
  keywords: [
    "IT Solutions",
    "Software Agency",
    "AI Automation",
    "n8n Workflows",
    "Enterprise Portals",
    "Web Development",
    "Mobile Apps",
    "Supabase",
    "Capacitor",
  ],
  openGraph: {
    title: "StackUnleash | Automated Business Systems",
    description:
      "Empowering businesses with AI-driven workflows, smart portals, and seamless web-to-mobile solutions.",
    url: "https://stackunleash.com",
    siteName: "StackUnleash",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackUnleash | Automated Business Systems",
    description:
      "Empowering businesses with AI-driven workflows, smart portals, and seamless web-to-mobile solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
