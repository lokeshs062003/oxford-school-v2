import { GraduationCap } from 'lucide-react';

const quickLinks = ['About Us', 'Academics', 'Facilities', 'Gallery'];
const admissionLinks = ['Apply Now', 'Fee Structure', 'Scholarships', 'Prospectus'];

export default function Footer() {
  return (
    <footer className="bg-[#1e4db7] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white text-sm">Oxford Matric</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Nurturing excellence from LKG to Grade 12 — a community shaping confident, compassionate leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Admissions</h4>
            <ul className="space-y-2.5">
              {admissionLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-white/70 text-sm">
              <li>123 Tiruvethipuram, Cheyyar 604407</li>
              <li>+91 98765 43210</li>
              <li>info@oxfordmatric.edu.in</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-white/60 text-sm text-center">
            © 2026 Oxford Matriculation Higher Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
