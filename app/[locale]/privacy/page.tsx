import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateMetadata() {
  const t = await getTranslations('legal');
  return {
    title: `${t('privacyTitle')} | Core Coaching`,
  };
}

export default async function PrivacyPage({
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
            {t('privacyTitle')}
          </h1>

          <div className="prose prose-neutral max-w-none">
            {locale === 'tr' ? (
              <>
                <p>
                  <strong>Yürürlük Tarihi:</strong> {effectiveDate}
                </p>
                <p>
                  Bu Gizlilik Politikası, Siteyi ziyaret ettiğinizde bilgilerin nasıl işlendiğini açıklar. Site,
                  varsayılan olarak ödeme veya üyelik sistemi içermez.
                </p>

                <h2>1. Veri Sorumlusu / İletişim</h2>
                <p>
                  Bu politika kapsamındaki sorular için <a href="mailto:info@corecoachingtraining.com">info@corecoachingtraining.com</a>{' '}
                  adresine yazabilirsiniz.
                </p>

                <h2>2. Hangi Bilgiler Toplanır?</h2>
                <ul>
                  <li>
                    <strong>İletişim formu verileri:</strong> Site’deki iletişim formu “mailto” yöntemiyle çalışır. Form
                    verileri sunucumuza gönderilmez; cihazınızın mail uygulamasında e‑posta taslağı olarak açılır.
                  </li>
                  <li>
                    <strong>Teknik veriler:</strong> Tarayıcı/cihaz türü gibi temel teknik bilgiler, standart sunucu
                    kayıtları kapsamında işlenebilir (örn. güvenlik ve hata ayıklama).
                  </li>
                </ul>

                <h2>3. Çerezler ve Analitik</h2>
                <p>
                  Site üzerinde zorunlu olmadıkça izleme amaçlı çerez kullanılmaz. İleride analitik/performans ölçüm
                  araçları eklenirse, bu politika güncellenir ve gerekli durumlarda aydınlatma/izin mekanizması sağlanır.
                </p>

                <h2>4. Üçüncü Taraf Bağlantılar</h2>
                <p>
                  Site, LinkedIn gibi üçüncü taraf sitelere bağlantı içerebilir. Bu sitelerin içerik ve gizlilik
                  uygulamalarından sorumlu değiliz.
                </p>

                <h2>5. Veri Güvenliği</h2>
                <p>
                  Bilgilerin güvenliğini sağlamak için makul teknik ve idari önlemler alınır. Bununla birlikte, internet
                  üzerinden iletimin %100 güvenli olduğu garanti edilemez.
                </p>

                <h2>6. Saklama Süresi</h2>
                <p>
                  Site, form verilerini sunucuda saklamaz (mailto akışı). Teknik kayıtlar varsa, yalnızca gerekli süre
                  boyunca tutulur.
                </p>

                <h2>7. Haklarınız</h2>
                <p>
                  Yürürlükteki mevzuata bağlı olarak; bilgi talep etme, düzeltme, silme veya itiraz gibi haklarınız
                  olabilir. Talepler için yukarıdaki e‑posta adresi üzerinden iletişime geçebilirsiniz.
                </p>

                <h2>8. Değişiklikler</h2>
                <p>
                  Bu politika zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlandığı anda yürürlüğe girer.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Effective date:</strong> {effectiveDate}
                </p>
                <p>
                  This Privacy Policy explains how information is handled when you visit the Site. The Site does not
                  include payments or user accounts by default.
                </p>

                <h2>1. Contact</h2>
                <p>
                  For privacy-related questions, email{' '}
                  <a href="mailto:info@corecoachingtraining.com">info@corecoachingtraining.com</a>.
                </p>

                <h2>2. Information We Collect</h2>
                <ul>
                  <li>
                    <strong>Contact form data:</strong> The contact form uses a “mailto” workflow; your form data is not
                    sent to our server—it opens as an email draft in your device’s email app.
                  </li>
                  <li>
                    <strong>Technical data:</strong> Basic technical information (e.g., browser/device type) may be
                    processed through standard server logs for security and troubleshooting.
                  </li>
                </ul>

                <h2>3. Cookies & Analytics</h2>
                <p>
                  We do not use tracking cookies unless necessary. If analytics or performance tools are added in the
                  future, this policy will be updated and appropriate notice/consent mechanisms will be provided where
                  required.
                </p>

                <h2>4. Third‑Party Links</h2>
                <p>
                  The Site may include links to third‑party websites (e.g., LinkedIn). We are not responsible for their
                  privacy practices.
                </p>

                <h2>5. Data Security</h2>
                <p>
                  We use reasonable technical and organizational measures to protect information. However, no method of
                  transmission over the internet is 100% secure.
                </p>

                <h2>6. Data Retention</h2>
                <p>
                  The Site does not store contact form submissions on our server (mailto flow). If technical logs exist,
                  they are retained only for as long as necessary.
                </p>

                <h2>7. Your Rights</h2>
                <p>
                  Depending on applicable law, you may have rights such as access, correction, deletion, or objection.
                  You can submit requests via the email address above.
                </p>

                <h2>8. Changes</h2>
                <p>We may update this policy from time to time. Updates are effective once posted on this page.</p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

