import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legacy Members - Torah Mathews",
  description: "Honoring those who supported the Transforming Pain into Power movement from the beginning.",
};

export default function LegacyMemberPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Legacy Members</h1>
          <p className="text-xl text-gray-600">
            Honoring those who supported the Transforming Pain into Power movement from the beginning.
          </p>
        </div>

        {/* Who They Are */}
        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">Who They Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Legacy Members are individuals whose early belief, encouragement, and generosity helped make this mission possible.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Their faith laid the foundation for healing journeys around the world.
          </p>
        </section>

        {/* Legacy Member Benefits */}
        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">Legacy Member Benefits</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>• Early updates</li>
            <li>• Behind-the-scenes book access</li>
            <li>• Event invitations</li>
            <li>• Optional recognition on this page</li>
          </ul>
        </section>

        {/* Honor Roll */}
        <section className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Honor Roll</h2>
          <p className="text-slate-700 italic">
            Names to be added here as Legacy Members give permission for public recognition.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Learn About Partnership Opportunities</h2>
          <p className="text-xl mb-6">Support the mission through corporate sponsorships</p>
          <Link href="/corporate-sponsorships">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Corporate Sponsorships
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
