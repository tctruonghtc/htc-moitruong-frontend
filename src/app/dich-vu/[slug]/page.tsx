import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return { title: "Dịch vụ | HTC Môi Trường" };
  return {
    title: `${svc.title} | HTC Môi Trường`,
    description: svc.short,
    openGraph: {
      title: `${svc.title} | HTC Môi Trường`,
      description: svc.short,
      url: `${siteConfig.url}/dich-vu/${svc.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <PageHero eyebrow="Dịch vụ" title={svc.title} description={svc.short} />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/dich-vu"
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Tất cả dịch vụ
          </Link>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Phạm vi hỗ trợ</h2>
            <ul className="space-y-4 mb-10">
              {svc.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-brand-600 mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cần tư vấn cho dự án của bạn?</h3>
              <p className="text-slate-600 mb-6">
                Chuyên gia HTC sẽ rà hồ sơ và đề xuất lộ trình phù hợp — khảo sát ban đầu miễn phí theo thỏa thuận.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-brand-300 text-slate-800 font-semibold px-6 py-3 rounded-full"
                >
                  Trang liên hệ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
