import { DESKTOP_PETS } from "../../config/desktopPets";

export default {
  id: DESKTOP_PETS.id,
  title: DESKTOP_PETS.title,
  shortDescription: `A desktop pet app published on the Microsoft Store with ${DESKTOP_PETS.msStore.views} views and ${DESKTOP_PETS.msStore.installs} installs.`,
  description:
    "A beloved desktop companion app featuring animated pets that live on your screen. Built with tkinter and published to the Microsoft Store, it accumulated strong organic traction. Later rebuilt in C# with hunger, thirst, and feeding mechanics.",
  languages: ["Python", "C#"],
  tags: ["tkinter", "Desktop App", "Microsoft Store", "Published"],
  category: "desktop",
  featured: true,
  featuredOrder: 2,
  highlights: [
    `${DESKTOP_PETS.msStore.views} views on Microsoft Store`,
    `${DESKTOP_PETS.msStore.installs} real-world installs`,
    "Rebuilt with advanced mechanics in C#",
  ],
  screenshots: ["desktop-pets-installs.png"],
  links: {
    store: DESKTOP_PETS.msStore.url,
  },
} as const;

