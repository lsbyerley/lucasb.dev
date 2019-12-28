<template>
  <div id="wrapper" class="flex flex-col min-h-screen p-3 relative  font-light">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0  w-full rounded-lg text-center">
      <div class="inner w-full  relative">

        <div class="bg-trans rounded-sm p-10">
          <h2 class="text-gray-200 font-bold text-3xl border-b-4 border-gray-600 pb-4 mb-4">Random Swanson</h2>
          <blockquote class="border-l-2 border-blue-400 py-2 pl-3 pr-4 mx-auto my-4 text-gray-400 bg-gray-700">
            <p class="mb-4 font-semibold">{{ randomQuote }}</p>
            <span>-</span>
            <cite>Ron Swanson</cite>
          </blockquote>
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
      quotes: quotes
    }
  },
  computed: {
    randomQuote() {
      let ran = _random(0, quotes.length-1)
      return this.quotes[ran].text
    }
  }
}
</script>

<style>

</style>