<template>
  <div id="wrapper" class="relative flex flex-col min-h-screen p-3 font-light">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 w-full text-center rounded-lg">
      <div class="relative w-full inner">

        <div class="flex flex-col mb-8 rounded-sm bg-trans md:flex-row md:p-3">
          <div class="flex flex-col justify-center w-full md:w-1/2">
            <h2 class="mb-1 text-3xl font-bold text-white">NFL Teasers</h2>
            <a class="mb-4 font-medium text-gray-400 underline" href="https://medium.com/@adamchernoff/how-to-maximise-basic-teaser-strategy-in-nfl-betting-cd0838a03528" target="_blank">Basic Teaser Strategy</a>
          </div>
          <div class="w-full py-4 md:w-1/2">
            <p class="mb-2 font-medium text-gray-400">The Rules</p>
            <ul class="text-sm text-white">
              <li>Games with a total of 49 or less</li>
              <li>Home favorites of 7.5 - 9 (tease down)</li>
              <li>Home underdogs of 1 - 2.5 (tease up)</li>
              <li>Road underdogs of 1 - 2.5 (tease up)</li>
              <li>Play only 6 or 6.5 point teasers</li>
              <li>Play as close to kickoff as possible</li>
            </ul>
          </div>
        </div>

        <div v-if="gamesLoading">
          <p class="font-medium text-gray-200">Games Loading..</p>
        </div>
        <div v-else-if="gamesError">
          <p class="font-medium text-yellow-300">Ugh, an error occurred when fetching the games. Reload please</p>
        </div>
        <div v-else-if="!gamesError && !gamesLoading && games.length === 0">
          <p class="font-medium text-yellow-300">No games! They've either all kicked off or don't have odds</p>
        </div>
        <div v-else class="font-medium text-yellow-300">
          <p>{{ getWeekText() }}</p>
        </div>

        <div class="flex flex-wrap -ml-3 -mr-3">
          <div :key="g.id" v-for="g in games" class="w-full p-3 md:w-1/2">

            <div class="relative rounded-sm game bg-trans">
              <p class="pt-2 text-xs leading-snug text-gray-300">{{ g.gameDate }}</p>
              <section class="flex justify-center px-1 py-3 text-gray-200">
                <div class="flex flex-col w-1/4 py-4 pr-4 text-right border-r border-gray-200">
                  <p class="text-xs tracking-tighter">{{ g.away.record }}</p>
                  <p class="hidden font-bold tracking-tighter uppercase md:block">{{ g.away.team.name }}</p>
                  <p class="font-bold tracking-tighter uppercase md:hidden">{{ g.away.team.abbreviation }}</p>
                  <p class="text-lg font-medium text-gray-400">{{ g.away.spread }}</p>
                </div>
                <div class="flex flex-col justify-center">
                  <div class="flex items-center justify-center">
                    <div class="pl-4">
                      <img class="w-12" :src="g.away.team.logo" />
                    </div>
                    <div class="px-4">
                      <span>@</span>
                    </div>
                    <div class="pr-4">
                      <img class="w-12" :src="g.home.team.logo" />
                    </div>
                  </div>
                  <div class="pt-2 text-center">
                    <p class="font-medium">{{ g.vegasTotal }}</p>
                  </div>
                </div>
                <div class="flex flex-col w-1/4 py-4 pl-4 text-left border-l border-gray-200">
                  <p class="text-xs tracking-tighter">{{ g.home.record }}</p>
                  <p class="hidden font-bold tracking-tighter uppercase md:block">{{ g.home.team.name }}</p>
                  <p class="font-bold tracking-tighter uppercase md:hidden">{{ g.home.team.abbreviation }}</p>
                  <p class="text-lg font-medium text-gray-400">{{ g.home.spread }}</p>
                </div>
              </section>
              <section class="flex opacity-75">
                <div class="w-1/2 p-1" :style="{ background: '#'+g.away.team.color }"></div>
                <div class="w-1/2 p-1" :style="{ background: '#'+g.home.team.color }"></div>
              </section>
              <section class="flex p-3 bg-gray-900">
                <div class="w-1/2">
                  <p class="pb-2 text-sm font-medium text-gray-500 uppercase">Tease?</p>
                  <div v-if="showAwayAction(g.away.teaserRules)">
                    <p class="font-medium text-green-600">{{ showAwayActionText(g.away.teaserRules) }}</p>
                  </div>
                  <div v-else>
                    <div class="text-red-600">
                      <svg class="block w-5 pt-1 m-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg>
                    </div>
                  </div>
                </div>
                <div class="w-1/2">
                  <p class="pb-2 text-sm font-medium text-gray-500 uppercase">Tease?</p>
                  <div v-if="showHomeAction(g.home.teaserRules)">
                    <p class="font-medium text-green-600">{{ showHomeActionText(g.home.teaserRules) }}</p>
                  </div>
                  <div v-else>
                    <div class="text-red-600">
                      <svg class="block w-5 pt-1 m-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg>
                    </div>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { normalizeEvents } from '~/src/util/helpers'

export default {
  name: 'NFLTeasers',
  data() {
    return {
      games: [],
      week: '',
      seasonType: '',
      gamesLoading: false,
      gamesError: false
    }
  },
  created() {
    if (this.games.length ===  0) {
      this.fetchGames()
    }
  },
  methods: {
    getWeekText() {
      if (this.week && this.seasonType) {
        if (this.seasonType === 2) {
          return `Week ${this.week} Regular Season`
        } else if (this.seasonType === 3) {
          if (this.week === 1) {
            return `Wildcard Weekend`
          } else if (this.week === 2) {
            return `Divisional Playoffs`
          } else if (this.week === 3) {
            return `Championship Weekend`
          } else if (this.week === 4) {
            return `Pro Bowl`
          } else if (this.week === 5) {
            return `Super Bowl`
          }
        }
      }
    },
    showAwayAction(rules) {
      return (rules.totalLTE49 && rules.roadDog1to25)
    },
    showAwayActionText(rules) {
      return 'Tease Up: 6 or 6.5pts'
    },
    showHomeAction(rules) {
      return (rules.totalLTE49 && (rules.homeFave75to9 || rules.homeDog1to25))
    },
    showHomeActionText(rules) {
      if (rules.homeFave75to9) {
        return 'Tease Down 6 or 6.5pts'
      }
      if (rules.homeDog1to25) {
        return 'Tease Up: 6 or 6.5pts'
      }
    },
    async fetchGames() {
      try {
        this.gamesLoading = true
        const res = await axios.get('https://site.web.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?calendartype=blacklist&limit=100&showAirings=true&lang=en&region=us&contentorigin=espn')        
        const normalizedEvents = normalizeEvents(res.data)

        this.week = normalizedEvents.week
        this.seasonType = normalizedEvents.seasonType
        this.games = normalizedEvents.games
        this.gamesLoading = false;

      } catch(err) {
        this.gamesLoading = false
        this.gamesError = true
        console.log(err.message, err.stack)
      }
      
    }
  }
}
</script>

<style>

</style>