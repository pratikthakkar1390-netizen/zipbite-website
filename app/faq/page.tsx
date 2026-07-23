export default function FAQPage() {
  const faqs = [
    {
      question: "What is ZipBite?",
      answer:
        "ZipBite is a platform that helps customers discover and connect with local restaurants, grocery stores, bakeries, and specialty food businesses.",
    },
    {
      question: "How can I become a partner?",
      answer:
        "Visit our Become a Partner page and submit the interest form. Our team will contact you after reviewing your application.",
    },
    {
      question: "Does ZipBite deliver food?",
      answer:
        "Available services may vary by location and participating businesses.",
    },
    {
      question: "How do I contact ZipBite?",
      answer:
        "You can reach us through the Contact page on our website.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes. We take reasonable measures to protect the information you provide. Please see our Privacy Policy for more details.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">
            Find answers to common questions about ZipBite.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}