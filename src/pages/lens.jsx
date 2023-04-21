import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useAppContext } from '@/AppContext';
import { LoginButton, WhenLoggedInWithProfile } from '@/components/lens';
import NetworkInfoSwitch from '@/components/lens/NetworkInfoSwitch';
import ProfileCard from '@/components/ProfileCard';
import Placeholders from '@/components/Placeholders';
import useIsMounted from '@/hooks/useIsMounted';
import { useExploreProfiles } from '@lens-protocol/react-web';
import { polygon, polygonMumbai } from 'wagmi/chains';

// https://docs.lens.xyz/docs/get-profiles
// https://docs.lens.xyz/docs/use-profile
// https://github.com/lens-protocol/lens-sdk/blob/main/examples/nextjs/pages/index.tsx

const lensEnvIsProd =
  process.env.NEXT_PUBLIC_LENS_ENV === 'production' ? true : false;

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
  const pageTitle = `Lens Social - ${name}.dev`;

  const shouldShowProfiles = (chain) => {
    // Prod and network is polygon or Dev and network is mumbai
    return (
      (lensEnvIsProd && chain?.id === polygon.id) ||
      (!lensEnvIsProd && chain?.id === polygonMumbai?.id)
    );
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"
        />
      </Head>
      <SimpleLayout
        title="Lens Protocol - the web3 social platform"
        intro="Connect your wallet to view recommended Lens handles to follow"
      >
        <LoginButton />
        <NetworkInfoSwitch />
        <WhenLoggedInWithProfile>
          {({ profile, chain }) => {
            return (
              <div>
                <div className="my-4 text-white">{`Welcome @${
                  profile?.handle || 'noprofile'
                }`}</div>

                {shouldShowProfiles(chain) && <RecProfiles />}
              </div>
            );
          }}
        </WhenLoggedInWithProfile>
      </SimpleLayout>
    </>
  );
};

export default Lens;
