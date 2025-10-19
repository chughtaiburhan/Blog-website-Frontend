<script setup lang="ts">
defineProps<{
  items: {
    icon: string
    title: string
    subtitle: string
    description: string
  }[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 border border-[#282828] divide-y sm:divide-y-0 sm:divide-x divide-[#282828] bg-[#0D0D0D]">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex items-start justify-between p-4 md:p-4 lg:p-6 xl:p-10 rounded-b-xl hover:bg-[#141414] transition-colors duration-300"
    >
      <div class="flex flex-col gap-1 max-w-[220px]">
        <NuxtImg :src="item.icon" loading="lazy" alt="icon" class="w-5 h-5 xl:w-5 xl:h-5 mb-3" />

        <h3 class="text-white text-base lg:text-lg font-semibold">
          {{ item.title }}
        </h3> 

        <p class="text-[#A1A1A1] text-sm">
          {{ item.subtitle }}
        </p>

        <p class="text-[#808080] text-xs mt-1">
          {{ item.description }}
        </p>
      </div>

      <!-- arrow icon -->
      <div
        class="w-5 h-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8 flex items-center justify-center bg-yellow-400 rounded-full hover:rotate-45 transition-transform duration-300 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>
