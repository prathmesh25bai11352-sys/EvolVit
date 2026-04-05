"use client";

import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import ParticleBackground from "@/components/effects/ParticleBackground";
import MatrixRain from "@/components/effects/MatrixRain";
import CommandPalette from "@/components/ui/CommandPalette";
import EasterEgg from "@/components/effects/EasterEgg";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PillarsSection from "@/components/sections/PillarsSection";
import EventsSection from "@/components/sections/EventsSection";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian">
      {/* Global effects */}
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <MatrixRain />
      <CommandPalette />
      <EasterEgg />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <EventsSection />
      <StatsSection />
      <TeamSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}
