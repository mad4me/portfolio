import { motion } from 'framer-motion';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { IconBrandCodepen } from '@tabler/icons-react';

export const Pitch = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'O meu pitch!';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6 max-w-[80ch] justify-center"
    >
      <SectionHeader
              icon={<IconBrandCodepen />}
              label="Pitch"
              description={sectionDescription}
            />
      
  
    </motion.section>
  );
};
