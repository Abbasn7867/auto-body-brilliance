import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import EmergencyTowing from "@/components/EmergencyTowing";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16 md:pb-0">
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <EmergencyTowing />
      <SocialProof />
      <FinalCTA />
      <StickyBar />
    </div>
  );
};

export default Index;
