import Link from "next/link";
import type { RestaurantListing } from "@/lib/constants/restaurants";

type RestaurantCardProps = {
  restaurant: RestaurantListing;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/restaurants/${restaurant.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-2xl"
      >
        <div
          className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${restaurant.imageGradient}`}
        >
          <span className="text-6xl drop-shadow-md" aria-hidden="true">
            {restaurant.imageEmoji}
          </span>

          {restaurant.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm">
              {restaurant.badge}
            </span>
          )}
        </div>

        <div className="p-4">
          <h3 className="truncate text-base font-semibold text-gray-900 group-hover:text-emerald-700">
            {restaurant.name}
          </h3>

          <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
            <StarIcon />
            <span className="font-medium text-gray-900">{restaurant.rating}</span>
            <span aria-hidden="true">·</span>
            <span>({restaurant.reviewCount})</span>
            <span aria-hidden="true">·</span>
            <span>{restaurant.deliveryTime}</span>
          </div>

          <p className="mt-1 truncate text-sm text-gray-500">{restaurant.cuisine}</p>

          <p className="mt-2 text-xs font-medium text-emerald-600">
            {restaurant.deliveryFee}
          </p>
        </div>
      </Link>
    </article>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-amber-400"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.122 5.127 5.44.003c1.136.001 1.619 1.493.736 2.173l-4.419 3.246 1.684 5.272c.347 1.085-.906 1.965-1.845 1.282l-4.542-3.11-4.542 3.11c-.939.683-2.192-.197-1.845-1.282l1.684-5.272-4.419-3.246c-.883-.68-.4-1.172.736-2.173l5.44-.003 2.122-5.127z"
        clipRule="evenodd"
      />
    </svg>
  );
}
