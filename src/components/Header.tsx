import { IconRobot } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { INavLink } from '../types/common';

export const Header = () => {
  const navLink: INavLink[] = [
    { name: 'Sobre mim', path: '/about' },
    /*{ name: 'Competências', path: '/skills' },
    { name: 'Educação', path: '/education' },*/
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contactar', path: '/contact' },
  ];

  return (
    <motion.header className="w-full sticky md:px-20 top-0 bg-gray-950 z-20 mb-4 flex text-white items-center justify-between p-4">
      <Link to="/">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-2 font-bold text-md md:text-3xl text-teal-400"
        >
          <IconRobot width={35} height={35} />
          <span>Romão Shray</span>
        </motion.div>
      </Link>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden lg:flex space-x-10"
      >
        {navLink.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-white font-bold hover:text-teal-400 duration-200"
          >
            {item.name}
          </Link>
        ))}
      </motion.nav>

    </motion.header>
  );
};
