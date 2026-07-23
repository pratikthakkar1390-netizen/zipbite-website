export const metadata = {
  title: "Contact | ZipBite",
  description: "Get in touch with the ZipBite team.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-gray-600">
            We'd love to hear from you. Whether you're a customer,
            restaurant owner, or potential partner, we're here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-8 border">

          <h2 className="text-3xl font-bold mb-8">
            Send us a message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border p-4"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border p-4"
            />

            <button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* Business Info */}
        <div>

          <h2 className="text-3xl font-bold mb-8">
            Business Information
          </h2>

          <div className="space-y-8">

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-lg">Company</h3>
              <p className="text-gray-600 mt-2">
                ZipBite
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-lg">Business Email</h3>
              <p className="text-gray-600 mt-2">
                Coming Soon
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600 mt-2">
                Coming Soon
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-600 mt-2">
                New Jersey, United States
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}