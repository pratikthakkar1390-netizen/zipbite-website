import { HERO } from "@/lib/constants/home";
import { SITE } from "@/lib/constants/site";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800">
              {HERO.eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              {HERO.headline}
              <span className="block text-emerald-600">{HERO.headlineAccent}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0">
              {HERO.description}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button href={HERO.primaryCta.href} variant="primary" size="lg">
                {HERO.primaryCta.label}
              </Button>
              <Button
                href={HERO.secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-emerald-200 bg-white hover:bg-emerald-50"
              >
                {HERO.secondaryCta.label}
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8 sm:gap-8">
              {HERO.stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroVisual />
        </div>
      </div>

      <div className="sr-only">
        <p>{SITE.tagline}</p>
      </div>
    </section>
  );
}
