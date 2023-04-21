import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';

const lensEnvIsProd =
  process.env.NEXT_PUBLIC_LENS_ENV === 'production' ? true : false;

const NetworkInfoSwitch = () => {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const { switchNetwork } = useSwitchNetwork();

  if (!isConnected) return null;

  if (chain?.id === polygon.id || chain?.id === polygonMumbai.id) {
    return (
      <div className="flex items-center justify-start">
        <div className="py-2 text-white">Connected to: {chain?.name}</div>
        {!lensEnvIsProd && chain?.id === polygon.id && (
          <button
            className="ml-4 items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => switchNetwork(polygonMumbai.id)}
          >
            Switch To Polygon Mumbai
          </button>
        )}
        {lensEnvIsProd && chain?.id === polygonMumbai.id && (
          <button
            className="ml-4 items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => switchNetwork(polygon.id)}
          >
            Switch To Polygon
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-start">
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Please switch to Polygon to connect to lens
      </p>
      {lensEnvIsProd && (
        <button
          className="ml-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => switchNetwork(polygon.id)}
        >
          Switch To Polygon
        </button>
      )}
      {!lensEnvIsProd && (
        <button
          className="ml-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => switchNetwork(polygonMumbai.id)}
        >
          Switch To Polygon Mumbai
        </button>
      )}
    </div>
  );
};

export default NetworkInfoSwitch;
