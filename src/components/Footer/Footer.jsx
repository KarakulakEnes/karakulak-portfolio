import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { personalInfo } from '../../data/skills'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo mono">{'<NEK/>'}</span>
            <p className="footer__name">{personalInfo.name}</p>
          </div>

          <div className="footer__links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__link">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">
              LinkedIn
            </a>
            <Link to="/contact" className="footer__link">
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {personalInfo.name}. {t('footer.rights')}</p>
          <p className="footer__built mono">{t('footer.built')}</p>
        </div>
      </div>
    </footer>
  )
}
