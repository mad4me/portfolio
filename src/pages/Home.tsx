import { motion } from 'framer-motion';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>Olá!</span>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Romão Shray
        </h1>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
          Programação de Sistemas de Informação
        </h2>
        <p className="text-center md:text-start text-xs md:text-base mr-24">
          Gosto de criar algo que resolva problemas e dedico-me à programação para aplicar e testar continuamente as minhas habilidades.
        </p>
        <Link to="./romao-cv.pdf" target="_blank">
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
            className="rounded-3xl w-max border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500 transition-colors duration-200"
          >
            Instalar CV
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center to-black overflow-hidden"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/romao-shray.webp"
          alt="profile"
          width="100%"
          height="100%"
        />
      </motion.div>

    </section>
  );
};
