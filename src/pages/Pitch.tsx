import { motion } from 'framer-motion';
import { SectionMotion } from '../common/motion/Section';

export const Pitch = () => {
  const { section } = SectionMotion;
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6 max-w-[80ch] justify-center"
    >
      
      
  
    </motion.section>
  );
};
