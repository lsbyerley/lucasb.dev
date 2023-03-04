import {
  useWalletLogin,
  useWalletLogout,
  useActiveProfile,
} from '@lens-protocol/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

// import { WhenLoggedInWithProfile, WhenLoggedOut } from './auth';

const LoginButton = () => {
  const {
    execute: login,
    error: loginError,
    isPending: isLoginPending,
  } = useWalletLogin();
  const { execute: logout, isPending: isLogoutPending } = useWalletLogout();
  const { data: profile, error: profileError } = useActiveProfile();

  console.log('LOG: ', profile);

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
      await login(signer);
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
    <div className="flex items-center justify-center">
      {isConnected && (
        <button
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={onLogoutClick}
          disabled={isLogoutPending}
        >
          <strong>Log out</strong>
        </button>
      )}
      {!isConnected && (
        <button
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={onLoginClick}
          disabled={isLoginPending}
        >
          <strong>Log in</strong>
        </button>
      )}
    </div>
  );
};

export default LoginButton;
