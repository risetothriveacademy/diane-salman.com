import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Inner Healing - Torah Mathews",
  description: "Understanding spiritual inner healing as part of trauma recovery and faith-based restoration.",
};

export default function SpiritualInnerHealingPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Spiritual Inner Healing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding spiritual inner healing as part of the 3 Sphere Recovery Method.
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">
            Faith-Based Recovery
          </h2>
          <p className="text-gray-700 mb-4">Spiritual inner healing brings:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• spiritual grounding</li>
            <li>• identity restoration</li>
            <li>• emotional renewal</li>
            <li>• prayer support</li>
            <li>• scriptural truth</li>
            <li>• peace and direction</li>
          </ul>
          <p className="text-lg text-gray-700 font-semibold">
            God heals through wisdom, truth, and community.
          </p>
        </section>

        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">All Healing Comes From God</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Spiritual inner healing is one sphere of the 3 Sphere Recovery Method, working together with medication and therapy to bring complete restoration.
          </p>
        </div>
      </div>
    </div>
  );
}
