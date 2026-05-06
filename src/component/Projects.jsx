import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ecommerce from "../assets/ecommerce.png"
import resturant from "../assets/resturant.png"
import watch from "../assets/watch.png"
const projects = [
  {
    tag: 'React',
    tagStyle: 'bg-[rgba(97,218,251,0.15)] text-[#61dafb] border-[#61dafb]/30',
    title: 'E-Commerce ',
    desc: 'React দিয়ে তৈরি full-featured admin dashboard। Charts, data tables, এবং responsive layout সহ।',
    image: ecommerce,
    githubLink: 'https://github.com/Jamil-coder360/E-commerce',
    liveLink: 'https://e-commerce-five-orpin-12.vercel.app/',
  },
  {
    tag: 'HTML/CSS/JS',
    tagStyle: 'bg-[rgba(255,120,50,0.15)] text-[#ff7832] border-[#ff7832]/30',
    title: 'Cheffest Resturant',
    desc: 'Pure HTML, CSS ও Vanilla JS দিয়ে তৈরি responsive portfolio site। Dark mode support সহ।',
    image: resturant,
    githubLink: 'https://github.com/Jamil-coder360/Cheffest-Rseturent',
    liveLink: 'https://jamil-coder360.github.io/Cheffest-Rseturent/',
  },
  {
    tag: 'Vue.js',
    tagStyle: 'bg-[rgba(66,184,131,0.15)] text-[#42b883] border-[#42b883]/30',
    title: 'Cassi Watch',
    desc: 'Vue.js দিয়ে তৈরি drag-and-drop task management application। Local storage integration সহ।',
    image: watch,
    githubLink: 'https://github.com/Jamil-coder360/Watch-Store',
    liveLink: 'https://watch-store-virid.vercel.app/',
  },
  {
    tag: 'Vue.js',
    tagStyle: 'bg-[rgba(66,184,131,0.15)] text-[#42b883] border-[#42b883]/30',
    title: 'Cassi Watch',
    desc: 'Vue.js দিয়ে তৈরি drag-and-drop task management application। Local storage integration সহ।',
    image: watch,
    githubLink: 'https://github.com/Jamil-coder360/Watch-Store',
    liveLink: 'https://watch-store-virid.vercel.app/',
  },
  {
    tag: 'Vue.js',
    tagStyle: 'bg-[rgba(66,184,131,0.15)] text-[#42b883] border-[#42b883]/30',
    title: 'Cassi Watch',
    desc: 'Vue.js দিয়ে তৈরি drag-and-drop task management application। Local storage integration সহ।',
    image: watch,
    githubLink: 'https://github.com/Jamil-coder360/Watch-Store',
    liveLink: 'https://watch-store-virid.vercel.app/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' },
  visible: {
    opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.7 },
  },
};

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="relative z-10 w-full py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Section Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-[120px] -z-10 pointer-events-none"></div>

      <div className="border-t border-white/10 pt-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center md:items-start"
        >
          <p className="text-[12px] uppercase tracking-[0.2em] text-emerald-400 mb-3 font-bold">
            Portfolio
          </p>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 1, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 28 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="pb-8"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title} className="h-auto!">
              <motion.div
                variants={projectVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="mt-5 group relative bg-[#0a0a14]/60 border border-white/10 rounded-[2.5rem] p-3 hover:bg-[#1a1a24] hover:border-emerald-500/30 transition-all duration-500 flex flex-col hover:shadow-[0_0_50px_-15px_rgba(16,185,129,0.3)] z-100 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full rounded-[1.8rem] overflow-hidden z-10">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a14] via-[#0a0a14]/20 to-transparent opacity-90 z-10 transition-opacity duration-500 group-hover:opacity-100"></div>
                  
                  {/* Hover Glassmorphism & Actions */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[6px] bg-black/40">
                    <motion.a 
                      href={p.githubLink} 
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 text-white shadow-2xl backdrop-blur-md" 
                      title="Source Code"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href={p.liveLink} 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full hover:bg-emerald-500/30 shadow-2xl backdrop-blur-md" 
                      title="Live Preview"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-md border ${p.tagStyle}`}>
                      {p.tag}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="pt-6 pb-4 px-4 flex flex-col flex-1 relative z-10">
                  <h3 className="font-syne font-bold text-[19px] text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 flex items-center justify-between">
                    {p.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-emerald-400">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed flex-1 font-light group-hover:text-white/70 transition-colors">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
