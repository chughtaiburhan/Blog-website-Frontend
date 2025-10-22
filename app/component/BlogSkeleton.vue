<!-- components/BlogSkeleton.vue -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  show: boolean;
  count?: number;
}>();
</script>

<template>
  <div v-if="props.show" class="main-list-skeleton">
    <div
      v-for="i in props.count || 3"
      :key="i"
      class="main_padding flex flex-col lg:flex-row justify-between items-center
             lg:items-center h-auto space-y-5 lg:space-y-0 lg:space-x-12 py-10
             border-b border-[#282828] animate-pulse"
    >
      <div class="w-full lg:w-[30%] px-2 lg:px-0">
        <div
          role="status"
          class="flex items-center justify-center h-56 max-w-full
                 bg-[#282828] rounded-2xl dark:bg-gray-700"
        >
          <svg
            class="w-10 h-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path
              d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
            />
            <path
              d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div
        class="w-full lg:w-[50%] flex flex-col items-start justify-start space-y-3"
      >
        <div class="h-4 w-40 bg-[#282828] rounded-md"></div>
        <div class="h-8 w-full bg-[#282828] rounded-md"></div>
        <div class="h-4 w-11/12 bg-[#282828] rounded-md"></div>
        <div class="h-4 w-10/12 bg-[#282828] rounded-md"></div>
      </div>

      <div
        class="w-full px-2 lg:hidden space-x-3 items-start justify-start flex"
      >
        <div class="h-10 w-20 bg-[#282828] rounded-lg"></div>
        <div class="h-10 w-20 bg-[#282828] rounded-lg"></div>
      </div>

      <div class="w-full lg:w-[20%]">
        <div class="h-12 w-full bg-[#282828] rounded-lg"></div>
      </div>
    </div>
  </div>
</template>
