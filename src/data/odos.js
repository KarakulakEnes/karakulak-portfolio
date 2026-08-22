const img = (n) => `/images/projects/odos/odos-${n}.png`

export const odosDetail = {
  technologies: [
    'Expo 54',
    'React Native',
    'Java 17',
    'Spring Boot',
    'PostgreSQL / PostGIS',
    'JWT',
    'Python / GeoPandas',
    'Docker',
  ],
  pages: [
    {
      title: { tr: 'Özet & Proje Açıklaması', en: 'Overview & Description' },
      sections: [
        {
          heading: { tr: 'Kısa Özet', en: 'Short Summary' },
          body: {
            tr: 'ODOS - İstanbul için eğim duyarlı yaya navigasyon uygulaması. OSM + DEM ile üretilmiş ~1.7M düğümlük yürüyüş grafı üzerinde özel A* ile en kısa, dengeli ve en kolay rotaları hesaplar; canlı GPS navigasyon, yükselti profili ve sosyal özelliklerle uçtan uca bir ürün sunar.',
            en: 'ODOS - a slope-aware pedestrian navigation app for Istanbul. On a ~1.7M-node walking graph built from OSM + DEM, a custom A* computes shortest, balanced, and easiest routes; live GPS navigation, elevation profiles, and social features deliver an end-to-end product.',
          },
          images: [img(2)],
        },
        {
          heading: { tr: 'Proje Açıklaması', en: 'Project Description' },
          body: {
            tr: 'ODOS, yürüyüş sırasında eğimi hesaba katan bir yaya navigasyon uygulamasıdır. Klasik “en kısa mesafe” yaklaşımının ötesinde, Tobler yürüyüş hızı modeli ve yükselti cezalarıyla alternatif rotalar üretir; kullanıcıya en kısa, dengeli ve en kolay olmak üzere üç profil sunar.',
            en: 'ODOS is a pedestrian navigation app that accounts for slope while walking. Beyond classic “shortest distance,” it uses the Tobler hiking-speed model and elevation penalties to generate alternatives—offering three profiles: shortest, balanced, and easiest.',
          },
          images: [img(1)],
          subsections: [
            {
              heading: { tr: 'Mobil', en: 'Mobile' },
              body: {
                tr: 'Mobil tarafta Expo / React Native ile harita üzerinde rota planlama, eğime göre renklenen polyline’lar, interaktif yükselti profili ve GPS tabanlı canlı navigasyon yer alır. Rota dışına çıkıldığında otomatik yeniden planlama (reroute) yapılır; yürüyüş sonunda oturum özeti ve kaydetme akışı çalışır.',
                en: 'On mobile, Expo / React Native powers map-based route planning, slope-colored polylines, an interactive elevation profile, and GPS live navigation. Going off-route triggers automatic re-planning (reroute); after a walk, a session summary and save flow run.',
              },
              images: [img(5), img(3)],
            },
            {
              heading: { tr: 'Backend & Veri Hattı', en: 'Backend & Data Pipeline' },
              body: {
                tr: 'Backend, Spring Boot üzerinde PostGIS’ten yüklenen asimetrik yürüyüş grafını bellekte tutar ve özel A* ile rota üretir. Aynı serviste JWT kimlik doğrulama, kaydedilen rotalar, topluluk (takip, feed, bildirimler), sağlık verisi senkronu ve kullanıcı medyası da bulunur. Veri hattı OSM yaya ağı + DEM’den GPKG’ye, oradan PostGIS’e uzanır; canlı isteklerde DEM okunmaz — maliyetler kenarlara önceden yazılmıştır.',
                en: 'The Spring Boot backend keeps an asymmetric walking graph loaded from PostGIS in memory and routes with a custom A*. The same service provides JWT auth, saved routes, community (follow, feed, notifications), health-data sync, and user media. The data pipeline goes from OSM pedestrian network + DEM to GPKG, then PostGIS; live requests do not read DEM—costs are precomputed on edges.',
              },
            },
            {
              heading: { tr: 'Kapsam', en: 'Scope' },
              body: {
                tr: 'Proje, bitirme çalışması kapsamında uçtan uca tasarlanıp geliştirilmiştir: veri pipeline’ı, routing motoru, REST API, mobil istemci ve Docker ile dağıtım.',
                en: 'Built end-to-end as a graduation project: data pipeline, routing engine, REST API, mobile client, and Docker-based deployment.',
              },
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Öne Çıkan Özellikler', en: 'Key Features' },
      sections: [
        {
          heading: { tr: 'Öne Çıkan Özellikler', en: 'Key Features' },
          bullets: {
            tr: [
              'Eğim duyarlı çoklu rota: En Kısa / Dengeli / En Kolay',
              'Tobler tabanlı süre tahmini ve tırmanış / kalori metrikleri',
              'Eğime göre renkli rota çizimi (yeşil → kırmızı)',
              'Yükselti profili ↔ harita senkronu (shapePoints)',
              'Canlı navigasyon: ilerleme, ETA, off-route algılama, otomatik reroute',
              'Google Places ile destinasyon arama (TR odaklı)',
              'JWT auth (access + refresh), profil / banner yükleme',
              'Kaydedilen rotalar, paylaşım ve deep link',
              'Topluluk: takip, feed, bildirimler, popüler rota hikâyeleri',
              'Adımsayar ile günlük aktivite senkronu',
              'TR / EN dil desteği',
              'Misafir kullanıcılar için harita erişimi; sosyal özellikler auth ile kilitli',
            ],
            en: [
              'Slope-aware multi-route: Shortest / Balanced / Easiest',
              'Tobler-based duration estimate and climb / calorie metrics',
              'Slope-colored route drawing (green → red)',
              'Elevation profile ↔ map sync (shapePoints)',
              'Live navigation: progress, ETA, off-route detection, auto reroute',
              'Destination search via Google Places (TR-focused)',
              'JWT auth (access + refresh), profile / banner upload',
              'Saved routes, sharing, and deep links',
              'Community: follow, feed, notifications, popular route stories',
              'Daily activity sync with pedometer',
              'TR / EN language support',
              'Map access for guests; social features locked behind auth',
            ],
          },
          subsections: [
            {
              heading: { tr: 'Topluluk', en: 'Community' },
              body: {
                tr: 'Kullanıcı arama, takip, paylaşılan rotalar ve bildirimlerle sosyal keşif.',
                en: 'Social discovery with user search, follow, shared routes, and notifications.',
              },
              images: [img(4)],
            },
            {
              heading: { tr: 'Profil & Kaydedilen Rotalar', en: 'Profile & Saved Routes' },
              body: {
                tr: 'Profil / banner yükleme, takipçi istatistikleri ve “Rotalarım / Kaydedilenler” sekmeleri.',
                en: 'Profile / banner upload, follower stats, and “My Routes / Saved” tabs.',
              },
              images: [img(6)],
            },
          ],
        },
      ],
    },
    {
      title: { tr: 'Teknolojiler & Teknik Vurgu', en: 'Technologies & Highlights' },
      sections: [
        {
          heading: { tr: 'Kullanılan Teknolojiler', en: 'Technologies Used' },
          subsections: [
            {
              heading: { tr: 'Mobil', en: 'Mobile' },
              body: {
                tr: 'Expo 54 · React Native · React Navigation · React Native Maps · Reanimated · Expo Location / Sensors · AsyncStorage · React Native Paper · SVG / Chart Kit',
                en: 'Expo 54 · React Native · React Navigation · React Native Maps · Reanimated · Expo Location / Sensors · AsyncStorage · React Native Paper · SVG / Chart Kit',
              },
            },
            {
              heading: { tr: 'Backend', en: 'Backend' },
              body: {
                tr: 'Java 17 · Spring Boot · Spring Security · JWT (JJWT) · Spring Data JPA · PostgreSQL / PostGIS · AWS S3 (medya) · Docker',
                en: 'Java 17 · Spring Boot · Spring Security · JWT (JJWT) · Spring Data JPA · PostgreSQL / PostGIS · AWS S3 (media) · Docker',
              },
            },
            {
              heading: { tr: 'Veri & Routing', en: 'Data & Routing' },
              body: {
                tr: 'OSM · DEM (GeoTIFF) · GeoPandas / Python pipeline · GPKG · in-memory graph · özel A* · spatial grid snap · Tobler maliyet modeli',
                en: 'OSM · DEM (GeoTIFF) · GeoPandas / Python pipeline · GPKG · in-memory graph · custom A* · spatial grid snap · Tobler cost model',
              },
            },
            {
              heading: { tr: 'Altyapı', en: 'Infrastructure' },
              body: {
                tr: 'Docker · Render Postgres · DuckDNS üzerinden public API',
                en: 'Docker · Render Postgres · public API via DuckDNS',
              },
            },
          ],
        },
        {
          heading: { tr: 'Teknik Vurgu', en: 'Technical Highlights' },
          bullets: {
            tr: [
              '~1.7M node / 1.8M edge İstanbul Avrupa yakası yaya grafı',
              'Asimetrik kenar maliyetleri (u→v ≠ v→u)',
              'Grid tabanlı nearest-node snap (lineer tarama yerine)',
              'Bellek / doğruluk dengesi: kenar geometrisi varsayılan kapalı, heap ~2.8 GB JVM limiti',
              'Navigasyon için mühendislik odaklı API sözleşmesi: coordinates, elevationProfile, slopePolylineChunks, shapePoints',
            ],
            en: [
              '~1.7M nodes / 1.8M edges pedestrian graph for Istanbul’s European side',
              'Asymmetric edge costs (u→v ≠ v→u)',
              'Grid-based nearest-node snap (instead of linear scan)',
              'Memory / accuracy trade-off: edge geometry off by default, ~2.8 GB JVM heap limit',
              'Engineering-focused navigation API contract: coordinates, elevationProfile, slopePolylineChunks, shapePoints',
            ],
          },
        },
      ],
    },
  ],
}
