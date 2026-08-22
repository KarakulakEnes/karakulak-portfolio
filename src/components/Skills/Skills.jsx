import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { skills } from '../../data/skills'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'
import { BoltIcon, CodeIcon, GlobeIcon, IdeaIcon, ToolsIcon } from '../common/Icons'
import './Skills.css'

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level mono">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div className="skill-bar__fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { t, language } = useLanguage()

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle titleKey="skills.title" subtitleKey="skills.subtitle" />

        <div className="skills__grid">
          <ScrollReveal direction="left">
            <div className="skills__column glass-card">
              <h3 className="skills__column-title">
                <span className="skills__icon" aria-hidden="true"><CodeIcon /></span>
                {t('skills.languages')}
              </h3>
              {skills.languages.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 100} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="skills__column glass-card">
              <h3 className="skills__column-title">
                <span className="skills__icon" aria-hidden="true"><BoltIcon /></span>
                {t('skills.frameworks')}
              </h3>
              {skills.frameworks.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 100} />
              ))}

              <h3 className="skills__column-title skills__column-title--sub">
                <span className="skills__icon" aria-hidden="true"><ToolsIcon /></span>
                {t('skills.tools')}
              </h3>
              {skills.tools.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 100 + 200} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="skills__column glass-card">
              <h3 className="skills__column-title">
                <span className="skills__icon" aria-hidden="true"><IdeaIcon /></span>
                {t('skills.soft')}
              </h3>
              <div className="skills__tags">
                {skills.soft[language].map((skill) => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>

              <h3 className="skills__column-title skills__column-title--sub">
                <span className="skills__icon" aria-hidden="true"><GlobeIcon /></span>
                {t('skills.spoken')}
              </h3>
              <div className="skills__languages">
                {skills.spoken[language].map((item) => (
                  <div key={item.lang} className="skills__lang-item">
                    <span className="skills__lang-name">{item.lang}</span>
                    <span className="skills__lang-level">{item.level}</span>
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
