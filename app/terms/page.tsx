export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl">
            Terms and conditions for using ZipBite.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-700 leading-7">
        <div>
          <h2 className="text-2xl font-bold mb-3">Acceptance of Terms</h2>
          <p>
            By accessing or using ZipBite, you agree to these Terms of Service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Use of the Platform</h2>
          <p>
            Users agree to use the platform lawfully and provide accurate
            information when contacting us or requesting services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Intellectual Property</h2>
          <p>
            All content, branding, logos, and materials on ZipBite are owned by
            or licensed to ZipBite and may not be copied without permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Limitation of Liability</h2>
          <p>
            ZipBite is not responsible for losses arising from the use of this
            website except where required by applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <p>
            Questions about these Terms may be submitted through our Contact
            page.
          </p>
        </div>
      </section>
    </main>
  );
}