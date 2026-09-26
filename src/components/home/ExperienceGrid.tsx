import { EXPERIENCES } from "@/lib/experiences";
import { ExperienceCard } from "./ExperienceCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ExperienceGrid() {
  return (
    <section id="experiences" className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
      <SectionLabel>Choose their adventure</SectionLabel>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}
