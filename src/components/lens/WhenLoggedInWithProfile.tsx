import {
  useActiveProfile,
  useActiveWallet,
  WalletData,
  ProfileOwnedByMe,
} from '@lens-protocol/react-web';
import { useNetwork, Chain } from 'wagmi';
import { ReactNode } from 'react';

type LoggedInConfig = {
  wallet: WalletData;
  profile: ProfileOwnedByMe;
  chain: Chain;
};

export type WhenLoggedInWithProfileProps = {
  children: (config: LoggedInConfig) => ReactNode;
};

export function WhenLoggedInWithProfile({
  children,
}: WhenLoggedInWithProfileProps) {
  const { chain } = useNetwork();
  const { data: wallet, loading: walletLoading } = useActiveWallet();
  const { data: profile, error, loading: profileLoading } = useActiveProfile();

  // console.log('chain', chain, polygon, polygonMumbai);

  // console.log('LOG: WhenLoggedIn', wallet, profile);

  if (walletLoading || profileLoading) {
    return null;
  }

  if (wallet === null) {
    // console.log('LOG: no wallet!');
    return null;
  }

  if (profile === null || error) {
    // TODO guide user to create profile
    // console.log('LOG: no profile found!', error);
    // return null;
  }

  return <>{children({ wallet, profile, chain })}</>;
}
