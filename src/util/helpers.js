import _ from 'lodash'
import dayjs from 'dayjs'

function between(x, min, max) {

  let value = x;
  value.replace('+', '')
  value = parseFloat(value)

  return value >= min && value <= max;
}

export const normalizeEvents = (data) => {
  const events = _.get(data, 'events');
  let seasonType = _.get(data, 'season.type')
  let week = _.get(data, 'week.number')
  let normalizedEvents = []

  if (events) {
    _.forEach(events, (event, i) =>{

      const status = _.get(event, 'status');
      let date = _.get(event, 'competitions[0].date')
      const teamOne = _.get(event, 'competitions[0].competitors[0]')
      const teamTwo = _.get(event, 'competitions[0].competitors[1]')
      let oddsDetails = _.get(event, 'competitions[0].odds[0].details')
      let vegasTotal = _.get(event, 'competitions[0].odds[0].overUnder')
      let awayTeam = (teamOne.homeAway === "away") ? teamOne : teamTwo
      let homeTeam = (teamTwo.homeAway === "home") ? teamTwo : teamOne
      let isAwayFavorite = false
      let isAwayUnderdog = false
      let isHomeFavorite = false
      let isHomeUnderdog = false
      let gameDate = ''

      if (date && dayjs(date).isValid()) {
        gameDate = dayjs(date).format('dddd h:mm a')
      }

      if (oddsDetails && vegasTotal) {

        let detailSplits = oddsDetails.split(' ')
        let favAbbrev = detailSplits[0]
        let vegasLine = detailSplits[1]

        if (_.get(awayTeam, 'team.abbreviation') === favAbbrev) {
          awayTeam.isFavorite = true
          awayTeam.spread = vegasLine
          homeTeam.spread = vegasLine.replace('-', '+')
          isAwayFavorite = true
          isHomeUnderdog = true
        }
        if (_.get(homeTeam, 'team.abbreviation') === favAbbrev) {
          homeTeam.isFavorite = true
          homeTeam.spread = vegasLine
          awayTeam.spread = vegasLine.replace('-', '+')
          isHomeFavorite = true
          isAwayFavorite = true
        }

        awayTeam.teaserRules = {
          totalLTE49: (vegasTotal <= 49),
          roadDog1to25: between(awayTeam.spread, 1, 2.5)
        }

        homeTeam.teaserRules = {
          totalLTE49: (vegasTotal <= 49),
          homeFave75to9: between(homeTeam.spread, -9, -7.5),
          homeDog1to25: between(homeTeam.spread, 1, 2.5)
        }

        awayTeam.record = _.get(awayTeam, 'records[0].summary')
        homeTeam.record = _.get(homeTeam, 'records[0].summary')

        delete awayTeam.statistics
        delete awayTeam.leaders
        delete awayTeam.team.venue
        delete awayTeam.team.links
        delete awayTeam.records
        delete homeTeam.statistics
        delete homeTeam.leaders
        delete homeTeam.team.venue
        delete homeTeam.team.links
        delete homeTeam.records

        normalizedEvents.push({
          gameDate,
          isAwayFavorite,
          isAwayUnderdog,
          isHomeFavorite,
          isHomeUnderdog,
          favAbbrev,
          vegasTotal,
          vegasLine,
          away: awayTeam,
          home: homeTeam
        })

      }

    })
  }

  return {
    seasonType,
    week,
    games: normalizedEvents
  }
}