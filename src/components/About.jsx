import { motion } from 'framer-motion'
import logoFull from '../assets/logo_full.png'
import { fadeUp, staggerContainer } from '../lib/motion'
import './About.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <motion.div
          className="about-frame"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-logo-card">
            <img src={logoFull} alt="Amr Almasri" className="about-logo" />
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>About</motion.p>
          <motion.h2 className="about-title" variants={fadeUp}>
            Engineering that listens before it designs
          </motion.h2>
          <motion.p variants={fadeUp}>
            My path into interior design began with a degree in architecture, before I
            specialized in the precise relationship between space, light, and material. I
            believe every space carries its own question — my job is to find its answer, not
            impose a ready-made one.
          </motion.p>
          <motion.p variants={fadeUp}>
            I work with clients from the first sketch through to handover, alongside a
            carefully chosen team of contractors and craftsmen, to make sure what's drawn on
            paper appears just as precisely in the built space.
          </motion.p>
          <motion.div className="quote" variants={fadeUp}>
            "Good design isn't noticed right away — it's felt every day."
          </motion.div>
          <motion.div className="about-sig" variants={fadeUp}>
            Amr Almasri — Studio Founder
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}