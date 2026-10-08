import type { Metadata } from "next";
import { ScrollingBanner } from "@/components/ScrollingBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Diane Salman MBA",
  description:
    "A story of trauma, redemption, and God's transforming power.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-16 mx-auto max-w-5xl lg:px-8">
        {/* Hero */}
        <header className="mb-12">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            About Diane Salman MBA
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A story of trauma, redemption, and God's transforming power.
          </h1>
        </header>

        {/* Scrolling Banner */}
        <div className="mb-12 -mx-6 lg:-mx-8">
          <ScrollingBanner text="A Legacy in Honour of Jesus Christ — Together We Rise Against Pain, Grief, Depression, Anxiety, Abuse & Poverty." />
        </div>

        {/* Founder Video Bio */}
        <section className="mb-14 overflow-hidden rounded-3xl border border-amber-400/30 bg-slate-950 text-white shadow-2xl">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="relative bg-slate-900 p-4 sm:p-6 lg:p-8">
              <div className="overflow-hidden rounded-2xl border border-teal-400/30 bg-black shadow-xl">
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  poster="/images/diane-salman-founder-video-poster.svg"
                  aria-label="Founder message from Diane Salman MBA"
                >
                  <source src="/videos/diane-salman-founder-bio.mp4" type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              </div>
              <p className="mt-3 text-center text-xs tracking-wide text-slate-400">
                Founder Message — Diane Salman, MBA
              </p>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300">
                A Message From the Founder
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                What You Discover Beneath the Surface Could Change the Direction of Your Life.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                Sometimes the struggle you can see is only part of the story. Understanding what is happening beneath fear, grief, anxiety, discouragement, shame, exhaustion, or feeling stuck can become the beginning of meaningful change.
              </p>

              <div className="mt-7 border-l-4 border-amber-400 pl-5">
                <p className="text-xl font-bold text-white">Diane Salman, MBA</p>
                <p className="mt-1 font-semibold text-amber-300">Founder, Rise to Thrive Hub LLC</p>
                <p className="text-slate-300">Founder, Transforming Pain Into Power™</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Trauma Recovery Educator • Speaker • Author • Consultant
                  <br />
                  Corporate &amp; Organizational Resilience • Personal Restoration
                </p>
              </div>

              <blockquote className="mt-7 text-lg italic leading-relaxed text-slate-200">
                “My purpose is to help individuals move from pain into transformation, from emotional overwhelm into clarity, and from brokenness toward restoration—so they can rebuild stronger, live intentionally, and walk confidently in the purpose God has designed for their lives.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* Who I Am */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Who I Am
          </h2>
          <p className="text-slate-700 leading-relaxed">
            My name is Diane Salman MBA, and my story is not one of perfection — it is one of redemption.
            I grew up in an environment marked by instability, emotional unpredictability, and silent wounds.
            I learned to survive by staying strong and quiet — long before I ever learned how to heal.
          </p>
        </section>

        {/* Childhood & Early Life */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Childhood & Early Life — The Silent Wounds
          </h2>
          <p className="text-slate-700 leading-relaxed">
            My childhood was shaped by three core traumas: deep grief, constant anxiety about our family's finances, and the heavy responsibility of holding everything together in a home affected by alcoholism and abuse. Navigating that environment was painful and confusing. I understood loss long before I understood healing. I knew the weight of scarcity before I ever knew stability. And I learned how to survive in a world shaped by trauma and addiction.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Those early years taught me to:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>suppress my emotions</li>
            <li>overachieve to feel safe</li>
            <li>avoid conflict</li>
            <li>stay silent even when I needed support</li>
            <li>take care of others before myself</li>
            <li>survive instead of feel</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            These patterns followed me into adulthood, quietly shaping my identity, my relationships, and the way I showed up in the world — until healing began.
          </p>
        </section>

        {/* Adulthood */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Adulthood — The Breaking Point
          </h2>
          <p className="text-slate-700 leading-relaxed">
            I lived with:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>perfectionism</li>
            <li>people-pleasing</li>
            <li>emotional silence</li>
            <li>high self-pressure</li>
            <li>unresolved trauma</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Trauma, betrayal, heartbreak, and devastating spiritual warfare eventually brought my life to collapse.
          </p>
          <p className="text-slate-700 leading-relaxed font-semibold">
            But that is exactly where God met me.
          </p>
        </section>

        {/* The Turning Point */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            The Turning Point — When God Stepped In
          </h2>
          <p className="text-slate-700 leading-relaxed">
            God began to reveal:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>why I reacted the way I did</li>
            <li>where shame lived</li>
            <li>how trauma shaped my identity</li>
            <li>how spiritual warfare targeted old wounds</li>
            <li>who I truly was in Him</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Healing came layer by layer. He restored:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>fear</li>
            <li>shame</li>
            <li>trauma-based thinking</li>
            <li>emotional instability</li>
            <li>identity confusion</li>
            <li>spiritual heaviness</li>
          </ul>
        </section>

        {/* The Calling */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            The Calling — God's Instruction
          </h2>
          <p className="text-slate-700 leading-relaxed">
            During my healing, God gave me a clear instruction:
          </p>
          <blockquote className="border-l-4 border-teal-600 pl-6 italic text-lg my-6 bg-slate-50 py-4 rounded">
            "Testify of what I have done, and how I continue to move in your healing… let your story be the light that leads my Children who are lost, broken and hurting to Me for healing."
          </blockquote>
          <p className="text-slate-700 leading-relaxed">
            This shifted my identity. My testimony became a mission.
          </p>
        </section>

        {/* The Mission */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            The Mission — Transforming Pain into Power™
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Today, Transforming Pain into Power™ is a faith-based mission to help others:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>break trauma cycles</li>
            <li>restore identity</li>
            <li>rebuild emotionally & spiritually</li>
            <li>deepen faith</li>
            <li>understand spiritual warfare</li>
            <li>find hope again</li>
          </ul>
        </section>

        {/* Who I Am Today */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold text-slate-900">
            Who I Am Today
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>I am not who trauma said I was.</p>
            <p>I am restored.</p>
            <p>I am healed.</p>
            <p>I am called.</p>
            <p>I am equipped.</p>
            <p>I am transformed.</p>
            <p className="font-semibold mt-6">
              And now, I help others rise into the lives God designed for them.
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section className="space-y-6 mb-16 bg-gradient-to-br from-teal-50 to-slate-50 p-8 rounded-2xl border border-teal-100">
          <h2 className="text-2xl font-semibold text-slate-900">
            Building A Legacy in Honour of Jesus Christ — Together We Rise Against Pain, Grief, Depression, Anxiety, Abuse & Poverty.
          </h2>

          {/* VIP Cast Member Image */}
          <div className="flex justify-center my-8">
            <img
              src="/vip-cast-member.jpg"
              alt="Diane Salman MBA - VIP Cast Member, Legacy Makers"
              className="rounded-xl shadow-2xl max-w-2xl w-full"
            />
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              I have committed the little finances I have left to share my testimony and to build a platform that advocates for something urgently missing in today's recovery landscape:
              <span className="font-semibold"> Spiritual Inner Healing and Faith-Based Resilience.</span>
            </p>

            <p>While clinical interventions remain vital —</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Diagnosis and medication help manage the physical symptoms, and</li>
              <li>Psychotherapy and counseling address emotional and mental components of healing —</li>
            </ul>
            <p>I have learned through lived experience that these approaches, on their own, often provide only partial relief.</p>

            <p>
              Clinical care is essential. It can slow the spiral, create stability, and prevent irreversible harm. But too often, it becomes a generalized approach — a coping mechanism that helps us manage pain rather than truly heal it. Over time, dependence on medication can increase, and what once felt like support can slowly become another form of survival.
            </p>

            <p className="font-semibold text-lg">But we are not meant to simply survive.</p>

            <p>
              Each of us is unique, lovingly formed, and wonderfully created by God our Father. It is He who knows the deepest parts of us — including the wounds no one else sees. And with conviction, I can say that God alone holds the power to heal the layers of brokenness that manifest as emotional, mental, and spiritual distress.
            </p>

            <p>
              As the world cries out — sometimes loudly, sometimes silently — those of us who know Christ's love and His continual healing understand this truth:<br />
              <span className="italic">Pain resurfaces, but so does God's grace.</span><br />
              <span className="italic">Trauma speaks, but so does His restoration.</span><br />
              <span className="italic">Brokenness returns, but so does His power to rebuild.</span>
            </p>

            <p>
              My hope is that anyone struggling — whether personally or through a loved one — will know that spiritual inner healing through God's love offers a path to hope, peace, and true restoration.
            </p>

            <p className="font-semibold">
              If you or someone you care about is walking through this difficult battle, please don't give up.<br />
              Healing is hard. Recovery takes courage.<br />
              But there is hope for a new tomorrow.
            </p>

            <div className="mt-8 text-center">
             <a
  href="https://foundation.risetothrive-academy.com/offer-video-a"
  className="..."
>
  Rise to Thrive Academy — Begin the Journey
</a>
            </div>
          </div>
        </section>
        
        {/* Support Section */}
        <section className="space-y-6 mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">
            Customer Support
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              For all customer support inquiries, please email{" "}
              <a href="mailto:support@risetothrive-academy.com" className="text-teal-700 hover:text-teal-800 font-semibold">
                support@risetothrive-academy.com
              </a>.
            </p>
            <p>
              Phone number is not monitored for support as all requests must be submitted in writing.
              Our team typically responds within 24–48 hours (Monday–Friday).
            </p>
            <p className="text-sm text-slate-600 italic">
              All customer support must be handled in writing. Phone support is not available.
              Rise to Thrive Academy may request additional information to verify your identity before processing account or billing changes.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
