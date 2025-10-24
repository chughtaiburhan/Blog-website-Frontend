<script setup lang="ts">
import Button from "~/component/Button.vue";
import Text from "~/component/Text.vue";
</script>

<template>
  <div class="main_padding py-20">
    <!-- Profile Card -->
    <div
      class="bg-[#0a0a0a] border border-gray-400 rounded-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-10 w-full max-w-md md:max-w-4xl mx-auto"
    >
      <!-- Left: Image -->
      <div
        class="flex-shrink-0 h-24 w-24 sm:h-32 sm:w-32 md:h-44 md:w-44 border border-gray-200 rounded-full overflow-hidden"
      >
        <NuxtImg
          src="/userBurhan.JPG"
          class="h-full w-full object-cover"
          width="176"
          height="176"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 176px"
          fit="cover"
        />
      </div>

      <!-- Right: Info -->
      <div
        class="flex flex-col flex-1 space-y-2 md:space-y-3 items-center md:items-start text-center md:text-left w-full"
      >
        <!-- Name & Email & Phone -->
        <Text
          text="Emma Roberts"
          size="lg"
          color="white"
          class="font-bold text-lg sm:text-xl md:text-2xl"
        />
        <Text
          text="emma.roberts@mail.com"
          size="xs"
          color="secondary"
          class="text-sm sm:text-base"
        />
        <Text
          text="Phone Number +923292198843"
          size="xs"
          color="secondary"
          class="text-sm sm:text-base"
        />

        <!-- Stats -->
        <div
          class="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-5 w-full justify-center md:justify-start"
        >
          <Button
            :text="String(0)"
            icon="mdi:heart"
            color="secondary"
            class="flex-1 sm:flex-none sm:px-4 flex items-center justify-center gap-2"
            iconColor="yellow"
          />
          <Button
            :text="String(0)"
            icon="mdi:book-open-variant"
            color="secondary"
            class="flex-1 sm:flex-none sm:px-4 flex items-center justify-center gap-2"
            iconColor="yellow"
          />
        </div>

        <!-- Bio -->
        <Text
          text="Your environment shapes your mindset. Choose your circle wisely."
          size="xs"
          color="secondary"
          class="border-b border-gray-800 pb-1 mt-1 text-sm sm:text-base text-center md:text-left"
        />

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-5 w-full justify-center items-center">
          <Button
            text="Liked Blogs"
            icon="mdi:heart-outline"
            color="secondary"
            class="w-full sm:w-auto flex items-center justify-center gap-2"
            iconColor="yellow"
          />
          <Button
            text="Community"
            icon="mdi:account-group-outline"
            color="secondary"
            class="w-full sm:w-auto flex items-center justify-center gap-2"
            iconColor="yellow"
          />
        </div>
      </div>
    </div>

    <!-- Related Blogs Section -->
    <div
      class="mt-6 md:mt-10 w-full max-w-md md:max-w-4xl mx-auto border border-gray-200 rounded-xl overflow-hidden"
    >
      <!-- <RelatedBlog /> -->
    </div>
  </div>
</template>
