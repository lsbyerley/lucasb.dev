<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios'
const apiHost = process.env.API_HOST || ''
//https://carrd.co/dashboard/5391156173681346/asset/icons?v=1561062975520

export default {
  name: 'App',
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
</style>
