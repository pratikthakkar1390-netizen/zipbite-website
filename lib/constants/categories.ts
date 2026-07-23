export type FoodCategory = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  color: string;
};

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    slug: "pizza",
    name: "Pizza",
    emoji: "🍕",
    description: "Wood-fired & classic slices",
    color: "from-red-50 to-orange-50",
  },
  {
    slug: "burgers",
    name: "Burgers",
    emoji: "🍔",
    description: "Smash burgers & gourmet stacks",
    color: "from-amber-50 to-yellow-50",
  },
  {
    slug: "sushi",
    name: "Sushi",
    emoji: "🍣",
    description: "Fresh rolls & Japanese bites",
    color: "from-rose-50 to-pink-50",
  },
  {
    slug: "indian",
    name: "Indian",
    emoji: "🍛",
    description: "Curries, biryanis & tandoori",
    color: "from-orange-50 to-amber-50",
  },
  {
    slug: "mexican",
    name: "Mexican",
    emoji: "🌮",
    description: "Tacos, burritos & bowls",
    color: "from-lime-50 to-green-50",
  },
  {
    slug: "bakery",
    name: "Bakery",
    emoji: "🥐",
    description: "Fresh bread, pastries & cakes",
    color: "from-yellow-50 to-amber-50",
  },
  {
    slug: "vegan",
    name: "Vegan",
    emoji: "🥗",
    description: "Plant-based & wholesome meals",
    color: "from-emerald-50 to-green-50",
  },
  {
    slug: "desserts",
    name: "Desserts",
    emoji: "🧁",
    description: "Sweet treats & ice cream",
    color: "from-pink-50 to-purple-50",
  },
  {
    slug: "grocery",
    name: "Grocery",
    emoji: "🛒",
    description: "Markets & everyday essentials",
    color: "from-blue-50 to-cyan-50",
  },
  {
    slug: "home-kitchen",
    name: "Home Kitchen",
    emoji: "🏠",
    description: "Homemade meals from local cooks",
    color: "from-violet-50 to-indigo-50",
  },
];

export const CATEGORIES_SECTION = {
  title: "Browse by Category",
  description: "From comfort classics to homemade favorites — find exactly what you're craving.",
  viewAllLabel: "View all restaurants",
  viewAllHref: "/restaurants",
} as const;
