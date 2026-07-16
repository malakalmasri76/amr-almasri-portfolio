import useReveal from '../hooks/useReveal'
import './Services.css'

const SERVICES = [
  {
    n: '01 / Service',
    title: 'Full Interior Design',
    body: "From the initial floor plan to every piece of furniture and light fixture, for your residential or commercial project in full.",
  },
  {
    n: '02 / Service',
    title: 'Renovation & Refurbishment',
    body: 'Updating existing spaces without losing their character, while improving layout efficiency and natural light.',
  },
  {
    n: '03 / Service',
    title: 'Consulting & Site Coordination',
    body: 'On-site supervision of contractors and craftsmen to ensure execution matches the approved design with precision.',
  },
  {
    n: '04 / Service',
    title: 'Custom Furniture & Details',
    body: "Designing and producing exclusive furniture and lighting pieces, made to measure for each project's identity.",
  },
]

function ServiceCard({ n, title, body }) {
  const ref = useReveal()
  return (
    <div className="service reveal" ref={ref}>
      <div className="n">{n}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default function Services() {
  const headRef = useReveal()

  return (
    <section className="section plaster" id="services">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <p className="eyebrow">Services</p>
            <h2>Four paths, one purpose</h2>
          </div>
          <p>
            Whether you're starting from scratch or reshaping an existing space, I offer a
            path tailored to your project's scale and needs.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
