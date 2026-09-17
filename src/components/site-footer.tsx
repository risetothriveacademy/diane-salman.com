import { HubSpotForm } from "./hubspot-form";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Site-wide Footer Banner */}
      <section className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 md:text-xs">
          Transforming Pain Into Power — One Life, One Family, One Generation at a Time.
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="border-b border-slate-800 py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Stay Connected
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Receive encouragement, trauma recovery insights, and updates on new resources to help you transform pain into power.
          </p>

          <div className="max-w-md mx-auto">
            <HubSpotForm
              portalId="46765588"
              formId="f7b7ce24-7f0b-43f1-9f3d-3f4ed9ba0155"
              region="na1"
            />
          </div>
        </div>
      </section>

      {/* Footer Links & Copyright */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/speaking" className="hover:text-white transition-colors">Speaking</a>
              <a href="/book" className="hover:text-white transition-colors">Book</a>
              <a href="/corporate-sponsorships" className="hover:text-white transition-colors">Sponsorships</a>
            </div>

            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Torah Mathews. All rights reserved.
            </p>

            <p className="text-slate-500 text-xs">
              Contact: <a href="mailto:admin@torahmathews.com" className="text-teal-400 hover:text-teal-300">admin@torahmathews.com</a>
            </p>

            <p className="text-slate-400 text-xs mt-4">
              Support: <a href="mailto:support@risetothrive-academy.com" className="text-teal-400 hover:text-teal-300">support@risetothrive-academy.com</a>
            </p>
            <p className="text-slate-500 text-xs">
              All customer support must be handled in writing.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
