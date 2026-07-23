import { SEARCH } from "@/lib/constants/home";
import { SearchBar } from "@/components/home/SearchBar";

export function RestaurantSearchSection() {
  return (
    <section
      aria-labelledby="search-heading"
      className="relative z-10 -mt-10 px-4 sm:-mt-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="search-heading" className="sr-only">
          {SEARCH.sectionTitle}
        </h2>
        <SearchBar />
      </div>
    </section>
  );
}
