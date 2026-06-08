import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import QuoteSection from "@/components/QuoteSection";
import WhatWeDo from "@/components/WhatWeDo";
import HelpSection from "@/components/HelpSection";
import PresenceSection from "@/components/PresenceSection";
import HeroSliderSection from "@/components/HeroSliderSection";
import ProgramsSection from "@/components/ProgramsSection";
import AwardsSection from "@/components/AwardsSection";
import StoriesSection from "@/components/StoriesSection";
import ImpactMetricsSection from "@/components/ImpactMetricsSection";
import FAQSection from "@/components/FAQSection";
import VolunteerFormSection from "@/components/VolunteerFormSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Featured Programs */}
      <ProgramsSection />

      {/* Vision & Mission Section */}
      <VisionMissionSection />

      {/* Quote Section */}
      <QuoteSection />

      {/* What We Do */}
      <WhatWeDo />

      {/* How do you want to help */}
      <HelpSection />

      {/* Our Presence Section */}
      <PresenceSection />


      {/* Stories and Updates Section */}
      <StoriesSection />

      {/* Impact Metrics Section */}
      <ImpactMetricsSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <CTASection />
    </div>
  );
}
