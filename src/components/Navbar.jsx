import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#1e4db7] rounded-full flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-[#1a2b4a] text-sm leading-tight">Oxford Matriculation</div>
              <div className="text-[10px] text-gray-500 leading-tight">Higher Secondary School</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-[#1e4db7] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admissions"
              className="ml-2 bg-[#1e4db7] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#1a3fa0] transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-[#1e4db7] hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#admissions"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 bg-[#1e4db7] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center hover:bg-[#1a3fa0] transition-colors"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
