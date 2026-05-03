import { motion } from 'framer-motion';
import { useCursorAnimation } from '../hooks/useCursorAnimation';

export default function CursorFollower() {
  const mousePosition = useCursorAnimation();

  return (
    <>
      {/* Outer glow circle */}
      <motion.div
        className="fixed w-12 h-12 border-2 border-emerald-400/30 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed w-3 h-3 bg-emerald-400 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
}
