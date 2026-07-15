import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTC Môi Trường | Giải pháp Tài nguyên & Môi trường",
  description: "CÔNG TY TNHH TÀI NGUYÊN VÀ MÔI TRƯỜNG HTC chuyên cung cấp dịch vụ đánh giá tác động môi trường, xin giấy phép và tư vấn pháp lý.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${outfit.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
