<template>
  <div id="wrapper" class="relative flex flex-col min-h-screen p-3 font-light">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 w-full text-center rounded-lg">
      <div class="relative w-full inner">

        <div class="p-4 rounded-sm bg-trans md:p-6">
          <h2 class="pb-4 mb-4 text-3xl font-bold text-gray-200 border-b-4 border-gray-600">Random Swanson</h2>
          <blockquote class="py-2 pl-3 pr-4 mx-auto my-4 text-gray-400 bg-gray-700 border-l-2 border-blue-400">
            <p class="mb-4 font-semibold">{{ randomQuote }}</p>
            <span>-</span>
            <cite>Ron Swanson</cite>
          </blockquote>
          <div class="w-32 h-40 m-auto">
            <img class="cursor-pointer" @click="newQuote" src="~/src/assets/images/swanson.png" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _random from 'lodash/random'
import { quotes } from '~/src/util/swanson'

export default {
  name: 'SwansonQuote',
  data() {
    return {
      randomQuote: '',
      quotes: quotes
    }
  },
  created() {
    let ran = _random(0, quotes.length-1)
    this.randomQuote = this.quotes[ran].text
  },
  methods: {
    newQuote() {
      let ranNum = _random(0, quotes.length-1)
      let ranQuote = this.quotes[ranNum].text
      this.randomQuote = ranQuote
    }
  }
}
</script>

<style>

</style>