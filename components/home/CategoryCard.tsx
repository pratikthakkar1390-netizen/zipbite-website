import Link from "next/link";
import type { FoodCategory } from "@/lib/constants/categories";

type CategoryCardProps = {
  category: FoodCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/restaurants?category=${category.slug}`}
      className={`group flex min-w-[140px] flex-col items-center rounded-2xl border border-gray-100 bg-gradient-to-br ${category.color} p-5 text-center transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:min-w-0`}
      aria-label={`Browse ${category.name} — ${category.description}`}
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm transition-transform group-hover:scale-110"
        aria-hidden="true"
      >
        {category.emoji}
      </span>
      <span className="mt-3 text-sm font-semibold text-gray-900">{category.name}</span>
      <span className="mt-1 hidden text-xs text-gray-500 sm:block">
        {category.description}
      </span>
    </Link>
  );
}
