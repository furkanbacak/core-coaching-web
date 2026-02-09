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

export function PricingContent() {
  const locale = useLocale();

  if (locale === 'tr') {
    return (
      <>
        <p>
          <strong>Yürürlük Tarihi:</strong> {effectiveDate}
        </p>
        <p>
          Şeffaflık, müşterilerimize olan taahhüdümüzün temel taşıdır. Kişisel ve kurumsal gelişim
          yolculuğunuz için gereken yatırımı anlamanızın büyük önem taşıdığına inanıyoruz. Bu fiyatlandırma
          politikası, koçluk ve eğitim programlarımızın maliyetini etkileyen faktörleri açıklar ve bilinçli
          bir karar vermenize yardımcı olmayı amaçlar.
        </p>

        <h3>Şeffaflık ve Yatırım</h3>
        <p>
          Core Coaching &amp; Training Solutions, sizi değerli becerilerle donatmak ve hedeflerinize
          ulaşmanızı hızlandırmak için tasarlanmış koçluk ve eğitim programları sunar. Bir programa
          katılmanın önemli bir yatırım olduğunun bilincindeyiz ve fiyatlandırma yapımız konusunda
          şeffaf olmaya özen gösteriyoruz.
        </p>

        <h3>Programa Özel Maliyetler</h3>
        <p>
          Seçeceğiniz programın maliyeti aşağıdakiler dahil çeşitli faktörlere bağlıdır:
        </p>
        <ul>
          <li>
            <strong>Program Süresi:</strong> Programlarımız kısa ve odaklı atölyelerden kapsamlı, çok aylık
            koçluk yolculuklarına kadar uzanır. Program süresi uzadıkça yatırım tutarı da buna paralel artar.
          </li>
          <li>
            <strong>Program İçeriği:</strong> İçeriğin derinliği ve kapsamı fiyatlandırmayı etkiler.
            İleri düzey koçluk programları ek kaynaklar veya birebir koçluk oturumları içerebilir ve bu
            durum maliyete yansıyabilir.
          </li>
          <li>
            <strong>Sunum Formatı:</strong> Programlarımız çevrimiçi modüller, yüz yüze atölyeler veya
            karma öğrenme deneyimleri gibi farklı formatlarda sunulabilir. Mekan maliyetleri veya teknoloji
            kaynakları gibi faktörler nedeniyle format tercihi fiyatı etkileyebilir.
          </li>
          <li>
            <strong>Katılımcı Sayısı:</strong> Bireysel koçluk programları ile grup eğitimleri arasında
            katılımcı sayısına bağlı olarak fiyat farklılıkları oluşabilir.
          </li>
        </ul>

        <h3>Doğru Programı Bulmak</h3>
        <p>
          Belirli program maliyetlerini ve ayrıntılarını öğrenmek için bizimle iletişime geçmenizi
          tavsiye ederiz. Hedeflerinizi birlikte değerlendirerek ihtiyaçlarınıza ve bütçenize en uygun
          programı bulmanıza yardımcı olmaktan mutluluk duyarız.
        </p>

        <h3>Geleceğinize Yatırım</h3>
        <p>
          Programlarımızın maliyeti önemli bir değerlendirme kriteri olmakla birlikte, yatırımın geri
          dönüşünün son derece yüksek olduğuna inanıyoruz. Koçluk ve eğitim yoluyla kendinize yatırım
          yaparak değerli beceriler kazanır, zorlukların üstesinden gelir ve potansiyelinizi en üst
          düzeye çıkarırsınız.
        </p>

        <h3>Ek Bilgiler</h3>
        <ul>
          <li>
            Zaman zaman erken kayıt indirimleri veya özel kampanyalar sunulabilir. Güncellemeler
            için web sitemizi takip etmenizi öneririz.
          </li>
          <li>
            Tüm fiyatlar Türk Lirası (TL) cinsinden belirtilir ve aksi ayrıca bildirilmedikçe
            KDV dahildir.
          </li>
          <li>
            Kurumsal programlarda özel fiyatlandırma uygulanabilir; detaylı bilgi için{' '}
            <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>{' '}
            adresine yazabilirsiniz.
          </li>
        </ul>

        <p>
          Core Coaching &amp; Training Solutions ile gelişiminize yapacağınız yatırım, geleceğinize
          yapılan bir yatırımdır.
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
        Transparency is a cornerstone of our commitment to you. We believe that understanding the
        investment required for personal and organizational growth is essential. This pricing policy
        outlines the factors influencing the cost of our coaching and training programs and provides
        insights into making an informed decision.
      </p>

      <h3>Transparency and Investment</h3>
      <p>
        Core Coaching &amp; Training Solutions offers coaching and training programs designed to equip
        you with valuable skills and propel you towards your goals. We recognize that enrolling in a
        program is an investment, and we strive to be transparent about our pricing structure.
      </p>

      <h3>Program-Specific Costs</h3>
      <p>
        The specific cost of your chosen program will depend on several factors, including:
      </p>
      <ul>
        <li>
          <strong>Program Duration:</strong> Our programs range from shorter, focused workshops to
          comprehensive, multi-month coaching journeys. The longer the program, the greater the investment.
        </li>
        <li>
          <strong>Program Content:</strong> The depth and complexity of the program content will influence
          the pricing. Advanced coaching programs may involve additional resources or one-on-one coaching
          elements, impacting the cost.
        </li>
        <li>
          <strong>Delivery Format:</strong> We offer programs in various formats, such as online modules,
          in-person workshops, or blended learning experiences. The chosen format can affect pricing due
          to factors like venue costs or technology resources.
        </li>
        <li>
          <strong>Number of Participants:</strong> Pricing may vary between individual coaching programs
          and group training sessions based on the number of participants.
        </li>
      </ul>

      <h3>Finding the Right Fit</h3>
      <p>
        To explore specific program costs and details, we encourage you to contact us. We'll be happy
        to discuss your goals and help you find the program that best suits your needs and budget.
      </p>

      <h3>Investment in Your Future</h3>
      <p>
        While the cost of a program is an important consideration, we believe the return on investment
        is substantial. By investing in yourself through coaching and training, you'll gain valuable
        skills, overcome challenges, and unlock your full potential.
      </p>

      <h3>Additional Considerations</h3>
      <ul>
        <li>
          We may occasionally offer early enrollment discounts or special promotions. Be sure to check
          our website for updates.
        </li>
        <li>
          All prices are quoted in Turkish Lira (TRY) and include VAT unless otherwise stated.
        </li>
        <li>
          Custom pricing may apply for corporate programs; for details, email{' '}
          <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>.
        </li>
      </ul>

      <p>
        Investing in your growth with Core Coaching &amp; Training Solutions is an investment in your
        future success.
      </p>
    </>
  );
}

export function CancellationContent() {
  const locale = useLocale();

  if (locale === 'tr') {
    return (
      <>
        <p>
          <strong>Yürürlük Tarihi:</strong> {effectiveDate}
        </p>
        <p>
          Core Coaching &amp; Training Solutions olarak, hedeflerinize ulaşmanızı destekleyen dönüştürücü
          bir öğrenme deneyimi sunmaya kararlıyız. Hayatın bazen beklenmedik durumlar getirebileceğinin
          farkındayız ve programımızın yapısı hakkında şeffaf olmayı, ihtiyaç duyulduğunda destek sunmayı
          önemsiyoruz. Bu iptal ve değişiklik politikası, program değişikliklerine yaklaşımımızı ve başarılı
          bir koçluk/eğitim deneyimi sağlamak için birlikte çalışma yollarımızı açıklar.
        </p>

        <h3>Program Yatırımı ve Esneklik</h3>
        <p>
          Bir koçluk veya eğitim programına katılmanın dikkatli bir değerlendirme gerektirdiğinin
          farkındayız. Programlarımız, kişiselleştirilmiş bir öğrenme deneyimi sunabilmek için sınırlı
          sayıda katılımcıyla tasarlanmıştır. Bu odaklı yaklaşım ileri düzeyde planlama gerektirir ve
          kısa sürede yer doldurmak zorlayıcı olabilir.
        </p>
        <p>
          Bu nedenle politikamız, tüm katılımcılar için yüksek kaliteli bir deneyim sağlamayı
          önceliklendirir. Çoğu durumda, kaydınızı programınıza daha uygun bir tarihteki gelecek
          bir gruba aktarma imkanı sunabiliriz.
        </p>

        <h3>Öngörülemeyen Durumlar</h3>
        <p>
          Öngörülemeyen durumların ortaya çıkabileceğinin farkındayız. Kontrolünüz dışında gelişen bir
          durum, kayıtlı olduğunuz programa katılmanızı engelliyorsa, Core Coaching &amp; Training
          Solutions sizinle birlikte uygun çözüm seçeneklerini değerlendirecektir.
        </p>

        <h3>Grup Değişikliği Nedeniyle İptal</h3>
        <p>
          Kayıtlı bir katılımcı, aynı grupla birkaç oturum sonrasında devam edemez ve başka bir gruba
          transfer olmak isterse, bu durum mevcut gruptan iptal ve yeni gruba yeniden kabul olarak
          değerlendirilir. Core Coaching &amp; Training Solutions bu gibi talepleri duruma göre
          değerlendirme hakkını saklı tutar. Belirli sayıda oturum sonrasında öngörülemeyen nedenlerle
          yapılan program transferleri ek maliyet gerektirebilir.
        </p>

        <h3>Program Değişikliği Talebi</h3>
        <p>
          Durumunuzu görüşmek ve olası çözümleri birlikte değerlendirmek için, programınızın başlangıç
          tarihinden itibaren 15 gün içinde{' '}
          <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>{' '}
          adresine yazabilirsiniz. Ekibimiz, ihtiyaçlarınıza ve program hedeflerinize uygun bir çözüm
          bulmak için sizinle çalışmaktan mutluluk duyar.
        </p>

        <h3>Ek Bilgiler</h3>
        <ul>
          <li>
            Core Coaching &amp; Training Solutions, bu politikayı önceden bildirmeksizin değiştirme
            hakkını saklı tutar.
          </li>
          <li>
            Kayıt olmadan önce program açıklamasını ve müfredatını dikkatlice incelemenizi öneririz.
          </li>
          <li>
            Bir programa kaydolarak bu iptal ve değişiklik politikasının şartlarını kabul etmiş
            sayılırsınız.
          </li>
        </ul>

        <p>
          Anlayışınız ve iş birliğiniz için teşekkür ederiz. İptal politikamız hakkında sorularınız
          varsa{' '}
          <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>{' '}
          adresinden bize ulaşmaktan çekinmeyin.
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
        At Core Coaching &amp; Training Solutions, we're dedicated to providing a transformative
        learning experience that empowers you to achieve your goals. We understand that life can
        sometimes present unexpected challenges, and we want to be upfront about our program's
        structure while offering support when needed. This cancellation policy outlines our approach
        to program changes and explores ways we can work together to ensure a successful coaching
        and training experience.
      </p>

      <h3>Program Investment and Flexibility</h3>
      <p>
        We understand that enrolling in a coaching or training program requires careful consideration.
        Our programs are designed with a limited number of participants to foster a personalized
        learning experience. This focused approach requires advanced planning, and filling spots on
        short notice can be challenging.
      </p>
      <p>
        Therefore, our policy prioritizes ensuring a high-quality experience for all participants.
        In most cases, we can offer you the opportunity to transfer your enrollment to a future
        program that better suits your schedule.
      </p>

      <h3>Unforeseen Circumstances</h3>
      <p>
        We recognize that unforeseen circumstances can arise. If a situation beyond your control
        prevents you from participating in your enrolled program, Core Coaching &amp; Training
        Solutions will explore options for accommodation.
      </p>

      <h3>Cancellation Due to Change of Cohort</h3>
      <p>
        If an enrolled participant is unable to continue after attending a few sessions with the same
        cohort and wishes to transfer to another cohort, this will be treated as a cancellation from
        the current cohort and readmission into another cohort. Core Coaching &amp; Training Solutions
        reserves the right to make decisions on a case-by-case basis. Transfers to another program due
        to unforeseen circumstances, beyond a particular number of sessions attended, may incur
        additional costs.
      </p>

      <h3>Requesting a Program Change</h3>
      <p>
        To discuss your situation and explore potential solutions, please contact us within 15 days
        of your program start date at{' '}
        <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>.
        Our team is happy to work with you to find a solution that aligns with your needs and
        program goals.
      </p>

      <h3>Additional Information</h3>
      <ul>
        <li>
          Core Coaching &amp; Training Solutions reserves the right to modify this policy without notice.
        </li>
        <li>
          We encourage you to carefully review the program description and curriculum before enrolling.
        </li>
        <li>
          By enrolling in a program, you agree to the terms of this cancellation policy.
        </li>
      </ul>

      <p>
        We appreciate your understanding and cooperation. If you have any questions about our
        cancellation policy, please don't hesitate to contact us at{' '}
        <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>.
      </p>
    </>
  );
}

export function RefundContent() {
  const locale = useLocale();

  if (locale === 'tr') {
    return (
      <>
        <p>
          <strong>Yürürlük Tarihi:</strong> {effectiveDate}
        </p>
        <p>
          Core Coaching &amp; Training Solutions koçluk ve eğitim programlarına gösterdiğiniz ilgi için
          teşekkür ederiz! Bir programa katılmanın önemli bir yatırım olduğunun bilincindeyiz ve iade
          politikamız konusunda şeffaf olmak istiyoruz.
        </p>

        <h3>Genel Politika</h3>
        <p>
          Programdan çekilme veya kısmi katılım nedeniyle iade yapılmamaktadır. Programlarımız, yüksek
          kaliteli bir öğrenme deneyimi sağlamak için sınırlı sayıda katılımcıyla tasarlanmıştır. Bu
          kontenjanların doldurulması ileri düzeyde planlama gerektirir ve son dakika değişiklikleri
          çoğu zaman mümkün olmamaktadır.
        </p>
        <p>
          Core Coaching &amp; Training Solutions, katılımcının orijinal programın başlangıç tarihinden
          itibaren 12 ay içinde, katılımcının uygunluğuna göre eşdeğer bir programda yer sağlamayı kabul
          eder.
        </p>
        <p>
          Eğitmen değişikliği talep eden katılımcılar, bunu yalnızca ilk üç oturum içinde ve Core
          Coaching &amp; Training Solutions yönetiminin onayı ile yapabilirler.
        </p>

        <h3>İstisnalar</h3>
        <p>
          <strong>Öngörülemeyen durumlar:</strong> Nadir durumlarda, programa katılmanızı engelleyen
          öngörülemeyen koşullar nedeniyle tam veya kısmi iade değerlendirilebilir. Bu durumlar tek tek
          incelenerek değerlendirilecektir.
        </p>
        <p>
          Tanınan herhangi bir istisna, Core Coaching &amp; Training Solutions'ın takdirine bağlıdır ve
          emsal teşkil etmez. Katılımcıların iade hakkı bulunmamaktadır; yalnızca eşdeğer programlarda
          yer sağlanabilir.
        </p>

        <h3>İade Talep Süreci</h3>
        <ul>
          <li>
            Öngörülemeyen koşullar nedeniyle iade hakkına sahip olduğunuzu düşünüyorsanız, programınızın
            başlangıç tarihinden itibaren 15 gün içinde{' '}
            <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>{' '}
            adresine yazılı olarak başvurmanız gerekmektedir.
          </li>
          <li>
            Talebinizde, katılımınızı engelleyen zorlayıcı koşulları açıklamanız beklenir.
          </li>
          <li>
            Core Coaching &amp; Training Solutions, herhangi bir taahhütte bulunmaksızın, mümkün
            olduğunca talebi değerlendirecektir.
          </li>
          <li>
            Onaylanan iadeler, ödeme tarihinden itibaren 15 ila 30 iş günü içinde gerçekleştirilir.
          </li>
          <li>
            İadeler yalnızca ödemenin yapıldığı hesaba işlenir; üçüncü taraf veya farklı bir hesaba
            iade yapılmaz.
          </li>
        </ul>

        <h3>Ek Bilgiler</h3>
        <ul>
          <li>
            Core Coaching &amp; Training Solutions, bu iade politikasını önceden bildirmeksizin değiştirme
            hakkını saklı tutar.
          </li>
          <li>
            Kayıt olmadan önce program açıklamasını ve müfredatını dikkatlice incelemenizi öneririz.
          </li>
          <li>
            Bir programa kaydolarak bu iade politikasının şartlarını kabul etmiş sayılırsınız.
          </li>
        </ul>

        <h3>İletişim</h3>
        <p>
          Bu iade politikası hakkında sorularınız varsa{' '}
          <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>{' '}
          adresinden bize ulaşmaktan çekinmeyin.
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
        Thank you for your interest in Core Coaching &amp; Training Solutions' coaching and training
        programs! We understand that enrolling in a program is a significant investment, and we want
        to be transparent about our refund policy.
      </p>

      <h3>General Policy</h3>
      <p>
        Refunds are generally not honored due to program withdrawal or partial attendance. Our programs
        are designed with a limited number of participants to ensure a high-quality learning experience.
        Filling these spots requires advanced planning, and last-minute replacements are often not
        feasible.
      </p>
      <p>
        Core Coaching &amp; Training Solutions agrees to accommodate the learner in an equivalent
        program within 12 months of the start of the original program to suit the learner's convenience.
      </p>
      <p>
        Learners requesting a change of trainer may do so within the first three sessions only, with
        the approval of Core Coaching &amp; Training Solutions management.
      </p>

      <h3>Exceptions</h3>
      <p>
        <strong>Unforeseen circumstances:</strong> In rare cases, a full or partial refund may be
        considered due to unforeseen circumstances that prevent you from participating in the program.
        These situations will be evaluated on a case-by-case basis.
      </p>
      <p>
        Any exception granted is at the sole discretion of Core Coaching &amp; Training Solutions and
        constitutes no precedence. Learners do not have a right to a refund. They can only be
        accommodated in equivalent programs.
      </p>

      <h3>To Request a Refund</h3>
      <ul>
        <li>
          If you believe you qualify for a refund due to unforeseen circumstances, please contact us
          in writing at{' '}
          <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>{' '}
          within 15 days of your program start date.
        </li>
        <li>
          Your request should explain the extenuating circumstances preventing your participation.
        </li>
        <li>
          Where possible, without any commitment, the request will be considered.
        </li>
        <li>
          Approved refunds will be issued within 15 to 30 business days from the date of payment.
        </li>
        <li>
          Refunds will only be processed to the account from which the amount was received, and not
          to any other or third-party account.
        </li>
      </ul>

      <h3>Additional Information</h3>
      <ul>
        <li>
          Core Coaching &amp; Training Solutions reserves the right to modify this refund policy
          without prior notice.
        </li>
        <li>
          We encourage you to carefully review the program description and curriculum before enrolling.
        </li>
        <li>
          By enrolling in a program, you agree to the terms of this refund policy.
        </li>
      </ul>

      <h3>Contact Us</h3>
      <p>
        If you have any questions about this refund policy, please don't hesitate to contact us at{' '}
        <a href="mailto:info@corecoachingtraining.com" className="text-primary-600 hover:text-primary-700">info@corecoachingtraining.com</a>.
      </p>
    </>
  );
}
