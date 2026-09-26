import { ExperienceGrid } from "@/components/home/ExperienceGrid";
import { Hero } from "@/components/home/Hero";
import { RevealJourney } from "@/components/home/RevealJourney";
import { OrganicMarks } from "@/components/brand/OrganicMarks";

export default function HomePage() {
  return (
    <div className="relative">
      <OrganicMarks />
      <Hero />
      <RevealJourney />
      <ExperienceGrid />
    </div>
  );
}
