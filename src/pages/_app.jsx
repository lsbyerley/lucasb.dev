import { useEffect, useRef } from 'react';
import ContextProvider from '@/providers/ContextProvider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { usePanelbear } from '@panelbear/panelbear-nextjs';

import '@/styles/tailwind.css';
import 'focus-visible';

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  // PanelBear hook
  usePanelbear(process.env.NEXT_PUBLIC_PANEL_BEAR_ID || '', {
    // remove comment to send events on localhost
    // debug: true,
  });

  return (
    <ContextProvider>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </ContextProvider>
  );
}
