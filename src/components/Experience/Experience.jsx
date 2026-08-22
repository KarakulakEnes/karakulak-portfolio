import { useLanguage } from '../../context/LanguageContext'
import { experiences } from '../../data/experience'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'
import './Experience.css'

export default function Experience() {
  const { t, language } = useLanguage()

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle titleKey="experience.title" subtitleKey="experience.subtitle" />

        <div className="experience__list">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 150} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="experience__card glass-card">
                <div className="experience__card-accent" />
                <div className="experience__card-content">
                  <div className="experience__header">
                    <div>
                      <h3 className="experience__title">{exp.title[language]}</h3>
                      <p className="experience__company">{typeof exp.company === 'object' ? exp.company[language] : exp.company}</p>
                    </div>
                    <span className="experience__period mono">
                      {exp.period.replace('Present', t('experience.present'))}
                    </span>
                  </div>

                  <p className="experience__description">{exp.description[language]}</p>

                  <div className="experience__skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
