/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLocale } from 'next-intl';

const effectiveDate = '2026-02-09';

export function TermsContent() {
  const locale = useLocale();

  if (locale === 'tr') {
    return (
      <>
        <p>
          <strong>Yürürlük Tarihi:</strong> {effectiveDate}
        </p>
        <p>
          Bu Kullanım Şartları ("Şartlar"), Core Coaching &amp; Training Solutions web sitesini ("Site")
          kullanımınızı düzenler. Siteyi ziyaret ederek veya kullanarak bu Şartları kabul etmiş sayılırsınız.
          Şartları kabul etmiyorsanız Siteyi kullanmamalısınız.
        </p>

        <h3>1. Site'nin Amacı ve Kapsamı</h3>
        <p>
          Site, koçluk/eğitim/danışmanlık hizmetleri hakkında genel bilgilendirme sağlar. Site üzerinden ödeme
          alma, üyelik veya e‑ticaret altyapısı sunulmaz (ileride sunulsa dahi ayrıca duyurulur).
        </p>

        <h3>2. Uygunluk ve Kullanım</h3>
        <p>
          Siteyi kullanarak, bulunduğunuz ülkede/eyalette bu tür bir sözleşmeyi kabul etmeye ehil olduğunuzu
          beyan edersiniz. Siteyi yalnızca hukuka uygun amaçlarla kullanmayı kabul edersiniz.
        </p>

        <h3>3. Yasaklı Kullanımlar</h3>
        <ul>
          <li>Siteye zarar verecek şekilde kötüye kullanım, saldırı, otomatik tarama (scraping) veya yetkisiz erişim.</li>
          <li>Yanıltıcı bilgi verme, kimliğe bürünme veya başka kullanıcıları/hizmetleri istismar etme.</li>
          <li>Telif/marka haklarını ihlal eden içerikleri kopyalama, yeniden yayınlama.</li>
        </ul>

        <h3>4. İçerik ve Profesyonel Sorumluluk Reddi</h3>
        <p>
          Sitedeki içerikler genel bilgilendirme amaçlıdır. Koçluk/eğitim çıktıları kişiye ve kuruma göre
          değişebilir; belirli bir sonucun garanti edildiği anlamına gelmez. Profesyonel/kurumsal kararlarınız
          için gerektiğinde bağımsız uzman görüşü almanız önerilir.
        </p>

        <h3>5. Form Gönderimleri</h3>
        <p>
          İletişim formu, Koçluk Okulu talep formları ve etkinlik kayıt formları, Formspree (formspree.io) hizmeti
          üzerinden işlenir. Formu göndererek, girdiğiniz bilgilerin talebinize yanıt ve hizmet sunumu amacıyla
          işlenmesini kabul etmiş olursunuz. Üçüncü taraf form hizmetinin kendi kullanım ve gizlilik politikaları geçerlidir.
        </p>

        <h3>6. Üçüncü Taraf Bağlantılar</h3>
        <p>
          Site; LinkedIn gibi üçüncü taraf web sitelerine bağlantı verebilir. Üçüncü tarafların içerik ve
          politikalarından sorumlu değiliz.
        </p>

        <h3>7. Fikri Mülkiyet</h3>
        <p>
          Site'deki metinler, görseller, marka/işaretler ve tasarım öğeleri (aksi belirtilmedikçe) ilgili hak
          sahiplerine aittir. Önceden yazılı izin olmadan kopyalanamaz, çoğaltılamaz, değiştirilemez veya
          yeniden yayınlanamaz.
        </p>

        <h3>8. Garanti Vermeme</h3>
        <p>
          Site, "olduğu gibi" sunulur. Kesintisiz, hatasız veya güvenli çalışacağına dair açık/zımni garanti
          verilmez.
        </p>

        <h3>9. Sorumluluğun Sınırlandırılması</h3>
        <p>
          Kanunun izin verdiği ölçüde; Site kullanımından doğabilecek dolaylı, arızi, özel veya sonuçsal
          zararlardan sorumluluk kabul edilmez.
        </p>

        <h3>10. Değişiklikler</h3>
        <p>
          Şartlar zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlandığı anda yürürlüğe girer.
        </p>

        <h3>11. İletişim</h3>
        <p>
          Bu Şartlar hakkında sorularınız için{' '}
          <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a> adresine yazabilirsiniz.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        <strong>Effective date:</strong> {effectiveDate}
      </p>
      <p>
        These Terms of Service ("Terms") govern your use of the Core Coaching &amp; Training Solutions website
        (the "Site"). By accessing or using the Site, you agree to these Terms. If you do not agree, do not
        use the Site.
      </p>

      <h3>1. Purpose of the Site</h3>
      <p>
        The Site provides general information about coaching, training, and consulting services. The Site does
        not offer payments, subscriptions, or e‑commerce by default (if added in the future, it will be
        communicated separately).
      </p>

      <h3>2. Eligibility & Acceptable Use</h3>
      <p>
        You represent that you are legally able to accept these Terms in your jurisdiction. You agree to use
        the Site only for lawful purposes.
      </p>

      <h3>3. Prohibited Uses</h3>
      <ul>
        <li>Attempting unauthorized access, disrupting the Site, or scraping/automated crawling.</li>
        <li>Impersonation, providing misleading information, or abusing any part of the Site.</li>
        <li>Copying, republishing, or exploiting content in violation of IP rights.</li>
      </ul>

      <h3>4. Content & Professional Disclaimer</h3>
      <p>
        Content on the Site is general information. Coaching/training outcomes vary by individual and context;
        no specific results are guaranteed. You should seek independent professional advice where appropriate.
      </p>

      <h3>5. Form Submissions</h3>
      <p>
        The contact form, Coaching School request forms, and event registration forms are processed via Formspree (formspree.io). By
        submitting a form, you accept that the information you provide will be processed to respond to your request
        and provide the service. The third‑party form service’s own terms and privacy policy apply.
      </p>

      <h3>6. Third‑Party Links</h3>
      <p>
        The Site may link to third‑party websites (e.g., LinkedIn). We are not responsible for third‑party
        content, terms, or privacy practices.
      </p>

      <h3>7. Intellectual Property</h3>
      <p>
        Unless stated otherwise, Site content (texts, images, trademarks, design elements) belongs to its
        respective owner. You may not copy, reproduce, modify, or republish without prior written permission.
      </p>

      <h3>8. No Warranties</h3>
      <p>
        The Site is provided "as is." We make no warranties that the Site will be uninterrupted, error‑free,
        or secure.
      </p>

      <h3>9. Limitation of Liability</h3>
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or
        consequential damages arising from your use of the Site.
      </p>

      <h3>10. Changes to These Terms</h3>
      <p>
        We may update these Terms from time to time. Updates are effective once posted on this page.
      </p>

      <h3>11. Contact</h3>
      <p>
        If you have questions about these Terms, email{' '}
        <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>.
      </p>
    </>
  );
}

export function PrivacyContent() {
  const locale = useLocale();

  if (locale === 'tr') {
    return (
      <>
        <p>
          <strong>Yürürlük Tarihi:</strong> {effectiveDate}
        </p>
        <p>
          Bu Gizlilik Politikası, Siteyi ziyaret ettiğinizde bilgilerin nasıl işlendiğini açıklar. Site,
          varsayılan olarak ödeme veya üyelik sistemi içermez.
        </p>

        <h3>1. Veri Sorumlusu / İletişim</h3>
        <p>
          Bu politika kapsamındaki sorular için{' '}
          <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>{' '}
          adresine yazabilirsiniz.
        </p>

        <h3>2. Hangi Bilgiler Toplanır?</h3>
        <ul>
          <li>
            <strong>İletişim, talep ve etkinlik kayıt formları:</strong> İletişim formu, Koçluk Okulu program talepleri (Level 1/2/3) ve takvimdeki etkinlik kayıt formları,
            Formspree (formspree.io) hizmeti üzerinden işlenir. Gönderdiğiniz ad, e‑posta, mesaj (ve talep/kayıt
            formlarında soyad, telefon, program/etkinlik bilgisi) Formspree sunucularına iletilir ve bize e‑posta
            yoluyla ulaştırılır. Formspree yapılandırılmadığında iletişim formu yalnızca cihazınızda e‑posta taslağı
            açar (mailto); veri sunucumuza veya Formspree'e gönderilmez.
            Formspree’in veri işleme ve gizlilik uygulamaları için formspree.io adresindeki bilgilere bakabilirsiniz.
          </li>
          <li>
            <strong>Teknik veriler:</strong> Tarayıcı/cihaz türü gibi temel teknik bilgiler, standart sunucu
            kayıtları kapsamında işlenebilir (örn. güvenlik ve hata ayıklama).
          </li>
        </ul>

        <h3>3. Çerezler ve Analitik</h3>
        <p>
          Site üzerinde zorunlu olmadıkça izleme amaçlı çerez kullanılmaz. İleride analitik/performans ölçüm
          araçları eklenirse, bu politika güncellenir ve gerekli durumlarda aydınlatma/izin mekanizması sağlanır.
        </p>

        <h3>4. Üçüncü Taraf Bağlantılar</h3>
        <p>
          Site, LinkedIn gibi üçüncü taraf sitelere bağlantı içerebilir. Bu sitelerin içerik ve gizlilik
          uygulamalarından sorumlu değiliz.
        </p>

        <h3>5. Veri Güvenliği</h3>
        <p>
          Bilgilerin güvenliğini sağlamak için makul teknik ve idari önlemler alınır. Bununla birlikte, internet
          üzerinden iletimin %100 güvenli olduğu garanti edilemez.
        </p>

        <h3>6. Saklama Süresi</h3>
        <p>
          Formlardan gelen veriler Formspree aracılığıyla bize e‑posta ile iletilir; bu e‑postaları yalnızca talebinize yanıt ve hizmet
          sunumu amacıyla, yasal zorunluluklar çerçevesinde tutarız. Formspree yapılandırılmadığında iletişim formu mailto ile çalışır ve veri sunucumuzda saklanmaz. Formspree’in kendi saklama süreleri için
          formspree.io politikaları geçerlidir. Teknik kayıtlar yalnızca gerekli süre boyunca tutulur.
        </p>

        <h3>7. Haklarınız</h3>
        <p>
          Yürürlükteki mevzuata bağlı olarak; bilgi talep etme, düzeltme, silme veya itiraz gibi haklarınız
          olabilir. Talepler için yukarıdaki e‑posta adresi üzerinden iletişime geçebilirsiniz.
        </p>

        <h3>8. Değişiklikler</h3>
        <p>
          Bu politika zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlandığı anda yürürlüğe girer.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        <strong>Effective date:</strong> {effectiveDate}
      </p>
      <p>
        This Privacy Policy explains how information is handled when you visit the Site. The Site does not
        include payments or user accounts by default.
      </p>

      <h3>1. Contact</h3>
      <p>
        For privacy-related questions, email{' '}
        <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>.
      </p>

      <h3>2. Information We Collect</h3>
      <ul>
        <li>
          <strong>Contact, request and event registration forms:</strong> The contact form, Coaching School program requests (Level 1/2/3), and
          event registration forms are processed via Formspree (formspree.io). Name, surname, email, phone, message,
          and related program/event details are sent to Formspree’s servers and forwarded to us by email. If Formspree is not configured, the contact form uses mailto only (opens a draft in your email app; no data is sent to our server or Formspree). For
          Formspree’s data processing and privacy practices, see formspree.io.
        </li>
        <li>
          <strong>Technical data:</strong> Basic technical information (e.g., browser/device type) may be
          processed through standard server logs for security and troubleshooting.
        </li>
      </ul>

      <h3>3. Cookies & Analytics</h3>
      <p>
        We do not use tracking cookies unless necessary. If analytics or performance tools are added in the
        future, this policy will be updated and appropriate notice/consent mechanisms will be provided where
        required.
      </p>

      <h3>4. Third‑Party Links</h3>
      <p>
        The Site may include links to third‑party websites (e.g., LinkedIn). We are not responsible for their
        privacy practices.
      </p>

      <h3>5. Data Security</h3>
      <p>
        We use reasonable technical and organizational measures to protect information. However, no method of
        transmission over the internet is 100% secure.
      </p>

      <h3>6. Data Retention</h3>
      <p>
        Data from forms is delivered to us by email via Formspree; we retain those emails only for responding to
        your request and providing the service, and as required by law. When Formspree is not configured, the
        contact form uses mailto and no data is stored on our server. Formspree's own retention terms apply (see
        formspree.io). Technical logs are retained only as long as necessary.
      </p>

      <h3>7. Your Rights</h3>
      <p>
        Depending on applicable law, you may have rights such as access, correction, deletion, or objection.
        You can submit requests via the email address above.
      </p>

      <h3>8. Changes</h3>
      <p>We may update this policy from time to time. Updates are effective once posted on this page.</p>
    </>
  );
}
