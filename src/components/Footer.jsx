import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="wrap">
      <span>© {year} Amr Almasri — Interior Design Studio</span>
      <span>Gaza · Palestine</span>
    </footer>
  )
}
