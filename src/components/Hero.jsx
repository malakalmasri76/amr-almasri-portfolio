import { motion } from 'framer-motion'
import heroImg from '../assets/hero.jpg'
import { fadeUp, fadeIn, staggerContainer } from '../lib/motion'
import './Hero.css'

const STATS = [
  { num: '5', label: 'Years of interior design experience' },
  { num: '30', label: 'Projects completed at home and abroad' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.img
        src={heroImg}
        alt=""
        className="hero-bg"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="hero-overlay" aria-hidden="true" />


      <div className="wrap">
        <motion.div
          className="hero-grid"
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          animate="show"
        >
          <div>
            <motion.p className="eyebrow" variants={fadeUp}>
              Interior Design Engineer — Gaza · Palestine
            </motion.p>
            <motion.h1 variants={fadeUp}>
              Redrawing the <em>relationship</em>
              <br />
              between people and place
            </motion.h1>
            <motion.p className="lead" variants={fadeUp}>
              I design interiors that read like their owner's story — where the precision of a
              technical drawing meets the warmth of handmade detail. For villas, offices, and
              hospitality projects.
            </motion.p>
            <motion.div className="cta-row" variants={fadeUp}>
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#contact" className="btn ghost">Book a Consultation</a>
            </motion.div>
          </div>

          <motion.div className="hero-meta" variants={fadeIn}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}