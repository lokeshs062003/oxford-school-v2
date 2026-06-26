import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const SocialIcon = ({ children, href }) => (
  <a
    href={href}
    className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#1e4db7] hover:bg-[#1e4db7] hover:text-white transition-all duration-200"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">{children}</svg>
  </a>
);

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#1e4db7] text-xs font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2b4a]">Visit us or get in touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {[
              { icon: MapPin, label: 'Address', value: '123 Tiruvethipuram, Cheyyar, Tamil Nadu 604407, India' },
              { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
              { icon: Mail, label: 'Email', value: 'info@oxfordmatric.edu.in' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-[#1e4db7]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1a2b4a] text-sm mb-0.5">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {/* Facebook */}
              <SocialIcon href="#">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon href="#">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
              </SocialIcon>
              {/* YouTube */}
              <SocialIcon href="#">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
              </SocialIcon>
              {/* Twitter/X */}
              <SocialIcon href="#">
                <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2" fill="none"/>
              </SocialIcon>
            </div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-96"
          >
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.941600983676!2d79.5408818!3d12.651833799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52d7739f979e5f%3A0xd4c68385b5c68e6a!2sOxford%20Matriculation%20Higher%20secondary%20School!5e0!3m2!1sen!2sin!4v1782415557338!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
