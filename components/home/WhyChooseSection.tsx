import { WHY_CHOOSE } from "@/lib/constants/why-choose";
import { WhyChooseCard } from "@/components/home/WhyChooseCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function WhyChooseSection() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-gradient-to-b from-gray-50 to-emerald-50/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="why-choose-heading"
          title={WHY_CHOOSE.title}
          description={WHY_CHOOSE.description}
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.benefits.map((benefit) => (
            <WhyChooseCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
