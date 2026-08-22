import { useLanguage } from '../../context/LanguageContext'
import './SectionTitle.css'

export default function SectionTitle({ titleKey, subtitleKey }) {
  const { t } = useLanguage()

  return (
    <div className="section-title">
      <span className="section-title__number mono">{'//'}</span>
      <h2 className="section-title__heading">{t(titleKey)}</h2>
      <p className="section-title__subtitle">{t(subtitleKey)}</p>
      <div className="section-title__line" />
    </div>
  )
}
