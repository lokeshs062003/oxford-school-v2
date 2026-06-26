import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1170&auto=format&fit=crop"
          alt="School classroom background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/65 to-blue-950/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Shaping Tomorrow's Leaders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
          >
            Oxford Matriculation
            <span className="block">Higher Secondary School</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl leading-8 mb-12"
          >
            Nurturing excellence from LKG to Grade 12 — where tradition meets modern learning to shape tomorrow's leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-slate-950/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Enquiry <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white font-semibold px-7 py-3.5 rounded-full bg-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
