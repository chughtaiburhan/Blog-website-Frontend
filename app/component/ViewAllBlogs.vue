<script setup lang="ts">
import Button from "./Button.vue";
import Text from "./Text.vue";
</script>

<template>
  <div
    class="main_padding border-b border-[#282828] py-10 sm:py-16 lg:py-20 space-y-2 sm:space-y-5 flex-1 lg:flex items-center justify-between"
  >
    <div class="shrink-0">
      <Text
        text="A Knowledge Treasure Trove"
        size="sm"
        color="white"
        class="px-2 p-1 inline-block bg-[#282828]"
      />
      <Text
        text="Explore FutureTech's In-Depth Blog Posts"
        size="xl"
        color="white"
        class="font-semibold"
      />
    </div>
    <div class="flex justify-center sm:justify-start">
      <Button
        text="View All Blogs"
        icon="mdi:arrow-top-right"
        color="secondary"
        class="mt-2 px-20 sm:px-4"
        iconColor="yellow"
        @click="() => console.log('Blogs clicked')"
      />
    </div>
  </div>
  <div class="bg-black">
  <div class="py-8 border-b border-[#282828]">
    <div class="flex justify-center space-x-10">
      <Button
        text="All Blogs"
        color="secondary"
        class="py-4 px-8 font-normal"
        @click="() => console.log('Blogs clicked')"
      />
    </div>
  </div>
  <!-- Blogs -->
  <div class="main_padding flex justify-between items-center h-auto py-20">
    <!-- imgs -->
    <div class="w-[30%]">
      <NuxtImg format="webp" quality="80" loading="lazy" src=""  alt="BlogsImg" />
    </div>
    <!-- data -->
    <div class="w-[50%] flex flex-col items-start justify-start space-y-10">
      <Text
        text="A Knowledge Treasure Trove"
        size="sm"
        color="white"
        class="px-2 p-1 inline-block bg-[#282828]"
      />
       <Text
        text="The Quantum Leap in Computing"
        size="sm"
        color="white"
        class="px-2 p-1 inline-block bg-[#282828]"
      />
      <Text
        text="Explore the revolution in quantum computing, its applications, and its potential impact on various industries."
        size="sm"
        color="white"
        class="px-2 p-1 inline-block bg-[#282828]"
      />
    </div>
    <!-- button -->
    <div class="w-[20%] items-end justify-end flex">
      <Button
        text="View Blogs"
        icon="mdi:arrow-top-right"
        color="secondary"
        class="mt-2  sm:px-4"
        iconColor="yellow"
        @click="() => console.log('Blogs clicked')"
      />
    </div>
  </div>
  </div>
</template>
