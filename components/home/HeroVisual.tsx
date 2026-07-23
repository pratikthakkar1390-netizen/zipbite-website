export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 shadow-2xl shadow-emerald-900/20" />

      <div className="absolute -left-4 top-8 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
        <FoodCard emoji="🍕" name="Artisan Pizza Co." rating="4.9" time="25 min" />
      </div>

      <div className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-xl sm:-right-6">
        <FoodCard emoji="🥗" name="Green Bowl Kitchen" rating="4.8" time="20 min" />
      </div>

      <div className="absolute -bottom-2 left-1/4 rounded-2xl bg-white p-4 shadow-xl sm:-bottom-4">
        <FoodCard emoji="🧁" name="Sweet Crumb Bakery" rating="5.0" time="15 min" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/20">
          <span className="text-8xl drop-shadow-lg">🍽️</span>
        </div>
      </div>

      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-400/30 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-emerald-300/40 blur-3xl" />
    </div>
  );
}

type FoodCardProps = {
  emoji: string;
  name: string;
  rating: string;
  time: string;
};

function FoodCard({ emoji, name, rating, time }: FoodCardProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
        {emoji}
      </span>
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">
          {rating} · {time}
        </p>
      </div>
    </div>
  );
}
