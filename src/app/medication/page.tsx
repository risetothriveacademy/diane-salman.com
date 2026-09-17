import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medication - Torah Mathews",
  description: "Understanding medication as part of trauma recovery and mental health healing.",
};

export default function MedicationPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Medication</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding medication as part of the 3 Sphere Recovery Method.
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">
            Medication — Regaining Stability
          </h2>
          <p className="text-gray-700 mb-4">Medication can help:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• stabilize mood</li>
            <li>• reduce anxiety</li>
            <li>• improve sleep</li>
            <li>• support clarity</li>
            <li>• reduce overwhelm</li>
          </ul>
          <p className="text-lg text-gray-700 font-semibold">
            There is no shame in using medical support. It is a tool — not an identity.
          </p>
        </section>

        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Part of a Holistic Approach</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Medication is one sphere of the 3 Sphere Recovery Method, working together with therapy and spiritual inner healing.
          </p>
        </div>
      </div>
    </div>
  );
}
