import Image from 'next/future/image';
import Head from 'next/head';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoBolt from '@/images/logos/bolt.svg';
import logoWallet from '@/images/logos/wallet.svg';
import logoGlobe from '@/images/logos/globe.svg';
import logoMoney from '@/images/logos/money.svg';
import { useAppContext } from '@/AppContext';

const projects = [
  {
    name: 'Wallet Dashboard',
    description:
      'A web3 wallet dashboard. Connect your wallet and view your nfts and other stats. Built with NextJs, TailwindCSS, and wagmi',
    link: {
      href: 'https://github.com/lsbyerley/wallet-dashboard',
      label: 'wallet-dashboard',
    },
    logo: logoWallet,
  },
  {
    name: 'Bid The Field',
    description:
      'A side project for my friends and I to setup an auction and bid on sports teams or players. Built with NextJs, TailwindCSS, and Supabase',
    link: {
      href: 'https://github.com/lsbyerley/bid-the-field',
      label: 'bid-the-field',
    },
    logo: logoMoney,
  },
  {
    name: 'RBI Tri-Cities',
    description:
      'A website I made for a friend of mine who started a baseball and softball training facility. Built with NuxtJs and TailwindCSS',
    link: {
      href: 'https://rbitricities.com/',
      label: 'rbi-tricities',
    },
    logo: logoBolt,
  },
  {
    name: 'My Personal Website',
    description: 'My personal website built with NextJs and TailwindCSS',
    link: {
      href: 'https://github.com/lsbyerley/lucasb.dev',
      label: 'lucasb-dev',
    },
    logo: logoGlobe,
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  const { name } = useAppContext();
  const pageTitle = `Projects - ${name}.dev`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Things I’ve made." />
      </Head>
      <SimpleLayout
        title="Things I’ve made."
        intro="I like to hack around on various small side projects. Here are a few"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
