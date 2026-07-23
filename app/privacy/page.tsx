export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl">
            Your privacy matters to us.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-700 leading-7">
        <div>
          <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
          <p>
            We may collect information you voluntarily provide, such as your
            name, email address, phone number, and business details when you
            contact us or submit a partnership request.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to inquiries,
            communicate with you, improve our services, and evaluate partnership
            requests.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information
            only when required by law or when necessary to provide our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Data Security</h2>
          <p>
            We take reasonable measures to protect the information you provide.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please use the
            contact page on our website.
          </p>
        </div>
      </section>
    </main>
  );
}