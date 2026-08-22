const img = (n) => `/images/projects/tetl/tetl-photo${n}.jpg`

export const tetlDetail = {
  technologies: [
    'Unity 6',
    'URP 2D',
    'uGUI',
    'TextMeshPro',
    'PlayerPrefs',
    'IL2CPP Android',
    'Game Design',
  ],
  pages: [
    {
      title: { tr: 'Tanıtım & Temel Oynanış', en: 'Intro & Core Gameplay' },
      sections: [
        {
          heading: { tr: '1. Kısa Tanıtım', en: '1. Short Introduction' },
          body: {
            tr: 'Too Early - Too Late, pizza temalı tek dokunuşluk bir zamanlama oyunudur. Oyuncu dairesel dolum göstergesini izler ve ekrana tam doğru anda dokunmalıdır. Erken veya geç dokunuş “Too Early” / “Too Late” cezası verir. Skor arttıkça tempo hızlanır. Belirli skor eşiklerinde “Özel Sipariş” mini oyunu açılır; malzemeler sürükle-bırak ile yerleştirilir. Mükemmel pencereyi yakala, hatalardan kaçın, özel siparişleri tamamla ve şef sıralarında yüksel.',
            en: 'Too Early - Too Late is a pizza-themed single-touch timing game. The player watches a circular fill indicator and must tap at exactly the right moment. Tapping too early or too late triggers a “Too Early” / “Too Late” penalty. Tempo increases with score. At score milestones, a “Special Order” mini-game appears where ingredients are drag-and-dropped. Catch the perfect window, avoid mistakes, complete special orders, and climb the chef ranks.',
          },
          bullets: {
            tr: [
              'Geliştirici: Caracal Dev — Solo Indie',
              'Tür: Mobil arcade',
              'Motor: Unity 6 — v1.6',
            ],
            en: [
              'Developer: Caracal Dev — Solo Indie',
              'Genre: Mobile arcade',
              'Engine: Unity 6 — v1.6',
            ],
          },
          images: [img(1), img(2)],
        },
        {
          heading: { tr: '2. Hedef Kitle & Amaç', en: '2. Target Audience & Goal' },
          body: {
            tr: 'Hedef kitle gelişim çağındaki çocuklardır. Amaç; ince motor becerileri, el-göz koordinasyonu ve zaman algısını eğlenceli şekilde geliştirmektir. Tasarım felsefesi basit kontroller (dokunma ve sürükle-bırak) ile net görsel geri bildirim üzerine kuruludur. Amaç yalnızca hızlı tıklama değil; odak ve sabrı teşvik etmektir. Türkçe ve İngilizce dil desteği ile çocuklara yönelik görsel “Nasıl Oynanır” rehberi sunulur.',
            en: 'The target audience is children in developmental years. The goal is to improve fine motor skills, hand-eye coordination, and time perception through play. The design philosophy uses simple controls (tap and drag-and-drop) with clear visual feedback. The intent is not rapid tapping alone, but encouraging focus and patience. Turkish and English localization includes visual “How to Play” guides for children.',
          },
        },
        {
          heading: { tr: '3. Rol & Kapsam', en: '3. Role & Scope' },
          bullets: {
            tr: [
              'Rol: Tasarım, programlama, UI/UX, lokalizasyon, ses entegrasyonu, Android build’ler',
              'Platform: Mobil (dikey) — Unity 6 — URP 2D — IL2CPP Android',
              'Süreç: Tek sahne üretim hattı, özel UI asset’ler, TextMeshPro (TMP), PlayerPrefs ile veri kalıcılığı',
            ],
            en: [
              'Role: Design, programming, UI/UX, localization, sound integration, Android builds',
              'Platform: Mobile (portrait) — Unity 6 — URP 2D — IL2CPP Android',
              'Process: Single-scene production pipeline, custom UI assets, TextMeshPro (TMP), PlayerPrefs for persistence',
            ],
          },
        },
        {
          heading: { tr: '4. Temel Oynanış', en: '4. Core Gameplay' },
          body: {
            tr: 'Zamanlama döngüsü pizzanın üzerinde 1.5–2.5 saniye arasında rastgele dolan bir radial fill ile çalışır. Perfect bölgesi dolumun %95–%100 aralığıdır. Bar dolduktan sonra 0.1 sn “hold” penceresi hâlâ Perfect sayılır. 0.3 sn input kilidi yanlışlıkla çift dokunmayı engeller. Sağlık sistemi 3 canlıdır; Game Over başına bir “Continue” (+1 can) hakkı vardır.',
            en: 'The timing loop uses a radial fill on the pizza that lasts a randomized 1.5–2.5 seconds. The Perfect zone is 95–100% fill. After the bar is full, a 0.1s hold window still counts as Perfect. A 0.3s input lockout prevents accidental double-taps. The health system has 3 lives; one Continue (+1 life) is allowed per Game Over.',
          },
          images: [img(3), img(4)],
        },
      ],
    },
    {
      title: { tr: 'Zorluk, Özel Sipariş & İlerleme', en: 'Difficulty, Special Order & Progression' },
      sections: [
        {
          heading: { tr: '5. Skora Bağlı Zorluk', en: '5. Score-Based Difficulty' },
          body: {
            tr: 'Her 10 puanda tur süresi 0.1 sn kısalarak oyun zorlaşır. Alt sınır minimum 1.0 sn, üst sınır maksimum 1.3 sn’dir. Skor 100+ olduğunda Perfect hold penceresi 0.1 sn’den 0.05 sn’ye düşer. Oyuncular 10, 20, 30 veya 40 skorundan başlama kilidini açarak daha hızlı ısınabilir.',
            en: 'Every 10 points shortens turn duration by 0.1s. The floor is 1.0s minimum and the ceiling is 1.3s maximum. At score 100+, the Perfect hold window drops from 0.1s to 0.05s. Players can unlock starting at scores 10, 20, 30, or 40 for a faster warm-up.',
          },
          bullets: {
            tr: [
              '0–9 skor: 1.5 – 2.5 sn süre',
              '10 skor: 1.4 – 2.4 sn',
              '20 skor: 1.3 – 2.3 sn',
              'Limit: min 1.0 sn / max 1.3 sn',
            ],
            en: [
              'Score 0–9: 1.5 – 2.5s duration',
              'Score 10: 1.4 – 2.4s',
              'Score 20: 1.3 – 2.3s',
              'Limit: min 1.0s / max 1.3s',
            ],
          },
        },
        {
          heading: { tr: '6. Özel Sipariş Mini Oyunu', en: '6. Special Order Mini-game' },
          body: {
            tr: 'Belirli skorlarda ana döngüyü kıran mini oyun; sürükleme, eşleştirme ve kısa süreli planlama odaklıdır. 5 yuva rastgele malzemelerle (sosis, mantar, biber, zeytin) dolar; altta 4 kase vardır ve doğru malzeme doğru yuvaya sürüklenmelidir.',
            en: 'At specific scores, a mini-game breaks the main loop and focuses on dragging, matching, and short-term planning. Five slots appear with random ingredients (sausage, mushroom, pepper, olive); four bowls sit at the bottom and the correct ingredient must be dragged to each slot.',
          },
          bullets: {
            tr: [
              'Skor 3: 20 sn süre limiti',
              'Skor 30: 15 sn süre limiti',
              'Skor 50+ ve her 50’de bir: 10 sn süre limiti',
            ],
            en: [
              'Score 3: 20s time limit',
              'Score 30: 15s time limit',
              'Score 50+ and every 50 thereafter: 10s time limit',
            ],
          },
          images: [img(5), img(6), img(7)],
        },
        {
          heading: { tr: '7. İlerleme & Profil', en: '7. Progression & Profile' },
          body: {
            tr: 'XP formülü: 20 + (Final Skor × 8). 1–15 seviye vardır; her seviyede bir şef unvanı bulunur (ör. Stajyer → Zamansız Usta). Başlangıç skorları seviye eşikleriyle açılır.',
            en: 'XP formula: 20 + (Final Score × 8). Levels span 1–15, each with a chef title (e.g. Intern → Timeless Master). Starting scores unlock at level thresholds.',
          },
          bullets: {
            tr: [
              'Seviye 1 → skor 0’dan başlama',
              'Seviye 4 → skor 10',
              'Seviye 7 → skor 20',
              'Seviye 10 → skor 30',
              'Seviye 13 → skor 40',
            ],
            en: [
              'Level 1 → start at score 0',
              'Level 4 → start at score 10',
              'Level 7 → start at score 20',
              'Level 10 → start at score 30',
              'Level 13 → start at score 40',
            ],
          },
        },
        {
          heading: { tr: '8. Avatarlar', en: '8. Avatars' },
          body: {
            tr: '25 avatar (5 kademede 5’er). Yeni avatarlar seviye eşiklerinde açılır. Profil arayüzünde kaydırılabilir ızgara ile kişiselleştirme sunulur.',
            en: '25 avatars (5 tiers of 5). New avatars unlock at level thresholds. The profile UI offers a scrollable grid for personalization.',
          },
          images: [img(8), img(9)],
        },
      ],
    },
    {
      title: { tr: 'UI, Teknik & Sonuç', en: 'UI, Technical & Conclusion' },
      sections: [
        {
          heading: { tr: '9. UI & UX Detayları', en: '9. UI & UX Details' },
          bullets: {
            tr: [
              'Ana menü: Logo, Best/Last Score, Oyna, Ayarlar, Nasıl Oynanır, Profil',
              'Nasıl Oynanır: Sözel olmayan ikon butonu → tam ekran görsel rehber (TR/EN)',
              'Ayarlar: Dil seçimi, müzik/SFX aç-kapa, skor/XP sıfırlama',
              'Game Over: Final skor, best skor; Continue, Retry, Ana Menü',
              'Splash: Caracal Dev markası ve pizza temalı uygulama ikonu',
            ],
            en: [
              'Main menu: Logo, Best/Last Score, Play, Settings, How to Play, Profile',
              'How to Play: Non-verbal icon button → full-screen visual guide (TR/EN)',
              'Settings: Language toggle, Music/SFX toggles, Reset Score/XP',
              'Game Over: Final score, best score; Continue, Retry, Main Menu',
              'Splash: Caracal Dev branding with pizza-themed app icon',
            ],
          },
          images: [img(10), img(11), img(12), img(13)],
        },
        {
          heading: { tr: '10. Lokalizasyon & Ses', en: '10. Localization & Audio' },
          bullets: {
            tr: [
              'TR / EN: Menüler, skor metinleri, geri bildirimler, unvanlar, özel sipariş, “Time’s Up”, Nasıl Oynanır görselleri',
              'Dil ayarı PlayerPrefs ile kalıcı',
              'Ses: Menü ve oyun içi müzik; Perfect, hata, özel sipariş başlangıç/başarı ve süre alarmı SFX’leri',
              'Müzik ve SFX aynı ses seviyesiyle yönetilir',
            ],
            en: [
              'TR / EN: Menus, score texts, feedback, ranks, special orders, “Time’s Up”, How to Play visuals',
              'Language setting persists via PlayerPrefs',
              'Audio: Menu and in-game music; SFX for Perfect, failures, special order start/success, and time-limit alarms',
              'Music and SFX share the same volume level',
            ],
          },
        },
        {
          heading: { tr: '11. Teknik Özet', en: '11. Technical Summary' },
          bullets: {
            tr: [
              'Motor: Unity 6 (URP 2D), uGUI + TextMesh Pro',
              'Mimari: GameManager state machine — Timing, Input, UI, Audio, Special Order, Progression, Localization, Profile',
              'Durumlar: MainMenu → Playing → SpecialOrderPlaying → ResolvingFailure → GameOver',
              'Mobil: Dikey kilitli; Canvas Scaler 1080×1920; Android IL2CPP / ARM64',
              'Kalıcılık: Best/Last skor, XP, avatar, başlangıç skoru, dil, ses seviyeleri',
            ],
            en: [
              'Engine: Unity 6 (URP 2D), uGUI + TextMesh Pro',
              'Architecture: GameManager state machine — Timing, Input, UI, Audio, Special Order, Progression, Localization, Profile',
              'States: MainMenu → Playing → SpecialOrderPlaying → ResolvingFailure → GameOver',
              'Mobile: Portrait locked; Canvas Scaler 1080×1920; Android IL2CPP / ARM64',
              'Persistence: Best/Last score, XP, avatar, start score, language, sound levels',
            ],
          },
        },
        {
          heading: { tr: '12. Öne Çıkan Mühendislik Seçimleri', en: '12. Engineering Highlights' },
          bullets: {
            tr: [
              'Adil mobil dokunuş: input grace ve “full-hold Perfect” mekaniği',
              'Skora bağlı tempo ölçekleme',
              'UI performansına özel dokunuşlar/optimizasyonlar',
              'Özel Sipariş: sürükle-bırak sistemi',
              'Çift dilli UX ve güvenli skor/XP sıfırlama',
            ],
            en: [
              'Fair mobile touch: input grace and full-hold Perfect mechanic',
              'Score-based tempo scaling',
              'UI performance-focused touches/optimizations',
              'Special Order: drag-and-drop system',
              'Dual-language UX and a safe score/XP reset flow',
            ],
          },
        },
        {
          heading: { tr: '13. Sonuç', en: '13. Conclusion' },
          body: {
            tr: 'Too Early - Too Late, gelişim çağındaki çocuklar için tasarlanmış pizza mutfağı temalı bir mobil oyundur. Kısa, tekrarlanabilir turlarda motor becerileri, el-göz koordinasyonu ve zamanlamayı destekler. Portföy değeri açısından hem oyun tasarımı (risk, tempo, ikinci oyun modu) hem de profesyonel Unity mobil üretim (durum yönetimi, veri kalıcılığı, UI, lokalizasyon) örneğidir. Yayın durumu: Farklı cihazlar için optimizasyon aşamasında; yakın zamanda Google Play Store ve Apple App Store’da yayımlanması planlanmaktadır.',
            en: 'Too Early - Too Late is a pizza kitchen-themed mobile game designed for children in developmental stages. Short, repeatable rounds support motor skills, hand-eye coordination, and timing. As a portfolio piece it demonstrates both game design (risk, tempo, a second mode) and professional Unity mobile production (state management, persistence, UI, localization). Publication status: device optimization in progress; planned for Google Play Store and Apple App Store soon.',
          },
          bullets: {
            tr: [
              'Tür: Timing arcade / casual mobile — motor beceri odaklı',
              'Hedef kitle: Gelişim çağındaki çocuklar',
              'Motor: Unity 6 — URP 2D',
              'Platform: Android & iOS (yayına hazır)',
              'Özellikler: Perfect timing, skor zorluğu, Özel Sipariş, XP 1–15, 25 avatar, TR/EN',
              'Durum: Cihaz optimizasyonu; Play Store & App Store yakında',
              'Stüdyo: Caracal Dev',
            ],
            en: [
              'Genre: Timing arcade / casual mobile — motor-skill focused',
              'Target audience: Children in developmental stage',
              'Engine: Unity 6 — URP 2D',
              'Platform: Android & iOS (release-ready)',
              'Features: Perfect timing, score difficulty, Special Order, XP 1–15, 25 avatars, TR/EN',
              'Status: Device optimization; coming soon to Play Store & App Store',
              'Studio: Caracal Dev',
            ],
          },
        },
      ],
    },
  ],
}
