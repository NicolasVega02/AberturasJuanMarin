import { HeroSection } from "@/app/_home/hero-section";
import { MaterialsSection } from "@/app/_home/materials-section";
import { ProjectsSection } from "@/app/_home/projects-section";
import { WhyChooseSection } from "@/app/_home/why-choose-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <MaterialsSection />
      <WhyChooseSection />
      <ProjectsSection />
    </main>
  );
}
