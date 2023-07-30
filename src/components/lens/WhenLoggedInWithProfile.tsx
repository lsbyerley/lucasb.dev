import { ReactNode } from 'react';
import {
  useActiveProfile,
  useActiveWallet,
  WalletData,
  ProfileOwnedByMe,
} from '@lens-protocol/react-web';
import { useNetwork, Chain } from 'wagmi';
import { useAccount } from 'wagmi';

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
  const { isConnected } = useAccount();
  const { data: wallet, loading: walletLoading } = useActiveWallet();
  const { data: profile, error, loading: profileLoading } = useActiveProfile();

  // console.log('LOG: testing', chain, wallet, profile);

  if (!isConnected || walletLoading || profileLoading) {
    return null;
  }

  if (wallet === null) {
    return null;
  }

  if (profile === null || error) {
    // TODO guide user to create profile
    // console.log('LOG: no profile found!', error);
    // return null;
  }

  return <>{children({ wallet, profile, chain })}</>;
}
