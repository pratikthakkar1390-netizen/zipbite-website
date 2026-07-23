/** Shared domain types — extend as features are built */

export type UserRole = "customer" | "restaurant" | "admin";

export type User = {
  id: string;
  email: string;
  role: UserRole;
  createdAt: string;
};

export type Restaurant = {
  id: string;
  name: string;
  slug: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  imageUrl: string;
  isFeatured: boolean;
};

export type { FoodCategory } from "@/lib/constants/categories";
