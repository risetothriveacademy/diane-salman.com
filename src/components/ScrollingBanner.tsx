type ScrollingBannerProps = {
  text: string;
};

export function ScrollingBanner({ text }: ScrollingBannerProps) {
  return (
    <section className="border-y border-slate-800 bg-slate-900">
      <div className="relative flex overflow-hidden">
        <div className="tm-animate-marquee flex whitespace-nowrap">
          <p className="px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300 md:text-xs">
            {text}
          </p>
          {/* duplicated so the loop looks continuous */}
          <p className="px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300 md:text-xs">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
