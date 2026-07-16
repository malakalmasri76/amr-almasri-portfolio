# Amr Almasri — Interior Design Portfolio

A single-page portfolio site built with React + Vite.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Structure

```
src/
  components/       one component + one CSS file per section
  hooks/useReveal.js scroll-reveal IntersectionObserver hook
  App.jsx            assembles the page
  index.css          design tokens (colors, type) + shared classes
```

## Customizing

- **Content**: edit the arrays/text at the top of each file in `src/components/`
  (e.g. `PROJECTS` in `Projects.jsx`, `SERVICES` in `Services.jsx`).
- **Colors & type**: all design tokens live in `src/index.css` under `:root`.
- **Contact info**: update `CONTACT_LINKS` in `src/components/Contact.jsx`.
