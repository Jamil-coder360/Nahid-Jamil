import { motion } from 'framer-motion';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
const contacts = [
  { label: 'Email',    value: 'jamil595nhj@gmail.com' },
  { label: 'GitHub',   value: 'https://github.com/Jamil-coder360' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/md-nahid-hasan-jamil-a21086386' },
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

  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4r19exx",
      "template_qw80g2e",
      form.current,
      "8Nm_DgWh1d9CzcqKu"
    )
    .then(() => {
      toast.success("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      toast.warning("Failed to send message.");
    });
};
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
      <motion.div className="w-full border-t border-white/10 pt-16 pb-20">
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

              <motion.a 
                className="text-base font-semibold text-white break-all group-hover:text-emerald-300 transition-colors"
                whileHover={{ color: '#10b981' }}
                href={c.value}
              >
                {c.value}
              </motion.a>

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

        {/* Contact Form */}
        <motion.div
          className="mt-20 pt-16 border-t border-white/10 grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <h3 className="font-syne font-bold text-3xl text-white mb-6">
              Send a Message
            </h3>
            <p className="text-white/60 mb-8 text-lg leading-relaxed max-w-md">
              Have a question or want to collaborate? Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-white/60 font-medium">Your Name</label>
                <input 
                  type="text" 
                  name='user_name'
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/60 font-medium">Your Email</label>
                <input 
                name='user_email'
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-white/60 font-medium">Subject</label>
              <input 
                type="text" 
                name='subject'
                id="subject" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-white/60 font-medium">Message</label>
              <textarea 
                id="message" 
                name='message'
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-[#0a0a14] font-syne font-bold text-lg rounded-xl overflow-hidden relative group hover:bg-emerald-400 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </span>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
