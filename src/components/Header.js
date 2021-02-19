import { motion } from 'framer-motion';
import Link from 'next/link';
import * as Panelbear from '@panelbear/panelbear-js';

//TODO: nav open/close animation with framer-motion?
// https://www.smashingmagazine.com/2020/10/introduction-to-framer-motion/
const iconVariants = {
  opened: {
    rotate: 135,
  },
  closed: {
    rotate: 0,
  },
};

const menuVariants = {
  opened: {
    top: '4rem',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  closed: {
    top: '-100vh',
  },
};

const linkVariants = {
  opened: {
    opacity: 1,
    y: 50,
  },
  closed: {
    opacity: 0,
    y: 0,
  },
};

const Header = ({ navIsOpen, onNavToggle }) => {

  const trackExternal = ({ href, name }) => {
    const trackName = `External${name}`;
    Panelbear.track(trackName);
  };

  return (
    <nav className="relative z-20 nav">
      <div className="flex items-center justify-between px-6 py-2 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Link href="/">
            <a className="text-2xl font-semibold text-gray-100 lg:text-4xl">lucasb.dev</a>
          </Link>
        </motion.div>
        <motion.button
          variants={iconVariants}
          animate={navIsOpen ? 'opened' : 'closed'}
          onClick={() => onNavToggle(!navIsOpen)}
          className="focus:outline-none"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
        </motion.button>
      </div>

      <motion.nav
        className="fixed top-0 flex flex-col w-screen h-screen bg-nav-bg align-center"
        initial={false}
        variants={menuVariants}
        animate={navIsOpen ? 'opened' : 'closed'}
      >
        <div className="pt-4">
          <motion.div variants={linkVariants}>
            <Link href="/nflteasers">
              <a className="block py-4 text-center text-gray-200 hover:text-gray-400">
                NFL Teasers
              </a>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link href="/swansonquotes">
              <a className="block py-4 text-center text-gray-200 hover:text-gray-400">
                Swanson Knowledge
              </a>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <a
              className="block py-4 text-center text-gray-200 hover:text-gray-400"
              href="https://steelehoops.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={() => trackExternal({ href: 'https://steelehoops.com', name: 'steelehoops' })}
            >
              SteeleHoops
            </a>
          </motion.div>
          <motion.div variants={linkVariants}>
            <a
              className="block py-4 text-center text-gray-200 hover:text-gray-400"
              href="https://recipeazy.app"
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={() => trackExternal({ href: 'https://recipeazy.app', name: 'recipeazy' })}
            >
              Recipeazy
            </a>
          </motion.div>
        </div>
      </motion.nav>
    </nav>
  );
};

export default Header;
