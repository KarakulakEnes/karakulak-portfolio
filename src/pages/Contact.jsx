import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { personalInfo } from '../data/skills'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ParticleBackground from '../components/common/ParticleBackground'
import { LocationIcon } from '../components/common/Icons'
import './Contact.css'

export default function Contact() {
  const { t, language } = useLanguage()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${personalInfo.email}`
    }
  }

  const cards = [
    {
      key: 'email',
      href: `mailto:${personalInfo.email}`,
      label: t('contact.email'),
      value: personalInfo.email,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      key: 'linkedin',
      href: personalInfo.linkedin,
      external: true,
      label: 'LinkedIn',
      value: 'enes-karakulak',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      key: 'github',
      href: personalInfo.github,
      external: true,
      label: 'GitHub',
      value: 'KarakulakEnes',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      key: 'location',
      label: t('contact.location'),
      value: personalInfo.location[language],
      icon: <LocationIcon size={22} />,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <ParticleBackground />
        <div className="contact-page__glow contact-page__glow--1" />
        <div className="contact-page__glow contact-page__glow--2" />

        <div className="contact-page__inner container">
          <h1 className="contact-page__title">{t('contact.title')}</h1>
          <p className="contact-page__subtitle">{t('contact.subtitle')}</p>

          <div className="contact-page__layout">
            <article className="contact-page__profile glass-card">
              <div className="contact-page__avatar-wrap">
                <img
                  src="/images/profile.png"
                  alt={personalInfo.name}
                  className="contact-page__avatar"
                />
              </div>
              <h2 className="contact-page__name">{personalInfo.name}</h2>
              <p className="contact-page__role">{t('about.role')}</p>
              <p className="contact-page__lead">{t('contact.lead')}</p>
              <div className="contact-page__profile-actions">
                <button type="button" className="btn btn-primary" onClick={copyEmail}>
                  {copied ? t('contact.copied') : t('contact.copyEmail')}
                </button>
                <div className="contact-page__cv-row">
                  <a
                    href="/cv/cv-tr.pdf"
                    download="Nurettin-Enes-Karakulak-CV-TR.pdf"
                    className="btn btn-outline"
                  >
                    {t('contact.cvTr')}
                  </a>
                  <a
                    href="/cv/cv-en.pdf"
                    download="Nurettin-Enes-Karakulak-CV-EN.pdf"
                    className="btn btn-outline"
                  >
                    {t('contact.cvEn')}
                  </a>
                </div>
              </div>
            </article>

            <div className="contact-page__cards">
              {cards.map((card) => {
                const content = (
                  <>
                    <span className="contact-page__card-icon" aria-hidden="true">
                      {card.icon}
                    </span>
                    <span>
                      <strong>{card.label}</strong>
                      <em>{card.value}</em>
                    </span>
                  </>
                )

                if (card.href) {
                  return (
                    <a
                      key={card.key}
                      href={card.href}
                      className="contact-page__card glass-card"
                      {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {content}
                    </a>
                  )
                }

                return (
                  <div key={card.key} className="contact-page__card glass-card">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
