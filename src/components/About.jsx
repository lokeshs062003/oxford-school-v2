import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Trophy, Star, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    desc: 'Qualified, caring teachers',
  },
  {
    icon: Trophy,
    title: 'Academic Excellence',
    desc: 'Consistent 100% results',
  },
  {
    icon: Star,
    title: 'Holistic Growth',
    desc: 'Mind, body and character',
  },
  {
    icon: Shield,
    title: 'Values & Discipline',
    desc: 'Foundation for life',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#1e4db7] text-xs font-semibold tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2b4a] leading-tight mb-6">
              A legacy of holistic education
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              For over two decades, <span className="font-semibold text-gray-700">Oxford Matriculation Higher Secondary School</span> has been a trusted name in education, helping young learners discover their potential through a balanced mix of academic rigour, character development and creativity.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our experienced faculty, smart classrooms and vibrant co-curricular programs ensure every child grows into a confident, compassionate and capable individual — ready for the world ahead.
            </p>
          </motion.div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-[#1e4db7]" />
                </div>
                <h3 className="font-semibold text-[#1a2b4a] text-sm mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
