<template>
  <div id="wrapper" class="flex flex-col items-center justify-center min-h-screen p-6 relative z-20">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 z-10 w-full rounded-lg text-center px-2">
      <div class="inner max-w-full py-12 py-10 z-10 relative">

        <div class="mb-8">
          <h2 class="text-white text-3xl mb-2 text-bold">Recipes</h2>
          <p class="text-gray-400 text-sm">collection of some favorites</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipes',
  data() {
    return {
      recipes: []
    }
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
    width: 100%;
  }

}
</style>