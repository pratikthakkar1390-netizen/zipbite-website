import {
  CATEGORIES_SECTION,
  FOOD_CATEGORIES,
} from "@/lib/constants/categories";
import { CategoryCard } from "@/components/home/CategoryCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FoodCategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="categories-heading"
          title={CATEGORIES_SECTION.title}
          description={CATEGORIES_SECTION.description}
          action={{
            label: CATEGORIES_SECTION.viewAllLabel,
            href: CATEGORIES_SECTION.viewAllHref,
          }}
        />

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-4 lg:grid-cols-5">
          {FOOD_CATEGORIES.map((category) => (
            <div key={category.slug} className="snap-start sm:contents">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
