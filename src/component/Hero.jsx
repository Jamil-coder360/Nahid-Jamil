import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8 
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8, rotateZ: -10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative z-10 w-full">
      <motion.div
        className="w-full pt-20 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 text-xs text-white/65 mb-8"
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for work
        </motion.div>

        <motion.div 
          variants={titleVariants}
          className="mb-6"
        >
          <h1 className="font-syne font-bold text-5xl md:text-6xl leading-tight tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            MD Nahid<br />
            <motion.span 
              className="text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Hasan Jamil
            </motion.span>
          </h1>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.p 
            className="text-white/60 text-lg leading-relaxed max-w-2xl"
            whileInView={{ opacity: 1 }}
          >
            React ও HTML/CSS/JS দিয়ে সুন্দর, responsive web interface তৈরি করি।
            <motion.span 
              className="block mt-2 text-white/40"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Clean code আর user-friendly design আমার প্রধান লক্ষ্য।
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex gap-4 flex-wrap"
        >
          <motion.button
            className="relative overflow-hidden bg-white text-[#0a0a14] font-dm font-semibold text-sm px-8 py-3 rounded-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-emerald-400 opacity-0"
              whileHover={{ opacity: 0.1 }}
            />
            Resume দেখুন
          </motion.button>
          <motion.a 
            href="#contact"
            className="bg-white/10 border border-white/30 text-white font-dm font-semibold text-sm px-8 py-3 rounded-lg hover:border-white/50 transition-colors group overflow-hidden relative"
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(255,255,255,0.6)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white opacity-0"
              whileHover={{ opacity: 0.05 }}
            />
            Contact করুন
          </motion.a>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 right-10 w-20 h-20 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-32 h-32 bg-purple-400/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
