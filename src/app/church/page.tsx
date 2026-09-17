import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Churches - Torah Mathews",
  description: "Trauma-informed ministry guidance for churches supporting members in emotional distress.",
};

export default function ChurchPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">For Churches & Ministries</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating trauma-informed, emotionally safe spaces for healing and restoration.
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">
            Trauma-Informed Ministry
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-semibold">
            Trauma-informed ministry means:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• avoiding spiritual pressure or shame</li>
            <li>• creating emotionally safe environments</li>
            <li>• understanding triggers</li>
            <li>• using scripture with compassion</li>
            <li>• validating emotional wounds</li>
            <li>• supporting inner healing</li>
            <li>• avoiding toxic positivity</li>
            <li>• recognizing nervous system overwhelm</li>
          </ul>
          <p className="text-lg text-gray-700 font-semibold">
            The church should be the safest place for the wounded.
          </p>
        </section>

        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Creating Safe Spaces for Healing</h2>
          <p className="text-xl max-w-3xl mx-auto">
            When the church understands trauma, it becomes a place of true refuge and restoration.
          </p>
        </div>
      </div>
    </div>
  );
}
