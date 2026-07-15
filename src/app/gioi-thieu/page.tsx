import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Target, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Giới thiệu | HTC Môi Trường",
  description: `Giới thiệu ${siteConfig.legalName} — đơn vị tư vấn môi trường chuyên nghiệp tại TP.HCM.`,
  openGraph: {
    title: "Giới thiệu | HTC Môi Trường",
    description: siteConfig.description,
    url: `${siteConfig.url}/gioi-thieu`,
    type: "website",
  },
};

const values = [
  {
    icon: Target,
    title: "Chính xác – Đúng luật",
    desc: "Hồ sơ bám sát quy định hiện hành, giảm rủi ro pháp lý cho doanh nghiệp.",
  },
  {
    icon: Users,
    title: "Đồng hành dài hạn",
    desc: "Không chỉ lập hồ sơ một lần — hỗ trợ vận hành, báo cáo định kỳ và cập nhật quy định.",
  },
  {
    icon: Award,
    title: "Thực tiễn dự án",
    desc: "Kinh nghiệm đa ngành: sản xuất, y tế, công nghiệp, tài nguyên nước.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <PageHero
        eyebrow="Về chúng tôi"
        title={siteConfig.legalName}
        description="Đơn vị tư vấn môi trường chuyên nghiệp tại TP.HCM — cung cấp dịch vụ trọn gói từ tư vấn pháp lý, lập hồ sơ đến triển khai công trình bảo vệ môi trường."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sứ mệnh</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              HTC đồng hành cùng doanh nghiệp kiến tạo hoạt động sản xuất – kinh doanh bền vững, tuân thủ pháp luật môi trường và tối ưu chi phí tuân thủ.
            </p>
            <ul className="space-y-3">
              {[
                "Tư vấn – lập hồ sơ môi trường (ĐTM, GPMT, đăng ký môi trường)",
                "Tài nguyên nước & địa chất thủy văn",
                "Thiết kế – thi công – vận hành công trình BVMT",
                "Báo cáo công tác bảo vệ môi trường định kỳ",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Thông tin liên hệ</h3>
            <dl className="space-y-4 text-slate-600">
              <div>
                <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Địa chỉ</dt>
                <dd className="mt-1">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Hotline / Zalo</dt>
                <dd className="mt-1">
                  <a href={`tel:${siteConfig.phoneTel}`} className="text-brand-600 font-semibold hover:underline">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Website</dt>
                <dd className="mt-1">
                  <a href={siteConfig.url} className="text-brand-600 hover:underline">
                    moitruonghtc.com
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              href="/lien-he"
              className="mt-8 inline-flex w-full justify-center bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-full transition-colors"
            >
              Gửi yêu cầu tư vấn
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Giá trị cốt lõi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
