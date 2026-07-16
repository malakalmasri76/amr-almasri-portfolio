import useReveal from '../hooks/useReveal'
import './Projects.css'

const PROJECTS = [
  { cls: 'p1', tag: 'Residential Villa', title: 'Jasmine Villa', city: 'Amman', year: '2025' },
  { cls: 'p2', tag: 'Office', title: 'Studio Nuqta', city: 'Dubai', year: '2024' },
  { cls: 'p3', tag: 'Serviced Apartment', title: 'Marsa Suites', city: 'Beirut', year: '2024' },
  { cls: 'p4', tag: 'Café', title: 'Al-Riwaq Café', city: 'Amman', year: '2023' },
  { cls: 'p5', tag: 'Clinic', title: 'Sidra Clinic', city: 'Abu Dhabi', year: '2023' },
  { cls: 'p6', tag: 'Showroom', title: 'Hirfa Gallery', city: 'Dubai', year: '2022' },
]

function ProjectCard({ cls, tag, title, city, year }) {
  const ref = useReveal()
  return (
    <div className="project-card reveal" ref={ref}>
      <div className={`project-visual ${cls}`}>
        <span className="tag">{tag}</span>
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <div className="project-meta">
          <span>{city}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headRef = useReveal()

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Work that carries a different signature</h2>
          </div>
          <p>
            A selection of residential and commercial projects, reflecting a range of styles
            built on the same principles: clarity, warmth, and precision.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
