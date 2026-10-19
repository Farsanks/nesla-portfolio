import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projectsData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import Photo from './Photo'

// Editorial case-study listing. A large FEATURE project (Composition A),
// followed by alternating split rows (Composition B) — never a generic
// three-column card grid. Each project links to its own case-study route.
function KindBadge({ kind }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-green-line px-3 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-emerald">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
      {kind}
    </span>
  )
}

function FeatureProject({ project, fade }) {
  return (
    <motion.article {...fade(0)} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <Link
        to={`/projects/${project.slug}`}
        className="group relative lg:col-span-7"
        aria-label={`View case study: ${project.title}`}
      >
        <div
          aria-hidden="true"
          className="absolute -inset-4 -z-10 opacity-50 blur-2xl"
          style={{
            backgroundImage:
              'radial-gradient(60% 60% at 40% 40%, rgba(0,200,120,0.18), rgba(0,0,0,0) 70%)',
          }}
        />
        <Photo
          image={project.image}
          ratio="aspect-[16/10]"
          className="rounded-[2px] border border-hairline transition-colors duration-300 group-hover:border-emerald"
        />
      </Link>
      <div className="lg:col-span-5">
        <KindBadge kind={project.kind} />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
          {project.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-paper sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-mist">{project.brief}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="group mt-6 inline-flex items-center gap-2 text-sm text-emerald transition-colors"
        >
          View case study
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  )
}

function ProjectRow({ project, index, fade }) {
  const flip = index % 2 === 1
  return (
    <motion.article
      {...fade(index * 0.05)}
      className={`grid grid-cols-1 gap-8 border-t border-hairline py-12 lg:grid-cols-12 lg:gap-12 lg:py-16`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={`group relative lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}
        aria-label={`View case study: ${project.title}`}
      >
        <Photo
          image={project.image}
          ratio="aspect-[4/3]"
          className="rounded-[2px] border border-hairline transition-colors duration-300 group-hover:border-emerald"
        />
      </Link>
      <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
        <KindBadge kind={project.kind} />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
          {project.category}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-paper sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-mist">{project.brief}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="group mt-5 inline-flex items-center gap-2 text-sm text-emerald transition-colors"
        >
          View case study
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  const reduce = useReducedMotionPreference()
  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const feature = projects.find((p) => p.featured) || projects[0]
  const rest = projects.filter((p) => p.slug !== feature.slug)

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
            07 / Practice Work
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
            Practice projects, clearly labeled.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist">
            Concept, practice, and learning exercises — never presented as
            professional client work. Each one is a step in the journey.
          </p>
        </div>

        <div className="mt-12">
          <FeatureProject project={feature} fade={fade} />
          {rest.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} fade={fade} />
          ))}
        </div>
      </div>
    </section>
  )
}
