import { motion } from 'framer-motion'
import { images } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import SectionHeading from './SectionHeading'
import Photo from './Photo'

// Asymmetrical editorial photo gallery (Composition C): one larger feature
// photograph paired with smaller supporting images, with reveal animations.
//
// HONESTY: this section only renders when enough GENUINE photographs are
// supplied (src set on >= 2 gallery images). With only placeholders present
// it is intentionally omitted so the site never looks like a wall of empty
// frames. Drop real .webp files into public/images/nesla/gallery/ and set
// their `src` in portfolioData.js → images.gallery to activate it.
export default function PhotoGallery() {
  const reduce = useReducedMotionPreference()
  const real = images.gallery.filter((img) => img.src)

  // Hide entirely until real photos exist.
  if (real.length < 2) return null

  const feature = real[0]
  const supports = real.slice(1, 3)

  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="border-t border-hairline bg-ink-900 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <SectionHeading
          eyebrow="04 / A Visual Moment"
          title="Frames from the journey."
          intro="A short visual feature — real photographs, presented as a small editorial set rather than a generic grid."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Feature image */}
          <motion.div {...fade(0)} className="md:row-span-2">
            <Photo
              image={feature}
              ratio="aspect-[4/5] md:aspect-[3/4] md:h-full"
              className="rounded-[2px] border border-hairline"
            />
          </motion.div>

          {/* Supporting images */}
          {supports.map((img, i) => (
            <motion.div key={i} {...fade(0.08 * (i + 1))}>
              <Photo
                image={img}
                ratio="aspect-[4/3]"
                className="rounded-[2px] border border-hairline"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
