import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import BlogHero from '@/components/BlogHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata() {
  const t = await getTranslations('blog');
  return {
    title: `${t('title')} | Core Coaching`,
    description: t('subtitle'),
  };
}

// Blog posts data
const blogPosts = [
  {
    id: '1',
    slug: 'yonetim-ve-liderlik',
    image: '/images/blog/yonetim-ve-liderlik.jpg',
    title: {
      tr: 'Yönetim ve Liderlik',
      en: 'Management and Leadership',
    },
    subtitle: {
      tr: 'Birbirini Tamamlayan İki Temel Yetkinlik',
      en: 'Two Complementary Core Competencies',
    },
    excerpt: {
      tr: 'Günümüz dünyası belirsizliklerle dolu. Hızla değişen iş modelleri, artan beklentiler ve çok katmanlı ilişkiler, liderlerden yalnızca stratejik kararlar almalarını değil; aynı zamanda duyguları okuyabilmelerini, ilişkileri yönetebilmelerini ve zor zamanlarda dengeyi koruyabilmelerini bekliyor.',
      en: 'Today\'s world is full of uncertainties. Rapidly changing business models, increasing expectations, and multi-layered relationships demand that leaders not only make strategic decisions but also read emotions, manage relationships, and maintain balance in difficult times.',
    },
    date: '2026-02-01',
    readTime: {
      tr: '2 dakika okuma',
      en: '2 min read',
    },
  },
  {
    id: '2',
    slug: 'kocluk',
    image: '/images/blog/kocluk.jpg',
    title: {
      tr: 'Koçluk',
      en: 'Coaching',
    },
    subtitle: {
      tr: 'İçten Dışa Bir Dönüşüm Yolculuğu',
      en: 'A Transformation Journey from Within',
    },
    excerpt: {
      tr: 'Koçluk, bizim için yalnızca hedeflere ulaşma aracı değil; bireyin kendisiyle kurduğu ilişkiyi dönüştüren derin bir farkındalık sürecidir. Hızla değişen dünyada insanlar, daha fazla bilgiye değil; kendilerini daha iyi anlamaya ihtiyaç duyar.',
      en: 'For us, coaching is not just a tool for achieving goals; it is a deep awareness process that transforms the relationship one has with oneself. In a rapidly changing world, people need not more information, but to understand themselves better.',
    },
    date: '2026-02-01',
    readTime: {
      tr: '3 dakika okuma',
      en: '3 min read',
    },
  },
  {
    id: '3',
    slug: 'cct-core-coaching-training',
    image: '/images/blog/cct.png',
    title: {
      tr: 'CCT | Core Coaching & Training',
      en: 'CCT | Core Coaching & Training',
    },
    subtitle: {
      tr: 'İnsan Odaklı Dönüşüm Yolculukları',
      en: 'Human-Centered Transformation Journeys',
    },
    excerpt: {
      tr: 'CCT, 2016 yılında Nurhan Yazganel tarafından; bireysel ve kurumsal gelişimi bütünsel yaklaşımlarla destekleyerek uzun vadeli değer üretmek amacıyla kurulmuştur. Farkındalığı davranışa, potansiyeli kalıcı etkiye dönüştüren bütünsel gelişim modelleri tasarlamak temel yaklaşımıdır.',
      en: 'CCT was founded in 2016 by Nurhan Yazganel to create long-term value by supporting individual and organizational development with holistic approaches. Its fundamental approach is designing holistic development models that transform awareness into behavior and potential into lasting impact.',
    },
    date: '2026-02-01',
    readTime: {
      tr: '2 dakika okuma',
      en: '2 min read',
    },
  },
  {
    id: '4',
    slug: 'nurhan-yazganel',
    image: '/images/blog/nurhan-yazganel-blog.png',
    title: {
      tr: 'Nurhan Yazganel',
      en: 'Nurhan Yazganel',
    },
    subtitle: {
      tr: 'Kurucu | ICF Master Certified Coach (MCC) | Eğitmen | Keynote Speaker',
      en: 'Founder | ICF Master Certified Coach (MCC) | Trainer | Keynote Speaker',
    },
    excerpt: {
      tr: 'Nurhan Yazganel, bireysel ve kurumsal gelişimi yalnızca performans artışı olarak değil; farkındalığı davranışa, potansiyeli kalıcı etkiye dönüştüren bütünsel bir dönüşüm süreci olarak ele alan bir gelişim lideridir.',
      en: 'Nurhan Yazganel is a development leader who approaches individual and organizational development not just as performance improvement, but as a holistic transformation process that turns awareness into behavior and potential into lasting impact.',
    },
    date: '2026-02-01',
    readTime: {
      tr: '3 dakika okuma',
      en: '3 min read',
    },
  },
  {
    id: '5',
    slug: 'egitim-destekli-takima-kocluk',
    image: '/images/blog/egitim-destekli-takima-kocluk.jpg',
    title: {
      tr: 'Eğitim Destekli Takıma Koçluk',
      en: 'Training-Supported Team Coaching',
    },
    subtitle: {
      tr: 'CCT\'ye Özgü Bütünsel Dönüşüm Modeli',
      en: 'CCT\'s Unique Holistic Transformation Model',
    },
    excerpt: {
      tr: 'CCT\'yi farklı ve güçlü kılan en önemli yaklaşımlardan biri, eğitim ile takıma koçluğu aynı gelişim yolculuğu içinde, entegre bir modelle sunmasıdır. Bu yaklaşım, CCT tarafından geliştirilmiş ve yalnızca CCT\'de uygulanan özgün bir etki modelidir.',
      en: 'One of the most important approaches that makes CCT different and powerful is offering training and team coaching within the same development journey as an integrated model. This approach is a unique impact model developed by CCT and applied only at CCT.',
    },
    date: '2026-02-01',
    readTime: {
      tr: '2 dakika okuma',
      en: '2 min read',
    },
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('blog');

  return (
    <>
      <Navigation />
      <BlogHero />
      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          <div className="grid gap-8 md:gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/${locale}/blog/${post.slug}`} className="block md:flex">
                  {/* Image */}
                  {post.image && (
                    <div className="relative w-full md:w-80 lg:w-96 h-56 md:h-auto md:min-h-[280px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title[locale as 'tr' | 'en']}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(
                          locale === 'tr' ? 'tr-TR' : 'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </time>
                      <span className="w-1 h-1 rounded-full bg-neutral-400" />
                      <span>{post.readTime[locale as 'tr' | 'en']}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                      {post.title[locale as 'tr' | 'en']}
                    </h2>
                    
                    {post.subtitle && (
                      <p className="text-lg text-primary-600 font-medium mb-4">
                        {post.subtitle[locale as 'tr' | 'en']}
                      </p>
                    )}
                    
                    <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt[locale as 'tr' | 'en']}
                    </p>
                    
                    <div>
                      <span className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all">
                        {t('readMore')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
