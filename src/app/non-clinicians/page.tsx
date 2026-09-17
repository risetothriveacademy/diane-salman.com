import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supporting Someone in Trauma",
  description: "Practical guidance for family, friends, pastors, and support groups caring for someone in emotional distress.",
};

export default function NonCliniciansPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Supporting Someone in Trauma</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical guidance for family, friends, pastors, and support groups caring for someone in emotional distress.
          </p>
        </div>

        <div className="space-y-12">
          {/* For Family & Friends */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-[#209bab] mb-6">
              For Family & Friends
            </h2>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
              Your role matters more than you realize.
            </p>
            <p className="text-gray-700 mb-4">People in trauma need:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• emotional safety</li>
              <li>• patience</li>
              <li>• consistency</li>
              <li>• listening without judgment</li>
              <li>• space to process</li>
              <li>• assurance they're not alone</li>
            </ul>

            <div className="bg-teal-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-3 text-[#209bab]">Helpful phrases:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>"I'm here with you."</li>
                <li>"You're safe."</li>
                <li>"You're not alone."</li>
                <li>"I won't rush you."</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-red-700">Avoid minimizing statements like:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>"You're overreacting"</li>
                <li>"Just move on"</li>
              </ul>
            </div>
          </section>

          {/* For Churches & Ministries */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-[#b18c57] mb-6">
              For Churches & Ministries
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

          {/* For Community Support Groups */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-[#209bab] mb-6">
              For Community Support Groups
            </h2>
            <p className="text-gray-700 mb-4">Groups help survivors rebuild by offering:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• empathy</li>
              <li>• peer encouragement</li>
              <li>• understanding emotional patterns</li>
              <li>• gentle accountability</li>
              <li>• faith-based insight</li>
              <li>• consistent support</li>
            </ul>
            <p className="text-lg text-gray-700 font-semibold">
              Healing happens in community.
            </p>
          </section>
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#b18c57] to-[#209bab] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">You Don't Have to Be a Professional to Make a Difference</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Sometimes the most healing thing you can offer is simply your presence, patience, and the reminder that they are not alone.
          </p>
        </div>
      </div>
    </div>
  );
}
