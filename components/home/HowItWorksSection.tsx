import { HOW_IT_WORKS } from "@/lib/constants/how-it-works";
import { HowItWorksStepCard } from "@/components/home/HowItWorksStepCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="how-it-works-heading"
          title={HOW_IT_WORKS.title}
          description={HOW_IT_WORKS.description}
          align="center"
        />

        <ol className="grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <HowItWorksStepCard
              key={step.step}
              step={step}
              isLast={index === HOW_IT_WORKS.steps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
