import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Simple, transparent admission process',
  'Personalised counselling for every family',
  'Scholarships for meritorious students',
  'Mid-year admissions in select grades',
];

const grades = [
  'LKG', 'UKG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
];

export default function Admission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ studentName: '', parentName: '', grade: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ studentName: '', parentName: '', grade: '', phone: '' });
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="pt-6"
          >
            <p className="text-[#1e4db7] text-xs font-semibold tracking-widest uppercase mb-3">Admissions</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2b4a] mb-6">
              Admissions Open 2026–27
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Join a community that values academic excellence, character and creativity. Fill out the enquiry form and our admissions team will reach out within 24 hours.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#1e4db7] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[#1a2b4a] mb-1">Enquiry Form</h3>
              <p className="text-gray-400 text-sm mb-7">We'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-green-700 text-sm text-center font-medium">
                  ✅ Thank you! We'll reach out within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      required
                      value={form.studentName}
                      onChange={e => setForm({ ...form, studentName: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e4db7]/30 focus:border-[#1e4db7] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Parent Name</label>
                    <input
                      type="text"
                      placeholder="Parent / Guardian"
                      required
                      value={form.parentName}
                      onChange={e => setForm({ ...form, parentName: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e4db7]/30 focus:border-[#1e4db7] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Class / Grade</label>
                    <select
                      required
                      value={form.grade}
                      onChange={e => setForm({ ...form, grade: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e4db7]/30 focus:border-[#1e4db7] transition-all appearance-none bg-white"
                    >
                      <option value="">Select a grade</option>
                      {grades.map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e4db7]/30 focus:border-[#1e4db7] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1e4db7] text-white font-semibold py-3.5 rounded-xl hover:bg-[#1a3fa0] transition-colors mt-1"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
