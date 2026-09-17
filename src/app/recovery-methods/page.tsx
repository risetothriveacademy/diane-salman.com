import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recovery Methods That Support Healing",
  description: "A trauma-informed overview of medication, therapy, and faith-based healing approaches.",
};

export default function RecoveryMethodsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Recovery Methods That Support Healing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trauma-informed overview of medication, therapy, and faith-based healing approaches.
          </p>
        </div>

        <div className="space-y-12">
          {/* Medication */}
          <section className="bg-white rounded-lg p-8 shadow-md">
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

          {/* Therapy */}
          <section className="bg-white rounded-lg p-8 shadow-md">
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

          {/* Faith-Based Recovery */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-[#209bab] mb-6">
              Faith-Based Recovery
            </h2>
            <p className="text-gray-700 mb-4">Faith brings:</p>
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
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">All Healing Comes From God</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Whether through medicine, therapy, or prayer — God is the ultimate healer who restores, renews, and makes all things new.
          </p>
        </div>
      </div>
    </div>
  );
}
