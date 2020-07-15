<template>
  <div id="wrapper" class="relative flex flex-col items-center justify-center min-h-screen p-6 ">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 w-full px-2 text-center rounded-lg bg-trans">
      <div class="relative max-w-full py-10 inner">
        
        <h2 class="text-3xl text-gray-200">404</h2>
        <h3 class="text-2xl text-gray-400">Hmm.. can't find that page pal</h3>

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