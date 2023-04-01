import {
  useActiveProfile,
  useActiveWallet,
  WalletData,
  ProfileOwnedByMeFragment,
} from '@lens-protocol/react-web';
import { ReactNode } from 'react';

type LoggedInConfig = {
  wallet: WalletData;
  profile: ProfileOwnedByMeFragment;
};

export type WhenLoggedInWithProfileProps = {
  children: (config: LoggedInConfig) => ReactNode;
};

export function WhenLoggedInWithProfile({
  children,
}: WhenLoggedInWithProfileProps) {
  const { data: wallet, loading: walletLoading } = useActiveWallet();
  const { data: profile, error, loading: profileLoading } = useActiveProfile();

  // console.log('chain', chain, polygon, polygonMumbai);

  // console.log('LOG: WhenLoggedIn', wallet, profile);

  if (walletLoading || profileLoading) {
    return null;
  }

  if (wallet === null) {
    console.log('LOG: no wallet!');
    return null;
  }

  if (profile === null || error) {
    // TODO guide user to create profile
    console.log('LOG: no profile found!');
    // return null;
  }

  return <>{children({ wallet, profile })}</>;
}
