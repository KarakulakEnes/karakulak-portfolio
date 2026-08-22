import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { projects } from '../../data/projects'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'
import ProjectCard from './ProjectCard'
import './Projects.css'

const filters = [
  { key: 'all', labelKey: 'projects.filterAll' },
  { key: 'games', labelKey: 'projects.filterGames' },
  { key: 'website', labelKey: 'projects.filterWebsite' },
  { key: 'other', labelKey: 'projects.filterOther' },
]

export default function Projects() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle titleKey="projects.title" subtitleKey="projects.subtitle" />

        <ScrollReveal>
          <div className="projects__filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`projects__filter-btn ${activeFilter === filter.key ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {t(filter.labelKey)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="projects__grid">
          {filteredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100} direction="scale">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
