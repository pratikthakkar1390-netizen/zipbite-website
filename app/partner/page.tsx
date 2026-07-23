export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Grow Your Business with ZipBite
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Join local restaurants, bakeries, grocery stores, and home-based
            food businesses reaching more customers through ZipBite.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Partner With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-3">More Customers</h3>
              <p className="text-gray-600">
                Reach nearby customers looking to support local businesses.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-3">Easy Management</h3>
              <p className="text-gray-600">
                Manage your menu, pricing, and availability with ease.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-3">Local First</h3>
              <p className="text-gray-600">
                We focus on helping neighborhood businesses grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="border rounded-2xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Become a Partner
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Business Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Owner Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                placeholder="Tell us about your business..."
                rows={5}
                className="w-full border rounded-lg p-3"
              />

              <button
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Submit Interest
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              We'll contact you after reviewing your submission.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}