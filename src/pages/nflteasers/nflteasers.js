import React from 'react';
import Head from 'next/head';
import parseTeaserData from '@/lib/parseTeaserData';
import useGetGames from '@/hooks/useGetGames';

const NflTeasers = () => {
  const { data, error } = useGetGames();
  const gamesError = error;
  const gamesLoading = !data;
  const { games, week, seasonType } = parseTeaserData(data);

  const getWeekText = () => {
    if (week && seasonType) {
      if (seasonType === 2) {
        return `Week ${week} Regular Season`;
      } else if (seasonType === 3) {
        if (week === 1) {
          return `Wildcard Weekend`;
        } else if (week === 2) {
          return `Divisional Playoffs`;
        } else if (week === 3) {
          return `Championship Weekend`;
        } else if (week === 4) {
          return `Pro Bowl`;
        } else if (week === 5) {
          return `Super Bowl`;
        }
      }
    }
  };

  const showAwayAction = (rules) => {
    return /* rules.totalLTE49 && */ rules.roadDog1to25;
  };

  const showAwayActionText = (rules) => {
    return 'Tease Up: 6 or 6.5pts';
  };

  const showHomeAction = (rules) => {
    return /* rules.totalLTE49 && */ rules.homeFave75to9 || rules.homeDog1to25;
  };

  const showHomeActionText = (rules) => {
    if (rules.homeFave75to9) {
      return 'Tease Down 6 or 6.5pts';
    }
    if (rules.homeDog1to25) {
      return 'Tease Up: 6 or 6.5pts';
    }
  };

  return (
    <>
      <Head>
        <title>NFL Teasers | lucasb.dev</title>
      </Head>

      <div className="relative flex flex-col min-h-screen p-3 font-light">
        <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 text-center rounded-lg">
          <div className="relative w-full inner">
            <div className="flex flex-col mb-8 rounded-sm bg-trans md:flex-row md:p-3 bg-trans-bg">
              <div className="flex flex-col justify-center w-full md:w-1/2">
                <h2 className="mb-1 text-3xl font-bold text-white">NFL Teasers</h2>
                <a
                  className="mb-4 font-medium text-gray-400 underline"
                  href="https://medium.com/@adamchernoff/how-to-maximise-basic-teaser-strategy-in-nfl-betting-cd0838a03528"
                  target="_blank"
                >
                  Basic Teaser Strategy
                </a>
              </div>
              <div className="w-full py-4 md:w-1/2">
                <p className="mb-2 font-medium text-gray-400">The Rules</p>
                <ul className="text-sm text-white">
                  <li>Home favorites of 7.5 - 9 (tease down)</li>
                  <li>Home underdogs of 1 - 2.5 (tease up)</li>
                  <li>Road underdogs of 1 - 2.5 (tease up)</li>
                  <li>Play only 6 or 6.5 point teasers</li>
                  <li>Play as close to kickoff as possible</li>
                </ul>
              </div>
            </div>

            {gamesLoading && <p className="font-medium text-gray-200">Games Loading..</p>}
            {gamesError && (
              <p className="font-medium text-yellow-300">
                Ugh, an error occurred when fetching the games. Reload please
              </p>
            )}
            {!gamesLoading && !gamesError && games.length === 0 && (
              <p className="font-medium text-yellow-200">
                No games! They've either all kicked off or don't have odds
              </p>
            )}
            <div className="font-medium text-yellow-200">
              <p>{getWeekText()}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
              {!gamesLoading &&
                games.length > 0 &&
                games.map((g) => {
                  return (
                    <div key={g.id} className="w-full">
                      <div className="relative rounded-sm game bg-trans-bg">
                        <p className="pt-2 text-xs leading-snug text-gray-300">{g.gameDate}</p>
                        <section className="flex justify-center px-1 py-3 text-gray-200">
                          <div className="flex flex-col w-1/4 py-4 pr-4 text-right border-r border-gray-200">
                            <p className="text-xs tracking-tighter">{g.away.record}</p>
                            <p className="hidden font-bold tracking-tighter uppercase md:block">
                              {g.away.team.name}
                            </p>
                            <p className="font-bold tracking-tighter uppercase md:hidden">
                              {g.away.team.abbreviation}
                            </p>
                            <p className="text-lg font-medium text-gray-400">{g.away.spread}</p>
                          </div>
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center justify-center">
                              <div className="pl-4">
                                <img className="w-12" src={g.away.team.logo} />
                              </div>
                              <div className="px-4">
                                <span>@</span>
                              </div>
                              <div className="pr-4">
                                <img className="w-12" src={g.home.team.logo} />
                              </div>
                            </div>
                            <div className="pt-2 text-center">
                              <p className="font-medium">{g.vegasTotal}</p>
                            </div>
                          </div>
                          <div className="flex flex-col w-1/4 py-4 pl-4 text-left border-l border-gray-200">
                            <p className="text-xs tracking-tighter">{g.home.record}</p>
                            <p className="hidden font-bold tracking-tighter uppercase md:block">
                              {g.home.team.name}
                            </p>
                            <p className="font-bold tracking-tighter uppercase md:hidden">
                              {g.home.team.abbreviation}
                            </p>
                            <p className="text-lg font-medium text-gray-400">{g.home.spread}</p>
                          </div>
                        </section>
                        <section className="flex opacity-75">
                          <div
                            className="w-1/2 p-1"
                            style={{ background: `#${g.away.team.color}` }}
                          ></div>
                          <div
                            className="w-1/2 p-1"
                            style={{ background: `#${g.home.team.color}` }}
                          ></div>
                        </section>
                        <section className="flex p-3 bg-gray-900">
                          <div className="w-1/2">
                            <p className="pb-2 text-sm font-medium text-gray-500 uppercase">
                              Tease?
                            </p>
                            {showAwayAction(g.away.teaserRules) && (
                              <p className="font-medium text-green-600">
                                {showAwayActionText(g.away.teaserRules)}
                              </p>
                            )}
                            {!showAwayAction(g.away.teaserRules) && (
                              <div className="text-red-600">
                                <svg
                                  className="block w-5 pt-1 m-auto fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="w-1/2">
                            <p className="pb-2 text-sm font-medium text-gray-500 uppercase">
                              Tease?
                            </p>
                            {showHomeAction(g.home.teaserRules) && (
                              <p className="font-medium text-green-600">
                                {showHomeActionText(g.home.teaserRules)}
                              </p>
                            )}
                            {!showHomeAction(g.home.teaserRules) && (
                              <div className="text-red-600">
                                <svg
                                  className="block w-5 pt-1 m-auto fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </section>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NflTeasers;
