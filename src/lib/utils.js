import { ethers } from 'ethers';

export const trimString = (string, length) => {
  if (!string) return null;
  return string.length < length ? string : string.substr(0, length - 1) + '...';
};

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider.getSigner();
};
