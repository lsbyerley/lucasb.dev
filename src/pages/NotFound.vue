<template>
  <div id="wrapper" class="flex flex-col items-center justify-center min-h-screen p-6 relative z-20">
    <div id="main" class="bg-trans flex items-center justify-center flex-grow-0 flex-shrink-0 z-10 w-full rounded-lg text-center px-2">
      <div class="inner max-w-full py-12 py-10 z-10 relative">
        
        <h2 class="text-gray-200 text-3xl">404</h2>
        <h3 class="text-gray-400 text-2xl">Hmm.. can't find that page pal</h3>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
#main > .inner > * {
  transition: opacity 0.5s ease-in-out 0.125s;
}

#main {
  transition: opacity 1s ease 0s, transform 1s ease 0s;

  .inner {
    width: 100%;
  }

}
</style>