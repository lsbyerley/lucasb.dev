import { get, forEach } from 'lodash';
import dayjs from 'dayjs';

const between = (x, min, max) => {
  let value = x;
  value.replace('+', '');
  value = parseFloat(value);

  return value >= min && value <= max;
};

const parseTeaserData = (data) => {
  const events = get(data, 'events', []);
  let seasonType = get(data, 'season.type', null);
  let week = get(data, 'week.number', null);
  let normalizedEvents = [];

  if (events) {
    forEach(events, (event, i) => {
      const eventId = get(event, 'id');
      const status = get(event, 'status');
      let date = get(event, 'competitions[0].date');
      const teamOne = get(event, 'competitions[0].competitors[0]');
      const teamTwo = get(event, 'competitions[0].competitors[1]');
      let oddsDetails = get(event, 'competitions[0].odds[0].details');
      let vegasTotal = get(event, 'competitions[0].odds[0].overUnder');
      let awayTeam = teamOne.homeAway === 'away' ? teamOne : teamTwo;
      let homeTeam = teamTwo.homeAway === 'home' ? teamTwo : teamOne;
      let isAwayFavorite = false;
      let isAwayUnderdog = false;
      let isHomeFavorite = false;
      let isHomeUnderdog = false;
      let gameDate = '';

      if (date && dayjs(date).isValid()) {
        gameDate = dayjs(date).format('dddd h:mm a');
      }

      if (oddsDetails && vegasTotal && oddsDetails !== 'EVEN') {
        let detailSplits = oddsDetails.split(' ');
        let favAbbrev = detailSplits[0];
        let vegasLine = detailSplits[1];

        if (get(awayTeam, 'team.abbreviation') === favAbbrev) {
          awayTeam.isFavorite = true;
          awayTeam.spread = vegasLine;
          homeTeam.spread = vegasLine.replace('-', '+');
          isAwayFavorite = true;
          isHomeUnderdog = true;
        }
        if (get(homeTeam, 'team.abbreviation') === favAbbrev) {
          homeTeam.isFavorite = true;
          homeTeam.spread = vegasLine;
          awayTeam.spread = vegasLine.replace('-', '+');
          isHomeFavorite = true;
          isAwayFavorite = true;
        }

        awayTeam.teaserRules = {
          totalLTE49: vegasTotal <= 49,
          roadDog1to25: between(awayTeam.spread, 1, 2.5),
        };

        homeTeam.teaserRules = {
          totalLTE49: vegasTotal <= 49,
          homeFave75to9: between(homeTeam.spread, -9, -7.5),
          homeDog1to25: between(homeTeam.spread, 1, 2.5),
        };

        awayTeam.record = get(awayTeam, 'records[0].summary');
        homeTeam.record = get(homeTeam, 'records[0].summary');

        delete awayTeam.statistics;
        delete awayTeam.leaders;
        delete awayTeam.team.venue;
        delete awayTeam.team.links;
        delete awayTeam.records;
        delete homeTeam.statistics;
        delete homeTeam.leaders;
        delete homeTeam.team.venue;
        delete homeTeam.team.links;
        delete homeTeam.records;

        normalizedEvents.push({
          id: eventId,
          gameDate,
          isAwayFavorite,
          isAwayUnderdog,
          isHomeFavorite,
          isHomeUnderdog,
          favAbbrev,
          vegasTotal,
          vegasLine,
          away: awayTeam,
          home: homeTeam,
        });
      }
    });
  }

  return {
    seasonType,
    week,
    games: normalizedEvents,
  };
};

export default parseTeaserData;
