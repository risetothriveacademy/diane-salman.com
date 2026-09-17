import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Conditions - Torah Mathews",
  description: "Understanding mental health conditions related to trauma, anxiety, depression, and PTSD",
};

export default function MentalHealthConditionsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Mental Health Conditions</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Understanding the mental health conditions that can arise from trauma and how faith-based approaches can support healing
        </p>

        <div className="space-y-8">
          {/* Anxiety Disorders */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#209bab]">
              Anxiety Disorders
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Anxiety disorders are among the most common mental health conditions affecting millions worldwide.
              They can manifest as constant worry, panic attacks, physical symptoms, and overwhelming fear
              that interferes with daily life.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#209bab]">Common Symptoms:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Persistent worry and fear</li>
                <li>• Racing heart and difficulty breathing</li>
                <li>• Restlessness and difficulty concentrating</li>
                <li>• Sleep disturbances</li>
                <li>• Physical tension and fatigue</li>
              </ul>
            </div>
          </div>

          {/* Depression */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18c57]">
              Depression
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Depression is more than just feeling sad—it's a persistent condition that affects how you think,
              feel, and function. It can be triggered by trauma, loss, or prolonged stress, and requires
              both spiritual and professional support for recovery.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#b18c57]">Common Symptoms:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Persistent sadness or emptiness</li>
                <li>• Loss of interest in activities once enjoyed</li>
                <li>• Changes in appetite and sleep patterns</li>
                <li>• Difficulty concentrating and making decisions</li>
                <li>• Thoughts of worthlessness or hopelessness</li>
              </ul>
            </div>
          </div>

          {/* PTSD */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#209bab]">
              Post-Traumatic Stress Disorder (PTSD)
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              PTSD can develop after experiencing or witnessing a traumatic event. It affects not just veterans,
              but anyone who has endured severe trauma, including abuse, accidents, loss, or life-threatening situations.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#209bab]">Common Symptoms:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Intrusive memories or flashbacks</li>
                <li>• Nightmares and sleep disturbances</li>
                <li>• Avoidance of reminders of the trauma</li>
                <li>• Heightened reactivity and hypervigilance</li>
                <li>• Negative changes in mood and thinking</li>
              </ul>
            </div>
          </div>

          {/* Grief and Loss */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18c57]">
              Complicated Grief
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              While grief is a natural response to loss, complicated grief persists and intensifies over time,
              making it difficult to move forward. It can affect every aspect of life and requires compassionate,
              faith-based support.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#b18c57]">Common Symptoms:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Intense longing for the deceased or lost situation</li>
                <li>• Difficulty accepting the loss</li>
                <li>• Numbness or detachment from others</li>
                <li>• Inability to enjoy life or trust others</li>
                <li>• Feeling that life has no meaning or purpose</li>
              </ul>
            </div>
          </div>

          {/* Faith-Based Hope */}
          <div className="bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">There is Hope for Healing</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              No matter what mental health condition you're facing, you are not alone. Through faith,
              professional support, and community, recovery is possible.
            </p>
            <blockquote className="border-l-4 border-white pl-6 italic text-lg my-8 max-w-2xl mx-auto">
              "He heals the brokenhearted and binds up their wounds."
              <footer className="text-sm mt-2 not-italic">— Psalm 147:3 (NIV)</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
