import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smile, BookOpen, Building2, GraduationCap, Award } from 'lucide-react';

const programs = [
  {
    icon: Smile,
    grade: 'LKG & UKG',
    title: 'Kindergarten',
    desc: 'Play-based learning that builds curiosity, language and social skills in a nurturing environment.',
  },
  {
    icon: BookOpen,
    grade: 'Grades 1–5',
    title: 'Primary School',
    desc: 'Strong foundations in literacy, numeracy and inquiry through joyful, activity-driven classrooms.',
  },
  {
    icon: Building2,
    grade: 'Grades 6–8',
    title: 'Middle School',
    desc: 'Conceptual learning across sciences, humanities and languages with critical thinking focus.',
  },
  {
    icon: GraduationCap,
    grade: 'Grades 9–10',
    title: 'High School',
    desc: 'Rigorous Matriculation curriculum preparing students for board exams with personalised mentoring.',
  },
  {
    icon: Award,
    grade: 'Grades 11–12',
    title: 'Higher Secondary',
    desc: 'Science, Commerce and Arts streams with career counselling and competitive exam coaching.',
  },
];

export default function Academics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="academics" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#1e4db7] text-xs font-semibold tracking-widest uppercase mb-3">Academic Programs</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2b4a]">Learning at every stage</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#1e4db7] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#1e4db7] text-xs font-semibold tracking-widest uppercase mb-2">{p.grade}</p>
              <h3 className="font-display text-xl font-bold text-[#1a2b4a] mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
