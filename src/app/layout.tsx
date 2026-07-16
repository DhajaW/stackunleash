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
  title: "StackUnleash | Custom Website Development & Workflow Automation",
  description:
    "Cut manual work by 70–80% with custom website development, workflow automation, workflow management software, and custom mobile app development. Get your own app — Sri Lanka → Global.",
  keywords: [
    "Custom Website Development",
    "Personalized Websites",
    "Workflow Automation",
    "Workflow Management Software",
    "Custom Mobile App Development",
    "Get Your Own App",
    "n8n Workflows",
    "Enterprise Portals",
    "Web Development",
    "Mobile Apps",
    "Software Agency Sri Lanka",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "StackUnleash | Cut Manual Work by 70–80%",
    description:
      "Custom website development, workflow automation & custom mobile app development. Tailored solutions that eliminate repetitive tasks and drive growth.",
    url: "https://stackunleash.com",
    siteName: "StackUnleash",
    type: "website",
    images: [
      {
        url: "https://stackunleash.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "StackUnleash – Custom Website Development, Workflow Automation & Mobile Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackUnleash | Cut Manual Work by 70–80%",
    description:
      "Custom website development, workflow automation & custom mobile app development. Get your own app today.",
    images: ["https://stackunleash.com/og-image.png"],
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
