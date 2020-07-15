<template>
  <div id="wrapper" class="relative flex flex-col items-center justify-center min-h-screen p-6 ">
    <div id="main" class="flex items-center justify-center flex-grow-0 flex-shrink-0 w-full px-2 text-center rounded-lg bg-trans">
      <div class="relative max-w-full py-10 inner">

        <div class="mb-8">
          <h2 class="mb-2 text-3xl text-white text-bold">Full Body Core Workout</h2>
          <p class="text-sm text-gray-400">Perform 3 times a week, or twice a week supplemented with other strength work.</p>
        </div>

        <div class="mb-8">
          <h3 class="mb-2 text-2xl text-white">Warmup</h3>
          <ul class="flex flex-col justify-start text-sm text-gray-400 sm:justify-center">
            <li>Take 2 Minutes to foam-roll your legs, glutes, and back.</li>
            <li>Two rounds, 30 seconds each of air squats, walking lunges, push-ups and bear crawls</li>
          </ul>
        </div>

        <div class="">
          <h3 class="text-2xl text-white">6 Kettlebell Exercises</h3>
          <p class="text-sm text-gray-400">Any order, no rest in-between</p>
          <div class="flex flex-wrap">
            <div class="w-full p-3 lg:w-1/3" :key="ex.name" v-for="ex in exercises">
              <div class="py-6 border border-gray-200 rounded exlink">
                <p class="text-gray-200">{{ ex.name }}</p>
                <p class="text-sm text-gray-400">{{ ex.amount }}</p>
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
  name: 'Workout',
  data() {
    return {
      exercises: [
        { name: 'Single-Arm Strict Press', amount: '3 Sets, 12 reps each side' },
        { name: 'Side Plank (lift top leg)', amount: '3 Sets, 12 reps each side' },
        { name: 'Single-Leg Hip Bridge', amount: '3 Sets, 15 reps each side' },
        { name: 'Goblet Squat', amount: '3 Sets, 12 reps' },
        { name: 'Kettlebell Carry', amount: '6 rounds, 30 (or up to 90) seconds each' },
        { name: 'Stagger-Stance Single-Arm Row', amount: '3 sets, 12 reps each side' }
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

.exlink {
  &:hover {
    cursor: pointer;
    background-color: rgba(105, 105, 105, 0.859)
  }
}
</style>
