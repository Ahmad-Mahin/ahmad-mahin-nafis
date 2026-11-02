import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-300">
      {/* Persistent Background Scrollytelling Canvas (Fixed & scrubs as you scroll) */}
      <ScrollyCanvas />

      {/* Interactive Cursor Follower */}
      <CursorGlow />

      {/* Floating Navigation Dock */}
      <Navbar />

      {/* Main Content Layers (Z-Index 10 with glassmorphic cards over background) */}
      <div className="relative z-10">
        <HeroSection />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
