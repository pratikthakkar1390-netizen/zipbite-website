import {
  FEATURED_RESTAURANTS,
  type RestaurantListing,
} from "@/lib/constants/restaurants";

/**
 * Data access layer — swap static data for Supabase queries when ready.
 */
export async function getFeaturedRestaurants(): Promise<RestaurantListing[]> {
  return FEATURED_RESTAURANTS;
}

export async function getRestaurantBySlug(
  slug: string,
): Promise<RestaurantListing | undefined> {
  return FEATURED_RESTAURANTS.find((restaurant) => restaurant.slug === slug);
}
