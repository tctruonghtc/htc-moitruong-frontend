import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import { siteConfig } from "@/lib/site";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HTC Môi Trường | Giải pháp Tài nguyên & Môi trường",
    template: "%s | HTC Môi Trường",
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "HTC Môi Trường | Giải pháp Tài nguyên & Môi trường",
    description: siteConfig.description,
    images: [
      {
        url: "/logo-htc-512.png",
        width: 512,
        height: 512,
        alt: "Logo HTC Môi Trường",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTC Môi Trường",
    description: siteConfig.description,
    images: ["/logo-htc-512.png"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
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
