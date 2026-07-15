import { ArrowRight, Leaf, Droplets, Map, ShieldCheck, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, services } from "@/lib/site";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

async function getLatestPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(`${siteConfig.apiBase}/posts?_embed&per_page=3`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch posts", error);
    return [];
  }
}

const serviceIcons = [Leaf, Droplets, Map];
const serviceColors = [
  { iconBg: "bg-brand-50", icon: "text-brand-600", link: "text-brand-600", hover: "group-hover:text-brand-700", blob: "from-brand-100" },
  { iconBg: "bg-accent-50", icon: "text-accent-600", link: "text-accent-600", hover: "group-hover:text-accent-700", blob: "from-accent-100" },
  { iconBg: "bg-teal-50", icon: "text-teal-600", link: "text-teal-600", hover: "group-hover:text-teal-700", blob: "from-teal-100" },
];

export default async function Home() {
  const posts = await getLatestPosts();
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2560&auto=format&fit=crop"
            alt="Thiên nhiên và môi trường bền vững"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-brand-400 font-medium text-sm mb-6 border-brand-500/30">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Chuyên gia Tư vấn Môi trường hàng đầu TP.HCM
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Kiến tạo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Tương lai</span> <br />
              Bền vững.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
              {siteConfig.legalName} cung cấp dịch vụ trọn gói từ tư vấn pháp lý, lập hồ sơ đến triển khai hệ thống bảo vệ môi trường cho doanh nghiệp của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dich-vu"
                className="group flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/40"
              >
                Xem Dịch vụ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/lien-he"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Liên hệ Chuyên gia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-bold uppercase tracking-wider mb-2">Dịch vụ của chúng tôi</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Giải pháp Toàn diện cho Doanh nghiệp</h3>
            <p className="text-slate-600 text-lg">
              Đội ngũ chuyên gia HTC cam kết đồng hành cùng doanh nghiệp giải quyết triệt để các vấn đề về pháp lý và kỹ thuật môi trường, tài nguyên nước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => {
              const Icon = serviceIcons[i];
              const c = serviceColors[i];
              return (
                <div
                  key={svc.slug}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 border border-slate-100 relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${c.blob} to-transparent rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700`}
                  ></div>
                  <div
                    className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500`}
                  >
                    <Icon className={`w-7 h-7 ${c.icon}`} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">{svc.short}</p>
                  <Link
                    href={`/dich-vu/${svc.slug}`}
                    className={`inline-flex items-center ${c.link} font-semibold ${c.hover}`}
                  >
                    Tìm hiểu thêm <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-600 font-bold uppercase tracking-wider mb-2">Tin Tức & Cập Nhật</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Bản tin Môi trường Mới nhất</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length === 0 ? (
              <p className="text-slate-500 col-span-3 text-center py-10">Đang cập nhật tin tức...</p>
            ) : (
              posts.map((post) => {
                const imgUrl =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop";
                const date = new Date(post.date).toLocaleDateString("vi-VN");

                return (
                  <article
                    key={post.id}
                    className="group bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={imgUrl}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                      </div>
                      <h4
                        className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      ></h4>
                      <div
                        className="text-slate-600 mb-6 line-clamp-3 leading-relaxed text-sm"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      ></div>
                      <div className="mt-auto pt-4 border-t border-slate-200">
                        <Link
                          href={`/news/${post.slug}`}
                          className="inline-flex items-center text-brand-600 font-semibold group-hover:text-brand-700"
                        >
                          Đọc tiếp <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-600 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ShieldCheck className="w-16 h-16 text-brand-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Bạn Cần Tư Vấn Hồ Sơ Môi Trường?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto font-light">
            Liên hệ ngay với đội ngũ chuyên gia HTC để được hỗ trợ khảo sát miễn phí và đề xuất phương án tối ưu nhất.
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-block bg-white text-brand-900 hover:bg-brand-50 px-10 py-4 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Gọi Ngay: {siteConfig.phone}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
