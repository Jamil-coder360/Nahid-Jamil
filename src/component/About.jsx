import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  }),
};

export default function About() {
  const textContent = "আমি একজন passionate frontend developer যিনি React এবং modern web technologies নিয়ে কাজ করি। Clean, performant, এবং accessible web application তৈরি করতে ভালোবাসি। নতুন technology শেখা এবং real-world problem solve করা আমার passion।";
  
  return (
    <motion.section 
      id="about" 
      className="relative z-10 w-full py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div className="w-full border-t border-white/10 pt-16">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="overflow-hidden"
        >
          <p className="text-[11px] uppercase tracking-widest text-emerald-400/80 font-semibold mb-8">
            About me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }}
          >
            <p className="text-white/70 text-lg leading-relaxed">
              {textContent.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline mr-1"
                >
                  {word + ' '}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
            className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-400/10 to-purple-400/10 border border-white/10"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-transparent to-purple-400/5"
              animate={{
                x: [0, 100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
