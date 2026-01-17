import CryHeroSection from "@/components/CryHeroSection";
import MissionSection from "@/components/MissionSection";
import CryWhatWeDo from "@/components/CryWhatWeDo";
import CryHelpSection from "@/components/CryHelpSection";
import PresenceSection from "@/components/PresenceSection";
import HeroSliderSection from "@/components/HeroSliderSection";
import ProgramsSection from "@/components/ProgramsSection";
import AwardsSection from "@/components/AwardsSection";
import StoriesSection from "@/components/StoriesSection";
import ImpactMetricsSection from "@/components/ImpactMetricsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* CRY-style Hero Section */}
      <CryHeroSection />

      {/* Mission Section */}
      <MissionSection />

      {/* CRY Cloned Section: What We Do */}
      <CryWhatWeDo />

      {/* CRY Cloned Section: How do you want to help */}
      <CryHelpSection />

      {/* Our Presence Section */}
      <PresenceSection />

      {/* Featured Programs */}
      <ProgramsSection />

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
