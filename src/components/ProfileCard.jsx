import Link from 'next/link';
import Image from 'next/image';
import { ethers } from 'ethers';
import { PlusCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import LENSHUB from '@/lensabi/lenshub';
import { LENS_HUB_CONTRACT_ADDRESS } from '@/lensapi';
import { useAccount, useSigner } from 'wagmi';
import { getSigner } from '@/lib/utils';

const followUser = async ({ address, profile, signer }) => {
  console.log('LOG: coming soon..');
  return null;
  console.log('LOG: wagmi signer', signer);
  console.log('LOG: ethers signer', getSigner());

  const contract = new ethers.Contract(
    LENS_HUB_CONTRACT_ADDRESS,
    LENSHUB,
    signer
  );

  try {
    const tx = await contract.follow([profile.id], [0x0]);
    await tx.wait();
    console.log(`successfully followed ... ${profile.handle}`);
  } catch (err) {
    console.log('error: ', err);
  }
};

const ProfileCard = ({ profile }) => {
  const { data: signer } = useSigner();
  const { address } = useAccount();

  // TODO: Find fix for profile images in next/image

  return (
    <li
      key={profile.id}
      className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow"
    >
      <div className="flex items-center justify-between w-full p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {profile.name}
            </h3>
            <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              {profile.handle}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500 truncate">{profile.bio}</p>
        </div>
        <Image
          src={
            /*profile.picture?.original?.url || */ 'https://place-hold.it/40x40'
          }
          className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
          width={40}
          height={40}
        />
      </div>
      <div>
        <div className="flex -mt-px divide-x divide-gray-200">
          <div className="flex flex-1 w-0">
            <button
              onClick={() => followUser({ address, profile, signer })}
              className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <PlusCircleIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">Follow</span>
            </button>
          </div>
          <div className="flex flex-1 w-0 -ml-px">
            <Link
              className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
              href={`/profile/${profile.id}`}
            >
              <UserCircleIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProfileCard;
