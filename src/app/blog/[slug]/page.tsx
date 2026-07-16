"use client";

import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  BookOpen,
  ArrowRight,
  Zap,
  CheckCircle,
  Share2,
  Bookmark,
  Sun,
  Moon,
} from "lucide-react";

/* ─────────────────────────────────────────
   FULL ARTICLE DATABASE
───────────────────────────────────────── */
const postsData: Record<
  string,
  {
    title: string;
    category: string;
    categoryColor: string;
    categoryBg: string;
    date: string;
    readTime: string;
    tags: string[];
    author: { name: string; avatar: string; role: string };
    image: string;
    excerpt: string;
    metaTitle: string;
    metaDescription: string;
    content: React.ReactNode;
  }
> = {
  "custom-website-development-for-higher-conversion-rates": {
    title: "How Custom Website Development Creates Personalized Websites That Convert",
    category: "Web Development",
    categoryColor: "#FF6B00",
    categoryBg: "rgba(255,107,0,0.12)",
    date: "Jul 16, 2026",
    readTime: "7 min read",
    tags: ["Custom website development", "Build custom websites", "web app development service", "custom website developer"],
    author: { name: "Asanka Udawatte", avatar: "AU", role: "Digital Growth Director" },
    image: "/blog-website.png",
    metaTitle: "Custom Website Development for Higher Conversion Rates",
    metaDescription: "Discover how custom website development tailors unique online experiences that boost engagement and drive conversions for your business.",
    excerpt:
      "Templates save time, but cost you conversions. Here's a deep dive into how personalized websites build trust, remove friction, and scale operations.",
    content: (
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-lg leading-relaxed text-text-secondary">
          If you've ever landed on a website and thought <em>"this feels like it was made for me,"</em> that's not
          an accident. That's custom website development at work. It's the difference between a
          business that picked a template off a shelf and one that built something around its actual
          customers. And for small businesses, hotels, online shops, and anyone trying to stand out
          online in 2026, that difference shows up directly in the numbers: more visitors staying longer,
          more people booking, more carts turning into sales.
        </p>

        <p className="text-text-secondary leading-relaxed">
          This article walks through what custom development really means, why the process behind it
          matters more than people expect, and how a website built specifically for your brand ends up
          converting better than a generic one ever could.
        </p>

        {/* Image 1: Development in progress */}
        <div className="relative rounded-2xl overflow-hidden border border-white/5 my-8">
          <img
            src="/blog-dev-progress.jpg"
            alt="custom website development in progress"
            className="w-full h-auto object-cover max-h-[420px]"
          />
          <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-muted">
            📸 Custom website development in progress
          </div>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          What custom website development actually means
        </h2>
        <p className="text-text-secondary leading-relaxed">
          A template site starts with someone else's design. You pick a layout, swap in your logo and
          colors, and hope it fits. It usually doesn't, not perfectly.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Custom website development flips that order. A developer starts with your business, your
          customers, and your goals, then builds the site around those. Nothing is forced into a pre-
          made box.
        </p>
        <p className="text-text-secondary leading-relaxed">
          That doesn't mean every custom project starts from a blank screen. Good developers reuse
          proven code patterns and components. What makes it custom is that every decision, from
          the layout to the checkout flow, gets made for your specific business rather than borrowed
          from a generic theme.
        </p>

        <h3 className="text-lg font-bold text-white mt-6 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Here's what typically separates the two approaches:
        </h3>
        <ul className="space-y-3.5 pl-5 list-none">
          <li className="flex gap-2.5 items-start text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2.5 flex-shrink-0"></span>
            <span><strong>Templates:</strong> fast to launch, cheap upfront, but limited once you need something the theme wasn't built for.</span>
          </li>
          <li className="flex gap-2.5 items-start text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0"></span>
            <span><strong>Custom builds:</strong> take more planning, but scale with you and rarely need to be torn down and rebuilt later.</span>
          </li>
          <li className="flex gap-2.5 items-start text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2.5 flex-shrink-0"></span>
            <span><strong>Templates:</strong> shared design elements across thousands of other sites using the same theme.</span>
          </li>
          <li className="flex gap-2.5 items-start text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0"></span>
            <span><strong>Custom builds:</strong> a look, structure, and user flow that belongs only to you.</span>
          </li>
        </ul>
        <p className="text-text-secondary leading-relaxed">
          For a hotel with a complex booking calendar or a shop with unusual shipping rules, a
          template often can't keep up. That's usually the moment businesses start looking for a
          proper web app development service instead of another quick theme fix.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Why the discovery process shapes everything
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Before any code gets written, a good custom website developer spends time asking
          questions most agencies skip. What does your typical customer actually search for? What
          makes someone book your hotel over the one three doors down? Where do people usually
          drop off when they try to buy from you now?
        </p>
        <p className="text-text-secondary leading-relaxed">
          This is called the discovery phase of the custom website development, and it's the part most
          template-based projects skip entirely.
        </p>
        <p className="text-text-secondary leading-relaxed">
          During discovery, a developer looks at your competitors, studies how your current visitors
          behave, and talks to you directly about what's working and what isn't. That research
          becomes the blueprint. The homepage layout, the wording on your buttons, even the order
          of your navigation menu all get shaped by what your specific audience responds to.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Skip this step, and you get a site that looks nice but doesn't really speak to anyone. Include
          it, and the site starts feeling less like a digital brochure and more like a conversation with the
          exact people you're trying to reach.
        </p>
        <p className="text-text-secondary leading-relaxed">
          This is also where a business's personality gets built into the site itself. A boutique tour
          operator in Sri Lanka and a B2B software company need completely different tones, layouts,
          and calls to action, even if both need a booking form. Discovery is what makes sure the final
          product actually matches the business asking for it.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Why personalized websites convert better
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Generic sites ask visitors to do the adjusting. Personalized websites do the adjusting
          themselves.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Think about the last time you visited a site that felt cluttered or confusing. You probably left
          within seconds. Studies on user behavior consistently show that visitors form an opinion
          about a site in under a second, and that first impression heavily influences whether they stay
          or bounce.
        </p>

        {/* Image 2: Browsing personalized site */}
        <div className="relative rounded-2xl overflow-hidden border border-white/5 my-8">
          <img
            src="/blog-person-browsing.jpg"
            alt="a person browsing personalized website"
            className="w-full h-auto object-cover max-h-[420px]"
          />
          <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-muted">
            📸 A person browsing a personalized website
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mt-6 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          A personalized website removes friction at every step:
        </h3>
        <ul className="space-y-3.5 pl-5 list-none">
          <li className="flex gap-2.5 items-start text-text-secondary text-sm">
            <CheckCircle className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
            <span>The messaging speaks directly to the visitor's actual problem, not a vague version of it.</span>
          </li>
          <li className="flex gap-2.5 items-start text-text-secondary text-sm">
            <CheckCircle className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
            <span>The path to booking, buying, or contacting you has as few clicks as possible.</span>
          </li>
          <li className="flex gap-2.5 items-start text-text-secondary text-sm">
            <CheckCircle className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
            <span>The design reflects trust signals your specific audience actually cares about, whether that's reviews, certifications, or local familiarity.</span>
          </li>
        </ul>

        <p className="text-text-secondary leading-relaxed mt-4">
          When businesses build custom websites around these details, the results tend to show up
          quickly. A tourism site that highlights real guest photos and local experiences converts better
          than one using stock images. An e-commerce store with a checkout built around its actual
          product catalog, rather than a one-size-fits-all cart plugin, loses fewer sales at the final step.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          How a personalized website actually helps your business
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Beyond conversions, a website built specifically for you tends to solve problems you didn't
          know were costing you time and money.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Manual processes are the highest hidden cost for growing businesses. Booking forms that
          need manual confirmation, inventory that has to be updated by hand across three
          spreadsheets, customer questions that all land in one overflowing inbox. A product of proper
          custom website development can automate most of that.
        </p>
        <p className="text-text-secondary leading-relaxed">
          This is where the line between a "website" and a real business tool starts to blur. A well-
          planned web app development service doesn't just give you pages to look at. It gives you a
          system: automated confirmations, live inventory syncing, dashboards that show you what's
          actually happening in your business without opening five different tools.
        </p>
        <p className="text-text-secondary leading-relaxed">
          We at <strong>Stackunleash</strong> get that this is the core of what gets built for clients across tourism,
          retail, and service industries. Rather than stopping at a nice-looking front end, the team
          builds using modern tools like Next.js, Supabase, and n8n to connect the website to the
          actual operations behind it, cutting manual work by 70 to 80 percent in many cases. A hotel's
          booking site can talk directly to its calendar. An online shop's product page can update itself
          when stock changes. That's the kind of groundwork that turns a static site into something
          that actually runs part of your business.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Final thoughts
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Choosing custom website development isn't just a design decision. It's a business decision.
          Businesses that build custom websites around their real customers, rather than settling for a
          generic template, tend to see better engagement, fewer drop-offs, and systems that keep
          working as they grow.
        </p>
        <p className="text-text-secondary leading-relaxed">
          If you're weighing whether to hire a custom website developer or stick with a template, ask
          yourself one question: does your current site actually reflect how your business runs, or is it
          just something you're managing around? For growing businesses, tourism brands, and
          online stores that need more than a pretty homepage, the answer usually points toward
          custom development, built with discovery, strategy, and the right technology from day one.
        </p>
      </div>
    ),
  },
  "cut-manual-work-workflow-automation": {
    title: "How We Cut Manual Work by 80% Using n8n Workflow Automation",
    category: "Workflow Automation",
    categoryColor: "#06B6D4",
    categoryBg: "rgba(6,182,212,0.12)",
    date: "Jul 12, 2026",
    readTime: "8 min read",
    tags: ["n8n", "Automation", "Supabase"],
    author: { name: "StackUnleash Team", avatar: "SU", role: "Automation Experts" },
    image: "/blog-automation.png",
    metaTitle: "n8n Workflow Automation Case Study",
    metaDescription: "Read how we helped cut manual data processes by 80% using n8n and Supabase ecosystem integrations.",
    excerpt: "A deep-dive into how we replaced 14 hours of weekly manual data entry with a fully automated n8n pipeline.",
    content: (
      <div className="space-y-6 text-text-secondary">
        <p className="text-lg">
          Workflow automation isn't about replacing people; it's about freeing them from repetitive tasks.
          In this post, we break down our exact framework for auditing workflows, writing custom JS expressions,
          and wiring n8n webhooks to database triggers in Supabase.
        </p>
        <p>
          We'll explore real case studies from hotel reservations syncing to local messaging portals,
          contractor invoice matching, and automated email follow-ups.
        </p>
      </div>
    ),
  },
  "custom-website-vs-template": {
    title: "Custom Website vs. Template: Why Personalized Wins Every Time",
    category: "Web Development",
    categoryColor: "#FF6B00",
    categoryBg: "rgba(255,107,0,0.12)",
    date: "Jul 8, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "WordPress", "SEO"],
    author: { name: "StackUnleash Team", avatar: "SU", role: "Web Engineers" },
    image: "/blog-website.png",
    metaTitle: "Custom vs Template Web Design Guide",
    metaDescription: "Templates vs personalized custom web builds: a comparison of conversion rates, performance, and long term scaling.",
    excerpt: "Templates save time, but cost you conversions. Here's the case for custom websites.",
    content: (
      <div className="space-y-6 text-text-secondary">
        <p className="text-lg">
          Why settle for a template that 50,000 other websites are using? A custom website built in Next.js
          or WordPress delivers clean, tailored client experiences that directly affect search presence and conversions.
        </p>
      </div>
    ),
  },
  "get-your-own-app-guide": {
    title: "Get Your Own App: From Idea to Android & iOS in 6 Weeks",
    category: "Mobile Apps",
    categoryColor: "#8B5CF6",
    categoryBg: "rgba(139,92,246,0.12)",
    date: "Jul 3, 2026",
    readTime: "6 min read",
    tags: ["React", "Capacitor", "iOS", "Android"],
    author: { name: "StackUnleash Team", avatar: "SU", role: "Mobile Developers" },
    image: "/blog-mobile.png",
    metaTitle: "Get Your Own Mobile App in 6 Weeks",
    metaDescription: "A practical guide for businesses ready to deploy native cross-platform apps using React and Capacitor.",
    excerpt: "A practical playbook for businesses ready to launch their first mobile app.",
    content: (
      <div className="space-y-6 text-text-secondary">
        <p className="text-lg">
          Getting a mobile app deployed to Apple App Store and Google Play Store doesn't have to take years
          or cost hundreds of thousands of dollars. With Capacitor, we wrap unified web apps into native shells.
        </p>
      </div>
    ),
  },
  "web-app-development-business-automation": {
    title: "Why Your Business Needs a Web App, Not Just a Static Website",
    category: "Workflow Automation",
    categoryColor: "#06B6D4",
    categoryBg: "rgba(6,182,212,0.12)",
    date: "Jul 17, 2026",
    readTime: "6 min read",
    tags: ["web app development service", "custom web applications", "automate business processes", "custom software for small business"],
    author: { name: "Thusitha Weerasinghe", avatar: "TW", role: "Founder & Lead Engineer" },
    image: "/blog-messy-desk.jpg",
    metaTitle: "Web App Development: Automate Your Business Processes",
    metaDescription: "Discover how upgrading from a standard website to a custom web app can automate operations, eliminate spreadsheets, and cut manual work by up to 80%.",
    excerpt:
      "If you are spending hours every week manually copying booking details from an email into a spreadsheet, your website isn’t really working for you—you are working for your website.",
    content: (
      <div className="space-y-8 text-text-secondary">
        <p className="text-lg leading-relaxed">
          If you are spending hours every week manually copying booking details from an email into a spreadsheet, your website isn’t really working for you—you are working for your website.
        </p>

        <p className="leading-relaxed">
          For a long time, businesses treated their websites like digital billboards. As long as it looked nice and had a phone number, it was doing its job. But for growing businesses, boutique hotels, and scaling e-commerce brands in 2026, a "digital billboard" is no longer enough. The real competitive advantage lies in turning your website into an active, breathing part of your operations.
        </p>

        <p className="leading-relaxed">
          This is the fundamental difference between a standard static website and a custom web application. Let's explore what happens when you stop paying for a digital brochure and start investing in a system that actually runs your business.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          What exactly is a web app?
        </h2>
        <p className="leading-relaxed">
          A traditional website delivers information. A web app delivers a service.
        </p>
        <p className="leading-relaxed">
          When you read a blog post or look at a restaurant's static menu, you are interacting with a standard website. But when you log into a portal, use a dynamic booking calendar that updates in real-time, or filter through a live inventory system, you are using a web app.
        </p>
        <p className="leading-relaxed">
          A standard website asks your team to bridge the gap between the internet and your actual business. When a customer submits a generic "Contact Us" form to book a villa, a human has to read the email, check the calendar, reply with availability, send a payment link, and manually block out the dates.
        </p>
        <p className="leading-relaxed">
          A web app handles that entire transaction without human intervention.
        </p>

        <h3 className="text-lg font-bold text-white mt-6 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Here is what separates the two:
        </h3>
        <ul className="space-y-3.5 pl-5 list-none">
          <li className="flex gap-2.5 items-start text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0"></span>
            <span><strong>Static Websites:</strong> Great for establishing a basic online presence, but rely heavily on your staff to process any actual business.</span>
          </li>
          <li className="flex gap-2.5 items-start text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0"></span>
            <span><strong>Web Apps:</strong> Act like a digital employee. They connect directly to your databases, automate workflows, and handle complex logic in the background.</span>
          </li>
        </ul>

        {/* Image 1: Messy desk vs clean layout */}
        <div className="relative rounded-2xl overflow-hidden border border-white/5 my-8">
          <img
            src="/blog-messy-desk.jpg"
            alt="difference between manual business processes and custom web applications"
            className="w-full h-auto object-cover max-h-[420px]"
          />
          <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-muted">
            📸 Difference between manual business processes and custom web applications
          </div>
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          The hidden cost of manual processes
        </h2>
        <p className="leading-relaxed">
          Before you can appreciate what a web application does, you have to look at what manual processes are currently costing you. Most growing businesses don’t realize they are bleeding time until they actually map out their daily operations.
        </p>
        <p className="leading-relaxed">
          How many times a day does your team manually update inventory? How often do double-bookings happen because an Excel sheet wasn't updated fast enough? How many customer emails sit in an inbox for 24 hours just waiting for a simple confirmation reply?
        </p>
        <p className="leading-relaxed">
          These manual touchpoints create friction. They slow down your response times, leave room for human error, and artificially cap how much your business can grow. You simply cannot scale a business if every new customer requires an extra ten minutes of manual admin work.
        </p>
        <p className="leading-relaxed">
          Upgrading to a proper <a href="/#services" className="text-cyan hover:underline font-bold">web app development service</a> starts with identifying these exact bottlenecks. It’s not about changing your brand colors; it’s about looking at your daily operations and asking, "Why is a human still doing this?"
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          How automation transforms daily operations
        </h2>
        <p className="leading-relaxed">
          When you build a custom web app, you are building a bridge between what the customer sees on the front end and how your business operates on the back end.
        </p>
        <p className="leading-relaxed">
          Imagine a boutique tour operator. Instead of a generic contact form, their web app features a dynamic calendar that reads directly from their actual availability. When a customer pays, the app instantly updates the database, sends a branded confirmation email to the guest, adds the booking to the staff's internal calendar, and triggers a reminder email three days before the trip.
        </p>
        <p className="leading-relaxed">
          Zero spreadsheets. Zero manual emails. Zero double-bookings.
        </p>
        <p className="leading-relaxed">
          This level of automation isn't reserved for massive tech giants anymore. It is highly accessible for local service providers, retail shops, and hospitality brands who want to operate leaner and faster.
        </p>

        {/* Image 2: Automated booking flowchart */}
        <div className="relative rounded-2xl overflow-hidden border border-white/5 my-8">
          <img
            src="/blog-flowchart.jpg"
            alt="how web app development service automates business workflows"
            className="w-full h-auto object-cover max-h-[420px]"
          />
          <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-muted">
            📸 How web app development service automates business workflows
          </div>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Building systems, not just pages
        </h2>
        <p className="leading-relaxed">
          Getting a system to work this smoothly requires more than just slapping a generic plugin onto a WordPress theme. It requires modern architecture.
        </p>
        <p className="leading-relaxed">
          At <a href="/" className="text-cyan hover:underline font-bold">StackUnleash</a>, this is exactly where we step in. We don't just build things that look pretty; we engineer tools that solve operational headaches. We leverage cutting-edge tech stacks—like Next.js for lightning-fast front-ends, Supabase for robust, real-time databases, and n8n for connecting and automating complex workflows.
        </p>
        <p className="leading-relaxed">
          By strategically deploying these tools, we routinely help our clients cut their manual administrative work by 70 to 80 percent.
        </p>
        <p className="leading-relaxed">
          If an e-commerce client sells the last item of a specific product in their physical store, their StackUnleash web app instantly updates the online catalog so a digital customer doesn't buy out-of-stock inventory. We build the architecture that allows your front-end customer experience and your backend operations to talk to each other flawlessly in real-time.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Final thoughts
        </h2>
        <p className="leading-relaxed">
          Your digital presence should be the hardest-working asset in your company. If your current setup is generating more admin work for your team instead of less, you have outgrown your website.
        </p>
        <p className="leading-relaxed">
          The businesses that will dominate their local markets in the coming years are the ones that use technology to remove friction. Upgrading to a custom web application isn't just an IT expense; it is an investment in automation, scalability, and reclaiming your team's time.
        </p>
        <p className="leading-relaxed">
          If you are ready to stop managing spreadsheets and start scaling your operations, it is time to look beyond static templates and partner with a developer who understands how to build true digital systems.
        </p>

        {/* CTA Banner */}
        <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8 text-center my-10">
          <p className="text-white text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to automate your business?
          </p>
          <a
            href="/#discovery"
            className="btn-primary text-sm glow-orange inline-flex items-center gap-2"
          >
            Book a free discovery call with StackUnleash today <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    ),
  },
};

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  const post = postsData[slug];

  // Fallback if post not found
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

  const bg = darkMode ? "bg-navy min-h-screen text-white" : "bg-slate-50 min-h-screen text-slate-800";

  return (
    <>
      <Header />
      <div className={`${bg} transition-colors duration-300`} style={{ fontFamily: "var(--font-body)" }}>
        {/* Page Header */}
        <article className="pt-36 pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <Link
                href="/blog"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  darkMode ? "text-cyan hover:text-white" : "text-cyan hover:text-cyan-dark"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <ArrowLeft className="w-4 h-4" /> Back to Articles
              </Link>

              {/* Theme toggle */}
              <button
                id="blog-theme-toggle"
                onClick={toggleTheme}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/40 cursor-pointer ${
                  darkMode ? "bg-slate-800 border border-white/10" : "bg-cyan/10 border border-cyan/20"
                }`}
                aria-label="Toggle theme"
              >
                <span
                  className={`absolute top-[3px] w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 shadow-md ${
                    darkMode ? "translate-x-7" : "translate-x-1"
                  }`}
                  style={{
                    background: darkMode
                      ? "linear-gradient(135deg,#1e3a5f,#0891b2)"
                      : "linear-gradient(135deg,#fbbf24,#f59e0b)",
                    boxShadow: darkMode
                      ? "0 0 10px rgba(6,182,212,0.4)"
                      : "0 0 10px rgba(251,191,36,0.5)",
                  }}
                >
                  {darkMode ? (
                    <Moon className="w-3.5 h-3.5 text-cyan" />
                  ) : (
                    <Sun className="w-3.5 h-3.5 text-white" />
                  )}
                </span>
              </button>
            </div>

            {/* Category tag */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold tracking-wide px-3 py-1.5"
                style={{
                  color: post.categoryColor,
                  background: post.categoryBg,
                  border: `1px solid ${post.categoryColor}30`,
                  fontFamily: "var(--font-heading)",
                }}
              >
                <Tag className="w-3.5 h-3.5" />
                {post.category}
              </span>
            </div>

            {/* Main Title */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}
            >
              {post.title}
            </h1>

            {/* Post meta / author row */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b ${
                darkMode ? "border-white/[0.08]" : "border-slate-200"
              } mb-10`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#FF6B00,#06B6D4)",
                    color: "#fff",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {post.author.avatar}
                </span>
                <div>
                  <p
                    className={`text-sm font-bold leading-none ${darkMode ? "text-white" : "text-slate-900"}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.author.name}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{post.author.role}</p>
                </div>
              </div>

              <div
                className={`flex items-center gap-4 text-xs ${
                  darkMode ? "text-text-muted" : "text-slate-500"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Main Cover Image */}
            <div className="relative rounded-2xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[460px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none mb-16">{post.content}</div>

            {/* Tags row */}
            <div
              className={`pt-8 border-t flex flex-wrap gap-2 ${
                darkMode ? "border-white/[0.08]" : "border-slate-200"
              } mb-16`}
            >
              {post.tags.map((t) => (
                <span
                  key={t}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                    darkMode
                      ? "text-white/60 bg-white/[0.04] border-white/10"
                      : "text-slate-600 bg-slate-100 border-slate-200"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Share / CTA panel */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan/5 to-orange/5 border border-white/[0.06] p-8 text-center max-w-2xl mx-auto">
              <Zap className="w-8 h-8 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Ready to Unleash Your Operations?
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-md mx-auto">
                We build customized database portals, Next.js web applications, and n8n AI workflows that cut manual tasks by 70–80%.
              </p>
              <Link href="/contact" className="btn-primary text-sm glow-orange">
                Schedule a Free Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
