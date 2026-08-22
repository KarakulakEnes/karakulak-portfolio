import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getProjectBySlug } from '../data/projects'
import { gymflexDetail } from '../data/gymflex'
import { tetlDetail } from '../data/tetl'
import { odosDetail } from '../data/odos'
import { voidforgeDetail } from '../data/voidforge'
import { greengroceryDetail } from '../data/greengrocery'
import { erpDetail } from '../data/erp'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './ProjectDetail.css'

const detailMap = {
  gymflex: gymflexDetail,
  tetl: tetlDetail,
  odos: odosDetail,
  voidforge: voidforgeDetail,
  greengrocery: greengroceryDetail,
  erp: erpDetail,
}

function DetailImages({ images, alt }) {
  if (!images?.length) return null

  const isPhoneShot = images.some((src) => src.includes('/odos/odos-'))

  return (
    <div
      className={`project-detail__shots ${images.length > 1 ? 'project-detail__shots--multi' : ''} ${isPhoneShot ? 'project-detail__shots--phones' : ''}`}
    >
      {images.map((src, i) => (
        <div key={`${src}-${i}`} className="project-detail__shot glass-card">
          <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

function DetailBlock({ block, language }) {
  return (
    <div className="project-detail__block">
      {block.heading && <h3>{block.heading[language]}</h3>}
      {block.body && <p>{block.body[language]}</p>}
      {block.bullets && (
        <ul className="project-detail__bullets">
          {block.bullets[language].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <DetailImages images={block.images} alt={block.heading?.[language] || ''} />
      {block.subsections?.map((sub) => (
        <div key={sub.heading[language]} className="project-detail__subsection">
          <h4>{sub.heading[language]}</h4>
          {sub.body && <p>{sub.body[language]}</p>}
          {sub.bullets && (
            <ul className="project-detail__bullets">
              {sub.bullets[language].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <DetailImages images={sub.images} alt={sub.heading[language]} />
        </div>
      ))}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { language, t } = useLanguage()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug)
  const [pageIndex, setPageIndex] = useState(0)

  const detail = project?.detailKey ? detailMap[project.detailKey] : null
  const pages = detail?.pages || []
  const currentPage = pages[pageIndex]
  const techList = detail?.technologies || project?.technologies || []

  useEffect(() => {
    setPageIndex(0)
  }, [slug])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pageIndex])

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="project-detail__not-found container">
          <h1>{t('projects.notFound')}</h1>
          <Link to="/" className="btn btn-primary">{t('projects.backToProjects')}</Link>
        </div>
        <Footer />
      </>
    )
  }

  const categoryLabels = {
    games: t('projects.filterGames'),
    website: t('projects.filterWebsite'),
    other: t('projects.filterOther'),
  }

  const goToPage = (index) => {
    if (index >= 0 && index < pages.length) setPageIndex(index)
  }

  return (
    <>
      <Navbar />
      <article className="project-detail">
        <div className="project-detail__hero" style={{ '--project-color': project.color }}>
          <div className="project-detail__hero-bg" />
          <div className="container">
            <div className="project-detail__top">
              <button className="project-detail__back" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {t('projects.backToProjects')}
              </button>
              <span className="project-detail__category">{categoryLabels[project.category]}</span>
            </div>

            <h1 className="project-detail__title">{project.title[language]}</h1>

            <div className="project-detail__meta">
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">{t('projects.role')}</span>
                <span>{project.role[language]}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">{t('projects.context')}</span>
                <span>{project.context[language]}</span>
              </div>
              {pages.length > 0 && (
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">{t('projects.page')}</span>
                  <span>{pageIndex + 1} {t('projects.of')} {pages.length}</span>
                </div>
              )}
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">{t('projects.github')}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__github"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {t('projects.githubCta')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container project-detail__body">
          {pages.length === 0 && (
            <>
              <div className="project-detail__main-image glass-card">
                <img src={project.image} alt={project.title[language]} />
              </div>

              <div className="project-detail__content">
                <div className="project-detail__section">
                  <h2>{t('about.title')}</h2>
                  <p>{project.description[language]}</p>
                </div>

                <div className="project-detail__section">
                  <h2>{t('projects.technologies')}</h2>
                  <div className="project-detail__tech">
                    {techList.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-detail__section">
                  <h2>{t('projects.gallery')}</h2>
                  <div className="project-detail__gallery">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="project-detail__gallery-item glass-card">
                        <img src={img} alt={`${project.title[language]} - ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {pages.length > 0 && currentPage && (
            <div className="project-detail__content project-detail__content--wide">
              {pageIndex === 0 && (
                <div className="project-detail__section">
                  <h2>{t('projects.technologies')}</h2>
                  <div className="project-detail__tech">
                    {techList.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-detail__page-header">
                <h2>{currentPage.title[language]}</h2>
                <span className="project-detail__page-badge mono">
                  {t('projects.page')} {pageIndex + 1}/{pages.length}
                </span>
              </div>

              {currentPage.sections.map((section) => (
                <DetailBlock key={section.heading[language]} block={section} language={language} />
              ))}

              <nav className="project-detail__pagination" aria-label="Pagination">
                <button
                  className="project-detail__page-btn"
                  onClick={() => goToPage(pageIndex - 1)}
                  disabled={pageIndex === 0}
                >
                  ← {t('projects.previous')}
                </button>

                <div className="project-detail__page-numbers">
                  {pages.map((page, i) => (
                    <button
                      key={page.title.en}
                      className={`project-detail__page-num ${i === pageIndex ? 'project-detail__page-num--active' : ''}`}
                      onClick={() => goToPage(i)}
                      aria-label={`${t('projects.page')} ${i + 1}`}
                      title={page.title[language]}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  className="project-detail__page-btn"
                  onClick={() => goToPage(pageIndex + 1)}
                  disabled={pageIndex === pages.length - 1}
                >
                  {t('projects.next')} →
                </button>
              </nav>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </>
  )
}
