import type { ExperienceId } from "./experiences";

export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  experienceIds: ExperienceId[];
  description: string;
  qtyNote: string;
};

export const INVENTORY: InventoryItem[] = [
  {
    id: "field-vests",
    name: "Explorer field vests",
    category: "Wearables",
    experienceIds: ["bug-lab", "dino-dig", "spy-academy"],
    description: "Kid-sized canvas vests with pockets for tools and treasures.",
    qtyNote: "Up to 12 guests",
  },
  {
    id: "magnifiers",
    name: "Magnifying glass kit",
    category: "Tools",
    experienceIds: ["bug-lab"],
    description: "Hardwood-handled lenses for close observation of tiny specimens.",
    qtyNote: "Set of 12",
  },
  {
    id: "specimen-jars",
    name: "Specimen jar collection",
    category: "Props",
    experienceIds: ["bug-lab"],
    description: "Labeled glass jars and trays for temporary observation (catch & release).",
    qtyNote: "Full station",
  },
  {
    id: "cipher-kits",
    name: "Cipher & decoder kits",
    category: "Tools",
    experienceIds: ["spy-academy"],
    description: "Mission envelopes, decoder wheels, and invisible-ink pens.",
    qtyNote: "Agent set × 12",
  },
  {
    id: "disguise-trunk",
    name: "Disguise trunk",
    category: "Wearables",
    experienceIds: ["spy-academy"],
    description: "Hats, glasses, and clipboards for undercover operations.",
    qtyNote: "1 trunk",
  },
  {
    id: "dig-site",
    name: "Portable dig site",
    category: "Setup",
    experienceIds: ["dino-dig"],
    description: "Sand dig trays, brushes, and buried fossil replicas ready to unearth.",
    qtyNote: "Station for 10",
  },
  {
    id: "fossil-finds",
    name: "Fossil find collection",
    category: "Props",
    experienceIds: ["dino-dig"],
    description: "Cast fossils and identification cards for the discovery table.",
    qtyNote: "Curated set",
  },
  {
    id: "lab-bench",
    name: "Potion lab bench",
    category: "Setup",
    experienceIds: ["potion-lab"],
    description: "Folding lab table, beakers, droppers, and color-safe reagents.",
    qtyNote: "Full station",
  },
  {
    id: "elixir-kit",
    name: "Elixir mixing kit",
    category: "Tools",
    experienceIds: ["potion-lab"],
    description: "Measuring spoons, stirring rods, and recipe cards for edible-safe potions.",
    qtyNote: "Set of 12",
  },
  {
    id: "canvas-tent",
    name: "Adventure canvas tent",
    category: "Setup",
    experienceIds: ["bug-lab", "spy-academy", "dino-dig", "potion-lab"],
    description: "Signature backdrop tent with crates and lanterns for atmosphere.",
    qtyNote: "1 setup",
  },
  {
    id: "field-journals",
    name: "Field journals",
    category: "Keepsakes",
    experienceIds: ["bug-lab", "dino-dig", "spy-academy", "potion-lab"],
    description: "Take-home journals so the adventure continues after pickup.",
    qtyNote: "Per guest",
  },
  {
    id: "crate-signage",
    name: "Wooden crate signage",
    category: "Props",
    experienceIds: ["bug-lab", "spy-academy", "dino-dig", "potion-lab"],
    description: "Hand-lettered crates: Adventure Lives Here / Small Explorers, Big Questions.",
    qtyNote: "Set of 4",
  },
];
