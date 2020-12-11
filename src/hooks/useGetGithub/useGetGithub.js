import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useGetGithub = () => {
  const { data, error } = useSWR('/api/github', fetcher);

  return {
    data,
    error,
  };
};

export default useGetGithub;
