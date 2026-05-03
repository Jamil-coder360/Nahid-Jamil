import { motion } from 'framer-motion';

const contacts = [
  { label: 'Email',    value: 'your@email.com' },
  { label: 'GitHub',   value: 'github.com/username' },
  { label: 'LinkedIn', value: 'linkedin.com/in/username' },
  { label: 'Location', value: 'Panchagarh, Bangladesh' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const contactVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.4, 
    rotateZ: -45,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    filter: 'blur(0px)',
    transition: { 
      type: 'spring',
      stiffness: 120,
      damping: 18,
      duration: 0.7
    },
  },
};

export default function Contact() {
  // Predefined delays for animation staggering
  const contactDelays = [0, 0.5, 1, 1.5];
  return (
    <motion.section 
      id="contact" 
      className="relative z-10 w-full py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="max-w-5xl mx-auto px-6 md:px-12 border-t border-white/10 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="overflow-hidden mb-12"
        >
          <p className="text-[11px] uppercase tracking-widest text-emerald-400/80 font-semibold">
            Get in touch
          </p>
        </motion.div>

        <motion.h2 
          className="font-syne font-bold text-4xl md:text-5xl text-white mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's build something great together.
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {contacts.map((c, index) => (
            <motion.div 
              key={c.label} 
              variants={contactVariants}
              whileHover={{ 
                scale: 1.08, 
                y: -12,
                rotateZ: 3,
                boxShadow: '0 25px 50px rgba(16, 185, 129, 0.15)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white/3 border border-white/10 rounded-xl p-6 hover:bg-white/7 hover:border-emerald-400/30 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Background glow */}
              <motion.div
                className="absolute -inset-32 bg-linear-to-r from-emerald-400 via-transparent to-purple-400 opacity-0 blur-3xl -z-10"
                whileHover={{ opacity: 0.1 }}
              />

              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 border border-transparent rounded-xl"
                animate={{
                  borderColor: ['rgba(16, 185, 129, 0)', 'rgba(16, 185, 129, 0.3)', 'rgba(16, 185, 129, 0)'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: contactDelays[index],
                }}
                style={{ pointerEvents: 'none' }}
              />

              <motion.p 
                className="text-[11px] text-white/40 mb-3 uppercase tracking-widest font-semibold group-hover:text-emerald-400/80 transition-colors"
                whileHover={{ x: 4 }}
              >
                {c.label}
              </motion.p>

              <motion.p 
                className="text-base font-semibold text-white break-all group-hover:text-emerald-300 transition-colors"
                whileHover={{ color: '#10b981' }}
              >
                {c.value}
              </motion.p>

              {/* Hover effect line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-emerald-400 to-emerald-400/0"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-white/60 mb-6 text-lg">
            Have a question or want to collaborate?
          </p>
          <motion.a
            href="mailto:your@email.com"
            className="inline-block px-8 py-4 bg-white text-[#0a0a14] font-syne font-bold text-lg rounded-lg overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-emerald-400 -z-10"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
            Send me an email
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
