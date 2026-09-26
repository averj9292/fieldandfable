import { ExperienceGrid } from "@/components/home/ExperienceGrid";
import { Hero } from "@/components/home/Hero";
import { ServiceStrip } from "@/components/home/ServiceStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceGrid />
      <ServiceStrip />
    </>
  );
}
