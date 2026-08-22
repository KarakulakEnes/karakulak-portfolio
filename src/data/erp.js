const img = (n) => `/images/projects/erp/erp${n}.jpg`

export const erpDetail = {
  technologies: [
    'Java 17',
    'Spring Boot 3.5',
    'Spring Security / JWT',
    'MongoDB Atlas',
    'React 18',
    'Vite',
    'Tailwind CSS',
    'Docker',
  ],
  pages: [
    {
      title: { tr: 'Özet, Amaç & Teknoloji', en: 'Overview, Purpose & Tech' },
      sections: [
        {
          heading: {
            tr: 'Yılmazlar Çelik ERP',
            en: 'Yılmazlar Çelik ERP',
          },
          body: {
            tr: 'Çelik dağıtım işletmeleri için tasarlanmış full-stack bir ERP sistemidir. Stok yönetimi, sipariş, kesim süreçleri ve envanter analizini tek platformda birleştirir. Çelik çubuk ve boru satışı yapan işletmelerin günlük operasyonlarını dijitalleştirmek için geliştirilmiştir. Şube bazlı stok takibi, şubeler arası sipariş akışı, kesim başına fire hesabı, alım/satış raporları ve EOQ, ROP, ABC gibi envanter metriklerini kapsar.',
            en: 'A full-stack ERP system designed for steel distribution businesses. It integrates stock management, ordering, cutting processes, and inventory analysis into one platform. Built to digitize daily operations for companies selling steel bars and hollow rods. It covers branch-based stock monitoring, inter-branch order flows, scrap calculation per cut, purchase/sales reports, and inventory metrics such as EOQ, ROP, and ABC classification.',
          },
          images: [img(1)],
        },
        {
          heading: { tr: 'Problem ve amaç', en: 'Problem & purpose' },
          body: {
            tr: 'Çelik ticareti klasik e-ticaretten farklıdır. Ürünler adet yerine çap, et kalınlığı, boy ve ağırlıkla yönetilir. Boru kesiminde fire oluşur; maliyetler ağırlığa göre hesaplanır. Bu proje şu ihtiyaçlara yanıt verir:',
            en: 'Steel trade differs from classic e-commerce. Products are managed by diameter, wall thickness, length, and weight rather than unit count alone. Cutting hollow bars creates scrap, and costs are weight-based. This project addresses:',
          },
          bullets: {
            tr: [
              'Şube bazlı çelik stoğunu gerçek ölçü birimleriyle tutmak',
              'Şubeler arası sipariş akışını çok adımlı onay süreciyle yönetmek',
              'Boru ürünlerde fire/kesim hesabını otomatikleştirmek',
              'Alım/satış istatistiklerini tarih aralığına göre raporlamak',
              'EOQ, yeniden sipariş noktası (ROP) ve ABC sınıflandırmasıyla stok kararlarını desteklemek',
              'Admin ve şube kullanıcıları için rol tabanlı yetkilendirme',
            ],
            en: [
              'Keep branch-based steel stock in real measurement units',
              'Manage inter-branch order flow with a multi-step confirmation process',
              'Automate scrap/waste calculation for hollow products',
              'Report purchase/sales statistics by date range',
              'Support stock decisions with EOQ, reorder point (ROP), and ABC classification',
              'Role-based authorization for Admin and Branch users',
            ],
          },
        },
        {
          heading: { tr: 'Teknoloji yığını', en: 'Technology stack' },
          subsections: [
            {
              heading: { tr: 'Backend', en: 'Backend' },
              bullets: {
                tr: [
                  'Java 17',
                  'Spring Boot 3.5 — REST API, servis katmanı, güvenlik',
                  'Spring Security — JWT ile stateless kimlik doğrulama',
                  'Spring Data MongoDB — doküman tabanlı veri modeli',
                  'JJWT 0.12 — HS256 imzalı token',
                  'BCrypt — parola hash’leme',
                  'Maven — build',
                  'Docker — multi-stage image, docker-compose',
                ],
                en: [
                  'Java 17',
                  'Spring Boot 3.5 — REST API, service layer, security',
                  'Spring Security — JWT for stateless authentication',
                  'Spring Data MongoDB — document-based data model',
                  'JJWT 0.12 — HS256 signed tokens',
                  'BCrypt — password hashing',
                  'Maven — build',
                  'Docker — multi-stage image, docker-compose',
                ],
              },
            },
            {
              heading: { tr: 'Frontend', en: 'Frontend' },
              bullets: {
                tr: [
                  'React 18 + Vite',
                  'React Router 6 — korumalı rotalar',
                  'Axios — JWT interceptor’lı API istemcisi',
                  'Tailwind CSS — responsive arayüz',
                  'React Toastify & React Icons',
                  'Context API — auth ve bildirim state yönetimi',
                ],
                en: [
                  'React 18 + Vite',
                  'React Router 6 — protected routes',
                  'Axios — API client with JWT interceptor',
                  'Tailwind CSS — responsive UI',
                  'React Toastify & React Icons',
                  'Context API — auth and notification state',
                ],
              },
            },
            {
              heading: { tr: 'Veri & altyapı', en: 'Data & infrastructure' },
              bullets: {
                tr: [
                  'MongoDB Atlas',
                  'Frontend: Vercel',
                  'Backend: Railway / Docker-ready yapı',
                ],
                en: [
                  'MongoDB Atlas',
                  'Frontend: Vercel',
                  'Backend: Railway / Docker-ready setup',
                ],
              },
            },
          ],
        },
        {
          heading: { tr: 'Mimari', en: 'Architecture' },
          body: {
            tr: 'İki katmanlı yapı: React SPA frontend ve Spring Boot REST API. Kimlik doğrulama Bearer JWT ile yapılır. Veri akışı: React (Vite) → JWT → Spring Boot REST API → MongoDB Atlas. EOQ / ROP / ABC metrikleri için gece 02:00’de çalışan bir Scheduler bulunur.',
            en: 'Two-tier system: React SPA frontend and Spring Boot REST API. Authentication uses Bearer JWTs. Data flow: React (Vite) → JWT → Spring Boot REST API → MongoDB Atlas. A background Scheduler runs at 02:00 for EOQ / ROP / ABC metric calculations.',
          },
        },
      ],
    },
    {
      title: { tr: 'Kimlik, Dashboard & Roller', en: 'Auth, Dashboard & Roles' },
      sections: [
        {
          heading: { tr: '1. Kimlik doğrulama', en: '1. Authentication' },
          bullets: {
            tr: [
              'Kullanıcı adı ve şifre ile giriş (şifre göster/gizle)',
              'JWT oturumu localStorage’da saklanır',
              '401 hatalarında otomatik çıkış (token süresi)',
              'Açık kayıt yok; kullanıcılar Admin panelinden oluşturulur',
            ],
            en: [
              'Login with username and password (show/hide password)',
              'JWT session stored in localStorage',
              'Automatic logout on 401 errors (token expiry)',
              'No public registration; users are created via the Admin panel',
            ],
          },
          images: [img(2)],
        },
        {
          heading: { tr: '2. Ana sayfa (Dashboard)', en: '2. Dashboard' },
          body: {
            tr: 'Rol bazlı karşılama mesajı; KPI kartları (toplam ürün, toplam sipariş, bekleyen sipariş); stok ve siparişlere hızlı navigasyon. Navbar’da bildirim zili, kullanıcı rolü ve çıkış butonu yer alır.',
            en: 'Role-based welcome message; KPI cards (total products, total orders, pending orders); quick navigation to stock and orders. The navbar includes a notification bell, user role display, and logout.',
          },
          images: [img(1), img(3)],
        },
        {
          heading: { tr: '3. Roller ve yetkilendirme', en: '3. Roles & permissions' },
          bullets: {
            tr: [
              'Admin — tüm şubeler, kullanıcılar, ürün ekleme, fiyatlandırma, tüm sipariş akışları ve envanter metrikleri',
              'Şube kullanıcısı — kendi şube stoğu; giden/gelen siparişler; kendi şubesinde onay ve kesim',
            ],
            en: [
              'Admin — all branches, users, product creation, pricing, all order flows, and inventory metrics',
              'Branch user — own-branch stock; sent/incoming orders; confirmation and cutting for their branch',
            ],
          },
          images: [img(4), img(5)],
        },
      ],
    },
    {
      title: { tr: 'Stok & Şubeler Arası Sipariş', en: 'Stock & Inter-branch Orders' },
      sections: [
        {
          heading: { tr: '4. Stok yönetimi', en: '4. Stock management' },
          body: {
            tr: 'İki ürün tipi desteklenir. Boru: adet, ağırlık ve kg fiyatıyla takip edilir. Dolu: sipariş için belirli boyların kesildiği çubuk stoğu. Şubeye özel ürün listeleri, dinamik alanlar (çap, et kalınlığı, ağırlık), ürün CRUD ve çapa göre arama bulunur.',
            en: 'Two product types are supported. Pipe: tracked by piece, weight, and price per kg. Solid: rod stock where specific lengths are cut for orders. Features include branch-specific product lists, dynamic fields (diameter, wall thickness, weight), product CRUD, and search by diameter.',
          },
          images: [img(6), img(7), img(8), img(9), img(10)],
        },
        {
          heading: { tr: '5. Şubeler arası sipariş', en: '5. Inter-branch ordering' },
          body: {
            tr: 'Akış: Sipariş oluşturuldu → Teslimat şubesi onayı bekleniyor → Onaylandı → Alıma hazır (kesim/stok ayırma) → Hazır → Sevk edildi. Sepet sisteminde müşteri adı ve teslimat şubesi seçilir; satır bazında satış fiyatı girilir. Admin “Tüm Siparişler”i görür; şube kullanıcıları “Gönderilen” ve “Gelen” sekmelerini kullanır.',
            en: 'Workflow: Order created → Awaiting delivery-branch confirmation → Confirmed → Ready for pickup (cutting/stock allocation) → Ready → Dispatched. The cart flow selects customer name and delivery branch; sales prices are entered per item. Admins see “All Orders”; branch users use “Sent” and “Incoming” tabs.',
          },
          images: [img(11), img(12), img(13), img(14)],
        },
      ],
    },
    {
      title: { tr: 'Kesim, Bildirim & İstatistik', en: 'Cutting, Notifications & Stats' },
      sections: [
        {
          heading: { tr: '6. Kesim ve fire', en: '6. Cutting & waste' },
          body: {
            tr: 'Dolu ürünler sepete eklenirken kesim boyu (mm) ve adet girilir. Hazırlık onayında sistem kesim kaynağını, miktarı ve toplam kesim ağırlığını kaydeder. Backend her kesim için otomatik 3 mm fire uygular; ağırlık çelik yoğunluğu formülüyle (7850 kg/m³) hesaplanır. Stok otomatik güncellenir ve durum “Hazır” olur.',
            en: 'When adding solid products to the cart, users enter cutting length (mm) and quantity. On preparation approval, the system records the cutting source, quantity, and total cut weight. The backend automatically applies 3 mm kerf/waste per cut; weight uses the steel density formula (7850 kg/m³). Stock updates automatically and status becomes “Ready.”',
          },
        },
        {
          heading: { tr: '7. Bildirimler', en: '7. Notifications' },
          body: {
            tr: 'Alıcı şubedeki kullanıcılar ve adminler bilgilendirilir. Navbar’daki zil okunmamış sayıyı gösterir; tıklanınca sipariş detayına gider. Güncelleme HTTP polling ile her 45 saniyede bir yapılır.',
            en: 'Users and admins at the receiving branch are notified. A navbar bell shows the unread count; clicking opens order details. Updates run every 45 seconds via HTTP polling.',
          },
          images: [img(15)],
        },
        {
          heading: { tr: '8. İstatistikler', en: '8. Statistics' },
          body: {
            tr: 'Seçilen tarih aralığında alım ve satış raporları. Alım: şube + kategori, toplam alım tutarı, ağırlık ve adet. Satış: şube + müşteri + kategori, satış tutarı, satılan ağırlık ve toplam fire ağırlığı. Adminler finansal toplamları; şube kullanıcıları ağırlık/adet odaklı görünümü görür.',
            en: 'Purchase and sales reports within a selected date range. Purchase: branch + category, total purchase price, weight, and quantity. Sales: branch + customer + category, sales amount, weight sold, and total waste weight. Admins see financial totals; branch users get weight- and quantity-focused views.',
          },
          images: [img(16), img(17), img(18)],
        },
      ],
    },
    {
      title: { tr: 'Admin, Metrikler & Sonuç', en: 'Admin, Metrics & Conclusion' },
      sections: [
        {
          heading: { tr: '9. Admin paneli', en: '9. Admin panel' },
          body: {
            tr: 'Şube ekleme/silme, şube stok durumunu aç/kapa ve şubeye özel kullanıcı yönetimi. Kapalı şubeler sipariş alamaz.',
            en: 'Add/delete branches, toggle branch stock status (open/close), and branch-specific user management. Closed branches cannot receive orders.',
          },
          images: [img(19), img(20), img(21)],
        },
        {
          heading: { tr: '10. Envanter metrikleri', en: '10. Inventory metrics' },
          body: {
            tr: 'Adminler için karar destek katmanı. Yıllık/günlük ortalama talep, EOQ (Economic Order Quantity), ROP (Reorder Point) ve ABC sınıflandırması. Stok ROP altına düştüğünde kırmızı satır uyarısı; sipariş maliyeti ve teslimat süresi ayarları; her gece 02:00’de otomatik hesaplama.',
            en: 'A decision-support layer for admins. Annual/daily average demand, EOQ (Economic Order Quantity), ROP (Reorder Point), and ABC classification. Red-row alerts when stock falls below ROP; settings for order costs and lead times; automatic nightly calculation at 02:00.',
          },
          images: [img(22), img(23)],
        },
        {
          heading: { tr: 'Güvenlik', en: 'Security' },
          bullets: {
            tr: [
              'Stateless JWT; login dışında uçlar korumalı',
              'Admin işlemleri servis katmanında kontrol edilir',
              'Şube izolasyonu: stok CRUD kullanıcının şube/kategorisiyle sınırlı',
              'Parolalar BCrypt ile hash’lenir',
              'Axios interceptor token ekler; süre dolunca otomatik çıkış',
            ],
            en: [
              'Stateless JWT; all endpoints protected except login',
              'Admin operations enforced at the service layer',
              'Branch isolation: stock CRUD limited to the user’s branch/category',
              'Passwords hashed with BCrypt',
              'Axios interceptor injects tokens and logs out on expiry',
            ],
          },
        },
        {
          heading: { tr: 'Öne çıkan teknik kararlar', en: 'Key technical decisions' },
          bullets: {
            tr: [
              'Çift ürün modeli: boru (adet/fiyat) ve dolu (boy/kesim/fire)',
              'MongoDB doküman yapısıyla kategoriye özel dinamik alanlar',
              'Kesim motoru: 3 mm fire + yoğunluk formülü; fire sipariş toplamına yansır',
              'EOQ, ROP ve ABC ile stok karar desteği',
              'Çok şubeli RBAC: admin global, şube kullanıcısı yerel görünüm',
            ],
            en: [
              'Dual product models: pipe (unit/price) and solid (length/cut/waste)',
              'MongoDB documents for flexible, category-specific fields',
              'Cutting engine: 3 mm kerf + density formula; waste reflected in order totals',
              'EOQ, ROP, and ABC for inventory decision support',
              'Multi-branch RBAC: admins global, branch users localized',
            ],
          },
        },
        {
          heading: { tr: 'Sonuç', en: 'Conclusion' },
          body: {
            tr: 'Yılmazlar Çelik ERP, çelik dağıtımın gerçek operasyonlarına (ölçüm, kesim, transfer) özel bir iş uygulamasıdır. Spring Boot, React, JWT ve MongoDB ile full-stack geliştirilmiştir. Tipik akış: giriş → şube stoğu → başka şubeden sipariş → onay → kesim/fire → çıkış → istatistik ve EOQ/ROP paneli.',
            en: 'Yılmazlar Çelik ERP is a custom business app for real steel-distribution operations (measuring, cutting, transfers). Built full-stack with Spring Boot, React, JWT, and MongoDB. Typical workflow: login → branch stock → order from another branch → approval → cutting/waste → exit → statistics and EOQ/ROP panel.',
          },
        },
      ],
    },
  ],
}
