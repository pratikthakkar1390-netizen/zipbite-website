export type WhyChooseBenefit = {
  title: string;
  description: string;
  icon: "local" | "verified" | "fast" | "variety" | "secure" | "support";
};

export const WHY_CHOOSE = {
  title: "Why Choose ZipBite",
  description:
    "More than delivery — we're building a marketplace that puts local food first.",
  benefits: [
    {
      title: "Support Local Business",
      description:
        "Every order helps neighborhood restaurants, home cooks, and independent vendors thrive in your community.",
      icon: "local",
    },
    {
      title: "Verified Partners",
      description:
        "All vendors are reviewed for quality, hygiene, and reliability — so you can order with confidence.",
      icon: "verified",
    },
    {
      title: "Fast Delivery",
      description:
        "Optimized local routing means most orders arrive in 30 minutes or less, hot and fresh.",
      icon: "fast",
    },
    {
      title: "Wide Selection",
      description:
        "Restaurants, home kitchens, bakeries, grocery stores, and specialty food vendors — all in one app.",
      icon: "variety",
    },
    {
      title: "Secure Checkout",
      description:
        "Encrypted payments and protected transactions keep your personal and payment info safe.",
      icon: "secure",
    },
    {
      title: "Real Support",
      description:
        "Friendly customer support when you need help — before, during, and after every order.",
      icon: "support",
    },
  ] satisfies WhyChooseBenefit[],
} as const;
