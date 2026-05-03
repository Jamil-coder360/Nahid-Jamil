import { motion } from 'framer-motion';

const items = [
  {
    icon: '🎓',
    nodeBg: 'bg-[rgba(167,139,250,0.15)]',
    yearBg: 'bg-[rgba(167,139,250,0.15)] text-[#a78bfa]',
    year: '2020 – 2024',
    degree: 'BSc in Computer Science & Engineering',
    school: 'University Name, Bangladesh',
    desc: 'Major in Software Engineering। CGPA: 3.75/4.00। Dean\'s List award। Final year thesis on Machine Learning applications।',
    side: 'right',
  },
  {
    icon: '📚',
    nodeBg: 'bg-[rgba(97,218,251,0.15)]',
    yearBg: 'bg-[rgba(97,218,251,0.15)] text-[#61dafb]',
    year: '2018 – 2020',
    degree: 'HSC – Science',
    school: 'College Name, Panchagarh',
    desc: 'GPA: 5.00/5.00। Physics, Chemistry, Mathematics। Board scholarship প্রাপ্ত।',
    side: 'left',
  },
  {
    icon: '🏫',
    nodeBg: 'bg-[rgba(66,184,131,0.15)]',
    yearBg: 'bg-[rgba(66,184,131,0.15)] text-[#42b883]',
    year: '2016 – 2018',
    degree: 'SSC – Science',
    school: 'School Name, Panchagarh',
    desc: 'GPA: 5.00/5.00। সকল বিষয়ে A+ প্রাপ্ত। Junior Science Olympiad বিজয়ী।',
    side: 'right',
  },
];

function TlCard({ item, index }) {
  return (
    <motion.div 
      className="bg-white/3 border border-white/10 rounded-2xl p-5 hover:bg-white/7 hover:border-emerald-400/30 transition-all relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring', stiffness: 100, damping: 18 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <motion.div
        className="absolute -inset-40 bg-linear-to-r from-emerald-400 via-transparent to-purple-400 opacity-0 blur-3xl -z-10"
        whileHover={{ opacity: 0.08 }}
      />

      <span className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full mb-3 ${item.yearBg}`}>
        {item.year}
      </span>
      <h3 className="font-syne font-bold text-sm text-white mb-2 group-hover:text-emerald-300 transition-colors">
        {item.degree}
      </h3>
      <p className="text-[13px] text-white/50 mb-2 group-hover:text-white/60 transition-colors">
        {item.school}
      </p>
      <p className="text-[12px] text-white/40 leading-relaxed group-hover:text-white/50 transition-colors">
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function Education() {
  return (
    <motion.section 
      id="education" 
      className="relative z-10 w-full py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="w-full border-t border-white/10 pt-16">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="overflow-hidden mb-14"
        >
          <p className="text-[11px] uppercase tracking-widest text-emerald-400/80 font-semibold">
            Education
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400/50 via-emerald-400/20 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          />
          
          <div className="flex flex-col gap-12">
            {items.map((item, i) => (
              <motion.div 
                key={i} 
                className="grid grid-cols-[1fr_80px_1fr] items-center gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Left side */}
                {item.side === 'left' ? (
                  <motion.div 
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1, duration: 0.6 }}
                  >
                    <TlCard item={item} index={i} />
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex items-center justify-end"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <motion.div 
                      className="w-8 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                    />
                  </motion.div>
                )}

                {/* Node */}
                <motion.div 
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center text-2xl border-2 border-emerald-400/50 z-20 ${item.nodeBg} flex-shrink-0`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.15 + 0.05, 
                    type: 'spring', 
                    stiffness: 150,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <motion.span
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                </motion.div>

                {/* Right side */}
                {item.side === 'right' ? (
                  <motion.div 
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1, duration: 0.6 }}
                  >
                    <TlCard item={item} index={i} />
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex items-center justify-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <motion.div 
                      className="w-8 h-0.5 bg-gradient-to-l from-emerald-400/50 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile list */}
        <motion.div 
          className="md:hidden flex flex-col gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              className="flex gap-4 items-start"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <motion.div 
                className={`w-14 h-14 rounded-full flex items-center justify-center text-xl border-2 border-emerald-400/50 shrink-0 ${item.nodeBg}`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.12 + 0.1, 
                  type: 'spring',
                  stiffness: 150,
                  damping: 20
                }}
              >
                {item.icon}
              </motion.div>
              <TlCard item={item} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
