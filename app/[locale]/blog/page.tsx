import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('blog');
  return {
    title: `${t('title')} | Core Coaching`,
    description: t('subtitle'),
  };
}

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: '1',
    slug: 'transformation-journey',
    title: {
      tr: 'Dönüşüm Yolculuğu: Potansiyelinizi Keşfetmek',
      en: 'The Transformation Journey: Discovering Your Potential',
    },
    excerpt: {
      tr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    date: '2024-01-15',
    readTime: {
      tr: '5 dakika okuma',
      en: '5 min read',
    },
  },
  {
    id: '2',
    slug: 'leadership-in-modern-times',
    title: {
      tr: 'Modern Çağda Liderlik: Yeni Paradigmalar',
      en: 'Leadership in Modern Times: New Paradigms',
    },
    excerpt: {
      tr: 'Günümüzün hızla değişen iş dünyasında liderlik, geleneksel yaklaşımlardan farklı beceriler gerektiriyor. Bu yazıda çağdaş liderlik modellerini inceliyoruz.',
      en: 'In today\'s rapidly changing business world, leadership requires different skills than traditional approaches. In this article, we examine contemporary leadership models.',
    },
    date: '2024-01-10',
    readTime: {
      tr: '7 dakika okuma',
      en: '7 min read',
    },
  },
  {
    id: '3',
    slug: 'emotional-intelligence-workplace',
    title: {
      tr: 'İş Yerinde Duygusal Zeka: Gizli Güç',
      en: 'Emotional Intelligence in the Workplace: The Hidden Power',
    },
    excerpt: {
      tr: 'Duygusal zeka, teknik becerilerden daha önemli hale geliyor. İş yerinde başarı için duygusal zekanın rolünü keşfedin.',
      en: 'Emotional intelligence is becoming more important than technical skills. Discover the role of emotional intelligence for success in the workplace.',
    },
    date: '2024-01-05',
    readTime: {
      tr: '6 dakika okuma',
      en: '6 min read',
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
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-neutral-50 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow"
              >
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-neutral-500">
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
                      <span>{post.readTime[locale as 'tr' | 'en']}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 hover:text-primary-500 transition-colors">
                      {post.title[locale as 'tr' | 'en']}
                    </h2>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {post.excerpt[locale as 'tr' | 'en']}
                    </p>
                    <div className="pt-2">
                      <span className="text-primary-500 font-medium hover:underline">
                        {t('readMore')} →
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
