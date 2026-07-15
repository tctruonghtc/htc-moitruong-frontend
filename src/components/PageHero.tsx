import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  ctaHref = "/lien-he",
  ctaLabel = "Liên hệ tư vấn",
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-slate-900 to-slate-950" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {eyebrow && (
          <p className="text-brand-400 font-semibold uppercase tracking-wider text-sm mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">{description}</p>
        )}
        {ctaHref && ctaLabel && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/30"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
