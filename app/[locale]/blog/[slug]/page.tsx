import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or database
const blogPosts: Record<string, Record<string, any>> = {
  'transformation-journey': {
    title: {
      tr: 'Dönüşüm Yolculuğu: Potansiyelinizi Keşfetmek',
      en: 'The Transformation Journey: Discovering Your Potential',
    },
    content: {
      tr: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
    },
    hasImage: true,
    date: '2024-01-15',
    readTime: {
      tr: '5 dakika okuma',
      en: '5 min read',
    },
  },
  'leadership-in-modern-times': {
    title: {
      tr: 'Modern Çağda Liderlik: Yeni Paradigmalar',
      en: 'Leadership in Modern Times: New Paradigms',
    },
    content: {
      tr: `Günümüzün hızla değişen iş dünyasında liderlik, geleneksel yaklaşımlardan farklı beceriler gerektiriyor. Artık sadece karar vermek ve emir vermek yeterli değil; modern liderler, empati, esneklik ve sürekli öğrenme yeteneği gibi özelliklere sahip olmalıdır.

Çağdaş liderlik modelleri, hiyerarşik yapılar yerine daha yatay ve işbirlikçi yaklaşımları vurgular. Modern liderler, ekiplerini güçlendirir, onlara yetki verir ve ortak bir vizyon oluşturur.

Bu yeni paradigma, liderlerin hem teknik hem de duygusal zeka becerilerine sahip olmasını gerektirir. Etkili bir lider, sadece iş sonuçlarına odaklanmaz, aynı zamanda ekibinin refahını ve gelişimini de önemser.`,
      en: `In today's rapidly changing business world, leadership requires different skills than traditional approaches. It is no longer enough to just make decisions and give orders; modern leaders must have qualities such as empathy, flexibility, and the ability to continuously learn.

Contemporary leadership models emphasize more horizontal and collaborative approaches rather than hierarchical structures. Modern leaders empower their teams, give them authority, and create a shared vision.

This new paradigm requires leaders to have both technical and emotional intelligence skills. An effective leader not only focuses on business results but also cares about the well-being and development of their team.`,
    },
    date: '2024-01-10',
    readTime: {
      tr: '7 dakika okuma',
      en: '7 min read',
    },
  },
  'emotional-intelligence-workplace': {
    title: {
      tr: 'İş Yerinde Duygusal Zeka: Gizli Güç',
      en: 'Emotional Intelligence in the Workplace: The Hidden Power',
    },
    content: {
      tr: `Duygusal zeka, teknik becerilerden daha önemli hale geliyor. Araştırmalar, yüksek duygusal zekaya sahip liderlerin ve çalışanların, iş yerinde daha başarılı olduğunu gösteriyor.

Duygusal zeka, kendi duygularınızı tanıma, yönetme ve başkalarının duygularını anlama yeteneğidir. İş yerinde, bu beceri, daha iyi iletişim, daha güçlü ilişkiler ve daha etkili ekip çalışması anlamına gelir.

Duygusal zekayı geliştirmek, bir süreçtir. Farkındalık, pratik ve geri bildirimle, herkes bu önemli beceriyi geliştirebilir.`,
      en: `Emotional intelligence is becoming more important than technical skills. Research shows that leaders and employees with high emotional intelligence are more successful in the workplace.

Emotional intelligence is the ability to recognize, manage your own emotions, and understand the emotions of others. In the workplace, this skill means better communication, stronger relationships, and more effective teamwork.

Developing emotional intelligence is a process. With awareness, practice, and feedback, everyone can develop this important skill.`,
    },
    date: '2024-01-05',
    readTime: {
      tr: '6 dakika okuma',
      en: '6 min read',
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found | Core Coaching',
    };
  }

  return {
    title: `${post.title[locale as 'tr' | 'en']} | Core Coaching`,
    description: post.content[locale as 'tr' | 'en'].substring(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('blog');
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors"
            >
              ← {t('backToBlog')}
            </Link>

            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-neutral-500 mb-6">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-8">
                {post.title[locale as 'tr' | 'en']}
              </h1>
            </div>

            {post.hasImage && (
              <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="relative w-full h-64 md:h-96 lg:h-[500px] bg-neutral-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/core-logo.png"
                    alt="Core Coaching"
                    fill
                    className="object-contain p-8 md:p-12"
                  />
                </div>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6 text-lg">
                {post.content[locale as 'tr' | 'en']
                  .split('\n\n')
                  .map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
