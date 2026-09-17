import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Author - Torah Mathews",
  description: "The testimony behind Transforming Pain into Power.",
};

export default function AuthorPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About the Author</h1>
          <p className="text-xl text-gray-600">
            The testimony behind Transforming Pain into Power.
          </p>
        </div>

        {/* Short Bio */}
        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">Short Bio</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Torah Mathews is an author, speaker, and trauma-recovery advocate whose life was radically transformed by God's healing power.
            </p>
            <p>
              After walking through childhood instability, emotional collapse, betrayal, financial devastation, and spiritual warfare — Torah encountered God in a way that restored her identity and rebuilt her life from the ground up.
            </p>
            <p>
              Her mission is to help others break trauma cycles, rebuild identity, and discover God's healing power.
            </p>
          </div>
        </section>

        {/* The Calling */}
        <section className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Calling</h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            During her healing journey, God gave her a divine instruction:
          </p>
          <blockquote className="border-l-4 border-teal-600 pl-6 italic text-xl my-6 bg-white py-6 rounded">
            "Testify of what I have done… let your story be the light that leads them back to Me."
          </blockquote>
          <p className="text-slate-700 text-lg font-semibold">
            Her testimony is now a mission to bring healing to others.
          </p>
        </section>
      </div>
    </div>
  );
}
