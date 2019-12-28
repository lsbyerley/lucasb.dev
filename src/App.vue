<template>
  <div class="" id="app">
    <NavBar></NavBar>
    <transition name="fade-in-up" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
const apiHost = process.env.API_HOST || ''
//https://carrd.co/dashboard/5391156173681346/asset/icons?v=1561062975520
import NavBar from '~/src/components/NavBar'

export default {
  name: 'App',
  components: { NavBar },
  mounted() {
    const $body = document.body;
    addEventListener('load', () => {
      setTimeout(() => {
        $body.className = $body.className.replace(/\bis-loading\b/, 'is-playing');
        setTimeout(() => {
          $body.className = $body.className.replace(/\bis-playing\b/, 'is-ready');
        }, 1375);
      }, 100);
    })
  }
};
</script>

<style lang="scss">
@import './assets/styles/app.scss';

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-up-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-up-enter {
  opacity: 0;
  transform: translate3d(0, 40px, 0);
}

.fade-in-up-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
</style>
