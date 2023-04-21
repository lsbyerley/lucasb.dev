import { useWalletLogin, useWalletLogout } from '@lens-protocol/react-web';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { WhenLoggedInWithProfile } from './WhenLoggedInWithProfile';
import { WhenLoggedOut } from './WhenLoggedOut';

export function LoginButton({ handle }: { handle?: string }) {
  const {
    execute: login,
    error: loginError,
    isPending: isLoginPending,
  } = useWalletLogin();
  const { execute: logout, isPending: isLogoutPending } = useWalletLogout();

  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();

  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });

  const onLoginClick = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { connector } = await connectAsync();

    if (connector instanceof InjectedConnector) {
      const signer = await connector.getSigner();
      await login(signer, handle);
    }
  };

  const onLogoutClick = async () => {
    await logout();
    await disconnectAsync();
  };

  useEffect(() => {
    if (loginError) toast.error(loginError.message);
  }, [loginError]);

  return (
    <div>
      <WhenLoggedInWithProfile>
        {() => (
          <button
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={onLogoutClick}
            disabled={isLogoutPending}
          >
            Sign out of Lens
          </button>
        )}
      </WhenLoggedInWithProfile>

      <WhenLoggedOut>
        <button
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={onLoginClick}
          disabled={isLoginPending}
        >
          Sign into Lens
        </button>
      </WhenLoggedOut>
    </div>
  );
}
