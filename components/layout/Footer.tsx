import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-green-600">
              ZipBite
            </h2>

            <p className="mt-3 text-sm font-semibold tracking-wide text-green-600 uppercase">
              Order Local. Eat Better.
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              ZipBite helps customers discover and support local restaurants,
              grocery stores, bakeries, and specialty food businesses.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Company
            </h3>

            <ul className="space-y-3">
  <li>
    <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
      About
    </Link>
  </li>
  <li>
    <Link href="/partner" className="text-gray-600 hover:text-green-600 transition-colors">
      Become a Partner
    </Link>
  </li>
  <li>
    <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
      Contact
    </Link>
  </li>
  <li>
    <Link href="/faq" className="text-gray-600 hover:text-green-600 transition-colors">
      FAQ
    </Link>
  </li>
</ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-gray-600">

          
  <div>
  <p className="font-medium text-gray-900">
    Location
  </p>
  <p>New Jersey, USA</p>
</div>

<div>
  <p className="font-medium text-gray-900">
    Website
  </p>

  <a
    href="https://zip-bite.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 hover:underline"
  >
    zip-bite.com
  </a>
</div>

<div>
  <p className="font-medium text-gray-900">
    Phone
  </p>

  <a
    href="tel:+17327626777"
    className="text-green-600 hover:underline"
  >
    (732) 762-6777
  </a>
</div>

            </div>
          </div>

        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-gray-500">

      <p>
  © {new Date().getFullYear()} ZipNest LLC. All rights reserved.
</p>

          <p className="mt-2">
            ZipBite is a registered DBA (Doing Business As) of ZipNest LLC.
          </p>

        </div>

      </div>
    </footer>
  );
} 