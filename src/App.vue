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
body:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  transform: scale(1);
  //background-image: linear-gradient(45deg, rgb(255, 199, 44) 0%, rgb(4, 30, 66) 100%);
  background-image: linear-gradient(to top, rgba(175,175,201,0.42), rgba(175,175,201,0.42)), url(assets/images/bg.jpg);
  background-position: 0% 0%, center;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  background-attachment: scroll;
  background-color: #FFFFFF;
}
body:after {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #AFB6C9;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in-out 0.375s, visibility 1s 0.375s;
  transform: scale(1);
}
body.is-loading:after {
  opacity: 1;
  visibility: visible;
}

body.is-loading #main {
  opacity: 0;
  transform: translateY(1.5rem);
}
body.is-loading #main > .inner > * {
  opacity: 0;
}

a {
  transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
}
</style>
