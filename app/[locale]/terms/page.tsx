/* eslint-disable react/no-unescaped-entities */
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateMetadata() {
  const t = await getTranslations('legal');
  return {
    title: `${t('termsTitle')} | Core Coaching`,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');
  const effectiveDate = '2026-01-28';

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-8">
            {t('termsTitle')}
          </h1>

          <div className="prose prose-neutral max-w-none">
            {locale === 'tr' ? (
              <>
                <p>
                  <strong>Yürürlük Tarihi:</strong> {effectiveDate}
                </p>
                <p>
                  Bu Kullanım Şartları (“Şartlar”), Core Coaching &amp; Training Solutions web sitesini (\"Site\")
                  kullanımınızı düzenler. Siteyi ziyaret ederek veya kullanarak bu Şartları kabul etmiş sayılırsınız.
                  Şartları kabul etmiyorsanız Siteyi kullanmamalısınız.
                </p>

                <h2>1. Site’nin Amacı ve Kapsamı</h2>
                <p>
                  Site, koçluk/eğitim/danışmanlık hizmetleri hakkında genel bilgilendirme sağlar. Site üzerinden ödeme
                  alma, üyelik veya e‑ticaret altyapısı sunulmaz (ileride sunulsa dahi ayrıca duyurulur).
                </p>

                <h2>2. Uygunluk ve Kullanım</h2>
                <p>
                  Siteyi kullanarak, bulunduğunuz ülkede/eyalette bu tür bir sözleşmeyi kabul etmeye ehil olduğunuzu
                  beyan edersiniz. Siteyi yalnızca hukuka uygun amaçlarla kullanmayı kabul edersiniz.
                </p>

                <h2>3. Yasaklı Kullanımlar</h2>
                <ul>
                  <li>Siteye zarar verecek şekilde kötüye kullanım, saldırı, otomatik tarama (scraping) veya yetkisiz erişim.</li>
                  <li>Yanıltıcı bilgi verme, kimliğe bürünme veya başka kullanıcıları/hizmetleri istismar etme.</li>
                  <li>Telif/marka haklarını ihlal eden içerikleri kopyalama, yeniden yayınlama.</li>
                </ul>

                <h2>4. İçerik ve Profesyonel Sorumluluk Reddi</h2>
                <p>
                  Sitedeki içerikler genel bilgilendirme amaçlıdır. Koçluk/eğitim çıktıları kişiye ve kuruma göre
                  değişebilir; belirli bir sonucun garanti edildiği anlamına gelmez. Profesyonel/kurumsal kararlarınız
                  için gerektiğinde bağımsız uzman görüşü almanız önerilir.
                </p>

                <h2>5. Üçüncü Taraf Bağlantılar</h2>
                <p>
                  Site; LinkedIn gibi üçüncü taraf web sitelerine bağlantı verebilir. Üçüncü tarafların içerik ve
                  politikalarından sorumlu değiliz.
                </p>

                <h2>6. Fikri Mülkiyet</h2>
                <p>
                  Site’deki metinler, görseller, marka/işaretler ve tasarım öğeleri (aksi belirtilmedikçe) ilgili hak
                  sahiplerine aittir. Önceden yazılı izin olmadan kopyalanamaz, çoğaltılamaz, değiştirilemez veya
                  yeniden yayınlanamaz.
                </p>

                <h2>7. Garanti Vermeme</h2>
                <p>
                  Site, “olduğu gibi” sunulur. Kesintisiz, hatasız veya güvenli çalışacağına dair açık/zımni garanti
                  verilmez.
                </p>

                <h2>8. Sorumluluğun Sınırlandırılması</h2>
                <p>
                  Kanunun izin verdiği ölçüde; Site kullanımından doğabilecek dolaylı, arızi, özel veya sonuçsal
                  zararlardan sorumluluk kabul edilmez.
                </p>

                <h2>9. Değişiklikler</h2>
                <p>
                  Şartlar zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlandığı anda yürürlüğe girer.
                </p>

                <h2>10. İletişim</h2>
                <p>
                  Bu Şartlar hakkında sorularınız için{' '}
                  <a href="mailto:info@corecoachingtraining.com">info@corecoachingtraining.com</a> adresine yazabilirsiniz.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Effective date:</strong> {effectiveDate}
                </p>
                <p>
                  These Terms of Service (“Terms”) govern your use of the Core Coaching &amp; Training Solutions website
                  (the “Site”). By accessing or using the Site, you agree to these Terms. If you do not agree, do not
                  use the Site.
                </p>

                <h2>1. Purpose of the Site</h2>
                <p>
                  The Site provides general information about coaching, training, and consulting services. The Site does
                  not offer payments, subscriptions, or e‑commerce by default (if added in the future, it will be
                  communicated separately).
                </p>

                <h2>2. Eligibility & Acceptable Use</h2>
                <p>
                  You represent that you are legally able to accept these Terms in your jurisdiction. You agree to use
                  the Site only for lawful purposes.
                </p>

                <h2>3. Prohibited Uses</h2>
                <ul>
                  <li>Attempting unauthorized access, disrupting the Site, or scraping/automated crawling.</li>
                  <li>Impersonation, providing misleading information, or abusing any part of the Site.</li>
                  <li>Copying, republishing, or exploiting content in violation of IP rights.</li>
                </ul>

                <h2>4. Content & Professional Disclaimer</h2>
                <p>
                  Content on the Site is general information. Coaching/training outcomes vary by individual and context;
                  no specific results are guaranteed. You should seek independent professional advice where appropriate.
                </p>

                <h2>5. Third‑Party Links</h2>
                <p>
                  The Site may link to third‑party websites (e.g., LinkedIn). We are not responsible for third‑party
                  content, terms, or privacy practices.
                </p>

                <h2>6. Intellectual Property</h2>
                <p>
                  Unless stated otherwise, Site content (texts, images, trademarks, design elements) belongs to its
                  respective owner. You may not copy, reproduce, modify, or republish without prior written permission.
                </p>

                <h2>7. No Warranties</h2>
                <p>
                  The Site is provided “as is.” We make no warranties that the Site will be uninterrupted, error‑free,
                  or secure.
                </p>

                <h2>8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or
                  consequential damages arising from your use of the Site.
                </p>

                <h2>9. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. Updates are effective once posted on this page.
                </p>

                <h2>10. Contact</h2>
                <p>
                  If you have questions about these Terms, email{' '}
                  <a href="mailto:info@corecoachingtraining.com">info@corecoachingtraining.com</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

