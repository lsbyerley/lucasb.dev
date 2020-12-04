import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export const useGetGames = () => {
  const { data, error } = useSWR(
    'https://site.web.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?calendartype=blacklist&limit=100&showAirings=true&lang=en&region=us&contentorigin=espn',
    fetcher
  );

  return {
    data,
    error,
  };
};

export default useGetGames;
