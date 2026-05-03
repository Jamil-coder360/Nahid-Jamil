import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,20,0.95)] backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.span
        className="font-syne font-bold text-lg tracking-tight cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Nahid Jamil
      </motion.span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8">
        {links.map((l, index) => {
          const sectionId = l.toLowerCase();
          const isActive = activeSection === sectionId;

          return (
            <motion.li
              key={l}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <motion.a
                href={`#${sectionId}`}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive ? 'text-emerald-400' : 'text-white/50 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sectionId);
                }}
              >
                {l}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            </motion.li>
          );
        })}
      </ul>

      {/* Mobile hamburger */}
      <motion.button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="block w-5 h-0.5 bg-white transition-all"
          animate={menuOpen ? { rotate: 45, translateY: 8 } : { rotate: 0, translateY: 0 }}
        ></motion.span>
        <motion.span
          className="block w-5 h-0.5 bg-white transition-all"
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
        ></motion.span>
        <motion.span
          className="block w-5 h-0.5 bg-white transition-all"
          animate={menuOpen ? { rotate: -45, translateY: -8 } : { rotate: 0, translateY: 0 }}
        ></motion.span>
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-[rgba(10,10,20,0.98)] backdrop-blur-xl border-b border-white/10 md:hidden shadow-xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {links.map((l, index) => {
              const sectionId = l.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={l}
                  href={`#${sectionId}`}
                  className={`block px-6 py-4 text-sm border-b border-white/5 transition-colors ${
                    isActive ? 'text-emerald-400 bg-emerald-400/5' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  {l}
                  {isActive && (
                    <motion.span
                      className="float-right text-emerald-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      •
                    </motion.span>
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
