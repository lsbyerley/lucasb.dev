// import { useEffect } from 'react';
import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useAppContext } from '@/AppContext';
// import { useQuery } from '@apollo/client';
import LoginButton from '@/components/lens/LoginButton';
// import { recommendedProfiles } from '@/lensapi/queries';
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
import {
  useActiveProfile,
  useExploreProfiles,
  useProfileFollowing,
} from '@lens-protocol/react';

const polygonChainId = 137;

// https://docs.lens.xyz/docs/get-profiles
// https://docs.lens.xyz/docs/use-profile
// https://github.com/lens-protocol/lens-sdk/blob/main/examples/nextjs/pages/index.tsx

const Lens = () => {
  const { name } = useAppContext();
  const isMounted = useIsMounted();
  const { address, isConnected } = useAccount();
  const { data: profile, error: profileError } = useActiveProfile();

  console.log('LOG: test', isConnected, address, profile, profileError);

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
        <div className="space-y-20">
          {profile && (
            <p>
              Welcome <b>@{profile.handle}</b>
            </p>
          )}
        </div>
      </SimpleLayout>
    </>
  );
};

export default Lens;
