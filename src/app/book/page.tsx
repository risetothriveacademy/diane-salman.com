import type { Metadata } from "next";
import { HubSpotForm } from "@/components/hubspot-form";
import { SampleChapterForm } from "@/components/sample-chapter-form";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { SectionBanner } from "@/components/SectionBanner";

export const metadata: Metadata = {
  title: "Transforming Pain into Power – The Book",
  description:
    "Discover Transforming Pain into Power by Torah Mathews—a faith-based testimony and roadmap for those facing trauma, mental distress, and emotional collapse.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-16 mx-auto max-w-6xl lg:px-8">
        <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
       <div className="relative z-30">
            <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
              The Book
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Transforming Pain into Power
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              <span className="font-semibold">Transforming Pain into Power</span>{" "}
              is Torah Mathews&apos; personal testimony and a faith-based guide
              for those walking through trauma-induced mental distress. It is
              written for individuals who have lost much, questioned God, and
              wondered if restoration is still possible.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              This book does not offer shallow clichés. It offers the real story
              of loss, collapse, and the long road of recovery—woven with
              Scripture, honest reflection, and practical hope.
            </p>
<div className="relative z-20 flex flex-wrap gap-3 mt-8">
  <a
    href="https://www.amazon.com/dp/B0FNBTLQJ6"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800"
  >
    Buy on Amazon
  </a>

  <a
    href="#sample-chapter"
    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-teal-800 bg-teal-50 rounded-lg hover:bg-teal-100"
  >
    Download Free Memoir
  </a>
</div>
            </div>
         

          <div className="flex items-center justify-center">
            <img
              src="/book-cover.jpg"
              alt="Transforming Pain into Power - Book Cover"
              className="w-full max-w-xs rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <ScrollingBanner text="This Book Was Written in the Valley — So You Don't Have to Walk Through Yours Alone." />

      {/* Who the Book is For */}
      <section className="px-6 py-16 mx-auto max-w-6xl border-t border-slate-100 bg-slate-50 lg:px-8">
        {/* Section Banner */}
        <div className="max-w-6xl mx-auto">
          <SectionBanner text="For Every Heart That Has Asked, 'God, Where Were You When Everything Fell Apart?'" />
        </div>

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            Who It&apos;s For
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            A Book for the Broken, the Brave, and Those Still in the Battle
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Those Facing Trauma &amp; Mental Distress
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              If you&apos;ve experienced loss, collapse, burnout, or
              trauma-induced mental distress, this book helps you feel seen,
              understood, and gently pointed back to God.
            </p>
          </div>
          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Families &amp; Loved Ones
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              If you&apos;re walking alongside someone in pain, this story helps
              you better understand what they may be feeling and how to support
              them with compassion and faith.
            </p>
          </div>
          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Leaders, Coaches &amp; Churches
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              If you serve others, this book offers language, insight, and a
              holistic framework that connects trauma recovery with spiritual
              truth.
            </p>
          </div>
        </div>
      </section>

      {/* Inside the Book */}
      <section className="px-6 py-16 mx-auto max-w-6xl lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            Inside the Book
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            What You&apos;ll Discover
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>Within these pages, Torah shares:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Her journey from early trauma to high achievement.</li>
              <li>
                The collapse of what looked like a stable, successful life.
              </li>
              <li>
                The reality of trauma-induced mental distress and spiritual
                warfare.
              </li>
              <li>
                How God met her in the darkest moments and began rebuilding her
                life from the inside out.
              </li>
              <li>
                A holistic view of recovery that honors the body, mind, and
                spirit.
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>You will also find:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Scripture woven throughout the story—not as decoration, but as
                lifelines.
              </li>
              <li>
                Reflection questions to help you process your own journey.
              </li>
              <li>
                Encouragement for days when you feel like giving up completely.
              </li>
              <li>
                A reminder that God does not waste pain—He transforms it into
                purpose.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bulk Orders Section */}
      <section className="px-6 py-16 mx-auto max-w-6xl border-t border-slate-100 bg-gradient-to-br from-teal-50 to-slate-50 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            For Churches, Ministries & Organizations
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Bulk Orders (10+ Copies)
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 max-w-2xl mx-auto">
            Bring <span className="font-semibold">Transforming Pain into Power</span> to your small group, church ministry, recovery program, or organization. Request bulk pricing and delivery options below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <HubSpotForm
            portalId="46765588"
            formId="2E7ixUvpq1-41g2of"
            region="na1"
          />
        </div>

        <div className="mt-8 text-center text-sm text-slate-600">
          <p>
            Our team will review your request and respond within 1-2 business days with pricing, shipping options, and next steps.
          </p>
        </div>
      </section>

      {/* Sample Chapter CTA */}
      <section
        id="sample-chapter"
        className="px-6 py-16 mx-auto max-w-4xl border-t border-slate-100 bg-slate-50 lg:px-8"
      >
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Download a Sample Chapter
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Want to read before you buy? Use the form below to request a sample
            chapter from <span className="font-semibold">Transforming Pain into Power</span>.
            You&apos;ll receive a PDF excerpt and occasional encouragement
            emails related to trauma recovery and faith.
          </p>

          <SampleChapterForm />
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="px-6 py-12 mx-auto max-w-4xl border-t border-slate-100 lg:px-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Customer Support
          </h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
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
            <p className="text-xs text-slate-600 italic">
              All customer support must be handled in writing. Phone support is not available.
              Rise to Thrive Academy may request additional information to verify your identity before processing account or billing changes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
