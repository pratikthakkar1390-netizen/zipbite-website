export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
  icon: "search" | "order" | "delivery";
};

export const HOW_IT_WORKS = {
  title: "How ZipBite Works",
  description: "From craving to doorstep in three simple steps.",
  steps: [
    {
      step: 1,
      title: "Discover Local Food",
      description:
        "Search by neighborhood, cuisine, or craving. Browse restaurants, home kitchens, bakeries, and grocery vendors near you.",
      icon: "search",
    },
    {
      step: 2,
      title: "Place Your Order",
      description:
        "Customize your meal, add items to cart, and checkout securely. Pay online or choose your preferred payment method.",
      icon: "order",
    },
    {
      step: 3,
      title: "Enjoy Fast Delivery",
      description:
        "Track your order in real time and get fresh, authentic food delivered straight to your door — often in under 30 minutes.",
      icon: "delivery",
    },
  ] satisfies HowItWorksStep[],
} as const;
