import { motion } from 'framer-motion';
import Link from 'next/link';

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
        {/*<div className="block">
          <button
            onClick={() => onNavToggle(true)}
            type="button"
            className={`block text-gray-100 focus:outline-none hover:text-gray-300 focus:text-gray-100 ${
              navIsOpen ? 'hidden' : 'block'
            }`}
            aria-label="OpenMenu"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" />
              <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
              <path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z" />
            </svg>
          </button>
          <button
            onClick={() => onNavToggle(false)}
            type="button"
            className={`text-gray-100 focus:outline-none hover:text-gray-400 focus:text-gray-100 ${
              navIsOpen ? 'block' : 'hidden'
            }`}
            aria-label="CloseMenu"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z" />
            </svg>
          </button>
          </div>*/}
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
          {/* <motion.div variants={linkVariants}>
            <Link href="/recipes">
              <a className="block py-4 text-center text-gray-200 hover:text-gray-400">Recipes</a>
            </Link>
        </motion.div> */}
          <motion.div variants={linkVariants}>
            <a
              className="block py-4 text-center text-gray-200 hover:text-gray-400"
              href="https://steelehoops.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              SteeleHoops
            </a>
          </motion.div>
        </div>
      </motion.nav>

      {/* <div className={`fixed w-full h-screen bg-blue-900 navbar ${navIsOpen ? 'navbar-open' : ''}`}>
        <div className="pt-16">
          <Link href="/nflteasers">
            <a className="block py-4 text-center text-gray-200 hover:text-gray-400">NFL Teasers</a>
          </Link>
          <Link href="/swansonquotes">
            <a className="block py-4 text-center text-gray-200 hover:text-gray-400">
              Swanson Knowledge
            </a>
          </Link>
          <Link href="/recipes">
            <a className="block py-4 text-center text-gray-200 hover:text-gray-400">Recipes</a>
          </Link>
          <a
            className="block py-4 text-center text-gray-200 hover:text-gray-400"
            href="https://steelehoops.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            SteeleHoops
          </a>
        </div>
        </div> */}
    </nav>
  );
};

export default Header;
