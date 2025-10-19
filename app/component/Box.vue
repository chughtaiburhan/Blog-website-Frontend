<script setup lang="ts">
defineProps<{
  stats: {
    value: string
    label: string
  }[]
}>()
</script>

<template>
  <div
    class="flex flex-row border border-[#282828]  divide-y-0 divide-x divide-[#282828]"
  >
    <div
      v-for="(item, index) in stats"
      :key="index"
      class="flex flex-col items-center justify-center flex-1 text-center 
             bg-[#0D0D0D] hover:bg-[#141414] transition-colors duration-300
             min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px] px-7 sm:p-4 lg:px-12 xl:px-20"
    >
      <h2 class="text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-none">
        {{ item.value }} 
      </h2>

      <p class="text-xs sm:text-sm text-[#A1A1A1] mt-2 leading-tight">
        {{ item.label }}
      </p>
    </div>
  </div>
</template>
