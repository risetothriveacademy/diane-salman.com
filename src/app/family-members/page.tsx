import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Family Members - Torah Mathews",
  description: "Guidance for family members supporting loved ones through trauma recovery.",
};

export default function FamilyMembersPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">For Family Members</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical guidance for family members caring for someone in emotional distress.
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">
            Your Role Matters
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

        <div className="text-center bg-gradient-to-r from-[#b18c57] to-[#209bab] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">You Don't Have to Be a Professional</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Sometimes the most healing thing you can offer is simply your presence, patience, and the reminder that they are not alone.
          </p>
        </div>
      </div>
    </div>
  );
}
