import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/src/components/Home'
import Workout from '~/src/components/Workout'
import NotFound from '~/src/components/NotFound'

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
      path: '/workout',
      name: 'Workout',
      component: Workout
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})