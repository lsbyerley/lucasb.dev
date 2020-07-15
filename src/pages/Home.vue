<template>
  <div id="wrapper" class="relative z-10 flex flex-col items-center justify-start min-h-screen p-3 md:justify-center">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 max-w-full text-center rounded-lg bg-trans">
      <div class="relative max-w-full py-10 inner">

        <div class="mb-5 fadein image">
          <img src="~/src/assets/images/headshot.jpg" alt="" class="inline-block w-32 align-top rounded-full" />
        </div>

        <h1 class="mt-5 mb-5 text-4xl leading-tight tracking-tighter text-white fadein">{{ name }}</h1>
        
        <p class="mt-5 mb-5 leading-normal tracking-tight text-gray-500 opacity-75 fadein text-md">{{ title }}</p>
        
        <a href="https://www.etsu.edu/cbat/computing/"
          target="_blank"
          class="mt-5 mb-5 leading-normal tracking-tight text-gray-500 opacity-75 fadein text-md hover:text-gray-300">
          East Tennessee State University
        </a>

        <ul class="flex items-center justify-center mt-5 fadein icons">
          <li :key="s.label" v-for="s in social" class="m-2">
            <a class="flex items-center justify-center w-12 h-12 border border-yellow-400 rounded-full" :href="s.href" target="_blank">
              <svg class="w-6 h-6 fill-current" :class="s.color">
                <use v-bind="{'xlink:href':s.icon}"></use>
              </svg>
              <span class="hidden">{{ s.label }}</span>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
//import fe from '~/src/util/fe';
import Link from 'vue-router'

export default {
  name: 'Home',
  data() {
    return {
      name: 'Lucas Byerley',
      title: 'Front End Web Developer',
      social: [
        { icon: '#icon-905', color: 'text-blue-400', label: 'Twitter', href: 'https://twitter.com/lsbyerley' },
        { icon: '#icon-907', color: 'text-white', label: 'Github', href: 'https://github.com/lsbyerley' },
        //{ icon: '#icon-901', color: 'text-white', label: 'Email', href: fe.encode('blahblah@gmail.com') },
        { icon: '#icon-928', color: 'text-white', label: 'Codepen', href: 'https://codepen.io/lsbyerley/' },
        { icon: '#icon-90b', color: 'text-indigo-600', label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucas-b-9a817170' }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
#main > .inner > * {
  transition: opacity 0.5s ease-in-out 0.125s;
}

#main {
  transition: opacity 1s ease 0s, transform 1s ease 0s;

  .inner {
    width: 25rem;
  }

  > .inner :nth-child(2).fadein {
    transition-delay: 0.25s;
  }

  > .inner :nth-child(3).fadein {
    transition-delay: 0.5s;
  }

  > .inner :nth-child(4).fadein {
    transition-delay: 0.75s;
  }

  > .inner :nth-child(5).fadein {
    transition-delay: 1s;
  }

  > .inner :nth-child(6).fadein {
    transition-delay: 1.25s;
  }
}

.icons li a:hover {
  //border-color: #d3d3d3;

  svg {
    color: #f6e05e;
  }
}

.icons li a svg{
  transition: fill 0.25s ease;
}
.icons li a+svg {
  transition: fill 0.25s ease, stroke 0.25s ease;
}
</style>
