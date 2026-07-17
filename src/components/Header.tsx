"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/gioi-thieu", label: "Về chúng tôi" },
  { href: "/#news", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-htc.png"
            alt="Logo HTC Môi Trường"
            width={40}
            height={40}
            priority
            className="w-10 h-10 md:w-11 md:h-11 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-accent-600">
            HTC Môi Trường
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="hover:text-brand-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/lien-he"
            className="hidden md:flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/30 font-semibold"
          >
            Tư vấn ngay
          </Link>

          {/* Nút mở menu mobile */}
          <button
            type="button"
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center border border-slate-200 bg-white/80 text-slate-800"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Panel menu mobile */}
      <div
        className={`md:hidden border-t border-white/30 bg-white/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={"m-" + item.href + item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-xl font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0965151040"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 rounded-full"
          >
            <Phone className="w-4 h-4" />
            Gọi 0965.151.040
          </a>
        </nav>
      </div>
    </header>
  );
}
