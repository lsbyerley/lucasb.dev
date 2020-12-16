import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import useGetGithub from '@/hooks/useGetGithub';

export default function Home() {
  const name = 'Lucas Byerley';
  const title = 'Front End Web Developer';
  // const { data, error } = useGetGithub();
  // console.log('LOG:', data, error);

  const social = [
    {
      icon: '#icon-905',
      color: 'text-white',
      label: 'Twitter',
      href: 'https://twitter.com/lsbyerley',
    },
    {
      icon: '#icon-907',
      color: 'text-white',
      label: 'Github',
      href: 'https://github.com/lsbyerley',
    },
    //{ icon: '#icon-901', color: 'text-white', label: 'Email', href: fe.encode('blahblah@gmail.com') },
    {
      icon: '#icon-928',
      color: 'text-white',
      label: 'Codepen',
      href: 'https://codepen.io/lsbyerley/',
    },
    {
      icon: '#icon-90b',
      color: 'text-white',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lucas-b-9a817170',
    },
  ];

  return (
    <>
      <Head>
        <title>lucasb.dev</title>
        <link rel="preload" as="image" href="/bg.jpg"></link>
      </Head>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 40 40"
        display="none"
        width="0"
        height="0"
      >
        <symbol id="icon-901" viewBox="0 0 40 40">
          <path d="M34.9,30.5V15.6c-0.4,0.4-0.8,0.9-1.4,1.2c-3.4,2.7-6.2,4.8-8.2,6.6c-0.6,0.5-1.1,0.9-1.6,1.2c-0.4,0.3-0.9,0.6-1.7,0.9 c-0.7,0.3-1.4,0.5-2,0.5l0,0c-0.6,0-1.2-0.2-2-0.5c-0.7-0.3-1.2-0.6-1.7-0.9c-0.4-0.3-0.9-0.7-1.6-1.2c-2.1-1.7-4.8-3.8-8.2-6.6 c-0.5-0.4-0.9-0.8-1.4-1.2v14.9c0,0.2,0.1,0.3,0.2,0.4C5.7,31,5.9,31.1,6,31.1h28.4c0.2,0,0.3-0.1,0.4-0.2 C34.8,30.8,34.9,30.7,34.9,30.5L34.9,30.5z M34.9,10.2V9.7c0,0,0-0.1,0-0.2c0-0.1,0-0.2-0.1-0.2c-0.1,0-0.1,0-0.1-0.2 c0-0.1-0.1-0.2-0.2-0.1c-0.1,0-0.2,0-0.3,0H5.8C5.6,8.9,5.4,9,5.3,9.1C5.2,9.2,5.1,9.3,5.1,9.5c0,2.2,0.9,4,2.8,5.5 c2.5,2,5.1,4,7.7,6.1c0.1,0.1,0.3,0.2,0.7,0.5c0.4,0.3,0.6,0.5,0.9,0.7c0.2,0.2,0.5,0.4,0.8,0.6c0.3,0.2,0.7,0.4,0.9,0.5 c0.3,0.1,0.6,0.2,0.8,0.2l0,0c0.2,0,0.5-0.1,0.8-0.2c0.3-0.1,0.6-0.3,0.9-0.5c0.3-0.2,0.6-0.4,0.8-0.6c0.2-0.2,0.5-0.4,0.9-0.7 c0.4-0.3,0.6-0.5,0.6-0.5c2.7-2.1,5.3-4.2,7.7-6.1c0.7-0.5,1.4-1.2,2-2.2C34.6,11.8,34.9,11,34.9,10.2L34.9,10.2z M37.3,9.5v21 c0,0.8-0.3,1.6-0.9,2.2s-1.4,0.9-2.2,0.9H5.8c-0.8,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2v-21c0-0.8,0.3-1.6,0.9-2.2 s1.4-0.9,2.2-0.9h28.4c0.8,0,1.6,0.3,2.2,0.9S37.3,8.7,37.3,9.5z"></path>
        </symbol>
        <symbol id="icon-928" viewBox="0 0 40 40">
          <path d="M7.9,24.9l10.8,7.2v-6.4l-6-4L7.9,24.9z M6.8,22.3l3.4-2.3l-3.4-2.3V22.3L6.8,22.3z M21.4,32.1l10.8-7.2l-4.8-3.2l-6,4 C21.4,25.6,21.4,32.1,21.4,32.1z M20,23.3l4.9-3.3L20,16.8L15.1,20L20,23.3z M12.7,18.3l6-4V7.9L7.9,15.1L12.7,18.3z M29.8,20 l3.4,2.3v-4.6L29.8,20z M27.3,18.3l4.8-3.2L21.4,7.9v6.4L27.3,18.3z M36,15.1v9.8c0,0.5-0.2,0.9-0.6,1.1l-14.6,9.7 C20.5,35.9,20.3,36,20,36c-0.3,0-0.5-0.1-0.8-0.2L4.6,26C4.2,25.7,4,25.4,4,24.9v-9.8c0-0.5,0.2-0.9,0.6-1.1l14.6-9.8 C19.5,4.1,19.7,4,20,4c0.3,0,0.5,0.1,0.8,0.2L35.4,14C35.8,14.3,36,14.6,36,15.1z"></path>
        </symbol>
        <symbol id="icon-907" viewBox="0 0 40 40">
          <path d="M36,20.3c0,3.5-1,6.6-3.1,9.4c-2,2.8-4.7,4.7-7.9,5.8c-0.4,0.1-0.6,0-0.8-0.1c-0.2-0.2-0.3-0.4-0.3-0.6v-4.4 c0-1.3-0.4-2.3-1.1-3c0.8-0.1,1.5-0.2,2.1-0.4c0.6-0.2,1.3-0.4,2-0.8c0.7-0.4,1.2-0.8,1.7-1.4c0.5-0.5,0.8-1.3,1.1-2.2 s0.4-2,0.4-3.1c0-1.7-0.5-3.1-1.6-4.3c0.5-1.3,0.5-2.7-0.2-4.2c-0.4-0.1-1,0-1.7,0.2c-0.7,0.3-1.4,0.6-1.9,0.9L24,12.5 c-1.3-0.4-2.6-0.5-4-0.5s-2.7,0.2-4,0.5c-0.2-0.2-0.5-0.3-0.9-0.6c-0.4-0.2-0.9-0.5-1.7-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.1,4.2c-1.1,1.2-1.6,2.6-1.6,4.3c0,1.2,0.1,2.2,0.4,3.1s0.6,1.6,1.1,2.2s1,1,1.7,1.4c0.7,0.4,1.3,0.6,2,0.8 c0.6,0.2,1.3,0.3,2.1,0.4c-0.6,0.5-0.9,1.2-1,2.1c-0.3,0.1-0.6,0.2-0.9,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.5,0-0.9-0.1-1.4-0.4 c-0.5-0.3-0.8-0.7-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5L9,26.5c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.1-0.1,0.2 c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2l0.1,0.1c0.3,0.1,0.6,0.4,0.9,0.8s0.5,0.7,0.7,1.1l0.2,0.5c0.2,0.5,0.5,1,0.9,1.3 c0.4,0.3,0.9,0.5,1.4,0.6c0.5,0.1,1,0.1,1.4,0.1c0.5,0,0.9,0,1.2-0.1l0.5-0.1c0,0.5,0,1.1,0,1.9c0,0.7,0,1.1,0,1.1 c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.5,0.2-0.8,0.1c-3.2-1.1-5.8-3-7.9-5.8S4,23.8,4,20.3c0-2.9,0.7-5.6,2.1-8S9.5,7.8,12,6.4 s5.1-2.1,8-2.1s5.6,0.7,8,2.1s4.4,3.4,5.8,5.8S36,17.4,36,20.3L36,20.3z"></path>
        </symbol>
        <symbol id="icon-90b" viewBox="0 0 40 40">
          <path d="M12.1,13.8v19.1H5.7V13.8C5.7,13.8,12.1,13.8,12.1,13.8z M12.5,7.9c0,0.9-0.3,1.7-1,2.4c-0.7,0.6-1.5,0.9-2.6,0.9h0 c-1.1,0-1.9-0.3-2.5-0.9c-0.6-0.6-1-1.4-1-2.4c0-1,0.3-1.7,1-2.4S7.9,4.6,9,4.6s1.9,0.3,2.6,0.9S12.5,6.9,12.5,7.9z M35,22v11h-6.4 V22.7c0-1.4-0.3-2.4-0.8-3.2c-0.5-0.8-1.3-1.1-2.4-1.1c-0.8,0-1.5,0.2-2,0.7c-0.5,0.4-1,1-1.2,1.7c-0.1,0.4-0.2,0.9-0.2,1.6v10.7 h-6.4c0-5.1,0-9.3,0-12.5s0-5.1,0-5.7l0-0.9H22v2.8h0c0.3-0.4,0.5-0.8,0.8-1.1c0.3-0.3,0.6-0.6,1.1-1c0.5-0.4,1-0.6,1.7-0.8 c0.7-0.2,1.4-0.3,2.2-0.3c2.2,0,4,0.7,5.3,2.2C34.4,17,35,19.1,35,22L35,22z"></path>
        </symbol>
        <symbol id="icon-905" viewBox="0 0 40 40">
          <path d="M36.3,10.2c-1,1.3-2.1,2.5-3.4,3.5c0,0.2,0,0.4,0,1c0,1.7-0.2,3.6-0.9,5.3c-0.6,1.7-1.2,3.5-2.4,5.1 c-1.1,1.5-2.3,3.1-3.7,4.3c-1.4,1.2-3.3,2.3-5.3,3c-2.1,0.8-4.2,1.2-6.6,1.2c-3.6,0-7-1-10.2-3c0.4,0,1.1,0.1,1.5,0.1 c3.1,0,5.9-1,8.2-2.9c-1.4,0-2.7-0.4-3.8-1.3c-1.2-1-1.9-2-2.2-3.3c0.4,0.1,1,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-1.4-0.3-2.7-1.1-3.7-2.3s-1.4-2.6-1.4-4.2v-0.1c1,0.6,2,0.9,3,0.9c-1-0.6-1.5-1.3-2.2-2.4c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3,1-3.4 c1.5,2.1,3.6,3.6,6,4.9s4.9,2,7.6,2.1c-0.1-0.6-0.1-1.1-0.1-1.4c0-1.8,0.8-3.5,2-4.7c1.2-1.2,2.9-2,4.7-2c2,0,3.6,0.8,4.8,2.1 c1.4-0.3,2.9-0.9,4.2-1.5c-0.4,1.5-1.4,2.7-2.9,3.6C33.8,11.2,35.1,10.9,36.3,10.2L36.3,10.2z"></path>
        </symbol>
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-4 md:px-0 md:pt-6">
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
          <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 max-w-full text-center rounded-lg bg-trans-bg">
            <div className="relative max-w-full py-10 w-96 inner">
              <div className="mb-5 image">
                <Image
                  src="/headshot.jpg"
                  alt="picture of author"
                  width="128"
                  height="105"
                  className="inline-block w-32 align-top rounded-full"
                />
              </div>

              <h1 className="mt-5 mb-5 text-4xl leading-tight tracking-tighter text-white">
                {name}
              </h1>

              <p className="mt-5 mb-5 leading-normal tracking-tight text-gray-300 opacity-75 text-md">
                {title}
              </p>

              <a
                href="https://www.etsu.edu/cbat/computing/"
                rel="noopener noreferrer"
                target="_blank"
                className="mt-5 mb-5 leading-normal tracking-tight text-gray-300 opacity-75 text-md hover:underline"
              >
                East Tennessee State University
              </a>

              <ul className="flex items-center justify-center mt-5 icons">
                {social.map((s) => {
                  return (
                    <li key={s.label} className="m-2">
                      <a
                        className="flex items-center justify-center w-12 h-12 transition-colors duration-500 border border-yellow-400 rounded-full hover:bg-blue-900"
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <svg className={`w-6 h-6 fill-current ` + s.color}>
                          <use xlinkHref={s.icon}></use>
                        </svg>
                        <span className="hidden">{s.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
