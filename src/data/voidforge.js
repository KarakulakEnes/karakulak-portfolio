const img = (n) => `/images/projects/voidforge/vf-${n}.png`

export const voidforgeDetail = {
  technologies: [
    'Unity 6',
    'URP',
    'C#',
    'uGUI',
    'TextMeshPro',
    'ScriptableObject',
    'JSON Save',
    'Android',
  ],
  pages: [
    {
      title: { tr: 'Proje Hakkında & Teknik Özet', en: 'About & Technical Summary' },
      sections: [
        {
          heading: { tr: '1. Proje Hakkında', en: '1. About the Project' },
          body: {
            tr: 'Void Forge, karanlık fantezi temalı bir Idle RPG’dir. Oyuncu üretimden altın kazanır, ordu ve ekipman yükseltmelerine yatırım yapar, aşamalarda ilerleyerek yeni içerik açar. Sınıf rolleri, ekipman yuvaları, nadirlik basamakları, pet buff’ları ve özel boss mekanikleriyle uzun soluklu bir ilerleme döngüsü sunar. Arayüz dikey mobil düzene göre tasarlanmıştır; alt navigasyonda Kazanç, Sandık, Ordu, Savaş, Pet ve Boss olmak üzere altı sekme bulunur.',
            en: 'Void Forge is a dark fantasy Idle RPG. Players earn gold from production, invest in army and equipment upgrades, and progress through stages to unlock new content. Class roles, equipment slots, rarity tiers, pet buffs, and special boss mechanics form a long-form progression loop. The UI is designed for vertical mobile layout, with a six-tab bottom navigation: Income, Chest, Army, Battle, Pet, and Boss.',
          },
          bullets: {
            tr: [
              'Tür: Dark fantasy Idle RPG',
              'Platform: Mobil (Android öncelikli)',
              'Durum: Temel sistemler tamam — görsel cilalama, dengeleme ve SDK entegrasyonu odaklı geliştirme sürüyor',
              'Kapsam: Oynanış, kayıt sistemi ve UI iskeleti hazır',
            ],
            en: [
              'Genre: Dark fantasy Idle RPG',
              'Platform: Mobile (Android first)',
              'Status: Core systems complete — focus is visual polish, balancing, and SDK integration',
              'Scope: Gameplay, save system, and UI framework are in place',
            ],
          },
          images: [img(3)],
        },
        {
          heading: { tr: '2. Teknik Özet', en: '2. Technical Summary' },
          body: {
            tr: 'Proje Unity 6 (URP) ve C# ile geliştirilmektedir. UI tarafında uGUI + TextMeshPro kullanılır. Hedef platform mobildir; Android önceliklidir (min SDK 23). Mimari; singleton manager’lar, statik ekonomi sınıfları, ScriptableObject tabanlı denge tabloları ve hiyerarşi isimleriyle bağlanan UI üzerine kuruludur. Kayıt sistemi JSON tabanlıdır; yedekleme ve sürüm migrasyonu desteklenir. Ölçek olarak yaklaşık 108 oynanış betiği ve 22 özel editor aracı bulunur.',
            en: 'Built with Unity 6 (URP) and C#. UI uses uGUI + TextMeshPro. Target platform is mobile with Android priority (min SDK 23). Architecture centers on singleton managers, static economy classes, ScriptableObject balance tables, and hierarchy-bound UI. The save system is JSON-based with backup and version migration. Scale is roughly 108 gameplay scripts and 22 custom editor tools.',
          },
          bullets: {
            tr: [
              'Motor: Unity 6 (URP)',
              'Dil: C#',
              'UI: uGUI + TextMeshPro',
              'Kayıt: JSON + yedek / migrasyon',
              '~108 gameplay script · ~22 custom editor tool',
            ],
            en: [
              'Engine: Unity 6 (URP)',
              'Language: C#',
              'UI: uGUI + TextMeshPro',
              'Save: JSON + backup / migration',
              '~108 gameplay scripts · ~22 custom editor tools',
            ],
          },
        },
      ],
    },
    {
      title: { tr: 'Kazanç & Ordu Sistemleri', en: 'Income & Army Systems' },
      sections: [
        {
          heading: { tr: '3. Kazanç Sistemi — Idle Ekonomi', en: '3. Income System — Idle Economy' },
          body: {
            tr: 'Ekonominin omurgası 10 üretim satırıdır. Her satırın kendine özgü döngü süreleri, yükseltme maliyetleri ve kampanya ilerlemesine bağlı açılma koşulları vardır (ör. 50, 150, 300. aşama). Progress bar’lar manuel veya otomatik üretim döngülerini gösterir; hız ve oyuncu seviyesine göre çarpanlar uygulanır.',
            en: 'The economic spine is 10 production rows. Each has its own cycle times, upgrade costs, and unlock requirements tied to campaign progress (e.g. stages 50, 150, 300). Progress bars show manual or automated production cycles; multipliers scale with speed and player level.',
          },
          bullets: {
            tr: [
              'Otomasyon paneli: açılan satırlarda otomatik satın alma',
              'Yükseltme paneli: 95 benzersiz tek seferlik satın alma (çarpanlar, bonuslar)',
              'Offline kazanç: dönüşte AFK ödüllerinin hesaplanması',
            ],
            en: [
              'Automation panel: auto-buy on unlocked rows',
              'Upgrade panel: 95 unique one-time purchases (multipliers, bonuses)',
              'Offline earnings: AFK rewards calculated on return',
            ],
          },
          images: [img(1)],
        },
        {
          heading: { tr: '4. Ordu Sistemi', en: '4. Army System' },
          body: {
            tr: 'Ordu dört sınıf rolünden oluşur. Her sınıfın maksimum seviyesi 999’dur; istatistikler taban değer + seviye büyümesiyle ölçeklenir. Sınıf kartına tıklanınca ekipman yuvaları ve o sınıfa özel yükseltme yolları açılır.',
            en: 'The army has four class roles. Each class caps at level 999; stats scale from base values plus level growth. Tapping a class card reveals equipment slots and class-specific upgrade paths.',
          },
          images: [img(5)],
          subsections: [
            {
              heading: { tr: 'Sınıflar', en: 'Classes' },
              bullets: {
                tr: [
                  'Tank — ön hat; yüksek HP ve zırh',
                  'Okçu — menzilli DPS',
                  'Suikastçı — kritik vuruş uzmanı',
                  'Destek — istatistik bonusları ve iyileştirme',
                ],
                en: [
                  'Tank — frontline; high HP and armor',
                  'Archer — ranged DPS',
                  'Assassin — critical-hit specialist',
                  'Support — stat bonuses and healing',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Ekipman, Savaş, Pet & Boss', en: 'Gear, Battle, Pet & Boss' },
      sections: [
        {
          heading: { tr: '5. Ekipman, Sandık ve Gacha', en: '5. Equipment, Chest & Gacha' },
          body: {
            tr: 'Her sınıfta 6 ekipman yuvası vardır: Silah, Kask, Zırh, Ayakkabı, Yüzük ve Aksesuar. Nadirlik sistemi “Paslı”dan “Kıyamet”e kadar 22 basamak içerir (Bronz, Gümüş, Altın, Safir, Gölge, Runik, Titan vb.). Sandıklar Ekipman Kartı ile açılır; x1 / x3 / x5 / x10 / x20 toplu açılış desteklenir. Daha zayıf eşyalar otomatik satılabilir; daha iyi ekipman için karşılaştırma popup’ı gösterilir.',
            en: 'Each class has 6 equipment slots: Weapon, Helmet, Armor, Shoes, Ring, and Accessory. The rarity system spans 22 tiers from “Rusty” to “Doomsday” (Bronze, Silver, Gold, Sapphire, Shadow, Runic, Titan, and more). Chests open with Equipment Cards and support batch opens (x1 / x3 / x5 / x10 / x20). Weaker items can be auto-sold; better gear triggers a comparison popup.',
          },
          images: [img(3), img(2), img(4)],
        },
        {
          heading: { tr: '6. Savaş ve Kampanya', en: '6. Battle & Campaign' },
          body: {
            tr: 'Kampanya 1’den 5.000’e kadar aşama içerir; kilometre taşlarında isimli boss’lar yer alır (ör. Dr. Rotfang Alpha, The Eternal Lich). Savaş motoru fizik tabanlı değil, tick tabanlıdır (0.2 sn aralıklarla). Kaynaklar: Can maksimum 5 (zamanla yenilenir); Enerji maksimum 10 (aşama tekrarları için kullanılır, günlük sıfırlanır).',
            en: 'The campaign runs from stage 1 to 5,000, with named bosses at milestones (e.g. Dr. Rotfang Alpha, The Eternal Lich). Combat is tick-based (0.2s intervals), not physics-based. Resources: Health max 5 (regenerates over time); Energy max 10 (used to replay stages, resets daily).',
          },
        },
        {
          heading: { tr: '7. Pet Sistemi', en: '7. Pet System' },
          body: {
            tr: 'Pet sistemi 3. boss’tan sonra (~300. aşama) açılır. Beş pet türü Combo, Dodge, HP%, DPS% ve Armor% buff’ları sağlar. Pet’lerin 1–5 yıldız derecesi ve seviyeleri vardır; güçleri buna göre artar.',
            en: 'Pets unlock after the 3rd boss (~stage 300). Five pet types provide Combo, Dodge, HP%, DPS%, and Armor% buffs. Pets have 1–5 star ratings and levels that increase potency.',
          },
        },
        {
          heading: { tr: '8. Özel Boss Sekmesi', en: '8. Special Boss Tab' },
          body: {
            tr: 'Günlük zorluklar özel ödüllerle sunulur:',
            en: 'Daily challenges grant specific rewards:',
          },
          bullets: {
            tr: [
              'Immortal Colossus — süre sınırlı DPS kontrolü; ödül: altın',
              'Hollow Butcher — sonsuz ölçekleme; ödül: ekipman kartları',
              'Plague Beast — sonsuz ölçekleme; ödül: pet kartları',
            ],
            en: [
              'Immortal Colossus — timed DPS check; reward: gold',
              'Hollow Butcher — infinite scaling; reward: equipment cards',
              'Plague Beast — infinite scaling; reward: pet cards',
            ],
          },
        },
      ],
    },
    {
      title: { tr: 'Para Birimleri, Kayıt & UI', en: 'Currencies, Save & UI' },
      sections: [
        {
          heading: { tr: '9. Para Birimleri', en: '9. Currencies' },
          bullets: {
            tr: [
              'Altın — yükseltme ve otomasyon için ana para birimi',
              'Ekipman Kartı — sandık / gacha açılışları',
              'Pet Kartı — pet edinme ve yükseltme',
            ],
            en: [
              'Gold — primary currency for upgrades and automation',
              'Equipment Card — chest / gacha opens',
              'Pet Card — obtaining and upgrading pets',
            ],
          },
        },
        {
          heading: { tr: '10. Kayıt ve İlerleme Güvenliği', en: '10. Save & Progress Safety' },
          bullets: {
            tr: [
              'Kalıcı JSON kayıt + .bak yedek',
              'Pause / quit ve kritik gameplay olaylarında otomatik kayıt',
              'Offline süre hesabı ve AFK özet popup’ı',
              'Sürüm migrasyonu (ör. eski rebirth alanlarından oyuncu seviyesine geçiş)',
              'Boş/bozuk kayıtta yedekten geri yükleme; ilerlemeyi ezmeme güvenlikleri',
              'Editor’da wipe / restore araçları',
            ],
            en: [
              'Persistent JSON save + .bak backup',
              'Auto-save on pause / quit and critical gameplay events',
              'Offline time calculation with AFK summary popup',
              'Version migration (e.g. legacy rebirth fields → unified player level)',
              'Restore from backup on empty/corrupt saves without wiping progress',
              'Editor wipe / restore tools for development',
            ],
          },
        },
        {
          heading: { tr: '11. UI / UX ve Araç Zinciri', en: '11. UI / UX & Toolchain' },
          body: {
            tr: 'Altı sekmeli tab bar, üstte kaynak barı, sınıf kartları, ordu özeti, sandık akışı, savaş HUD’ı, pet ve boss panelleri bir arada çalışır. Birçok panel Idle Game editor menüleriyle sahneye kurulup hiyerarşi isimleriyle otomatik bağlanır (Army / Chest / Battle / Pet / Boss setup, icon set’ler, item replace popup, upgrade row prefab vb.). Bu yaklaşım hızlı prototipleme ve tutarlı UI iskeleti sağlar; Inspector’da görsel özelleştirme ile runtime metin güncellemesi ayrımına doğru evrilmektedir (ör. ordu kartlarında tasarımı koruyan bayraklar).',
            en: 'A six-tab bar, top resource bar, class cards, army overview, chest flow, battle HUD, and pet/boss panels work together. Many panels are built via Idle Game editor menus and auto-bound by hierarchy names (Army / Chest / Battle / Pet / Boss setup, icon sets, item replace popup, upgrade row prefabs, etc.). This enables fast prototyping and a consistent UI skeleton, evolving toward separating Inspector visual customization from runtime text updates (e.g. design-preserving flags on army cards).',
          },
          images: [img(1), img(5)],
        },
      ],
    },
  ],
}
