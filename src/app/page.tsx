import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import Discovery from "@/components/Discovery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <TechStack />
        <CaseStudies />
        <Discovery />
      </main>
      <Footer />
    </>
  );
}
