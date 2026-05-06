import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiHtml5, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, 
  SiGit, SiGithub, SiFigma, SiVercel,
  SiRedux, SiReactquery, SiBootstrap, SiJson, SiRender
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <SiReact />,
    skills: [
      { name: 'React', level: 90, icon: <SiReact className="text-[#61dafb]" />, bar: 'from-[#61dafb] to-[#1d4ed8]' },
      { name: 'Next.js', level: 80, icon: <SiNextdotjs className="text-white" />, bar: 'from-white/20 to-white/80' },
      { name: 'JavaScript', level: 85, icon: <SiJavascript className="text-[#f7df1e]" />, bar: 'from-[#f7df1e] to-[#f59e0b]' },
      { name: 'TypeScript', level: 75, icon: <SiTypescript className="text-[#3178c6]" />, bar: 'from-[#3178c6] to-[#1e40af]' },
      { name: 'HTML5 / CSS3', level: 95, icon: <div className="flex gap-1"><SiHtml5 className="text-[#e34f26]" /><FaCss3Alt className="text-[#1572b6]" /></div>, bar: 'from-[#e34f26] to-[#1572b6]' },
      { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-[#38bdf8]" />, bar: 'from-[#38bdf8] to-[#0ea5e9]' },
      { name: 'Redux', level: 80, icon: <SiRedux className="text-[#764abc]" />, bar: 'from-[#764abc] to-[#543b9a]' },
      { name: 'TanStack Query', level: 75, icon: <SiReactquery className="text-[#ff4154]" />, bar: 'from-[#ff4154] to-[#d61a2c]' },
      { name: 'Bootstrap', level: 70, icon: <SiBootstrap className="text-[#7952b3]" />, bar: 'from-[#7952b3] to-[#563d7c]' },
      { name: 'Framer Motion', level: 70, icon: <SiFramer className="text-white" />, bar: 'from-purple-400 to-pink-500' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    icon: <SiNodedotjs />,
    skills: [
      { name: 'Node.js', level: 75, icon: <SiNodedotjs className="text-[#339933]" />, bar: 'from-[#339933] to-[#166534]' },
      { name: 'Express', level: 70, icon: <SiExpress className="text-white" />, bar: 'from-white/10 to-white/60' },
      { name: 'MongoDB', level: 65, icon: <SiMongodb className="text-[#47a248]" />, bar: 'from-[#47a248] to-[#166534]' },
      { name: 'Firebase', level: 80, icon: <SiFirebase className="text-[#ffca28]" />, bar: 'from-[#ffca28] to-[#ea580c]' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Design',
    icon: <VscVscode />,
    skills: [
      { name: 'Git & GitHub', level: 85, icon: <div className="flex gap-1"><SiGit className="text-[#f05032]" /><SiGithub className="text-white" /></div>, bar: 'from-[#f05032] to-[#333]' },
      { name: 'Figma', level: 75, icon: <SiFigma className="text-[#f24e1e]" />, bar: 'from-[#f24e1e] to-[#a259ff]' },
      { name: 'VS Code', level: 90, icon: <VscVscode className="text-[#007acc]" />, bar: 'from-[#007acc] to-[#1e40af]' },
      { name: 'JSON', level: 95, icon: <SiJson className="text-white" />, bar: 'from-white/20 to-white/80' },
      { name: 'Render', level: 70, icon: <SiRender className="text-[#46e3b7]" />, bar: 'from-[#46e3b7] to-[#2d9a7a]' },
      { name: 'Vercel', level: 85, icon: <SiVercel className="text-white" />, bar: 'from-white/20 to-white/80' },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const skillVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 }
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <motion.section 
      id="skills" 
      className="relative z-10 w-full py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-emerald-400/50"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">
              Expertise
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              >
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Skillset</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/50 max-w-xl text-lg leading-relaxed"
              >
                Explore the tools and technologies I use to build exceptional digital experiences. Select a category to see more.
              </motion.p>
            </div>

            {/* Premium Tab Switcher */}
            <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 flex items-center gap-2 group ${
                    activeTab === category.id ? 'text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/20 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </span>
                  <span className="relative z-10 hidden sm:block">
                    {category.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Grid Container */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {activeCategory.skills.map((s) => (
                <motion.div 
                  key={s.name}
                  variants={skillVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-emerald-400/30 transition-all duration-300 h-full"
                >
                  {/* Background Glow */}
                  <div className="absolute -inset-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-emerald-400/5 group-hover:to-emerald-400/10 rounded-2xl transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 group-hover:bg-emerald-400/10 transition-all duration-300 text-2xl">
                        {s.icon}
                      </div>
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                        {s.level}%
                      </span>
                    </div>
                    
                    <h4 className="text-base font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                      {s.name}
                    </h4>
                    
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${s.bar} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${s.level}%` }}
                        transition={{ 
                          delay: 0.2, 
                          duration: 1.2, 
                          type: 'spring',
                          stiffness: 50,
                          damping: 20
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}