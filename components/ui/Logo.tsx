import Link from "next/link";
import { SITE } from "@/lib/constants/site";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md ${className}`}
      aria-label={`${SITE.name} — ${SITE.tagline}`}
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white shadow-sm transition-transform group-hover:scale-105"
        aria-hidden="true"
      >
        Z
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          {SITE.name}
        </span>
        <span className="hidden text-[10px] font-medium uppercase tracking-wider text-emerald-600 sm:block">
          {SITE.tagline}
        </span>
      </span>
    </Link>
  );
}
