import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy - Torah Mathews",
  description: "Understanding therapy as part of trauma recovery and emotional healing.",
};

export default function TherapyPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Therapy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding therapy as part of the 3 Sphere Recovery Method.
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">
            Therapy — Emotional Processing
          </h2>
          <p className="text-gray-700 mb-4">Therapy provides:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• a safe, consistent space</li>
            <li>• emotional regulation skills</li>
            <li>• trauma processing tools</li>
            <li>• inner child work</li>
            <li>• coping strategies</li>
            <li>• identity rebuilding</li>
          </ul>
          <p className="text-lg text-gray-700 font-semibold">
            Healing is not linear, but it is possible.
          </p>
        </section>

        <div className="text-center bg-gradient-to-r from-[#b18c57] to-[#209bab] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Part of a Holistic Approach</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Therapy is one sphere of the 3 Sphere Recovery Method, working together with medication and spiritual inner healing.
          </p>
        </div>
      </div>
    </div>
  );
}
