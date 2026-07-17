import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { client, urlFor } from '../lib/sanity'
import { fadeUp, staggerContainer } from '../lib/motion'
import './Projects.css'

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function ProjectCard({ title, category, city, year, coverImage, gallery }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const images = [coverImage, ...(gallery || [])].filter(Boolean)

  const startCycle = () => {
    if (images.length <= 1) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length)
    }, 900)
  }

  const stopCycle = () => {
    clearInterval(intervalRef.current)
    setActiveIndex(0)
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  return (
    <motion.div
      className="project-card"
      variants={cardVariant}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
    >
      <div className="project-visual">
        {images.map((img, i) => (
          <div
            key={img?.asset?._ref || i}
            className={`project-visual-layer ${i === activeIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${urlFor(img)})` }}
          />
        ))}
        <span className="tag">{category}</span>
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <div className="project-meta">
          <span>{city}</span>
          <span>{year}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(`*[_type == "project"] | order(order asc){
        _id, title, category, city, year, coverImage, gallery
      }`)
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load projects:', err)
        setLoading(false)
      })
  }, [])

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <motion.p className="eyebrow" variants={fadeUp}>Projects</motion.p>
            <motion.h2 variants={fadeUp}>Work that carries a different signature</motion.h2>
          </div>
          <motion.p variants={fadeUp}>
            A selection of residential and commercial projects, reflecting a range of styles
            built on the same principles: clarity, warmth, and precision.
          </motion.p>
        </motion.div>

        {loading && <p className="projects-status">Loading projects…</p>}

        <motion.div
          className="projects-grid"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((p) => (
            <ProjectCard key={p._id} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}