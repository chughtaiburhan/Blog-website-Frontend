<script setup lang="ts">
import Text from "./Text.vue";

const features = [
  {
    title: "Depth",
    description: "Long-form articles for in-depth understanding.",
  },
  {
    title: "Graphics",
    description: "Visual data and infographics to enhance comprehension.",
  },
  {
    title: "Trends",
    description: "Explore emerging trends in future technology research.",
  },
  {
    title: "Contributors",
    description: "Contributions from tech researchers and academics.",
  },
];
</script>

<template>
  <!-- Section Header -->
  <div class="main_padding py-10 sm:py-16 lg:py-20 space-y-2 sm:space-y-5">
    <Text
      text="Unlock the Power of"
      size="sm"
      color="white"
      class="px-2 p-1 inline-block bg-[#282828]"
    />
    <Text
      text="FutureTech Features"
      size="xl"
      color="white"
      class="font-semibold"
    />
  </div>

  <div class="flex flex-col border border-[#282828] w-full py-5 lg:py-6 xl:py-10 bg-[#0a0a0a]">
    <div class="main_padding">
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div class="flex-shrink-0 text-left sm:text-left lg:max-w-[40%] xl:max-w-xl py-6 lg:py-0">
          <NuxtImg
            src="/icons/highlightIcn.svg"
            alt="HighlightIcon"
            height="70"
            width="70"
            format="webp"
            quality="80"
            loading="lazy"
            class="pb-4 sm:mx-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
          <Text
            text="Research Insights Blogs"
            size="2xl"
            color="white"
            class="font-bold"
          />
          <Text
            text="Dive deep into future technology concepts with our research section."
            size="sm"
            color="secondary"
            class="font-normal "
          />
        </div>

        <div class="flex-1 xl:max-w3xl py-6 lg:py-0">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10]">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="group  border border-[#282828] bg-[#191919] cursor-pointer hover:bg-zinc-900/50 p-4 sm:p-5 rounded-lg transition-colors duration-200"
            >
              <h3 class="text-lg sm:text-xl font-semibold mb-2 text-white">
                {{ feature.title }}
              </h3>
              <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
