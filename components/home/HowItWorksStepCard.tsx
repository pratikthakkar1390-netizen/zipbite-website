import type { HowItWorksStep } from "@/lib/constants/how-it-works";

type HowItWorksStepCardProps = {
  step: HowItWorksStep;
  isLast?: boolean;
};

export function HowItWorksStepCard({ step, isLast = false }: HowItWorksStepCardProps) {
  return (
    <li className="relative flex flex-col items-center text-center">
      {!isLast && (
        <div
          className="absolute left-[calc(50%+2.5rem)] top-10 hidden h-0.5 w-[calc(100%-5rem)] bg-gradient-to-r from-emerald-300 to-emerald-100 lg:block"
          aria-hidden="true"
        />
      )}

      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/25">
        <StepIcon type={step.icon} />
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white ring-2 ring-white">
          {step.step}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
        {step.description}
      </p>
    </li>
  );
}

function StepIcon({ type }: { type: HowItWorksStep["icon"] }) {
  const className = "h-8 w-8";

  if (type === "search") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        className={className}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M20 20l-3-3" />
      </svg>
    );
  }

  if (type === "order") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        className={className}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h15l-1.5 9h-12L6 6z"
        />
        <path strokeLinecap="round" d="M6 6L5 3H2" />
        <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1m8-1a1 1 0 0 1-1 1H9m4-1V8a1 1 0 0 1 1-1h2.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V16a1 1 0 0 1-1 1h-1m-6-1a1 1 0 1 0 11 0 1 1 0 0 0-11 0z"
      />
    </svg>
  );
}
