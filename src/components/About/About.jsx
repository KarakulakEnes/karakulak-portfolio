import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'
import { LocationIcon } from '../common/Icons'
import './About.css'

export default function About() {
  const { t, language } = useLanguage()

  const stats = [
    { value: '10+', label: { tr: 'Proje', en: 'Projects' } },
    { value: '3+', label: { tr: 'Yıl Deneyim', en: 'Years Experience' } },
    { value: '10+', label: { tr: 'Sertifika', en: 'Certificates' } },
    { value: '6+', label: { tr: 'Teknoloji', en: 'Technologies' } },
  ]

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle titleKey="about.title" subtitleKey="about.subtitle" />

        <div className="about__grid">
          <ScrollReveal direction="left">
            <div className="about__image-wrapper">
              <div className="about__image-border">
                <div className="about__image">
                  <img
                    src="/images/profile.png"
                    alt="Nurettin Enes Karakulak"
                    className="about__avatar"
                  />
                </div>
              </div>
              <div className="about__image-decoration" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="about__content">
              <div className="about__info-tags">
                <span className="tag">{t('about.role')}</span>
                <span className="tag about__location-tag">
                  <LocationIcon size={13} />
                  {t('about.location')}
                </span>
              </div>

              <p className="about__text">{t('about.p1')}</p>
              <p className="about__text">{t('about.p2')}</p>

              <div className="about__stats">
                {stats.map((stat, i) => (
                  <div key={i} className="about__stat glass-card">
                    <span className="about__stat-value gradient-text">{stat.value}</span>
                    <span className="about__stat-label">{stat.label[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
