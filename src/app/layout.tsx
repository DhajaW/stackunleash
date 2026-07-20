import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  metadataBase: new URL("https://stackunleash.com"),
  title: "Custom Website Development | Workflow Automation | Get Your Own App - StackUnleash",
  description:
    "Expert personalized website development, workflow automation, workflow management software, and custom mobile app development. Cut manual work by 70-80%.",
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
    icon: "/favicon-v3.png",
    apple: "/favicon-v3.png",
  },
  alternates: {
    canonical: "/",
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
  // Schema Markup for the agency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "StackUnleash",
    "url": "https://stackunleash.com",
    "logo": "https://stackunleash.com/logo-full.png",
    "image": "https://stackunleash.com/og-image.png",
    "description": "Expert personalized website development, workflow automation, and custom software solutions.",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18, Rajawella 02",
      "addressLocality": "Rajawella, Kandy",
      "addressCountry": "LK",
    },
    "telephone": "+94757922199",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "hello@stackunleash.com",
      "telephone": "+94757922199",
      "url": "https://stackunleash.com/#discovery",
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            })()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
