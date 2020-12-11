import Head from 'next/head';
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
      </Head>
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-4 md:px-0 md:pt-6">
        <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 max-w-full text-center rounded-lg bg-trans-bg">
          <div className="relative max-w-full py-10 w-96 inner">
            <div className="mb-5 image">
              <img
                src="/headshot.jpg"
                alt=""
                className="inline-block w-32 align-top rounded-full"
              />
            </div>

            <h1 className="mt-5 mb-5 text-4xl leading-tight tracking-tighter text-white">{name}</h1>

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
      </div>
    </>
  );
}
