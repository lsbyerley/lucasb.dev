import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useAppContext } from '@/AppContext';
import { LoginButton, WhenLoggedInWithProfile } from '@/components/lens';
import ProfileCard from '@/components/ProfileCard';
import Placeholders from '@/components/Placeholders';
import useIsMounted from '@/hooks/useIsMounted';
import { useExploreProfiles } from '@lens-protocol/react-web';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';

// https://docs.lens.xyz/docs/get-profiles
// https://docs.lens.xyz/docs/use-profile
// https://github.com/lens-protocol/lens-sdk/blob/main/examples/nextjs/pages/index.tsx

const RecProfiles = () => {
  const { loading, error, data } = useExploreProfiles();

  if (loading)
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Placeholders number={12} />
      </div>
    );
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {data?.map((profile) => {
        return <ProfileCard key={profile.id} profile={profile} />;
      })}
    </ul>
  );
};

const Lens = () => {
  const { name } = useAppContext();
  const isMounted = useIsMounted();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const pageTitle = `Lens Social - ${name}.dev`;

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
        <LoginButton />
        {chain.id !== (polygon.id || polygonMumbai.id) && (
          <>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Please switch to Polygon
            </p>
            <button
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => switchNetwork(polygon.id)}
            >
              Switch Network
            </button>
          </>
        )}
        <WhenLoggedInWithProfile>
          {({ profile }) => {
            return (
              <div>
                <div>{`Welcome @${profile?.handle || 'noprofile'}`}</div>
                <RecProfiles />
              </div>
            );
          }}
        </WhenLoggedInWithProfile>
      </SimpleLayout>
    </>
  );
};

export default Lens;
