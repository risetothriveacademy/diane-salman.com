type SectionBannerProps = {
  text: string;
};

export function SectionBanner({ text }: SectionBannerProps) {
  return (
    <div className="my-10 rounded-2xl bg-slate-900 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 md:text-base">
      {text}
    </div>
  );
}
