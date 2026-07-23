"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { SEARCH } from "@/lib/constants/home";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (query.trim()) params.set("q", query.trim());

    const search = params.toString();
    router.push(search ? `/restaurants?${search}` : "/restaurants");
  }

  function handlePopularSearch(term: string) {
    router.push(`/restaurants?q=${encodeURIComponent(term)}`);
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-xl shadow-gray-900/5 sm:p-6">
      <form
        role="search"
        aria-label="Search restaurants"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <Input
            label={SEARCH.locationLabel}
            hideLabel
            name="location"
            type="text"
            placeholder={SEARCH.locationPlaceholder}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            autoComplete="street-address"
            icon={<LocationIcon />}
          />

          <Input
            label={SEARCH.queryLabel}
            hideLabel
            name="q"
            type="search"
            placeholder={SEARCH.queryPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            icon={<SearchIcon />}
          />

          <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto sm:px-8">
            {SEARCH.submitLabel}
          </Button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
        <span className="text-sm font-medium text-gray-500">
          {SEARCH.popularLabel}
        </span>
        {SEARCH.popularTerms.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => handlePopularSearch(term)}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M20 20l-3-3" />
    </svg>
  );
}
