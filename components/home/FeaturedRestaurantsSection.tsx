import { FEATURED_SECTION } from "@/lib/constants/restaurants";
import { getFeaturedRestaurants } from "@/lib/data/restaurants";
import { RestaurantCard } from "@/components/shared/RestaurantCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export async function FeaturedRestaurantsSection() {
  const restaurants = await getFeaturedRestaurants();

  return (
    <section
      aria-labelledby="featured-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="featured-heading"
          title={FEATURED_SECTION.title}
          description={FEATURED_SECTION.description}
          action={{
            label: FEATURED_SECTION.viewAllLabel,
            href: FEATURED_SECTION.viewAllHref,
          }}
        />

        <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="min-w-[280px] snap-start sm:min-w-0">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
