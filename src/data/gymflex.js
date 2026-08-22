const img = (n, ext = 'jpg') => `/images/projects/gymflex/photo${n}.${ext}`

export const gymflexDetail = {
  technologies: [
    'React 18',
    'Spring Boot 3.4',
    'Java 17',
    'MySQL',
    'Material UI',
    'Ant Design',
    'Spring Security',
    'Gemini AI',
    'ApexCharts',
    'Framer Motion',
  ],
  pages: [
    {
      title: { tr: 'Proje Özeti & Mimari', en: 'Overview & Architecture' },
      sections: [
        {
          heading: { tr: '1. Proje Özeti', en: '1. Project Summary' },
          body: {
            tr: 'GymFlex, spor salonu işletmelerinin üye, antrenör ve yönetici süreçlerini tek platformda yönetmesini sağlayan full-stack bir spor salonu yönetim sistemidir. Üyelik satışı, kişisel antrenör randevuları, grup dersleri, salon içi market, ilerleme takibi, sosyal forum/arkadaşlık/sohbet ve finansal raporlama gibi uçtan uca iş akışlarını kapsar.',
            en: 'GymFlex is a full-stack gym management system that enables gym businesses to manage member, trainer, and administrator processes on a single platform. It covers end-to-end workflows such as membership sales, personal trainer appointments, group classes, in-gym market, progress tracking, social forum/friendship/chat, and financial reporting.',
          },
          images: [img(1)],
        },
        {
          heading: { tr: '2. Teknoloji Yığını', en: '2. Tech Stack' },
          bullets: {
            tr: [
              'Frontend: React 18, React Router, Material UI, Ant Design, Axios, Framer Motion, ApexCharts, jsPDF, Google Gemini AI',
              'Backend: Java 17, Spring Boot 3.4, Spring Data JPA, Spring Security (BCrypt), Spring Mail',
              'Veritabanı: MySQL',
              'Diğer: Gmail SMTP (şifre sıfırlama), yerel dosya yükleme, Express tabanlı Gemini proxy',
            ],
            en: [
              'Frontend: React 18, React Router, Material UI, Ant Design, Axios, Framer Motion, ApexCharts, jsPDF, Google Gemini AI',
              'Backend: Java 17, Spring Boot 3.4, Spring Data JPA, Spring Security (BCrypt), Spring Mail',
              'Database: MySQL',
              'Other: Gmail SMTP (password reset), local file upload, Express-based Gemini proxy',
            ],
          },
        },
        {
          heading: { tr: '3. Mimari ve Roller', en: '3. Architecture & Roles' },
          body: {
            tr: 'Sistem üç rol üzerine kurulu; giriş sonrası kullanıcı rolüne göre yönlendirilir:',
            en: 'The system is built around three roles; after login, users are redirected based on their role:',
          },
          bullets: {
            tr: [
              'Admin (/admin): Üyeler, fiyatlar, market, personel, giderler, finans, iletişim',
              'Antrenör (/trainer): Danışanlar, program, antrenmanlar, raporlar',
              'Üye (/member): Üyelik, PT, dersler, market, sosyal, ilerleme',
            ],
            en: [
              'Admin (/admin): Members, pricing, market, staff, expenses, finance, communication',
              'Trainer (/trainer): Clients, programs, workouts, reports',
              'Member (/member): Membership, PT, classes, market, social, progress',
            ],
          },
          images: [img(2), img(3), img(4)],
        },
      ],
    },
    {
      title: { tr: 'Pazarlama & Kimlik Doğrulama', en: 'Marketing & Authentication' },
      sections: [
        {
          heading: { tr: '4. Genel / Pazarlama Sitesi', en: '4. Public / Marketing Site' },
          subsections: [
            {
              heading: { tr: '4.1 Landing & Hizmetler', en: '4.1 Landing & Services' },
              body: {
                tr: 'Ziyaretçiler için modern bir pazarlama sitesi: hero carousel, “neden biz”, müşteri yorumları, hizmet kartları, dark mode ve CTA ile üyelik akışına yönlendirme.',
                en: 'A modern marketing site for visitors: hero carousel, “why us”, customer reviews, service cards, dark mode, and CTAs that lead into the membership flow.',
              },
              images: [img(5), img(6, 'png'), img(7, 'png')],
            },
            {
              heading: { tr: '4.2 İletişim & Yasal', en: '4.2 Contact & Legal' },
              body: {
                tr: 'İletişim formu yönetici paneline düşer; gizlilik ve kullanım şartları sayfaları vardır.',
                en: 'Contact form submissions land in the admin panel; privacy and terms of use pages are included.',
              },
              images: [img(8)],
            },
          ],
        },
        {
          heading: { tr: '5. Kimlik Doğrulama ve Üyelik Kaydı', en: '5. Authentication & Membership Registration' },
          subsections: [
            {
              heading: { tr: '5.1 Çok Adımlı Kayıt', en: '5.1 Multi-step Registration' },
              body: {
                tr: 'Yeni üye kaydı tek form değil: profil bilgileri → üyelik planı/süre seçimi → kart ödeme adımı. Süreye göre indirimler (3/6/12 ay) ve plan avantajları (misafir hakkı, ücretsiz PT kotası, grup dersi hakkı, market indirimi) seçime bağlanır.',
                en: 'New member registration is multi-step: profile info → membership plan/duration → card payment. Duration-based discounts (3/6/12 months) and plan benefits (guest passes, free PT quota, group class rights, market discount) are tied to the selection.',
              },
              images: [img(9)],
            },
            {
              heading: { tr: '5.2 Giriş / Şifre Sıfırlama', en: '5.2 Login / Password Reset' },
              body: {
                tr: 'E-posta + şifre ile giriş; unutulan şifre için e-posta ile token’lı sıfırlama linki (SMTP).',
                en: 'Login with email + password; forgotten passwords use a tokenized reset link sent by email (SMTP).',
              },
              images: [img(10)],
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Admin Paneli', en: 'Admin Panel' },
      sections: [
        {
          heading: { tr: '6. Admin Paneli', en: '6. Admin Panel' },
          subsections: [
            {
              heading: { tr: '6.1 Dashboard', en: '6.1 Dashboard' },
              body: {
                tr: 'Yönetici için tüm panellere kısayol sunan kontrol merkezi.',
                en: 'A control center for administrators with shortcuts to every panel.',
              },
              images: [img(11)],
            },
            {
              heading: { tr: '6.2 Üye Yönetimi', en: '6.2 Member Management' },
              body: {
                tr: 'Üye listesi, profil düzenleme, kimlik bilgisi doğrulama, admin tarafından şifre sıfırlama.',
                en: 'Member list, profile editing, identity verification, and admin-initiated password reset.',
              },
              images: [img(12)],
            },
            {
              heading: { tr: '6.3 Üyelik & Fiyat Yönetimi', en: '6.3 Membership & Pricing' },
              body: {
                tr: 'Üyelik planları ve genel hizmet fiyatlarının satır içi düzenlenmesi.',
                en: 'Inline editing of membership plans and general service prices.',
              },
              images: [img(13)],
            },
            {
              heading: { tr: '6.4 Market Envanteri', en: '6.4 Market Inventory' },
              body: {
                tr: 'Ürün CRUD, kategori, görsel yükleme; satışı olan ürünlerin silinmesini engelleyen iş kuralı.',
                en: 'Product CRUD, categories, image upload; business rule that blocks deleting products with sales history.',
              },
              images: [img(14)],
            },
            {
              heading: { tr: '6.5 Personel (Antrenör) Yönetimi', en: '6.5 Staff (Trainer) Management' },
              body: {
                tr: 'Antrenör CRUD, maaş gösterimi, toplu maaş ödeme, vardiya/çalışma takvimi.',
                en: 'Trainer CRUD, salary display, bulk salary payment, and shift/work schedule.',
              },
              images: [img(15)],
            },
            {
              heading: { tr: '6.6 Gider Takibi', en: '6.6 Expense Tracking' },
              body: {
                tr: 'Kategorili gider CRUD, tarih aralığı filtreleme.',
                en: 'Categorized expense CRUD with date-range filtering.',
              },
              images: [img(16)],
            },
            {
              heading: { tr: '6.7 Finansal Raporlama', en: '6.7 Financial Reporting' },
              body: {
                tr: 'Günlük / haftalık / aylık gelir-gider özeti; gelir kaynakları (üyelik, yenileme, market, PT paketi, grup dersi); PDF export.',
                en: 'Daily / weekly / monthly income-expense summaries; revenue sources (membership, renewals, market, PT packages, group classes); PDF export.',
              },
              images: [img(17)],
            },
            {
              heading: { tr: '6.8 İletişim Kutusu', en: '6.8 Inbox' },
              body: {
                tr: 'Gelen formlar; okundu/okunmadı, arama, filtre, sayfalama.',
                en: 'Incoming forms with read/unread status, search, filters, and pagination.',
              },
              images: [img(18)],
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Antrenör Paneli', en: 'Trainer Panel' },
      sections: [
        {
          heading: { tr: '7. Antrenör Paneli', en: '7. Trainer Panel' },
          subsections: [
            {
              heading: { tr: '7.1 Dashboard', en: '7.1 Dashboard' },
              body: {
                tr: 'İstatistikler, yaklaşan seanslar, puan dağılımı ve son değerlendirmeler.',
                en: 'Statistics, upcoming sessions, rating distribution, and latest reviews.',
              },
              images: [img(19)],
            },
            {
              heading: { tr: '7.2 Danışan & Talep Yönetimi', en: '7.2 Client & Request Management' },
              body: {
                tr: 'Danışan listesi; PT kayıt / seans / erteleme taleplerini onayla-reddet; danışan detayında profil, vücut ve egzersiz ilerlemesi sekmeleri.',
                en: 'Client list; approve/reject PT registration, session, and reschedule requests; client detail tabs for profile, body metrics, and exercise progress.',
              },
              images: [img(20)],
            },
            {
              heading: { tr: '7.3 Program / Takvim', en: '7.3 Program / Calendar' },
              body: {
                tr: 'Bireysel PT randevuları + grup dersi seansları; kapasite ve kayıt yönetimi.',
                en: 'Individual PT appointments + group class sessions; capacity and registration management.',
              },
              images: [img(21)],
            },
            {
              heading: { tr: '7.4 Antrenman Kütüphanesi', en: '7.4 Workout Library' },
              body: {
                tr: 'Bireysel ve grup antrenman CRUD; kategori/seviye, egzersizler, görsel yükleme.',
                en: 'Individual and group workout CRUD; category/level, exercises, and image upload.',
              },
              images: [img(22)],
            },
            {
              heading: { tr: '7.5 İlerleme Raporları', en: '7.5 Progress Reports' },
              body: {
                tr: 'ApexCharts ile kilo, performans radar, katılım, kalori vb. raporlar; danışan/zaman filtresi.',
                en: 'ApexCharts reports for weight, performance radar, attendance, calories, and more; client/time filters.',
              },
              images: [img(23)],
            },
            {
              heading: { tr: '7.6 Ayarlar', en: '7.6 Settings' },
              body: {
                tr: 'Antrenör profil ve tercih güncelleme.',
                en: 'Trainer profile and preference updates.',
              },
              images: [img(24)],
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Üye Paneli', en: 'Member Panel' },
      sections: [
        {
          heading: { tr: '8. Üye Paneli', en: '8. Member Panel' },
          subsections: [
            {
              heading: { tr: '8.1 Üye Dashboard', en: '8.1 Member Dashboard' },
              body: {
                tr: 'Widget’lar, salon check-in / check-out, katılım geçmişi, yaklaşan seanslar, profil fotoğrafı crop/upload, şifre değiştirme.',
                en: 'Widgets, gym check-in/check-out, attendance history, upcoming sessions, profile photo crop/upload, and password change.',
              },
              images: [img(25)],
            },
            {
              heading: { tr: '8.2 Profil & Üyelik Durumu', en: '8.2 Profile & Membership Status' },
              body: {
                tr: 'Profil düzenleme; plan durumu, avantajlar, yenileme + ödeme formu.',
                en: 'Profile editing; plan status, benefits, renewal + payment form.',
              },
              images: [img(26), img(27)],
            },
            {
              heading: { tr: '8.3 Haftalık Antrenman Planı', en: '8.3 Weekly Training Plan' },
              body: {
                tr: 'Güne göre egzersiz/antrenman atamalı haftalık plan.',
                en: 'Weekly plan with exercises/workouts assigned by day.',
              },
              images: [img(28)],
            },
            {
              heading: { tr: '8.4 Haftalık Takvim', en: '8.4 Weekly Calendar' },
              body: {
                tr: 'PT + grup derslerinin birleşik takvim görünümü.',
                en: 'Unified calendar view of PT and group classes.',
              },
              images: [img(29)],
            },
            {
              heading: { tr: '8.5 Kişisel Antrenör Bulma & Randevu', en: '8.5 Find a Personal Trainer & Book' },
              body: {
                tr: 'Antrenör listeleme, seans satın alma/rezervasyon, erteleme, puanlama, ücretsiz aylık PT kotası bilgisi.',
                en: 'Trainer listing, session purchase/booking, rescheduling, ratings, and free monthly PT quota info.',
              },
              images: [img(30)],
            },
            {
              heading: { tr: '8.6 Grup Ders Programları', en: '8.6 Group Class Schedules' },
              body: {
                tr: 'Grup derslerine göz atma, kayıt; gerektiğinde ödeme modalı.',
                en: 'Browse and register for group classes; payment modal when required.',
              },
              images: [img(31)],
            },
            {
              heading: { tr: '8.7 Kişisel Antrenman Programları', en: '8.7 Personal Training Programs' },
              body: {
                tr: 'Üyenin kendi workout’larını oluşturması, egzersiz eklemesi, haftalık plana bağlama.',
                en: 'Members can create their own workouts, add exercises, and attach them to the weekly plan.',
              },
              images: [img(32)],
            },
            {
              heading: { tr: '8.8 İlerleme Takibi', en: '8.8 Progress Tracking' },
              body: {
                tr: 'Vücut hedefleri/istatistikleri + egzersiz bazlı hedef ve log kayıtları (API destekli).',
                en: 'Body goals/statistics plus exercise-based goals and logs (API-backed).',
              },
              images: [img(33)],
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Market, Sosyal & Teknik', en: 'Market, Social & Technical' },
      sections: [
        {
          heading: { tr: '9. Market (E-ticaret)', en: '9. Market (E-commerce)' },
          body: {
            tr: 'Üyelere özel salon marketi: kategori/arama, sepet, stok kontrolü, üyelik indirimi, checkout + ödeme.',
            en: 'Member-exclusive gym store: categories/search, cart, stock control, membership discount, checkout + payment.',
          },
          images: [img(34)],
        },
        {
          heading: { tr: '10. Sosyal Özellikler', en: '10. Social Features' },
          subsections: [
            {
              heading: { tr: '10.1 Forum', en: '10.1 Forum' },
              body: {
                tr: 'Konular, hot threads, top contributors, konu oluşturma; konu içinde post CRUD ve ~10 sn’lik canlı yenileme.',
                en: 'Topics, hot threads, top contributors, topic creation; in-topic post CRUD with ~10s live refresh.',
              },
              images: [img(35), img(36)],
            },
            {
              heading: { tr: '10.2 Arkadaşlık', en: '10.2 Friendship' },
              body: {
                tr: 'Kullanıcı arama, istek gönder/kabul/red/iptal, arkadaş listesi.',
                en: 'User search, send/accept/reject/cancel friend requests, friends list.',
              },
              images: [img(37)],
            },
            {
              heading: { tr: '10.3 Sohbet & Bildirimler', en: '10.3 Chat & Notifications' },
              body: {
                tr: 'Floating chat balonu ile 1:1 mesajlaşma (okundu bilgisi, okunmamış sayısı); bildirim balonu (forum, arkadaşlık, antrenör talepleri) ve deep-link.',
                en: 'Floating chat bubble for 1:1 messaging (read receipts, unread count); notification bubble (forum, friendship, trainer requests) with deep-links.',
              },
              images: [img(38)],
            },
          ],
        },
        {
          heading: { tr: '11. AI Asistan', en: '11. AI Assistant' },
          body: {
            tr: 'Landing ve uygulama genelinde Gemini tabanlı fitness asistanı (Express proxy üzerinden); antrenman/beslenme sorularına yardımcı olur.',
            en: 'Gemini-based fitness assistant on the landing page and throughout the app (via Express proxy); helps with training and nutrition questions.',
          },
          images: [img(39)],
        },
        {
          heading: { tr: '12. Backend / Teknik Öne Çıkanlar', en: '12. Backend / Technical Highlights' },
          bullets: {
            tr: [
              '~35 REST controller, ~48 JPA entity; katmanlı mimari (controller → service → repository)',
              'Üyelik plan avantajları: misafir hakkı, ücretsiz PT kotası, grup dersi, market indirimi',
              'PT paket satışı (adet indirimi), ücretsiz PT tüketimi, seans/erteleme onay akışları',
              'Market checkout → fatura + satır kalemi satış; satılmış ürün silme koruması',
              'Finans paneli: üyelik, yenileme, market, PT, grup dersi gelir toplama + PDF export',
              'Forum, arkadaşlık, sohbet ve bildirimler (HTTP polling)',
              'Salon check-in/out ve katılım takibi',
              'Görsel yükleme (multipart + base64), profil fotoğrafı crop',
              'Şifre sıfırlama e-postaları (Gmail SMTP)',
            ],
            en: [
              '~35 REST controllers, ~48 JPA entities; layered architecture (controller → service → repository)',
              'Membership plan benefits: guest passes, free PT quota, group classes, market discounts',
              'PT package sales (volume discounts), free PT consumption, session/reschedule approval flows',
              'Market checkout → invoice + line-item sales; protected deletion of sold products',
              'Finance dashboard aggregating membership, renewals, market, PT, and group class revenue + PDF export',
              'Forum, friendship, chat, and notifications (HTTP polling)',
              'Gym check-in/out and attendance tracking',
              'Image uploads (multipart + base64), profile photo cropping',
              'Password reset emails (Gmail SMTP)',
            ],
          },
        },
      ],
    },
  ],
}
