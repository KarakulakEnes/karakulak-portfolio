import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Navbar from '../components/Navbar/Navbar'
import ParticleBackground from '../components/common/ParticleBackground'
import './NotFound.css'

export default function NotFound() {
  const { t } = useLanguage()
  const location = useLocation()

  return (
    <main className="not-found">
      <Navbar />
      <ParticleBackground />
      <div className="not-found__glow not-found__glow--1" />
      <div className="not-found__glow not-found__glow--2" />
      <div className="not-found__glow not-found__glow--3" />
      <div className="not-found__grid" aria-hidden="true" />

      <div className="not-found__content">
        <p className="not-found__eyebrow mono">
          <span className="not-found__pulse" />
          {t('notFound.code')}
        </p>

        <div className="not-found__visual" aria-hidden="true">
          <div className="not-found__orbit not-found__orbit--1" />
          <div className="not-found__orbit not-found__orbit--2" />
          <div className="not-found__digits">
            <span className="not-found__digit" data-text="4">4</span>
            <span className="not-found__digit not-found__digit--zero" data-text="0">0</span>
            <span className="not-found__digit" data-text="4">4</span>
          </div>
          <div className="not-found__satellite">
            <div className="not-found__sat-body" />
            <div className="not-found__sat-panel not-found__sat-panel--l" />
            <div className="not-found__sat-panel not-found__sat-panel--r" />
            <div className="not-found__sat-signal" />
          </div>
        </div>

        <h1 className="not-found__title">{t('notFound.title')}</h1>
        <p className="not-found__subtitle">{t('notFound.subtitle')}</p>

        <div className="not-found__terminal glass-card">
          <div className="not-found__terminal-bar">
            <span />
            <span />
            <span />
            <em className="mono">route.log</em>
          </div>
          <pre className="not-found__terminal-body mono">
            <code>
              <span className="nf-dim">$</span> navigate <span className="nf-str">"{location.pathname}"</span>{'\n'}
              <span className="nf-err">✗</span> {t('notFound.terminalError')}{'\n'}
              <span className="nf-dim">$</span> suggest --recover{'\n'}
              <span className="nf-ok">→</span> {t('notFound.terminalHint')}
              <span className="not-found__cursor">▌</span>
            </code>
          </pre>
        </div>

        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary not-found__cta">
            {t('notFound.home')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" />
            </svg>
          </Link>
          <Link to="/" state={{ scrollTo: 'projects' }} className="btn btn-outline not-found__cta">
            {t('notFound.projects')}
          </Link>
        </div>
      </div>
    </main>
  )
}
