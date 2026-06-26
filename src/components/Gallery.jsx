import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    label: null,
    className: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
    label: 'Sports day',
  },
  {
    src: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=600&q=80',
    label: 'Science Fair',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    label: 'Annual Day',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    label: 'Classroom Activities',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#1e4db7] text-xs font-semibold tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2b4a]">Life at Oxford Matric</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {/* Large feature image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-1 row-span-2 rounded-2xl overflow-hidden"
          >
            <img
              src={galleryImages[0].src}
              alt="School life"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Other images */}
          {galleryImages.slice(1).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl overflow-hidden relative group"
            >
              <img
                src={img.src}
                alt={img.label || 'Gallery'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {img.label && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1e4db7]/80 to-transparent">
                  <span className="text-white text-sm font-medium">{img.label}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
