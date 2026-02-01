import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Blog posts data with full content
const blogPosts: Record<string, Record<string, any>> = {
  'yonetim-ve-liderlik': {
    title: {
      tr: 'Yönetim ve Liderlik',
      en: 'Management and Leadership',
    },
    subtitle: {
      tr: 'Birbirini Tamamlayan İki Temel Yetkinlik',
      en: 'Two Complementary Core Competencies',
    },
    image: '/images/blog/yonetim-ve-liderlik.jpg',
    content: {
      tr: `Günümüz dünyası belirsizliklerle dolu. Hızla değişen iş modelleri, artan beklentiler ve çok katmanlı ilişkiler, liderlerden yalnızca stratejik kararlar almalarını değil; aynı zamanda duyguları okuyabilmelerini, ilişkileri yönetebilmelerini ve zor zamanlarda dengeyi koruyabilmelerini bekliyor. Bu nedenle modern liderlik, teknik bilgi kadar insani farkındalık gerektiren bir alan hâline geliyor.

Yönetim ve liderlik, iş dünyasında sıkça karşılaştırılan; hatta zaman zaman birbirinin alternatifi gibi konumlandırılan iki kavramdır. Oysa gerçekte bu iki alan, birbirini dışlayan değil; birlikte anlam kazanan ve kurumların başarısı için vazgeçilmez olan iki temel yetkinliktir.

Yöneticilik; planlama, organizasyon, kaynak yönetimi, süreç takibi ve sonuç üretme gibi kritik sorumlulukları içerir. İyi bir yönetim olmadan sürdürülebilir başarıdan söz etmek mümkün değildir. Net hedefler, sağlam sistemler ve disiplinli işleyiş; kurumların ayakta kalmasını sağlar. Bu yönüyle yöneticilik, kurumların omurgasıdır.

Ancak günümüz dünyasında, yalnızca iyi yönetilen değil; aynı zamanda iyi yönlendirilen, anlaşılan ve anlam bulan organizasyonlara ihtiyaç vardır. İşte bu noktada liderlik devreye girer.

Liderlik; yönetilen süreçlerin içinde yer alan insanların duygularını, motivasyonlarını ve potansiyellerini fark edebilme becerisidir. Liderler, sistemleri çalıştırmanın ötesine geçerek; o sistemlerin içinde yer alan bireylerle bağ kurar. Çünkü süreçleri insanlar işletir, sonuçları insanlar üretir. Günümüzde liderlik; yalnızca yönetmek değil, anlam yaratmak, güven inşa etmek ve insana dokunabilmek ile ölçülmektedir.

Modern organizasyonlarda yöneticilerden beklenen rol, yalnızca görev dağıtmak ya da performansı takip etmek değil; aynı zamanda ekiplerine yön verebilmek, ilham olabilmek ve güven ortamı yaratabilmektir. Bu nedenle çağdaş yönetim anlayışı, liderlik becerileriyle desteklendiğinde gerçek gücüne ulaşır.

**Etkili yöneticiler;**
• Süreçleri doğru planlar,
• Kaynakları verimli kullanır,
• Hedefleri netleştirir,
• Performansı ölçer ve takip eder.

**Etkili liderler ise;**
• İnsanları anlar ve dinler,
• Güven ve bağlılık yaratır,
• Ortak bir amaç etrafında birleştirir,
• Gelişimi ve öğrenmeyi teşvik eder.

Günümüz iş dünyasında fark yaratan profesyoneller, bu iki alanı bir arada taşıyabilenlerdir. Kısacası hem iyi yöneten hem de etkili liderlik sergileyebilen kişilerdir. Çünkü yalnızca liderlik vizyonu olup yönetim becerisi olmayan bir yapı da yalnızca iyi yönetilip liderlik edilmeyen bir yapı da uzun vadede zorlanır.

Bu noktada **koçluk yaklaşımı**, yönetim ve liderliği birbirine bağlayan güçlü bir köprü görevi görür. Koçluk zihniyetine sahip yöneticiler; ekiplerine yalnızca ne yapacaklarını söylemekle kalmaz, aynı zamanda onların düşünmelerine, sorumluluk almalarına ve gelişmelerine alan açar.

**Koçluk temelli yaklaşım;**
• Performansı baskıyla değil, farkındalıkla artırır
• İlişkileri güçlendirir
• Çalışan bağlılığını ve sahiplenmeyi destekler

Bugünün çalışanları, yalnızca iyi organize edilmiş sistemlerde değil; kendilerini değerli hissettikleri, seslerinin duyulduğu ve gelişim alanı bulabildikleri ortamlarda kalıcı olmayı tercih ediyor. Bu beklentiyi gören yöneticiler, liderlik becerilerini geliştirerek ekiplerine çok daha güçlü bir etki sunabiliyor.

Sonuç olarak; yöneticilik ve liderlik birbirinin rakibi değil, tamamlayıcısıdır. Güçlü kurumlar, bu iki yetkinliği dengeli biçimde bir araya getirebilen yapılar tarafından inşa edilir. Ve gerçek etki, sistemlerle insanın uyum içinde çalıştığı noktada ortaya çıkar.`,
      en: `Today's world is full of uncertainties. Rapidly changing business models, increasing expectations, and multi-layered relationships demand that leaders not only make strategic decisions but also read emotions, manage relationships, and maintain balance in difficult times. For this reason, modern leadership is becoming a field that requires human awareness as much as technical knowledge.

Management and leadership are two concepts frequently compared in the business world; sometimes even positioned as alternatives to each other. However, in reality, these two areas are not mutually exclusive; they are two fundamental competencies that gain meaning together and are indispensable for organizational success.

Management includes critical responsibilities such as planning, organization, resource management, process monitoring, and producing results. Without good management, sustainable success is impossible to achieve. Clear goals, solid systems, and disciplined operations keep organizations standing. In this respect, management is the backbone of organizations.

However, in today's world, organizations need not only to be well-managed but also well-guided, understood, and meaningful. This is where leadership comes into play.

Leadership is the ability to recognize the emotions, motivations, and potential of people within managed processes. Leaders go beyond running systems; they connect with individuals within those systems. Because people run processes, people produce results. Today, leadership is measured not only by managing but by creating meaning, building trust, and being able to touch people.

In modern organizations, the role expected from managers is not only to distribute tasks or monitor performance; but also to guide their teams, inspire them, and create an environment of trust. Therefore, contemporary management understanding reaches its true power when supported by leadership skills.

**Effective managers;**
• Plan processes correctly,
• Use resources efficiently,
• Clarify goals,
• Measure and monitor performance.

**Effective leaders;**
• Understand and listen to people,
• Create trust and commitment,
• Unite around a common purpose,
• Encourage growth and learning.

Professionals who make a difference in today's business world are those who can carry both areas together. In short, they are people who can both manage well and demonstrate effective leadership. Because a structure with only leadership vision but no management skills, or a structure that is only well-managed but not led, struggles in the long run.

At this point, the **coaching approach** serves as a powerful bridge connecting management and leadership. Managers with a coaching mindset not only tell their teams what to do but also create space for them to think, take responsibility, and develop.

**Coaching-based approach;**
• Increases performance through awareness, not pressure
• Strengthens relationships
• Supports employee commitment and ownership

Today's employees prefer to stay in environments where they feel valued, their voices are heard, and they can find room for growth—not just in well-organized systems. Managers who see this expectation can offer a much stronger impact to their teams by developing their leadership skills.

In conclusion; management and leadership are not rivals but complementary. Strong organizations are built by structures that can bring these two competencies together in a balanced way. And real impact emerges at the point where systems and people work in harmony.`,
    },
    date: '2026-02-01',
    readTime: {
      tr: '2 dakika okuma',
      en: '2 min read',
    },
  },
  'kocluk': {
    title: {
      tr: 'Koçluk',
      en: 'Coaching',
    },
    subtitle: {
      tr: 'İçten Dışa Bir Dönüşüm Yolculuğu',
      en: 'A Transformation Journey from Within',
    },
    image: '/images/blog/kocluk.jpg',
    content: {
      tr: `"Gerçek dönüşüm, dışarıdan verilen cevaplarla değil; içeriden doğan farkındalıkla başlar."

Koçluk, bizim için yalnızca hedeflere ulaşma aracı değil; bireyin kendisiyle kurduğu ilişkiyi dönüştüren derin bir farkındalık sürecidir. Hızla değişen dünyada insanlar, daha fazla bilgiye değil; kendilerini daha iyi anlamaya, iç seslerini duymaya ve kendi potansiyellerine erişebilecekleri alanlara ihtiyaç duyar. Koçluk tam da bu ihtiyacın içinden doğmuştur. Çünkü bireyler ancak kendi içsel kaynaklarını fark ettiklerinde, kalıcı ve sürdürülebilir değişim yaratabilirler. Bu yaklaşımda amaç, kişiye yol göstermek değil; onun kendi yolunu bulmasını desteklemektir.

"Koçluk, insanın kendine sorduğu en güçlü sorularla başlar."

Biz koçluğu; sorun çözmekten çok farkındalık yaratmak, yönlendirmekten çok alan açmak ve dış motivasyondan ziyade içsel gücü harekete geçirmek olarak ele alıyoruz. Her bireyin, kendi yaşamına dair doğru cevapları içinde taşıdığına inanıyoruz. Bu nedenle koçluk süreçlerimizde hazır çözümler sunmayız. Danışanın düşünmesini, fark etmesini ve kendi eylem planını oluşturmasını destekleriz. Çünkü gerçek sahiplenme, bireyin kendi kararlarıyla mümkün olur.

"Koçluk, bir insanın kendine verdiği en güçlü izinlerden biridir."

Koçluk; kısa vadeli motivasyon değil, davranışsal dönüşüm yaratır. Bu dönüşüm, bireyin yalnızca iş hayatına değil; ilişkilerine, karar alma biçimine ve yaşamının bütününe yansır. Ve tam da bu nedenle, çağımızın en güçlü gelişim araçlarından biridir.

**Doğru Koçluk, Gerçek Dönüşüm**

Koçluğun etkili olabilmesi için tek tip ve hazır çözümler yeterli değildir. Her bireyin, her ekibin ve her kurumun ihtiyacı farklıdır. Bu yüzden doğru koçluk; ihtiyacın keşfedilmesiyle başlayan, esnek ve yaşayan bir süreçtir.

**Gerçek dönüşüm;**
• Farkındalığın davranışa dönüştüğü,
• Öğrenilen bilginin hayata geçtiği,
• Bireyin ve kurumun kendi gücünü sahiplendiği noktada gerçekleşir.

Koçluk, sorunları çözmekten çok; insanları kendi çözümlerini yaratabilecek güce kavuşturur. Ve bu nedenle koçluk, bugün sadece bireyler için değil; geleceğini sağlam temeller üzerine kurmak isteyen tüm kurumlar için güçlü bir dönüşüm aracıdır.

**Bireysel Koçluktan Takım ve Kuruma Uzanan Etki**

Koçluğun etkisi, bireysel çalışanların gelişiminin çok ötesine uzanır. Doğru yaklaşımla uygulandığında, organizasyonların kültürünü dönüştüren, liderlik anlayışını derinleştiren ve sürdürülebilir performans yaratan bir güç hâline gelir.

Bireysel düzeyde koçluk; kişinin kendini tanımasını, önceliklerini netleştirmesini ve daha bilinçli kararlar almasını sağlar. Ancak koçluğun gerçek gücü, bu bireysel farkındalığın takım ve kurumsal yapılara yansımasıyla ortaya çıkar.

Takım koçluğu, farklı bakış açılarını ortak bir hedef etrafında buluşturur. İletişimi güçlendirir, güveni artırır ve ekiplerin potansiyelini ortaya çıkarır.

Kurumsal koçluk ise organizasyonun tamamını bir sistem olarak ele alır; kültürü, ilişkileri ve liderlik anlayışını birlikte dönüştürmeyi hedefler.

Bu nedenle koçluk, yalnızca performans artışı sağlayan bir araç değil; kurumun öğrenme ve dönüşüm kapasitesini geliştiren stratejik bir yaklaşımdır.

**Yönetici Koçluğu: Liderliğin İçsel Dayanağını Güçlendirmek**

Yönetici koçluğu, üst düzey yöneticilerin ve liderlerin yalnızca iş sonuçlarına değil; kendilerine de alan açmalarını sağlar. Günümüz yöneticileri, yüksek sorumluluk, yoğun tempo ve sürekli karar alma baskısı altındadır. Bu koşullar altında liderlerin en çok ihtiyaç duyduğu şey, durup düşünebilecekleri ve kendi iç seslerini duyabilecekleri bir alan yaratmaktır.

**Yönetici koçluğu;**
• Liderlerin farkındalıkla karar almasını,
• Karmaşık organizasyonel zorluklara daha geniş bir perspektiften bakabilmesini,
• Güçlü yönlerini netleştirmesini,
• İş–yaşam dengelerini koruyarak sürdürülebilir bir liderlik sergilemelerini destekler.

Koçluk süreci, yöneticilerin yalnızca daha iyi liderler olmalarına değil; daha dengeli, daha net ve daha etkili bireyler hâline gelmelerine katkı sunar.

**Takım Koçluğu: Birlikte Başarmanın Dinamiğini Güçlendirmek**

Takımlar, yalnızca bir araya gelen bireylerden ibaret değildir. Her takımın kendine özgü bir dinamiği, iletişim dili ve ilişki yapısı vardır. Takım koçluğu, bu dinamikleri görünür kılarak; ekiplerin birlikte düşünmesini, birlikte öğrenmesini ve birlikte üretmesini destekler.

**Takım koçluğu;**
• İletişimi güçlendirir,
• Güven ortamı yaratır,
• Ortak hedef bilincini netleştirir,
• Sorumluluk alma ve sahiplenme kültürünü geliştirir.

Yüksek performanslı takımlar, yalnızca yetenekli bireylerden değil; birbirine güvenen, açık iletişim kurabilen ve ortak amaç etrafında birleşebilen insanlardan oluşur. Takım koçluğu, bu zemini inşa eder.

Koçluğa yatırım yapmak; yalnızca bir gelişim programına değil, en değerli varlığınız olan insana yatırım yapmaktır. Bireylerin ve ekiplerin büyümesi, kurumların da büyümesini sağlar.

Organizasyonunuzda koçluğun dönüştürücü gücünü ortaya çıkarmaya hazır mısınız?`,
      en: `"True transformation begins not with answers given from outside, but with awareness born from within."

For us, coaching is not just a tool for achieving goals; it is a deep awareness process that transforms the relationship one has with oneself. In a rapidly changing world, people need not more information, but to understand themselves better, hear their inner voice, and access their potential. Coaching was born precisely from this need. Because individuals can only create lasting and sustainable change when they recognize their own inner resources. The aim of this approach is not to show the person the way, but to support them in finding their own path.

"Coaching begins with the most powerful questions one asks oneself."

We approach coaching as creating awareness rather than solving problems, opening space rather than directing, and activating inner strength rather than external motivation. We believe that every individual carries the right answers about their own life within them. Therefore, we do not offer ready-made solutions in our coaching processes. We support the client in thinking, realizing, and creating their own action plan. Because true ownership is only possible through one's own decisions.

"Coaching is one of the most powerful permissions a person gives themselves."

Coaching creates not short-term motivation, but behavioral transformation. This transformation reflects not only in the individual's work life but also in their relationships, decision-making style, and their life as a whole. And for this very reason, it is one of the most powerful development tools of our time.

**The Right Coaching, Real Transformation**

For coaching to be effective, one-size-fits-all and ready-made solutions are not enough. Every individual, every team, and every organization has different needs. That's why the right coaching is a flexible and living process that begins with discovering the need.

**Real transformation;**
• Occurs when awareness turns into behavior,
• When learned knowledge is put into practice,
• When individuals and organizations own their own power.

Coaching empowers people to create their own solutions rather than solving problems for them. And for this reason, coaching is today a powerful transformation tool not only for individuals but for all organizations that want to build their future on solid foundations.

**From Individual Coaching to Team and Organizational Impact**

The impact of coaching extends far beyond the development of individual employees. When applied with the right approach, it becomes a force that transforms organizational culture, deepens leadership understanding, and creates sustainable performance.

At the individual level, coaching enables people to know themselves, clarify their priorities, and make more conscious decisions. However, the true power of coaching emerges when this individual awareness reflects on team and organizational structures.

Team coaching brings different perspectives together around a common goal. It strengthens communication, increases trust, and reveals teams' potential.

Organizational coaching addresses the entire organization as a system; it aims to transform culture, relationships, and leadership understanding together.

Therefore, coaching is not just a tool for increasing performance; it is a strategic approach that develops the organization's learning and transformation capacity.

**Executive Coaching: Strengthening the Inner Foundation of Leadership**

Executive coaching enables senior executives and leaders to create space not only for business results but also for themselves. Today's managers are under high responsibility, intense pace, and constant decision-making pressure. Under these conditions, what leaders need most is to create a space where they can stop, think, and hear their own inner voice.

**Executive coaching;**
• Supports leaders in making decisions with awareness,
• Looking at complex organizational challenges from a broader perspective,
• Clarifying their strengths,
• Demonstrating sustainable leadership while maintaining work-life balance.

The coaching process contributes to executives becoming not only better leaders but also more balanced, clearer, and more effective individuals.

**Team Coaching: Strengthening the Dynamics of Achieving Together**

Teams are not just individuals coming together. Every team has its own unique dynamics, communication language, and relationship structure. Team coaching makes these dynamics visible; supporting teams to think together, learn together, and produce together.

**Team coaching;**
• Strengthens communication,
• Creates an environment of trust,
• Clarifies common goal awareness,
• Develops a culture of taking responsibility and ownership.

High-performing teams consist not only of talented individuals but of people who trust each other, can communicate openly, and can unite around a common purpose. Team coaching builds this foundation.

Investing in coaching means investing not just in a development program, but in your most valuable asset: people. The growth of individuals and teams enables organizations to grow as well.

Are you ready to unleash the transformative power of coaching in your organization?`,
    },
    date: '2026-02-01',
    readTime: {
      tr: '3 dakika okuma',
      en: '3 min read',
    },
  },
  'cct-core-coaching-training': {
    title: {
      tr: 'CCT | Core Coaching & Training',
      en: 'CCT | Core Coaching & Training',
    },
    subtitle: {
      tr: 'İnsan Odaklı Dönüşüm Yolculukları',
      en: 'Human-Centered Transformation Journeys',
    },
    image: '/images/blog/cct.png',
    content: {
      tr: `CCT, 2016 yılında Nurhan Yazganel tarafından; bireysel ve kurumsal gelişimi bütünsel yaklaşımlarla destekleyerek uzun vadeli değer üretmek amacıyla kurulmuştur. Kuruluşundan bu yana temel yaklaşımı nettir: Farkındalığı davranışa, potansiyeli kalıcı etkiye dönüştüren bütünsel gelişim modelleri tasarlamak.

"Bir kurumu ileriye taşıyan, sahip olduğu sistemler değil; o sistemlerin içinde çalışan insanlardır."

İş dünyası hızla değişirken, kurumların yalnızca sonuç üretmesi artık yeterli değildir. Geleceğe taşınan yapılar; insan kaynağını güçlendiren, liderlik kapasitesini geliştiren ve sürdürülebilir performans yaratan kurumlardır. Çünkü her birey ve her kurum, doğru sorular ve doğru destekle kendi potansiyelini ortaya çıkarma gücüne sahiptir.

CCT'de hiçbir program raftan inmez. İhtiyaç önce keşfedilir; program bu ihtiyaca göre özel olarak tasarlanır ve özgün yöntemlerle uygulanır. Çünkü her kurumun, her ekibin ve her bireyin dinamiği farklıdır. Bu nedenle CCT'de standart çözümler değil; yaşayan, dönüşen ve ihtiyaca göre şekillenen gelişim yolculukları vardır.

Her çalışmada amaç; yalnızca bilgi aktarmak değil, uygulanabilir çözümler, ölçülebilir sonuçlar ve davranışsal dönüşüm yaratmaktır. Başarıyı kısa vadeli kazanımlarla değil, kalıcı etkilerle tanımlarız. Öğrenilen bilginin hayata geçmesi, farkındalığın davranışa dönüşmesi ve bu dönüşümün sürdürülebilir hâle gelmesi esastır.

**Misyonumuz**

İnsanı ve sistemi birlikte okuyarak; eğitim, koçluk, mentorluk, danışmanlık ve fasilitasyonu tek bir bütünsel etki modelinde birleştiren, her kurum ve birey için özgün, hedefe yönelik ve kalıcı dönüşüm yaratan gelişim yolculukları tasarlamak.

**Bu yolculuklar;**
• Kurumun, takımın ve bireyin kendi dinamiklerinden beslenen,
• İhtiyaca göre şekillenen,
• Daha önce öngörülmemiş bakış açıları sunan,
• İnsan odaklı ve sürdürülebilir,
• Fark edilir, ölçülebilir ve kalıcı sonuçlar üreten yapılar üzerine inşa edilir.

"Gerçek dönüşüm, tek tip çözümlerle değil; doğru anda doğru yaklaşımla mümkündür."

Bugün pek çok yapı; eğitim, koçluk, mentorluk veya danışmanlığı ayrı ayrı sunar. CCT'yi farklı ve güçlü kılan, bu disiplinleri aynı anda görebilen, doğru yerde doğru şapkayı takabilen bütünsel bakış açısıdır.

Bu yaklaşımı mümkün kılan en önemli unsur ise, CCT'nin kurucusu Nurhan Yazganel'in disiplinli ve sahaya dayalı uzmanlığıdır. Eğitim, koçluk, mentorluk, danışmanlık ve fasilitasyonu yalnızca bilen değil; aynı anda okuyabilen ve entegre edebilen bu ustalık, CCT programlarının en ayırt edici gücüdür.`,
      en: `CCT was founded in 2016 by Nurhan Yazganel to create long-term value by supporting individual and organizational development with holistic approaches. Since its establishment, its fundamental approach has been clear: Designing holistic development models that transform awareness into behavior and potential into lasting impact.

"What moves an organization forward is not the systems it has, but the people working within those systems."

As the business world changes rapidly, it is no longer enough for organizations to just produce results. Structures that are carried into the future are organizations that strengthen human resources, develop leadership capacity, and create sustainable performance. Because every individual and every organization has the power to reveal their own potential with the right questions and the right support.

At CCT, no program comes off the shelf. The need is first discovered; the program is specially designed according to this need and implemented with unique methods. Because every organization, every team, and every individual has different dynamics. Therefore, at CCT there are no standard solutions; there are living, transforming development journeys that are shaped according to needs.

The aim in every project is not just to transfer knowledge, but to create applicable solutions, measurable results, and behavioral transformation. We define success not by short-term gains, but by lasting impacts. It is essential that learned knowledge is put into practice, awareness turns into behavior, and this transformation becomes sustainable.

**Our Mission**

By reading people and systems together; designing development journeys that combine training, coaching, mentoring, consulting, and facilitation in a single holistic impact model, creating unique, goal-oriented, and lasting transformation for every organization and individual.

**These journeys;**
• Are fed by the dynamics of the organization, team, and individual,
• Are shaped according to needs,
• Offer previously unforeseen perspectives,
• Are human-centered and sustainable,
• Are built on structures that produce noticeable, measurable, and lasting results.

"Real transformation is possible not with one-size-fits-all solutions, but with the right approach at the right time."

Today, many structures offer training, coaching, mentoring, or consulting separately. What makes CCT different and powerful is its holistic perspective that can see all these disciplines at once and wear the right hat in the right place.

The most important element that makes this approach possible is the disciplined and field-based expertise of CCT's founder, Nurhan Yazganel. This mastery that not only knows training, coaching, mentoring, consulting, and facilitation but can read and integrate them simultaneously is the most distinctive strength of CCT programs.`,
    },
    date: '2026-02-01',
    readTime: {
      tr: '2 dakika okuma',
      en: '2 min read',
    },
  },
  'nurhan-yazganel': {
    title: {
      tr: 'Nurhan Yazganel',
      en: 'Nurhan Yazganel',
    },
    subtitle: {
      tr: 'Kurucu | ICF Master Certified Coach (MCC) | Eğitmen | Keynote Speaker',
      en: 'Founder | ICF Master Certified Coach (MCC) | Trainer | Keynote Speaker',
    },
    image: '/images/blog/nurhan-yazganel-blog.png',
    content: {
      tr: `"Gerçek etki, insanı ve sistemi aynı anda okuyabildiğinizde ortaya çıkar."

Nurhan Yazganel, bireysel ve kurumsal gelişimi yalnızca performans artışı olarak değil; farkındalığı davranışa, potansiyeli kalıcı etkiye dönüştüren bütünsel bir dönüşüm süreci olarak ele alan bir gelişim lideridir. CCT'nin kurucusu olan Yazganel, aynı zamanda ICF (International Coaching Federation) tarafından verilen en üst seviye unvan olan Master Certified Coach (MCC) derecesine sahip sayılı profesyoneller arasındadır.

1996 yılında Deniz Harp Okulu'ndan mezun olan Nurhan Yazganel, Türkiye'nin ilk kadın muvazzaf deniz subayıdır. Bu öncü deneyim, liderlik yaklaşımının temel taşlarından biri olmuştur. Bilgisayar ve Kontrol Mühendisliği eğitiminin ardından İşletme, Uluslararası İlişkiler ve Kamu Yönetimi alanlarında yüksek lisans çalışmalarını tamamlamıştır. Deniz Kuvvetleri Komutanlığı bünyesinde 21 yıl boyunca farklı görevlerde bulunmuş; çok sayıda ekip ve sistemi yönetmiş, binbaşı rütbesiyle emekli olmuştur.

Bu çok disiplinli eğitim ve kariyer altyapısı, kariyerinin erken dönemlerinden itibaren insan ile sistem arasındaki ilişkiyi derinlemesine gözlemlemesine imkân tanımıştır. Edindiği bu deneyimler; bugün benimsediği koçluk ve liderlik yaklaşımına netlik, yapı kurma becerisi ve güçlü bir sorumluluk bilinci kazandıran sağlam bir arka plan oluşturur.

"Koçluk, insanın kendi gücünü hatırlamasına alan açmaktır."

Askerî kariyerinin ardından yönünü bilinçli bir şekilde insan gelişimine çeviren Yazganel, koçluk ve eğitim yolculuğuna derinlikli bir öğrenme süreciyle adım atmıştır. İkinci kariyerinin başlarında on yıl boyunca koçluğun yanı sıra liderlik, koçluk, iletişim, müşteri odaklılık, duygusal zekâ, zaman ve performans yönetimi başta olmak üzere 15'i aşkın farklı eğitim başlığında aktif olarak çalışmalar yürütmüştür.

Bu çeşitlilik, yalnızca sahada bulunmakla değil; her bir başlığın arkasındaki teoriye, vaka bilgisine, uygulamaya ve disiplinler arası bakışa hâkimiyetle mümkündür. Çünkü her eğitim başlığı, kendi içinde ayrı bir uzmanlık ve derinlik gerektirir. Bu ölçekte çok yönlü ve tutarlı bir eğitim portföyü, her eğitmenin ya da koçun kolaylıkla taşıyabileceği bir alan değildir.

Temel ve ileri düzey profesyonel koçluk eğitimlerinin yanı sıra; yönetici koçluğu, takım koçluğu, mentorluk ve fasilitasyon alanlarında çok sayıda uzmanlık programını tamamlamıştır. Bugüne kadar 8.000 saatin üzerinde, üst düzey yönetici, lider, takım ve performans koçluğu deneyimine sahiptir. 2016 yılında kendi koçluk ve eğitim şirketi Core Coaching & Training (CCT)'i kurarak profesyonel yolculuğunu bu alanda derinleştirmiştir.

Nurhan Yazganel yalnızca bireylerle çalışan bir koç değil; aynı zamanda koçlar yetiştiren, mentorluk yapan ve koçluk mesleğinin gelişimine katkı sunan bir gelişim lideridir. Türkiye'nin prestijli koçluk okullarından biri olan PDRICMA (PDR International Coaching and Mentoring Academy)'nin 2020 yılında kuruluşuna liderlik etmiş; 2020–2026 yılları arasında Fakülte Başkanlığı görevini yürütmüştür. Bu yönüyle koçluğu bireysel bir uzmanlık alanının ötesine taşıyarak, mesleğin sürdürülebilir gelişimine katkı sunan nadir isimlerden biri olarak öne çıkmaktadır. Günümüzde kendi kurduğu CCT şirketi üzerinden çalışmalarına devam etmektedir.

"Koçluk benim için bir yöntem değil; bir yaşam şekli, bir bakış açısıdır."

Kurumsal eğitim ve liderlik gelişimi alanında da derin bir deneyime sahip olan Yazganel; 12 yılı aşkın süredir, ulusal ve uluslararası ölçekte 300'ün üzerinde kurumla çalışmıştır. Sanayi, üretim, enerji, finans ve otomotiv gibi yüksek yapı ve sistem gerektiren sektörlerden; turizm, perakende ve FMCG gibi insan yoğun ve yüksek tempolu yapılara kadar uzanan geniş bir yelpazede edindiği deneyim, ona ihtiyacı doğru okuma, doğru soruları sorma ve yüksek etki yaratan gelişim çözümleri tasarlama konusunda güçlü bir perspektif kazandırmıştır.

Aynı zamanda keynote speaker olarak; liderlik, dönüşüm, farkındalık ve insan potansiyeli temalı konuşmalarıyla pek çok yerli ve yabancı kuruluş tarafından davet edilmektedir. Kendi yaşam yolculuğu, liderlik deneyimi ve insan gelişimine bakışından beslenen anlatımı, katılımcılar üzerinde ilham verici ve dönüştürücü bir etki yaratır.

CCT çatısı altında geliştirdiği yaklaşım; eğitim, koçluk, mentorluk, danışmanlık ve fasilitasyonu ayrı ayrı değil, aynı anda okuyabilen bütünsel bir ustalığa dayanır. Bu sayede Nurhan Yazganel liderliğinde yürütülen çalışmalar; hazır içeriklerden değil, ihtiyacın kendisinden doğan, hedefe yönelik ve nokta atışı etki yaratan gelişim yolculukları hâline gelir.

Bireylerin tek ve eşsiz olduğuna inanan, hayata bütünsel bir perspektiften bakan Yazganel; insanların kendi potansiyellerini keşfetmeleri, fark yaratmaları ve yaşamlarının lideri olmaları için yanlarında olmayı misyon edinmiştir. Hayata bakışını en iyi tanımlayan kelimeler ise Tutku, Merak ve Sevgi'dir.`,
      en: `"True impact emerges when you can read both the person and the system at the same time."

Nurhan Yazganel is a development leader who approaches individual and organizational development not just as performance improvement, but as a holistic transformation process that turns awareness into behavior and potential into lasting impact. As the founder of CCT, Yazganel is also among the few professionals holding the Master Certified Coach (MCC) degree, the highest credential awarded by the International Coaching Federation (ICF).

Graduating from the Naval Academy in 1996, Nurhan Yazganel is Turkey's first female commissioned naval officer. This pioneering experience has become one of the cornerstones of her leadership approach. After her education in Computer and Control Engineering, she completed master's studies in Business Administration, International Relations, and Public Administration. She served in various positions within the Turkish Naval Forces for 21 years, managing numerous teams and systems, and retired with the rank of Major.

This multidisciplinary education and career background has allowed her to deeply observe the relationship between people and systems from the early stages of her career. These experiences form a solid foundation that brings clarity, structure-building skills, and a strong sense of responsibility to the coaching and leadership approach she embraces today.

"Coaching is creating space for people to remember their own power."

After her military career, Yazganel consciously turned toward human development, stepping into her coaching and training journey with a deep learning process. In the early years of her second career, she actively worked for ten years in over 15 different training topics, including leadership, coaching, communication, customer focus, emotional intelligence, and time and performance management, alongside coaching.

This diversity is possible not just by being in the field, but through mastery of the theory, case knowledge, application, and interdisciplinary perspective behind each topic. Because each training topic requires its own expertise and depth. A versatile and consistent training portfolio at this scale is not an area that every trainer or coach can easily carry.

In addition to basic and advanced professional coaching training, she has completed numerous specialization programs in executive coaching, team coaching, mentoring, and facilitation. To date, she has over 8,000 hours of experience in executive, leader, team, and performance coaching. In 2016, she deepened her professional journey in this field by founding her own coaching and training company, Core Coaching & Training (CCT).

Nurhan Yazganel is not just a coach who works with individuals; she is also a development leader who trains coaches, provides mentoring, and contributes to the development of the coaching profession. She led the establishment of PDRICMA (PDR International Coaching and Mentoring Academy), one of Turkey's prestigious coaching schools, in 2020, and served as Dean of Faculty between 2020-2026. In this respect, she stands out as one of the rare names who takes coaching beyond an individual area of expertise and contributes to the sustainable development of the profession. Today, she continues her work through CCT, the company she founded.

"For me, coaching is not a method; it's a way of life, a perspective."

With deep experience in corporate training and leadership development, Yazganel has worked with over 300 organizations nationally and internationally for more than 12 years. Her experience spanning a wide range from sectors requiring high structure and systems such as industry, manufacturing, energy, finance, and automotive, to people-intensive and fast-paced structures such as tourism, retail, and FMCG, has given her a strong perspective in reading needs correctly, asking the right questions, and designing high-impact development solutions.

As a keynote speaker, she is invited by many domestic and foreign organizations for her talks on leadership, transformation, awareness, and human potential. Her narrative, fed by her own life journey, leadership experience, and perspective on human development, creates an inspiring and transformative effect on participants.

The approach she developed under the CCT umbrella is based on a holistic mastery that can read training, coaching, mentoring, consulting, and facilitation simultaneously rather than separately. Thus, the work conducted under Nurhan Yazganel's leadership becomes development journeys that are born from the need itself, goal-oriented, and create pinpoint impact, rather than ready-made content.

Believing that individuals are unique and special, looking at life from a holistic perspective, Yazganel has made it her mission to be alongside people as they discover their own potential, make a difference, and become leaders of their own lives. The words that best describe her outlook on life are Passion, Curiosity, and Love.`,
    },
    date: '2026-02-01',
    readTime: {
      tr: '3 dakika okuma',
      en: '3 min read',
    },
  },
  'egitim-destekli-takima-kocluk': {
    title: {
      tr: 'Eğitim Destekli Takıma Koçluk',
      en: 'Training-Supported Team Coaching',
    },
    subtitle: {
      tr: 'CCT\'ye Özgü Bütünsel Dönüşüm Modeli',
      en: 'CCT\'s Unique Holistic Transformation Model',
    },
    image: '/images/blog/egitim-destekli-takima-kocluk.jpg',
    content: {
      tr: `"Gerçek dönüşüm, bilgiyi vermekle değil; o bilginin hayatta karşılık bulmasıyla mümkündür."

CCT'yi farklı ve güçlü kılan en önemli yaklaşımlardan biri, eğitim ile takıma koçluğu aynı gelişim yolculuğu içinde, entegre bir modelle sunmasıdır. Bu yaklaşım, CCT tarafından geliştirilmiş ve yalnızca CCT'de uygulanan özgün bir etki modelidir.

Pek çok kurumda eğitim ve koçluk birbirinden bağımsız yürütülür. Eğitimler bilgi üretir; koçluk ise davranışa odaklanır. Ancak bu iki alan birbirinden kopuk ilerlediğinde, öğrenilen bilginin sahaya ve günlük iş yapış biçimlerine yansıması sınırlı kalır.

CCT'nin Eğitim Destekli Takıma Koçluk modeli, bu kopukluğu ortadan kaldırır.

**Bu özel programda;**
• Takımın ihtiyacına göre hedefli ve nokta atışı eğitim içerikleri tasarlanır,
• Eğitimlerde edinilen bilgi, takıma koçluk seanslarıyla davranışa dönüştürülür,
• Öğrenme süreci, takımın gerçek vakaları ve günlük iş dinamikleri üzerinden ilerler.

Bu sayede bilgi, soyut bir kazanım olarak kalmaz; takımın karar alma, iletişim, iş birliği ve performans pratiklerine doğrudan yansır.

**Bu Model Ne Sağlar?**

**Eğitim Destekli Takıma Koçluk;**
• Öğrenilen bilginin hayata geçmesini sağlar,
• Takım içinde ortak dil ve bakış açısı oluşturur,
• Davranış değişimini hızlandırır ve kalıcı hâle getirir,
• Takım performansını yalnızca sonuçlar üzerinden değil, ilişki ve süreçler üzerinden de güçlendirir.

Bu yaklaşımda eğitim, koçluğu besler; koçluk ise eğitimi yaşayan bir deneyime dönüştürür. Böylece gelişim, tek seferlik bir müdahale değil; ölçülebilir, sürdürülebilir ve fark edilir bir dönüşüm yolculuğu hâline gelir.

**Neden Sadece CCT'de?**

**Çünkü bu model;**
• Eğitimi, koçluğu ve fasilitasyonu aynı anda okuyabilen,
• Takım dinamiklerini ve kurumsal sistemi birlikte ele alan,
• Sahaya ve gerçek ihtiyaçlara dayalı çok disiplinli bir ustalık gerektirir.

CCT'de yürütülen Eğitim Destekli Takıma Koçluk programları, raftan inen içeriklerle değil; takımın ihtiyacından doğan, yaşayan ve dönüşen süreçler olarak tasarlanır.`,
      en: `"True transformation is possible not by giving knowledge, but by that knowledge finding its place in life."

One of the most important approaches that makes CCT different and powerful is offering training and team coaching within the same development journey as an integrated model. This approach is a unique impact model developed by CCT and applied only at CCT.

In many organizations, training and coaching are conducted independently of each other. Training produces knowledge; coaching focuses on behavior. However, when these two areas progress disconnected from each other, the reflection of learned knowledge to the field and daily work practices remains limited.

CCT's Training-Supported Team Coaching model eliminates this disconnect.

**In this special program;**
• Targeted and precise training content is designed according to the team's needs,
• Knowledge gained in training is transformed into behavior through team coaching sessions,
• The learning process proceeds through the team's real cases and daily work dynamics.

Thus, knowledge does not remain as an abstract gain; it directly reflects on the team's decision-making, communication, collaboration, and performance practices.

**What Does This Model Provide?**

**Training-Supported Team Coaching;**
• Ensures that learned knowledge is put into practice,
• Creates a common language and perspective within the team,
• Accelerates behavior change and makes it permanent,
• Strengthens team performance not only through results but also through relationships and processes.

In this approach, training feeds coaching; coaching transforms training into a living experience. Thus, development becomes not a one-time intervention, but a measurable, sustainable, and noticeable transformation journey.

**Why Only at CCT?**

**Because this model;**
• Requires multidisciplinary mastery that can read training, coaching, and facilitation simultaneously,
• Addresses team dynamics and organizational systems together,
• Is based on the field and real needs.

Training-Supported Team Coaching programs conducted at CCT are designed not with off-the-shelf content, but as living and transforming processes born from the team's needs.`,
    },
    date: '2026-02-01',
    readTime: {
      tr: '2 dakika okuma',
      en: '2 min read',
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

  // Helper function to render content with markdown-like formatting
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph: string, index: number) => {
      // Check if it's a header followed by a list (e.g., **Header**\n• item1\n• item2)
      if (paragraph.startsWith('**') && paragraph.includes('\n•')) {
        const lines = paragraph.split('\n');
        const headerLine = lines[0];
        const headerText = headerLine.replace(/\*\*/g, '');
        const items = lines.filter(line => line.startsWith('•'));
        
        return (
          <div key={index}>
            <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">
              {headerText}
            </h3>
            <ul className="list-none space-y-2 my-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  <span>{item.slice(1).trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
      // Check if it's a bold header line only
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        const text = paragraph.slice(2, -2);
        return (
          <h3 key={index} className="text-xl font-bold text-neutral-900 mt-8 mb-4">
            {text}
          </h3>
        );
      }
      
      // Check if it's a list only
      if (paragraph.includes('\n•') || paragraph.startsWith('•')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('•'));
        return (
          <ul key={index} className="list-none space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <span>{item.slice(1).trim()}</span>
              </li>
            ))}
          </ul>
        );
      }
      
      // Check for inline bold text
      if (paragraph.includes('**')) {
        const parts = paragraph.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={index}>
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="font-semibold text-neutral-900">{part}</strong> : part
            )}
          </p>
        );
      }
      
      return <p key={index}>{paragraph}</p>;
    });
  };

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t('backToBlog')}
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-6">
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-4">
              {post.title[locale as 'tr' | 'en']}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl md:text-2xl text-primary-600 font-medium">
                {post.subtitle[locale as 'tr' | 'en']}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 -mx-4 sm:mx-0">
              <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title[locale as 'tr' | 'en']}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-neutral-700 leading-relaxed space-y-6 text-lg">
              {renderContent(post.content[locale as 'tr' | 'en'])}
            </div>
          </div>

          {/* Author/CTA Section */}
          <div className="mt-16 pt-10 border-t border-neutral-200">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-neutral-900 mb-2">
                    {locale === 'tr' ? 'Dönüşüm yolculuğunuza başlamak ister misiniz?' : 'Ready to start your transformation journey?'}
                  </p>
                  <p className="text-neutral-600">
                    {locale === 'tr' 
                      ? 'Profesyonel koçluk ve eğitim çözümleriyle potansiyelinizi keşfedin.' 
                      : 'Discover your potential with professional coaching and training solutions.'}
                  </p>
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
                >
                  {locale === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
