import useReveal from '../hooks/useReveal'
import './About.css'

export default function About() {
  const frameRef = useReveal()
  const copyRef = useReveal()

  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="about-frame reveal" ref={frameRef}>
          <div className="initials">A.M</div>
        </div>

        <div className="about-copy reveal" ref={copyRef}>
          <p className="eyebrow">About</p>
          <h2 className="about-title">Engineering that listens before it designs</h2>
          <p>
            My path into interior design began with a degree in architecture, before I
            specialized in the precise relationship between space, light, and material. I
            believe every space carries its own question — my job is to find its answer, not
            impose a ready-made one.
          </p>
          <p>
            I work with clients from the first sketch through to handover, alongside a
            carefully chosen team of contractors and craftsmen, to make sure what's drawn on
            paper appears just as precisely in the built space.
          </p>
          <div className="quote">"Good design isn't noticed right away — it's felt every day."</div>
          <div className="about-sig">Amr Almasri — Studio Founder</div>
        </div>
      </div>
    </section>
  )
}
