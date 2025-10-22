<script setup lang="ts">
import { NuxtImg, NuxtLink } from '#components';
</script>

<template>
  <NuxtLink
    to="/"
    class="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 md:space-x-4 group"
  >
    <NuxtImg 
      src="/icons/logo.svg" 
      alt="FutureTech Logo" 
      format="webp"
      quality="80"
      class="h-8 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-transform duration-300 group-hover:scale-105"
    />
    <p
      class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-[#ffd119]"
    >
      FutureTech
    </p>
  </NuxtLink>
</template>
