import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ | HTC Môi Trường",
  description: `Liên hệ ${siteConfig.legalName} — hotline ${siteConfig.phone}. Tư vấn hồ sơ môi trường, tài nguyên nước, thi công BVMT.`,
  openGraph: {
    title: "Liên hệ | HTC Môi Trường",
    description: `Gọi ${siteConfig.phone} hoặc Zalo để được chuyên gia HTC tư vấn.`,
    url: `${siteConfig.url}/lien-he`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <PageHero
        eyebrow="Liên hệ"
        title="Kết nối với chuyên gia HTC"
        description="Để lại thông tin hoặc gọi trực tiếp — đội ngũ kỹ thuật sẽ phản hồi trong giờ làm việc."
        ctaHref={`tel:${siteConfig.phoneTel}`}
        ctaLabel={`Gọi ${siteConfig.phone}`}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Thẻ liên hệ nhanh */}
          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Hotline</div>
                <div className="text-xl font-bold text-slate-900">{siteConfig.phone}</div>
              </div>
            </a>

            <a
              href={siteConfig.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Zalo Chat</div>
                <div className="text-xl font-bold text-slate-900">{siteConfig.phone}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Địa chỉ</div>
                <div className="text-lg font-semibold text-slate-900 leading-snug">{siteConfig.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Giờ làm việc</div>
                <div className="text-lg font-semibold text-slate-900">Thứ 2 – Thứ 7: 8:00 – 17:30</div>
                <div className="text-sm text-slate-500 mt-1">Chủ nhật nghỉ (hỗ trợ khẩn qua hotline)</div>
              </div>
            </div>
          </div>

          {/* Form liên hệ tĩnh — gửi qua mailto / hướng dẫn gọi */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Gửi yêu cầu tư vấn</h2>
            <p className="text-slate-600 mb-8">
              Hiện form gửi trực tiếp đang được chuẩn bị. Anh/chị vui lòng gọi hoặc chat Zalo — phản hồi nhanh nhất trong giờ hành chính.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex w-full items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
                Gọi ngay {siteConfig.phone}
              </a>
              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Zalo
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500 leading-relaxed">
              Khi liên hệ, nên chuẩn bị: tên công ty / dự án, địa điểm, loại hình sản xuất và nhu cầu (ĐTM, GPMT, nước ngầm, xử lý nước thải…).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
