import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

interface WPPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`https://api.moitruonghtc.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  if (!post) {
    return {
      title: 'Không tìm thấy bài viết | HTC Môi Trường',
    };
  }
  
  const plainTitle = post.title.rendered.replace(/<[^>]+>/g, '');
  const plainExcerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g, '')?.trim()?.slice(0, 160) || 'Bản tin môi trường từ HTC.';
  
  return {
    title: `${plainTitle} | HTC Môi Trường`,
    description: plainExcerpt,
    openGraph: {
      title: plainTitle,
      description: plainExcerpt,
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? [post._embedded["wp:featuredmedia"][0].source_url] : [],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const imgUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2560&auto=format&fit=crop";
  const date = new Date(post.date).toLocaleDateString('vi-VN');
  const authorName = post._embedded?.author?.[0]?.name || "Chuyên gia HTC";

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/#news" className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Quay lại tin tức
        </Link>
        
        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
              <div className="flex items-center gap-6 text-slate-200 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{authorName}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="p-8 md:p-12 wp-content text-slate-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          >
          </div>
        </article>
      </div>
    </main>
  );
}
