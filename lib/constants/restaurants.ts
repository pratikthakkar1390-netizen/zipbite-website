import type { Restaurant } from "@/lib/types";

export type RestaurantListing = Restaurant & {
  imageEmoji: string;
  imageGradient: string;
  badge?: string;
  reviewCount: number;
  deliveryFee: string;
};

export const FEATURED_SECTION = {
  title: "Featured Restaurants",
  description:
    "Top-rated local favorites handpicked for quality, speed, and flavor.",
  viewAllLabel: "See all restaurants",
  viewAllHref: "/restaurants",
} as const;

export const FEATURED_RESTAURANTS: RestaurantListing[] = [
  {
    id: "1",
    name: "Artisan Pizza Co.",
    slug: "artisan-pizza-co",
    cuisine: "Pizza · Italian",
    rating: 4.9,
    deliveryTime: "25 min",
    imageUrl: "",
    isFeatured: true,
    imageEmoji: "🍕",
    imageGradient: "from-red-400 to-orange-500",
    badge: "Top Rated",
    reviewCount: 342,
    deliveryFee: "Free delivery",
  },
  {
    id: "2",
    name: "Green Bowl Kitchen",
    slug: "green-bowl-kitchen",
    cuisine: "Vegan · Healthy",
    rating: 4.8,
    deliveryTime: "20 min",
    imageUrl: "",
    isFeatured: true,
    imageEmoji: "🥗",
    imageGradient: "from-emerald-400 to-teal-500",
    badge: "Healthy Pick",
    reviewCount: 218,
    deliveryFee: "$1.99 delivery",
  },
  {
    id: "3",
    name: "Spice Route Indian",
    slug: "spice-route-indian",
    cuisine: "Indian · Curry",
    rating: 4.7,
    deliveryTime: "30 min",
    imageUrl: "",
    isFeatured: true,
    imageEmoji: "🍛",
    imageGradient: "from-orange-400 to-amber-500",
    reviewCount: 456,
    deliveryFee: "Free delivery",
  },
  {
    id: "4",
    name: "Tokyo Roll Sushi",
    slug: "tokyo-roll-sushi",
    cuisine: "Sushi · Japanese",
    rating: 4.9,
    deliveryTime: "22 min",
    imageUrl: "",
    isFeatured: true,
    imageEmoji: "🍣",
    imageGradient: "from-rose-400 to-pink-500",
    badge: "New",
    reviewCount: 189,
    deliveryFee: "$2.49 delivery",
  },
  {
    id: "5",
    name: "Sweet Crumb Bakery",
    slug: "sweet-crumb-bakery",
    cuisine: "Bakery · Desserts",
    rating: 5.0,
    deliveryTime: "15 min",
    imageUrl: "",
    isFeatured: true,
    imageEmoji: "🧁",
    imageGradient: "from-pink-400 to-purple-500",
    reviewCount: 127,
    deliveryFee: "Free delivery",
  },
  {
    id: "6",
    name: "Mama's Home Kitchen",
    slug: "mamas-home-kitchen",
    cuisine: "Home Kitchen · Comfort",
    rating: 4.8,
    deliveryTime: "35 min",
    imageUrl: "",
    isFeatured: true,
    imageEmoji: "🏠",
    imageGradient: "from-violet-400 to-indigo-500",
    badge: "Local Favorite",
    reviewCount: 274,
    deliveryFee: "$0.99 delivery",
  },
];
