<template>
  <nav class="relative z-20">

    <div class="mx-auto px-6 py-2 flex justify-between items-center">
      <a class="font-semibold text-2xl lg:text-4xl text-gray-100" href="/">lucasb.dev</a>
      <div class="block">
        <button ref="openButton" @click="open" type="button" class="block text-gray-100 focus:outline-none hover:text-gray-400 focus:text-gray-100" aria-label="OpenMenu">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"/>
            <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"/>
            <path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"/>
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
      appear
    >
      <div class="absolute top-0 left-0 w-screen h-screen bg-blue-900" v-if="isOpen">
        <div :class="isOpen ? 'block' : 'hidden'" class="absolute top-0 right-0 px-8 py-6">
          <button ref="closeButton" @click="close" type="button" class="text-gray-100 focus:outline-none hover:text-gray-400 focus:text-gray-100" aria-label="CloseMenu">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z"/>
            </svg>
          </button>
        </div>
        <div class="pt-16">
          <router-link class="block py-4 text-center text-gray-500 hover:text-gray-400" to="/">Home</router-link>
          <router-link class="block py-4 text-center text-gray-500 hover:text-gray-400" to="swanson">Random Swanson</router-link>
          <router-link class="block py-4 text-center text-gray-500 hover:text-gray-400" to="teasers">NFL Teasers</router-link>
          <a class="block py-4 text-center text-gray-500 hover:text-gray-400" href="https://steelehoops.com/" target="_blank">SteeleHoops</a>
        </div>
      </div>
    </transition>

  </nav>
</template>

<script>
let bodyEl = document.getElementsByTagName('body')[0];

export default {
  name: 'NavBar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      bodyEl.classList.add('overflow-hidden')
      this.isOpen = true
    },
    close() {
      bodyEl.classList.remove('overflow-hidden')
      this.isOpen = false
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('to', to)
      console.log('from', from)
      bodyEl.classList.remove('overflow-hidden')
      this.isOpen = false
      //$('#navbar-collapse').collapse('hide');
    }
  }
}
</script>

<style lang="scss">
/* possible transition
.inactive {
  transition: all .3s ease-in-out;
  transform: scale(.75);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
}
.active {
  height: 100%;
  opacity: 1;
  visibility: visible;
  overflow: auto;
  transform: scale(1);
}
*/
</style>
