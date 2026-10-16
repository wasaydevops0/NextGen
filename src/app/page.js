import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientMarquee from "@/components/ClientMarquee";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import DiscussionCTA from "@/components/DiscussionCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#171717] min-h-screen overflow-x-hidden w-full selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <ClientMarquee />
      <Experience />
      <Projects />
      <Testimonials />
      <Blog />
      <DiscussionCTA />
      <Footer />
    </div>
  );
}
