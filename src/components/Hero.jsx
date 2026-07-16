import './Hero.css'


const STATS = [
  { num: '5', label: 'Years of interior design experience' },
  { num: '30', label: 'Projects completed at home and abroad' },
  { num: '3', label: 'Specialist execution teams under his oversight' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <svg className="blueprint" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(185,141,79,.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#grid)" />
        <path d="M660 90 H1120 V560 H900 V680 H660 Z" fill="none" stroke="rgba(185,141,79,.28)" strokeWidth="1.5" />
        <path d="M700 90 V560" fill="none" stroke="rgba(185,141,79,.16)" strokeWidth="1" />
        <path d="M900 300 H1120" fill="none" stroke="rgba(185,141,79,.16)" strokeWidth="1" />
        <circle cx="780" cy="180" r="3" fill="rgba(185,141,79,.5)" />
        <circle cx="1000" cy="420" r="3" fill="rgba(185,141,79,.5)" />
      </svg>

      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Interior Design Engineer — Gaza · Palestine</p>
            <h1>
              Redrawing the <em>relationship</em>
              <br />
              between people and place
            </h1>
            <p className="lead">
              I design interiors that read like their owner's story — where the precision of a
              technical drawing meets the warmth of handmade detail. For villas, offices, and
              hospitality projects.
            </p>
            <div className="cta-row">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#contact" className="btn ghost">Book a Consultation</a>
            </div>
          </div>

          <div className="hero-meta">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
