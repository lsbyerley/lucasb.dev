import { useEffect, useRef } from 'react';
// import type { AppProps } from 'next/app';
import ContextProvider from '@/providers/ContextProvider';
import ApolloProvider from '@/providers/ApolloProvider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import {
  //LensConfig,
  LensProvider,
  sources,
  development,
  production,
} from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';

import '@/styles/tailwind.css';
import 'focus-visible';

const lensEnv =
  process.env.NEXT_PUBLIC_LENS_ENV === 'production' ? production : development;

const lensConfig = {
  bindings: wagmiBindings(),
  environment: lensEnv,
  sources: [sources.lenster],
  // storage: localStorage(),
};

const { chains, publicClient } = configureChains(
  [polygon, polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider(),
  ]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  chains,
  publicClient,
});

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <ContextProvider>
      <WagmiConfig config={wagmiConfig}>
        <LensProvider config={lensConfig}>
          <ApolloProvider>
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
          </ApolloProvider>
        </LensProvider>
      </WagmiConfig>
    </ContextProvider>
  );
}
