import type { ReactNode } from "react";
import type { WhyChooseBenefit } from "@/lib/constants/why-choose";

type WhyChooseCardProps = {
  benefit: WhyChooseBenefit;
};

export function WhyChooseCard({ benefit }: WhyChooseCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
        <BenefitIcon type={benefit.icon} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">{benefit.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {benefit.description}
      </p>
    </article>
  );
}

function BenefitIcon({ type }: { type: WhyChooseBenefit["icon"] }) {
  const className = "h-6 w-6";

  const icons: Record<WhyChooseBenefit["icon"], ReactNode> = {
    local: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    ),
    verified: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    fast: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    variety: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    secure: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
      </svg>
    ),
    support: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10c0 3.866-3.582 7-8 7a8.8 8.8 0 0 1-2.5-.4L4 18l1.6-3.5A7.7 7.7 0 0 1 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
      </svg>
    ),
  };

  return icons[type];
}
