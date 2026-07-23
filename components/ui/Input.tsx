import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hideLabel?: boolean;
  icon?: ReactNode;
};

export function Input({
  label,
  hideLabel = false,
  icon,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className={hideLabel ? "sr-only" : "mb-1.5 block text-sm font-medium text-gray-700"}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 py-3 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${
            icon ? "pl-10 pr-4" : "px-4"
          } ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
