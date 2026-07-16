import useReveal from '../hooks/useReveal'
import './DimDivider.css'

// The site's signature element: a horizontal architectural "dimension line"
// (as seen on technical drawings) that draws itself in on scroll.
export default function DimDivider({ label }) {
  const ref = useReveal()

  return (
    <div className="dim-divider reveal" ref={ref}>
      <span className="dim-label">{label}</span>
      <svg viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
        <line className="dim-line" x1="2" y1="12" x2="98" y2="12" />
        <line className="dim-line" x1="2" y1="6" x2="2" y2="18" />
        <line className="dim-line" x1="98" y1="6" x2="98" y2="18" />
      </svg>
    </div>
  )
}
