import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Social Groups - Torah Mathews",
  description: "Guidance for community support groups helping trauma survivors.",
};

export default function SocialGroupsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">For Community Support Groups</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building healing communities for trauma survivors.
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">
            The Power of Community
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

        <div className="text-center bg-gradient-to-r from-[#b18c57] to-[#209bab] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">You're Not Alone in This Journey</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Support groups provide a safe space to process, heal, and grow together.
          </p>
        </div>
      </div>
    </div>
  );
}
