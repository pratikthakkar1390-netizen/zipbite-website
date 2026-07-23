export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About ZipBite</h1>
          <p className="text-xl">
            Connecting communities with great local food, one order at a time.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-7">
            ZipBite is a local food marketplace that helps customers discover
            and support nearby restaurants, grocery stores, bakeries, and
            specialty food businesses. Our mission is to make ordering local
            food simple while helping local businesses grow.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-7">
            We believe local businesses are the heart of every community. By
            making it easier for customers to find and order from nearby food
            providers, we help strengthen local economies and create better
            dining experiences.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose ZipBite?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Support local restaurants and food businesses.</li>
            <li>Discover unique food options near you.</li>
            <li>Simple and convenient ordering experience.</li>
            <li>Focused on community and quality.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}