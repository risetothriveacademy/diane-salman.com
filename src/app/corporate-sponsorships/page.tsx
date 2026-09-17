import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Sponsorships - Torah Mathews",
  description: "Partner with Transforming Pain into Power to support trauma recovery and faith-based mental wellness.",
};

export default function CorporateSponsorshipsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Corporate Sponsorships</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with Transforming Pain into Power to support trauma recovery and faith-based mental wellness.
          </p>
        </div>

        {/* Mission Impact */}
        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">Mission Impact</h2>
          <p className="text-gray-700 mb-4">Your partnership helps:</p>
          <ul className="space-y-3 text-gray-700">
            <li>• fund trauma education</li>
            <li>• support community healing</li>
            <li>• provide resources to vulnerable groups</li>
            <li>• expand outreach programs</li>
            <li>• bring faith-based recovery tools to churches, nonprofits, and survivors</li>
          </ul>
        </section>

        {/* Sponsorship Levels */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#209bab] mb-8 text-center">Sponsorship Levels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#b18c57] mb-4">Gold Partner</h3>
              <p className="text-gray-700">
                Large-scale support for major programs and healing initiatives.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#209bab] mb-4">Silver Partner</h3>
              <p className="text-gray-700">
                Mid-level support for trauma recovery work.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#b18c57] mb-4">Bronze Partner</h3>
              <p className="text-gray-700">
                Entry-level support for mission growth.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">Why Partner With Us</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• trauma-informed initiative</li>
            <li>• faith-based focus</li>
            <li>• measurable mission impact</li>
            <li>• growing national footprint</li>
            <li>• supporting emotional and spiritual recovery</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-xl mb-6">Contact us to explore corporate sponsorship opportunities</p>
          <a href="mailto:admin@torahmathews.com?subject=Corporate Sponsorship Inquiry">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
