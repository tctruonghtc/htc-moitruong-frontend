import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Droplets, Map, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Dịch vụ hồ sơ môi trường, tài nguyên nước & địa chất, thiết kế – thi công công trình BVMT từ HTC.",
  openGraph: {
    title: "Dịch vụ | HTC Môi Trường",
    description: siteConfig.description,
    url: `${siteConfig.url}/dich-vu`,
    type: "website",
  },
};

const icons = [Leaf, Droplets, Map];
const accents = [
  "from-brand-500 to-brand-700",
  "from-accent-500 to-accent-600",
  "from-teal-500 to-teal-700",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <PageHero
        eyebrow="Dịch vụ"
        title="Giải pháp môi trường trọn gói"
        description="Từ tư vấn pháp lý, lập hồ sơ đến thi công và vận hành — HTC đồng hành theo vòng đời dự án của doanh nghiệp."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = icons[i];
            return (
              <Link
                key={svc.slug}
                href={`/dich-vu/${svc.slug}`}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${accents[i]}`} />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                    <Icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {svc.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{svc.short}</p>
                  <span className="inline-flex items-center text-brand-600 font-semibold">
                    Chi tiết dịch vụ
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
