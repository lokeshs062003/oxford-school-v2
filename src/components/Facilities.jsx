import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Cpu, FlaskConical, LibraryBig, Trophy, Bus, ShieldCheck, Music } from 'lucide-react';

const facilities = [
  { icon: Monitor, label: 'Smart Classrooms' },
  { icon: Cpu, label: 'Computer Lab' },
  { icon: FlaskConical, label: 'Science Lab' },
  { icon: LibraryBig, label: 'Library' },
  { icon: Trophy, label: 'Sports & Games' },
  { icon: Bus, label: 'School Transport' },
  { icon: ShieldCheck, label: 'CCTV Security' },
  { icon: Music, label: 'Cultural Activities' },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#1e4db7] text-xs font-semibold tracking-widest uppercase mb-3">Facilities</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2b4a]">World-class infrastructure</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <f.icon className="w-6 h-6 text-[#1e4db7]" />
              </div>
              <span className="text-sm font-medium text-[#1a2b4a] text-center">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
