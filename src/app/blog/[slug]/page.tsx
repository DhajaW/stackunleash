import { Metadata } from "next";
import { postsData } from "@/data/posts";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, ArrowLeft } from "lucide-react";
import PostClient from "./PostClient";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Dynamic Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData[slug];

  if (!post) {
    return {
      title: "Article Not Found | StackUnleash Blog",
      description: "The requested blog article could not be located.",
    };
  }

  return {
    title: `${post.metaTitle || post.title} | StackUnleash Blog`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

// 2. Server Component Page Router
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postsData[slug];

  if (!post) {
    return (
      <>
        <Header />
        <div className="bg-navy min-h-screen pt-36 pb-20 text-center flex flex-col items-center justify-center gap-6">
          <BookOpen className="w-12 h-12 text-cyan" />
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Article Not Found
          </h1>
          <p className="text-text-muted">The requested article slug could not be located.</p>
          <Link href="/blog" className="btn-secondary text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return <PostClient post={post} />;
}
