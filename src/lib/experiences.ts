export type ExperienceId = "bug-lab" | "spy-academy" | "dino-dig" | "potion-lab";

export type Experience = {
  id: ExperienceId;
  name: string;
  verbs: string;
  blurb: string;
  accent: string;
  accentSoft: string;
  packagePriceCents: number;
  ages: string;
  duration: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "bug-lab",
    name: "Bug Lab",
    verbs: "Explore. Observe. Discover.",
    blurb:
      "Magnifiers, specimen jars, and a field journal for little naturalists ready to study the tiny world underfoot.",
    accent: "#BCC5B1",
    accentSoft: "#E8EDE4",
    packagePriceCents: 42500,
    ages: "Ages 5–10",
    duration: "3-hour adventure",
  },
  {
    id: "spy-academy",
    name: "Spy Academy",
    verbs: "Solve. Decipher. Operate.",
    blurb:
      "Coded messages, disguises, and mission briefings for curious agents who love a good puzzle.",
    accent: "#A4B8C4",
    accentSoft: "#E3EBF0",
    packagePriceCents: 45000,
    ages: "Ages 6–11",
    duration: "3-hour mission",
  },
  {
    id: "dino-dig",
    name: "Dino Dig",
    verbs: "Unearth. Explore. Imagine.",
    blurb:
      "Excavation tools, fossil finds, and a dig site that turns the backyard into prehistoric ground.",
    accent: "#D9B49D",
    accentSoft: "#F3E8DF",
    packagePriceCents: 47500,
    ages: "Ages 4–9",
    duration: "3-hour dig",
  },
  {
    id: "potion-lab",
    name: "Potion Lab",
    verbs: "Mix. Experiment. Create.",
    blurb:
      "Safe kitchen chemistry, colorful elixirs, and a lab bench for inventing wonder (and a little mess).",
    accent: "#C4B4D4",
    accentSoft: "#EDE6F3",
    packagePriceCents: 45000,
    ages: "Ages 5–10",
    duration: "3-hour lab",
  },
];

export function getExperience(id: string | null | undefined) {
  return EXPERIENCES.find((e) => e.id === id) ?? null;
}

export function formatUsd(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}
