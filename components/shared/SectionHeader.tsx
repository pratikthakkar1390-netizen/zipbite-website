import Link from "next/link";

type SectionHeaderProps = {
  id?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
  align?: "left" | "center";
};

export function SectionHeader({
  id,
  title,
  description,
  action,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-8 flex flex-col gap-4 sm:mb-10 ${
        isCenter ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={isCenter ? "max-w-2xl" : ""}>
        <h2
          id={id}
          className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-base text-gray-600 sm:text-lg">{description}</p>
        )}
      </div>

      {action && !isCenter && (
        <Link
          href={action.href}
          className="inline-flex shrink-0 items-center gap-1 rounded-md text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          {action.label}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
