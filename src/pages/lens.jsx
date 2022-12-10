// import { useEffect } from 'react';
import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useAppContext } from '@/AppContext';
import { useQuery } from '@apollo/client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { recommendedProfiles } from '@/lensapi/queries';
import ProfileCard from '@/components/ProfileCard';
import Placeholders from '@/components/Placeholders';
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';
import useIsMounted from '@/hooks/useIsMounted';

// https://docs.lens.xyz/docs/get-profiles

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
  const pageTitle = `Lens Social - ${name}.dev`;

  const disconnectWallet = async () => {
    await disconnectAsync();
  };

  const handleSwitchNetwork = async () => {
    switchNetwork(137);
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
          {address && chain?.id !== 137 && (
            <div>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Please switch to Polygon
              </p>
              <button onClick={() => handleSwitchNetwork()}>
                Switch Network
              </button>
            </div>
          )}
          {address && chain?.id === 137 && (
            <div className="py-6">
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Connected As: {address}
              </p>
              <button onClick={() => disconnectWallet()}>Disconnect</button>
              <RecProfiles />
            </div>
          )}
        </div>
      </SimpleLayout>
    </>
  );
};

export default Lens;
