<template>
  <div id="wrapper" class="flex flex-col items-center justify-center min-h-screen p-6 relative z-20">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 z-10 max-w-full rounded-lg text-center">
      <div class="inner max-w-full py-12 py-10 z-10 relative">

        <div class="image mb-5">
          <img src="~/src/assets/images/headshot.jpg" alt="" class="w-32 rounded-full inline-block align-top" />
        </div>
        <h1 class="text-white text-4xl tracking-tighter leading-tight mt-5 mb-5">{{ name }}</h1>
        <p class="text-gray-500 opacity-75 text-md mt-5 mb-5 tracking-tight leading-normal">{{ title }}</p>
        <a href="https://www.etsu.edu/cbat/computing/"
          target="_blank"
          class="text-gray-500 opacity-75 text-md mt-5 mb-5 tracking-tight leading-normal hover:text-gray-300">
          East Tennessee State University
        </a>
        <ul class="icons flex items-center justify-center mt-5">
          <li :key="s.label" v-for="s in social" class="m-2">
            <a class="flex items-center justify-center w-12 h-12 rounded-full border border-yellow-400" :href="s.href" target="_blank">
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
import fe from '~/src/util/fe';

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
  background-color: rgba(34,36,43,0.859);
  transition: opacity 1s ease 0s, transform 1s ease 0s;

  .inner {
    width: 25rem;
  }

  > .inner :nth-child(2) {
    transition-delay: 0.25s;
  }

  > .inner :nth-child(3) {
    transition-delay: 0.5s;
  }

  > .inner :nth-child(4) {
    transition-delay: 0.75s;
  }

  > .inner :nth-child(5) {
    transition-delay: 1s;
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
