import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | StackUnleash — Workflow Automation, Web Dev & Mobile App Insights",
  description:
    "Practical guides, real case studies, and deep dives on workflow automation, custom website development, and custom mobile app development from the StackUnleash team.",
  openGraph: {
    title: "StackUnleash Blog — Automation, Web & Mobile Dev Insights",
    description:
      "Expert articles on workflow automation, custom website development, workflow management software, and get-your-own-app strategies.",
    url: "https://stackunleash.com/blog",
    siteName: "StackUnleash",
    type: "website",
    images: [
      {
        url: "https://stackunleash.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "StackUnleash Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackUnleash Blog",
    description: "Automation, web dev & mobile app insights for ambitious businesses.",
    images: ["https://stackunleash.com/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
