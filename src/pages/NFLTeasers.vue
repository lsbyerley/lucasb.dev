<template>
  <div id="wrapper" class="flex flex-col min-h-screen p-3 relative z-20 font-light">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 z-10 w-full rounded-lg text-center">
      <div class="inner w-full z-10 relative">

        <div class="flex flex-col md:flex-row mb-8 md:p-3 rounded-sm" :style="{backgroundColor: 'rgba(34,36,43,0.859)'}">
          <div class="flex flex-col justify-center w-full md:w-1/2">
            <h2 class="text-white text-3xl mb-1 font-bold">NFL Teasers</h2>
            <a class="text-gray-400 font-medium mb-4 underline" href="https://medium.com/@adamchernoff/how-to-maximise-basic-teaser-strategy-in-nfl-betting-cd0838a03528" target="_blank">Basic Teaser Strategy</a>
          </div>
          <div class="w-full md:w-1/2 py-4">
            <p class="font-medium text-gray-400 mb-2">The Rules</p>
            <ul class="text-white text-sm">
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

        <div class="flex flex-wrap -ml-3 -mr-3">
          <div :key="g.id" v-for="g in games" class="w-full md:w-1/2 p-3">

            <div class="game rounded-sm" :style="{backgroundColor: 'rgba(34,36,43,0.859)'}">
              <section class="flex py-3 px-1 justify-center text-gray-200">
                <div class="flex flex-col w-1/4 border-gray-200 border-r py-4 pr-4 text-right">
                  <p class="text-xs tracking-tighter">{{ g.away.record }}</p>
                  <p class="uppercase font-bold tracking-tighter hidden md:block">{{ g.away.team.name }}</p>
                  <p class="uppercase font-bold tracking-tighter md:hidden">{{ g.away.team.abbreviation }}</p>
                  <p class="font-medium text-lg text-gray-400">{{ g.away.spread }}</p>
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
                  <div class="text-center pt-2">
                    <p class="font-medium">{{ g.vegasTotal }}</p>
                  </div>
                </div>
                <div class="flex flex-col w-1/4 border-gray-200 border-l py-4 pl-4 text-left">
                  <p class="text-xs tracking-tighter">{{ g.home.record }}</p>
                  <p class="uppercase font-bold tracking-tighter hidden md:block">{{ g.home.team.name }}</p>
                  <p class="uppercase font-bold tracking-tighter md:hidden">{{ g.home.team.abbreviation }}</p>
                  <p class="font-medium text-lg text-gray-400">{{ g.home.spread }}</p>
                </div>
              </section>
              <section class="flex opacity-75">
                <div class="w-1/2 p-1" :style="{ background: '#'+g.away.team.color }"></div>
                <div class="w-1/2 p-1" :style="{ background: '#'+g.home.team.color }"></div>
              </section>
              <section class="flex p-3 bg-gray-900">
                <div class="w-1/2">
                  <p class="text-gray-500 uppercase text-sm font-medium pb-2">Tease?</p>
                  <div v-if="showAwayAction(g.away.teaserRules)">
                    <p class="text-green-600 font-medium">{{ showAwayActionText(g.away.teaserRules) }}</p>
                  </div>
                  <div v-else>
                    <div class="text-red-600">
                      <svg class="w-5 fill-current block m-auto pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg>
                    </div>
                  </div>
                </div>
                <div class="w-1/2">
                  <p class="text-gray-500 uppercase text-sm font-medium pb-2">Tease?</p>
                  <div v-if="showHomeAction(g.home.teaserRules)">
                    <p class="text-green-600 font-medium">{{ showHomeActionText(g.home.teaserRules) }}</p>
                  </div>
                  <div v-else>
                    <div class="text-red-600">
                      <svg class="w-5 fill-current block m-auto pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg>
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
      gamesLoading: false
    }
  },
  created() {
    if (this.games.length ===  0) {
      this.fetchGames()
    }
  },
  methods: {
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
        console.log(normalizedEvents)
        this.games = normalizedEvents
        this.gamesLoading = false;

      } catch(err) {
        console.log(err.message, err.stack)
      }
      
    }
  }
}
</script>

<style>

</style>