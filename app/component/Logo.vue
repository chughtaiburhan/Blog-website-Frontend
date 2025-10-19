<script setup lang="ts">
import { NuxtImg } from '#components';

</script>

<template>
  <div class="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 md:space-x-4">
    <NuxtImg 
      src="/icons/logo.svg" 
      alt="Logo Image" 
      format="webp"
      quality="80"
      class="h-8 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300"
    />
    <p class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
      FutureTech
    </p>
  </div>
</template>
