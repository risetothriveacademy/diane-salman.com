import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trauma, Mental Health & Faith",
  description: "Understanding the emotional, physical, and spiritual impact of trauma — and how healing begins.",
};

export default function TraumaAndMentalHealthPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Trauma, Mental Health & Faith</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the emotional, physical, and spiritual impact of trauma — and how healing begins.
          </p>
        </div>

        {/* What Trauma Really Is */}
        <section className="mb-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">What Trauma Really Is</h2>
          <p className="text-lg text-gray-700 mb-4">
            Trauma is not the event itself — it is the emotional injury left behind.
          </p>
          <p className="text-gray-700 mb-4">It affects:</p>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            <li>• the brain</li>
            <li>• the nervous system</li>
            <li>• identity</li>
            <li>• emotions</li>
            <li>• relationships</li>
            <li>• decision-making</li>
            <li>• faith</li>
          </ul>
          <p className="text-gray-700 mt-6">
            Trauma creates patterns, emotional cycles, and reactions even long after the event has passed.
          </p>
        </section>

        {/* Trauma & the Brain */}
        <section className="mb-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">Trauma & the Brain</h2>
          <p className="text-gray-700 mb-4">Trauma can cause:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• an overactive fear response</li>
            <li>• difficulty concentrating</li>
            <li>• emotional shutdown</li>
            <li>• memory gaps</li>
            <li>• hypervigilance</li>
            <li>• impulsive reactions</li>
            <li>• avoidance patterns</li>
          </ul>
          <p className="text-gray-700 mt-6 font-semibold">
            This is not "being weak." It is how the brain protects itself after pain.
          </p>
        </section>

        {/* Trauma & the Body */}
        <section className="mb-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">Trauma & the Body</h2>
          <p className="text-lg text-gray-700 mb-4 font-semibold">
            The body remembers what the mind tries to forget.
          </p>
          <p className="text-gray-700 mb-4">Trauma may show up as:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• tightness or heaviness</li>
            <li>• anxiety symptoms</li>
            <li>• stomach issues</li>
            <li>• headaches</li>
            <li>• fatigue</li>
            <li>• emotional flooding</li>
            <li>• fight / flight / freeze / fawn patterns</li>
          </ul>
          <p className="text-gray-700 mt-6">
            Your nervous system carries the weight of unprocessed wounds.
          </p>
        </section>

        {/* Spiritual Warfare & Trauma */}
        <section className="mb-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#209bab] mb-6">Spiritual Warfare & Trauma</h2>
          <p className="text-gray-700 mb-4">Where trauma creates insecurity, the enemy whispers:</p>
          <div className="bg-red-50 p-6 rounded-lg mb-6">
            <ul className="space-y-2 text-gray-700 italic">
              <li>"You're not enough."</li>
              <li>"You're not safe."</li>
              <li>"God is far from you."</li>
              <li>"You are alone."</li>
              <li>"You'll always be broken."</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4 font-semibold">But God speaks:</p>
          <div className="bg-teal-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• identity</li>
              <li>• truth</li>
              <li>• restoration</li>
              <li>• safety</li>
              <li>• purpose</li>
              <li>• peace</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6">
            Healing involves both emotional processing and spiritual renewal.
          </p>
        </section>

        {/* How Healing Begins */}
        <section className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How Healing Begins</h2>
          <p className="text-slate-700 mb-4">Trauma healing includes:</p>
          <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
            <li>• emotional awareness</li>
            <li>• nervous system calming</li>
            <li>• scripture-based truth</li>
            <li>• identity work</li>
            <li>• practical tools</li>
            <li>• community</li>
            <li>• trauma-informed support</li>
            <li>• renewing the mind through faith</li>
          </ul>
          <p className="text-slate-700 mt-6 text-lg font-semibold">
            You can rise again — and God restores layer by layer.
          </p>
        </section>
      </div>
    </div>
  );
}
