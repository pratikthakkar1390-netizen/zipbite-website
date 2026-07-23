export const HERO = {
  eyebrow: "Local food marketplace",
  headline: "Order Local.",
  headlineAccent: "Eat Better.",
  description:
    "Discover restaurants, home kitchens, bakeries, and grocery vendors in your neighborhood — fresh, authentic, and delivered fast.",
  primaryCta: {
    label: "Explore Restaurants",
    href: "/restaurants",
  },
  secondaryCta: {
    label: "Become a Partner",
    href: "/become-a-partner",
  },
  stats: [
    { value: "500+", label: "Local vendors" },
    { value: "30 min", label: "Avg. delivery" },
    { value: "4.8★", label: "Customer rating" },
  ],
} as const;

export const SEARCH = {
  sectionTitle: "Find food near you",
  locationLabel: "Delivery address or neighborhood",
  locationPlaceholder: "Enter your address or neighborhood",
  queryLabel: "Search food or restaurants",
  queryPlaceholder: "Search pizza, sushi, bakery…",
  submitLabel: "Search",
  popularLabel: "Popular:",
  popularTerms: ["Pizza", "Sushi", "Burgers", "Bakery", "Indian", "Vegan"],
} as const;
