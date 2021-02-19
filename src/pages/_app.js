import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '@/components/Header';
import '@/styles/tailwind.css';
import '@/styles/app.css';
import usePanelBear from '@/hooks/usePanelBear';
const panelBearId = process.env.NEXT_PUBLIC_PANEL_BEAR_ID || '';

function App({ Component, pageProps, router }) {
  let [navIsOpen, setNavIsOpen] = useState(false);

  // PanelBear hook
  usePanelBear(panelBearId, {
    // remove comment to send events on localhost
    // debug: true,
  });

  // nav open useEffect
  useEffect(() => {
    if (!navIsOpen) return;

    const handleRouteChange = (url) => {
      setNavIsOpen(false);
    };

    // INFO: changed this from routeChangeComplete because the links with api requests do not close until request is finished..
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [navIsOpen]);

  return (
    <div className="site-bg">
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header navIsOpen={navIsOpen} onNavToggle={(isOpen) => setNavIsOpen(isOpen)} />
      <main>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
