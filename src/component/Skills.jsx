import { motion } from 'framer-motion';

const skills = [
  { name: 'React',        level: 85, label: 'Advanced',     bar: 'from-[#61dafb] to-[#a78bfa]' },
  { name: 'JavaScript',  level: 80, label: 'Advanced',     bar: 'from-[#f7df1e] to-[#f97316]' },
  { name: 'HTML / CSS',  level: 90, label: 'Expert',       bar: 'from-[#f97316] to-[#ef4444]' },
  { name: 'Vue.js',      level: 65, label: 'Intermediate', bar: 'from-[#42b883] to-[#34d399]' },
  { name: 'Tailwind CSS',level: 75, label: 'Advanced',     bar: 'from-[#38bdf8] to-[#818cf8]' },
  { name: 'Git',         level: 70, label: 'Intermediate', bar: 'from-[#f43f5e] to-[#a78bfa]' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5, 
    y: 40, 
    rotateZ: -10,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateZ: 0,
    filter: 'blur(0px)',
    transition: { 
      type: 'spring',
      stiffness: 120,
      damping: 20,
      duration: 0.6
    },
  },
};

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="relative z-10 w-full py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="max-w-5xl mx-auto px-6 md:px-12 border-t border-white/10 pt-16">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="overflow-hidden mb-12"
        >
          <p className="text-[11px] uppercase tracking-widest text-emerald-400/80 font-semibold">
            Technical skills
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((s) => (
            <motion.div 
              key={s.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateZ: 2,
                boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)'
              }}
              className="bg-white/4 border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-emerald-400/30 transition-all duration-300 group overflow-hidden relative"
            >
              <motion.div
                className="absolute -inset-32 bg-gradient-to-r from-emerald-400 via-transparent to-purple-400 opacity-0 blur-3xl"
                whileHover={{ opacity: 0.1 }}
              />
              
              <div className="relative z-10">
                <p className="text-sm font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {s.name}
                </p>
                <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-linear-to-r ${s.bar} rounded-full shadow-lg shadow-emerald-500/50`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.4, 
                      duration: 1.2, 
                      type: 'spring',
                      stiffness: 60,
                      damping: 20
                    }}
                  />
                </div>
                <p className="text-[11px] text-white/40 mt-2.5 group-hover:text-white/60 transition-colors">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
