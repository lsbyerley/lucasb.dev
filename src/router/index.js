import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/src/pages/Home'
import Recipes from '~/src/pages/Recipes'
import Workout from '~/src/pages/Workout'
import NotFound from '~/src/pages/NotFound'
import NFLTeasers from '~/src/pages/NFLTeasers'
import SwansonQuote from '~/src/pages/SwansonQuote'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/workout',
      name: 'Workout',
      component: Workout
    },
    {
      path: '/teasers',
      name: 'NFLTeasers',
      component: NFLTeasers
    },
    {
      path: '/swanson',
      name: 'SwansonQuote',
      component: SwansonQuote
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})