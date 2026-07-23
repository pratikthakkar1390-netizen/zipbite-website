export const metadata = {
  title: "About | ZipBite",
  description:
    "Learn about ZipBite and our mission to connect customers with local restaurants and home kitchens.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-green-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900">
            About ZipBite
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl">
            ZipBite is a local food marketplace helping customers discover
            restaurants, home kitchens, bakeries and grocery vendors in one
            simple platform.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            We believe local businesses deserve the same technology as national
            brands. ZipBite makes it easy for customers to discover and support
            nearby restaurants while helping local food businesses grow.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-8">
            Build the most trusted local food marketplace where customers,
            restaurants and communities all benefit from a simple and modern
            ordering experience.
          </p>
        </div>

      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-2xl font-bold mb-4">
                🌱 Support Local
              </h3>

              <p className="text-gray-600">
                Helping local restaurants and food businesses reach more
                customers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-2xl font-bold mb-4">
                ❤️ Trust
              </h3>

              <p className="text-gray-600">
                Building lasting relationships through transparency and quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-2xl font-bold mb-4">
                ⚡ Innovation
              </h3>

              <p className="text-gray-600">
                Making local food ordering easier through modern technology.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}