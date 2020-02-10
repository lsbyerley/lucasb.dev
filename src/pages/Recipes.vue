<template>
  <div id="wrapper" class="flex flex-col items-center justify-center min-h-screen p-6 relative ">
    <div id="main" class="bg-trans flex items-center justify-center flex-grow-0 flex-shrink-0  w-full rounded-lg text-center px-2">
      <div class="inner max-w-full py-12 py-10  relative">

        <div class="mb-8">
          <h2 class="text-white text-3xl mb-2 text-bold">Recipes</h2>
          <p class="text-gray-400 text-sm">collection of some favorites</p>
        </div>

        <div class="flex flex-wrap -mx-3">
          <div :key="r.name" v-for="r in recipes" class="w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8">
            <div class="no-underline bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition flex-1 flex flex-col overflow-hidden">
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="font-display text-black no-underline mb-4">{{r.name}}</h3>
                <ul>
                  <li :key="i.name" v-for='i in r.ingredients'>{{ i.amount }} {{ i.name }}</li>
                </ul>
              </div>
            </div>
          </div>
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
      recipes: [
        {
          name: 'Homemade Taco Seasoning',
          category: 'Mexican',
          time: '10',
          ingredients: [
            { name: 'Chili Powder', amount: '1 Tbsp', volume: ''},
            { name: 'Smoked Paprika', amount: '1 Tsp'},
            { name: 'Cumin', amount: '1 Tsp'},
            { name: 'Oregano', amount: '1/2 Tsp'},
            { name: 'Black Pepper', amount: '1/2 Tsp'},
            { name: 'Salt', amount: '1/2 Tsp'},
            { name: 'Cornstarch', amount: '1/2 Tsp' },
            { name: 'Cayenne Pepper', amount: '1/4 Tsp'},
            { name: 'Garlic Powder', amount: '1/4 Tsp'},
            { name: 'Onion Powder', amount: '1/4 Tsp'}
          ],
          directions: [
            { text: 'Combine ingredients and mix into cooked meat.' },
            { text: 'Add 1/3 Cup water and simmer for 5 minutes for a slightly saucy consistency' }
          ]
        },
        {
          name: 'Horseradish Sauce',
          category: 'Sauces',
          time: '5',
          ingredients: [
            { name: 'Sour Cream', amount: '1/2 Cup', volume: '' },
            { name: 'Prepared Horseradish', amount: '2 Tbsp', volume: '' },
            { name: 'Mayo', amount: '2 Tbsp', volume: '' },
            { name: 'Apple Cider Vinegar', amount: '1 Tsp', volume: '' },
            { name: 'Black Pepper', amount: '1/4 Tsp', volume: '' },
            { name: 'Salt', amount: '1/8 Tsp', volume: '' },
          ],
          directions: [
            { text: 'Combine all ingredients in a bowl and mix with a whisk.' }
          ]
        }
      ]
    }
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
    width: 100%;
  }

}
</style>
