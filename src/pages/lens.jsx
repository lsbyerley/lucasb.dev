// import { useEffect } from 'react';
import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useAppContext } from '@/AppContext';
import { useQuery } from '@apollo/client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { recommendedProfiles } from '@/lensapi/queries';
import ProfileCard from '@/components/ProfileCard';
import Placeholders from '@/components/Placeholders';
import {
  useAccount,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
  useEnsName,
} from 'wagmi';
import useIsMounted from '@/hooks/useIsMounted';
import { trimString } from '@/lib/utils';

// https://docs.lens.xyz/docs/get-profiles

const polygonChainId = 137;

const RecProfiles = () => {
  const { loading, error, data } = useQuery(recommendedProfiles);

  if (loading)
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Placeholders number={12} />
      </div>
    );
  if (error) return <p>Error : {error.message}</p>;

  console.log('LOG: data', data);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {data?.recommendedProfiles?.map((profile) => {
        return <ProfileCard key={profile.id} profile={profile} />;
      })}
    </ul>
  );
};

const Lens = () => {
  const isMounted = useIsMounted();
  const { name } = useAppContext();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const { data: ensName } = useEnsName({
    address,
    chainId: 1,
  });
  const pageTitle = `Lens Social - ${name}.dev`;

  const disconnectWallet = async () => {
    await disconnectAsync();
  };

  const handleSwitchNetwork = async () => {
    switchNetwork(polygonChainId);
  };

  if (!isMounted) return null;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Connect your wallet to view recommended Lens handles to follow"
        />
      </Head>
      <SimpleLayout
        title="Lens Protocol - the web3 social platform"
        intro="Connect your wallet to view recommended Lens handles to follow"
      >
        <div className="space-y-20">
          {!address && (
            <div className="py-6">
              <ConnectButton />
            </div>
          )}
          {address && chain?.id !== polygonChainId && (
            <div className="shadow">
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Please switch to Polygon
              </p>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => handleSwitchNetwork()}
              >
                Switch Network
              </button>
            </div>
          )}
          {address && chain?.id === polygonChainId && (
            <div className="">
              <div className="flex items-center justify-between p-2 mb-6 bg-white rounded shadow">
                <p className="text-base text-zinc-700 dark:text-zinc-500">
                  Connected As: {trimString(address, 8)} ({ensName || ''})
                </p>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 bg-white border border-gray-300 rounded-md shadow-sm text-zinc-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-zinc-500"
                  onClick={() => disconnectWallet()}
                >
                  Disconnect
                </button>
              </div>
              <RecProfiles />
            </div>
          )}
        </div>
      </SimpleLayout>
    </>
  );
};

export default Lens;
