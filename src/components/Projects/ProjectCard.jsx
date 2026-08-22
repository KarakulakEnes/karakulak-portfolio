import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { language, t } = useLanguage()

  const categoryLabels = {
    games: t('projects.filterGames'),
    website: t('projects.filterWebsite'),
    other: t('projects.filterOther'),
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
      style={{ '--project-color': project.color }}
    >
      <div className="project-card__inner">
        <div className={`project-card__image-wrapper ${project.imageFit === 'contain' ? 'project-card__image-wrapper--contain' : ''}`}>
          <img
            src={project.image}
            alt={project.title[language]}
            className="project-card__image"
          />
          <div className="project-card__overlay">
            <span className="project-card__view">{t('projects.viewDetails')}</span>
          </div>
        </div>

        <div className="project-card__content">
          <div className="project-card__meta">
            <span className="project-card__category">
              {categoryLabels[project.category]}
            </span>
          </div>
          <h3 className="project-card__title">{project.title[language]}</h3>
          <p className="project-card__desc">{project.shortDescription[language]}</p>
          <div className="project-card__tech">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tag">+{project.technologies.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
