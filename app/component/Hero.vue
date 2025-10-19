<script setup lang="ts">
import { NuxtImg } from "#components";
import Box from "./Box.vue";
import Button from "./Button.vue";
import InfoBox from "./InfoBox.vue";
import Text from "./Text.vue";

const UsersImg = [
  { img: "/user.svg" },
  { img: "/user.svg" },
  { img: "/user.svg" },
];
const stats = [
  { value: '300', label: 'Resources available' },
  { value: '12k', label: 'Users Downloads' },
  { value: '10k', label: 'Active Users' },
]
const infoItems = [
  {
    icon: '/icons/infoIcn3.svg',
    title: 'Latest News Updates',
    subtitle: 'Stay Current',
    description: 'Over 1,000 articles published monthly',
  },
  {
    icon: '/icons/infoIcn2.svg',
    title: 'Expert Contributors',
    subtitle: 'Trusted Insights',
    description: '50+ renowned AI experts on our team',
  },
  {
    icon: '/icons/infoIcn1.svg',
    title: 'Global Readership',
    subtitle: 'Worldwide Impact',
    description: '2 million monthly readers',
  },
]

</script>

<template>
  <div class="w-full flex flex-col sm:flex-row items-center h-auto ">
    <div class="flex flex-col justify-center items-start  xl:gap-y-3 sm:w-1/2">
      <div class="padding space-y-2 mt-5 sm:mt-0">
        <Text
        text="Your Journey to Tomorrow Begins Here"
        size="sm"
        color="secondary"
        class="font-normal"
        />
        
        <Text
        text="Explore the Frontiers of Artificial Intelligence"
        size="2xl"
        color="white"
        class="font-semibold leading-snug"
        />
        
        <Text
        text="Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."
        size="sm"
        color="secondary"
        class="font-normal"
        /> 
      </div>
        <Box :stats="stats"/>
    </div>

    <div class="relative flex items-center justify-center sm:flex-col  sm:w-1/2 lg:w-auto xl:w-auto h-auto border-l border-[#282828]">
    <NuxtImg
      src="/heroImg.svg"
      alt="Hero image"
      height="500"
      width="500"
      format="webp"
      quality="80"
      class=" object-cover h-82 sm:h-auto mask-fade-bottom-left "
    />

    <div class="md:w-72 lg:w-auto absolute sm:top-[55%] flex flex-col gap-3 px-3 py-4 border border-[#282828] shadow-lg
            left-1/4 transform -translate-x-1/5
             md:left-36 lg:left-1/3 sm:transform sm:-translate-x-1/2">
      <div class="flex items-center justify-start -space-x-3">
        <NuxtImg
          v-for="(user, index) in UsersImg"
          :key="index"
          :src="user.img"
          loading="lazy"
          format="webp"
          quality="80"
          alt="User image"
          class="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 rounded-full border border-[#282828] object-cover"
        />
      </div>

      <div class="flex flex-col mt-2">
        <Text
          text="Explore 1000+ resources"
          size="sm"
          color="white"
          class="font-semibold"
        />
        <Text
          text="Over 1,000 articles on emerging tech trends and breakthroughs."
          size="sm"
          color="primary"
          class="font-normal"
        />
          <Button
        text="Explore Resources"
        icon="mdi:arrow-top-right"
        color="secondary"
        class="mt-2" 
        iconColor="yellow"
        @click="() => console.log('Explore clicked')"
      />
      </div>
 
    </div>
  </div>
  <div>
  </div>
</div>
<InfoBox :items="infoItems"/>
</template>

<style scoped>
.mask-fade-bottom-left {
  /* Fade starts from bottom-left corner and fades toward top-right */
  mask-image: linear-gradient(
    to top right,
    black 55%,
    transparent 70%
  );
  -webkit-mask-image: linear-gradient(
    to bottom left,
    black 55%,
    transparent 70%
  );

  mask-repeat: no-repeat;
  mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
}

</style>
