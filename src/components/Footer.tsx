import Link from "next/link";
import { Leaf, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-brand-500" />
              <span className="text-xl font-bold text-white">HTC Môi Trường</span>
            </div>
            <p className="text-sm leading-relaxed">
              Công ty TNHH Tài nguyên và Môi trường HTC — tư vấn pháp lý, lập hồ sơ và triển khai giải pháp bảo vệ môi trường cho doanh nghiệp.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gioi-thieu" className="hover:text-brand-400 transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-brand-400 transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/#news" className="hover:text-brand-400 transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-brand-400 transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                <span>Số 842/31/2/3 Nguyễn Thị Minh Khai, P. Tân Đông Hiệp, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="tel:0965151040" className="hover:text-brand-400 transition-colors">
                  0965.151.040
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between gap-3">
          <p>© 2026 Công ty TNHH Tài nguyên và Môi trường HTC. All rights reserved.</p>
          <p className="text-slate-500">Designed with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
