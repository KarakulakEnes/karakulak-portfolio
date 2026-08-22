import { useLanguage } from '../../context/LanguageContext'
import { education, certificates } from '../../data/education'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'
import { CertificateIcon, LocationIcon } from '../common/Icons'
import './Education.css'

export default function Education() {
  const { t, language } = useLanguage()

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionTitle titleKey="education.title" subtitleKey="education.subtitle" />

        <ScrollReveal>
          <h3 className="education__section-label">{t('education.degrees')}</h3>
          <div className="education__timeline">
            {education.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 150} direction="left">
                <div className="education__item">
                  <div className="education__dot" />
                  <div className="education__card glass-card">
                    <div className="education__card-header">
                      <h4 className="education__institution">{item.institution[language]}</h4>
                      <span className="education__period mono">{item.period}</span>
                    </div>
                    <p className="education__degree">{item.degree[language]}</p>
                    {item.faculty && (
                      <p className="education__faculty">{item.faculty[language]}</p>
                    )}
                    <div className="education__meta">
                      <span className="education__meta-item">
                        <LocationIcon size={13} />
                        {item.location[language]}
                      </span>
                      {item.gpa && <span>{t('education.gpa')}: {item.gpa}</span>}
                      {item.scholarship && <span>{t('education.scholarship')}: {item.scholarship}</span>}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h3 className="education__section-label">{t('education.certificates')}</h3>
          <div className="education__certificates">
            {certificates.map((cert, i) => (
              <div key={i} className="education__cert glass-card">
                <div className="education__cert-icon" aria-hidden="true">
                  <CertificateIcon size={22} />
                </div>
                <div className="education__cert-info">
                  <h4 className="education__cert-name">{cert.name}</h4>
                  <p className="education__cert-issuer">{cert.issuer}</p>
                </div>
                <span className="education__cert-year mono">
                  {cert.expected ? `${t('education.expected')} ${cert.year}` : cert.year}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
