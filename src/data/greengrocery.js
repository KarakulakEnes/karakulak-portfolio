const img = (n) => `/images/projects/greengrocery/mnv${n}.jpg`

export const greengroceryDetail = {
  technologies: [
    'Java 17+',
    'JavaFX 17',
    'MySQL',
    'JDBC',
    'Maven',
    'Apache PDFBox',
    'ControlsFX',
    'MVC',
  ],
  pages: [
    {
      title: { tr: 'Özet & Teknolojiler', en: 'Overview & Technologies' },
      sections: [
        {
          heading: {
            tr: 'Local Greengrocer - Masaüstü Manav Yönetim Sistemi',
            en: 'Local Greengrocer - Desktop Greengrocery Management System',
          },
          body: {
            tr: 'Sipariş-teslimat-stok döngüsünü uçtan uca yöneten bir JavaFX masaüstü uygulamasıdır. CMPE 343 dersi kapsamında nesne yönelimli tasarım ve katmanlı mimariyle geliştirilmiştir. Web sitesi değildir; yerel MySQL veritabanına JDBC ile bağlanan bir masaüstü istemcidir ve Maven ile derlenir. Arayüz, kullanıcının rolüne göre dinamik olarak değişir.',
            en: 'A JavaFX desktop application that manages the end-to-end order-delivery-stock cycle. Built for the CMPE 343 course with object-oriented design and a layered architecture. It is not a website: it is a desktop client that connects to a local MySQL database via JDBC and is built with Maven. The UI changes dynamically based on the user’s role.',
          },
          images: [img(1)],
        },
        {
          heading: { tr: 'Neden bu proje?', en: 'Why this project?' },
          body: {
            tr: 'Küçük ölçekli manav işletmelerinde müşterinin sipariş vermesi, kuryenin teslim etmesi ve sahibin stok–personel–istatistik yönetmesi genelde ayrı parçalara bölünür. Bu proje üç dünyayı tek platformda birleştirir: stok seviyeleri, kurye atamaları, müşteri puanları ve sahip denetimi aynı panel akışında yönetilir.',
            en: 'In small greengrocery businesses, customers ordering, couriers delivering, and owners managing stock, staff, and stats are often split across separate workflows. This project unifies those three worlds on one platform: stock levels, courier assignments, customer ratings, and owner oversight all live in one panel flow.',
          },
        },
        {
          heading: { tr: 'Kullanılan teknolojiler', en: 'Technologies used' },
          bullets: {
            tr: [
              'Dil: Java 17+ — iş kuralları, modeller, servisler',
              'Arayüz: JavaFX 17 (FXML + CSS) — pencereler, tablolar, formlar, Accordion / TitledPane',
              'Mimari: MVC — Model / View / Controller ayrımı',
              'Veritabanı: MySQL + JDBC (mysql-connector-j) — kullanıcı, ürün, sipariş, kupon, mesaj tabloları',
              'Build: Maven — bağımlılık yönetimi',
              'PDF: Apache PDFBox — sipariş faturaları',
              'UI bileşenleri: ControlsFX — ek JavaFX kontrolleri',
            ],
            en: [
              'Language: Java 17+ — business rules, models, services',
              'UI: JavaFX 17 (FXML + CSS) — windows, tables, forms, Accordion / TitledPane',
              'Architecture: MVC — Model / View / Controller separation',
              'Database: MySQL + JDBC (mysql-connector-j) — users, products, orders, coupons, messages',
              'Build: Maven — dependency management',
              'PDF: Apache PDFBox — order invoices',
              'UI components: ControlsFX — extra JavaFX controls',
            ],
          },
          subsections: [
            {
              heading: { tr: 'Teknik notlar', en: 'Technical notes' },
              bullets: {
                tr: [
                  'Veritabanı erişimi Singleton `DatabaseAdapter` üzerinden',
                  'Sorgular prepared statement ile',
                  'Ürün görselleri MySQL’de BLOB olarak saklanır',
                  'View: FXML ekranlar + role özel CSS',
                  'Controller: Login, Register, Customer, Cart, Order History, Profile, Messages, Coupons, Carrier, Owner, Change Password',
                  'Service: User, Product, Order, Coupon, Message, Rating, Invoice, Statistics',
                  'Model: User, Product, Order, OrderItem, CartItem, Coupon, Message, CarrierRating ve istatistik DTO’ları',
                ],
                en: [
                  'Database access via Singleton `DatabaseAdapter`',
                  'Queries use prepared statements',
                  'Product images stored as BLOBs in MySQL',
                  'View: FXML screens + role-specific CSS',
                  'Controller: Login, Register, Customer, Cart, Order History, Profile, Messages, Coupons, Carrier, Owner, Change Password',
                  'Service: User, Product, Order, Coupon, Message, Rating, Invoice, Statistics',
                  'Model: User, Product, Order, OrderItem, CartItem, Coupon, Message, CarrierRating, and statistics DTOs',
                ],
              },
            },
          ],
        },
        {
          heading: { tr: 'Kim, ne görüyor?', en: 'Who sees what?' },
          bullets: {
            tr: [
              'Müşteri — ürün gez, sepet yönet, sipariş ver, kupon kullan, mesajlaş, kurye puanla (demo: cust / cust)',
              'Kurye — bekleyen siparişleri üstlen, teslimatı tamamla (demo: carr / carr)',
              'Sahip — stok, kurye, kupon, sadakat, mesaj ve istatistik yönetimi (demo: own / own)',
            ],
            en: [
              'Customer — browse products, manage cart, order, use coupons, message, rate couriers (demo: cust / cust)',
              'Courier — claim pending orders and complete deliveries (demo: carr / carr)',
              'Owner — manage stock, couriers, coupons, loyalty, messages, and statistics (demo: own / own)',
            ],
          },
        },
      ],
    },
    {
      title: { tr: 'Kimlik & Müşteri Arayüzü', en: 'Auth & Customer UI' },
      sections: [
        {
          heading: { tr: '1. Kimlik doğrulama ve kayıt', en: '1. Authentication & registration' },
          body: {
            tr: 'Giriş ekranı mor-yeşil gradient kart yapısındadır; şifre göster/gizle, Giriş Yap ve Hesap Oluştur butonları bulunur. Kayıtta tüm alanlar zorunludur. Şifre en az 8 karakter olmalı; büyük/küçük harf, rakam ve özel karakter içermelidir. Geçerli e-posta ve 10 haneli telefon formatı kontrol edilir; kullanıcı adı benzersiz olmalıdır. Kurye ve sahip hesapları buradan açılamaz - sahip panelinden eklenir.',
            en: 'The login screen uses a purple-green gradient card with show/hide password plus Login and Create Account actions. Registration requires all fields. Passwords must be at least 8 characters with upper/lowercase, digits, and special characters. Valid email and 10-digit phone formats are enforced; usernames must be unique. Courier and owner accounts cannot be created here - they are added from the owner panel.',
          },
          images: [img(1), img(2)],
        },
        {
          heading: { tr: '2. Müşteri arayüzü', en: '2. Customer interface' },
          body: {
            tr: 'Ana vitrinde yeşil üst bar; arama, sepet, profil ve navigasyon linkleri yer alır. Ürünler sebze ve meyve kategorilerinde `TitledPane` içinde kart olarak listelenir. Kartlarda görsel, ad, kg fiyatı ve stok görünür. Stok eşiğin altına düşerse “Düşük Stok - Fiyat İkiye Katlandı” uyarısı çıkar ve satış fiyatı otomatik ikiye katlanır.',
            en: 'The main storefront has a green header with search, cart, profile, and navigation. Products appear as cards inside `TitledPane` groups for vegetables and fruits. Cards show image, name, price per kg, and stock. When stock falls below the threshold, a “Low Stock - Price Doubled” warning appears and the sale price automatically doubles.',
          },
          images: [img(3)],
        },
        {
          heading: { tr: 'Sepet ve ödeme', en: 'Cart & payment' },
          body: {
            tr: 'Sepette ürün adı, miktar (kg), birim fiyat ve ara toplam gösterilir. Özet tabloda ara toplam, kupon indirimi, %18 KDV ve genel toplam yer alır. Sipariş sonrası stok düşer, `invoices/` klasörüne PDF fatura üretilir ve sadakat puanı güncellenir.',
            en: 'The cart lists product name, quantity (kg), unit price, and subtotal. The summary table includes subtotal, coupon discount, 18% VAT, and grand total. After ordering, stock decreases, a PDF invoice is written to `invoices/`, and loyalty points update.',
          },
          bullets: {
            tr: [
              'Minimum sipariş tutarı: 30 TL',
              'Teslimat, siparişten itibaren en fazla 48 saat içinde',
              'Teslimat saati: 09:00 – 18:00',
              'Kuponlar min. tutar ve son kullanma tarihine göre doğrulanır',
            ],
            en: [
              'Minimum order total: 30 TL',
              'Delivery within 48 hours of the order',
              'Delivery hours: 09:00 – 18:00',
              'Coupons validated for min. purchase and expiration',
            ],
          },
          images: [img(4)],
        },
        {
          heading: { tr: 'Sipariş geçmişi', en: 'Order history' },
          body: {
            tr: 'Siparişler tabloda listelenir; satır seçilince kalemler, fiyatlar ve teslimat bilgisi açılır. Sipariş verildikten sonra 2 saat içinde iptal edilebilir (stok geri yüklenir). Tamamlanan siparişlerde kurye için 1–5 yıldız ve yorum verilebilir. Faturalar PDF olarak indirilebilir.',
            en: 'Orders appear in a table; selecting a row reveals line items, prices, and delivery info. Orders can be canceled within 2 hours of placement (stock is restored). Completed orders can be rated 1–5 stars with a courier comment. Invoices are downloadable as PDFs.',
          },
          images: [img(5), img(6)],
        },
        {
          heading: { tr: 'Profil ve şifre', en: 'Profile & password' },
          body: {
            tr: 'E-posta, telefon ve adres doğrulama kurallarıyla güncellenebilir. Şifre değişikliği ayrı pencerede güvenlik kontrolleriyle yapılır.',
            en: 'Email, phone, and address can be updated with validation. Password changes happen in a separate window with security checks.',
          },
          images: [img(7), img(8)],
        },
        {
          heading: { tr: 'Kuponlar ve sadakat', en: 'Coupons & loyalty' },
          body: {
            tr: 'Aktif ve süresi dolmuş kuponlar ayrı tablolarda listelenir. Toplam harcama ve bir sonraki sadakat kuponu için kalan tutar gösterilir; eşik sahibi tarafından belirlenir.',
            en: 'Active and expired coupons appear in separate tables. Total spending and the amount remaining toward the next loyalty coupon are shown; the threshold is set by the owner.',
          },
          images: [img(9)],
        },
      ],
    },
    {
      title: { tr: 'Mesajlaşma & Kurye', en: 'Messaging & Courier' },
      sections: [
        {
          heading: { tr: 'Mesajlaşma', en: 'Messaging' },
          body: {
            tr: 'Müşteriler mağaza sahibine konu ve gövde ile mesaj gönderebilir; yanıtları tabloda görür. Okunan mesajlar işaretlenir.',
            en: 'Customers can message the store owner with a subject and body, and view replies in a table. Read messages are marked accordingly.',
          },
          images: [img(10)],
        },
        {
          heading: { tr: 'Kurye arayüzü', en: 'Courier interface' },
          body: {
            tr: 'Kurye paneli üç sekmeden oluşur:',
            en: 'The courier panel has three tabs:',
          },
          subsections: [
            {
              heading: { tr: 'Bekleyen siparişler', en: 'Available orders' },
              body: {
                tr: 'Henüz kuryeye atanmamış siparişler; adres, teslimat saati, tutar ve kalemler görünür. Kurye siparişi üstlenebilir.',
                en: 'Orders not yet assigned to a courier; address, delivery time, total, and items are shown. Couriers can claim these orders.',
              },
              images: [img(11)],
            },
            {
              heading: { tr: 'Aktif siparişler', en: 'Current orders' },
              body: {
                tr: 'Kuryenin aktif teslimatları. Tamamlanınca durum güncellenir; ardından müşteri puan verebilir.',
                en: 'The courier’s active deliveries. Completing an order updates status; the customer can then rate the service.',
              },
              images: [img(12)],
            },
            {
              heading: { tr: 'Tamamlanan siparişler', en: 'Completed orders' },
              body: {
                tr: 'Geçmiş teslimatların geçmişi.',
                en: 'A history of past deliveries.',
              },
              images: [img(13)],
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Sahip Paneli, Kurallar & Mimari', en: 'Owner Panel, Rules & Architecture' },
      sections: [
        {
          heading: { tr: 'Mağaza sahibi arayüzü', en: 'Store owner interface' },
          body: {
            tr: 'Sahip paneli yedi sekmeli bir yönetim konsoludur.',
            en: 'The owner panel is a management console with seven tabs.',
          },
          subsections: [
            {
              heading: { tr: 'Ürün yönetimi', en: 'Product management' },
              body: {
                tr: 'Ürün adı, tür, fiyat ve stok tablosu. Yeni ürün eklemede ad, kategori (sebze/meyve), fiyat, kg stok, eşik, açıklama ve görsel (BLOB) girilir. Stok eşiğin altına düşerse vitrinde fiyat ikiye katlanır.',
                en: 'Table of name, type, price, and stock. New products take name, category (veg/fruit), price, stock in kg, threshold, description, and image (BLOB). Below-threshold stock doubles the storefront price.',
              },
              images: [img(14)],
            },
            {
              heading: { tr: 'Kurye yönetimi', en: 'Courier management' },
              body: {
                tr: 'Kuryeler ve ortalama puanları listelenir. Yeni kurye eklenebilir veya silinebilir. Seçili kurye için müşteri yorumları ve puanlar aynı tabloda görünür.',
                en: 'Lists couriers and average ratings. Couriers can be added or removed. Customer comments and ratings for the selected courier appear in the same view.',
              },
              images: [img(15)],
            },
            {
              heading: { tr: 'Siparişler', en: 'Orders' },
              body: {
                tr: 'Tüm siparişler müşteri, tarih, durum ve tutarla listelenir. Satır seçilince kalemler, KDV/indirim, kullanılan kupon, teslimat adresi ve tarihi görünür.',
                en: 'All orders with customer, date, status, and total. Selecting a row reveals items, VAT/discount, used coupons, delivery address, and date.',
              },
              images: [img(16)],
            },
            {
              heading: { tr: 'Mesajlar', en: 'Messages' },
              body: {
                tr: 'Müşteri mesajları için gelen kutusu; sahip okuyup yanıtlayabilir.',
                en: 'Inbox for customer messages; the owner can read and reply.',
              },
              images: [img(17)],
            },
            {
              heading: { tr: 'Kuponlar', en: 'Coupons' },
              body: {
                tr: 'Kod, indirim yüzdesi, minimum tutar ve geçerlilik süresiyle kupon yönetimi. Aktif/pasif olabilir; belirli müşteriye veya herkese atanabilir.',
                en: 'Manage coupons with codes, discount percentages, minimum limits, and validity. Coupons can be active/passive and assigned to specific customers or everyone.',
              },
              images: [img(18)],
            },
            {
              heading: { tr: 'Sadakat ayarları', en: 'Loyalty settings' },
              body: {
                tr: 'Harcama eşiği (TL) ve karşılık gelen kupon indirim yüzdesi ayarlanır. Müşteriler bu eşiğe her ulaştığında otomatik kupon kazanır.',
                en: 'Sets a spending threshold (TL) and matching coupon discount percentage. Customers automatically earn a coupon each time they reach the limit.',
              },
              images: [img(19)],
            },
            {
              heading: { tr: 'İstatistikler', en: 'Statistics' },
              body: {
                tr: 'Günlük, aylık, yıllık veya tüm zamanlar filtresi. Toplam sipariş, ciro, ortalama sipariş tutarı; müşteri bazlı harcama/sipariş; kurye bazlı teslimat sayısı ve ortalama puan izlenir.',
                en: 'Filterable by daily, monthly, yearly, or all-time. Tracks total orders, revenue, average order value; per-customer spending/orders; per-courier delivery counts and average ratings.',
              },
              images: [img(20)],
            },
          ],
        },
        {
          heading: { tr: 'İş kuralları — kısa özet', en: 'Business rules — short summary' },
          bullets: {
            tr: [
              'Giriş büyük/küçük harf duyarsızdır',
              'Minimum sepet tutarı: 30 TL',
              'KDV: %18',
              'Teslimat penceresi: 48 saat, 09:00–18:00',
              'Sipariş, verildikten sonra 2 saat içinde iptal edilebilir',
              'Stok eşiğin altındaysa satış fiyatı ikiye katlanır',
              'Sadakat ödülleri harcama eşiğiyle kupon olarak verilir',
              'Faturalar PDFBox ile üretilir ve `/invoices/` klasörüne yazılır',
              'Ürün görselleri veritabanında BLOB olarak saklanır',
            ],
            en: [
              'Login is case-insensitive',
              'Minimum cart total: 30 TL',
              'VAT: 18%',
              'Delivery window: 48 hours, 09:00–18:00',
              'Orders can be canceled up to 2 hours after placement',
              'If stock is below threshold, sale price doubles',
              'Loyalty rewards are coupons for spending thresholds',
              'Invoices are generated with PDFBox into `/invoices/`',
              'Product images are stored as BLOBs in the database',
            ],
          },
        },
        {
          heading: { tr: 'Mimari olarak öne çıkanlar', en: 'Architectural highlights' },
          bullets: {
            tr: [
              'Rol tabanlı navigasyon: tek giriş ekranı → üç ayrı FXML arayüz',
              'Katmanlı tasarım: Controller UI yönetir; sipariş, stok, kupon ve fatura mantığı `OrderService` / `InvoiceService` gibi servislerde',
              'Veri erişimi: tüm bağlantılar `DatabaseAdapter` üzerinden merkezileştirilir',
              'Canlı UI: JavaFX `ObservableList` ile sepet ve tablolar anlık güncellenir',
            ],
            en: [
              'Role-based navigation: one login screen → three separate FXML interfaces',
              'Layered design: Controllers own UI; order, stock, coupon, and invoice logic live in services like `OrderService` / `InvoiceService`',
              'Data access: all connections centralized through `DatabaseAdapter`',
              'Live UI: JavaFX `ObservableList` keeps cart and tables updated in real time',
            ],
          },
        },
      ],
    },
  ],
}
