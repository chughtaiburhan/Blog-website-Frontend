<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from "vue";
import { NuxtImg } from "#components";
import { useRouter } from "vue-router";
// Assuming these are local components you are using
import Box from "./Box.vue";
import Button from "./Button.vue";
import Text from "./Text.vue";
import InfoBox from "./InfoBox.vue";

const router = useRouter();

// --- TYPE-SAFETY DEFINITIONS ---
interface StatItem {
  value: string;
  label: string;
}

interface InfoItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}
// -------------------------------

// --- COMPONENT DATA (Restored for completeness) ---
const stats: StatItem[] = [
  { value: "200+", label: "Happy Customers" },
  { value: "10K+", label: "Properties for Clients" },
  { value: "16+", label: "Years of Experience" },
];

const infoItems: InfoItem[] = [
  {
    icon: "/icons/infoIcn1.svg",
    title: "Find Your Dream Home",
    subtitle: "AI-Powered Search",
    description: "Advanced search for perfect matches.",
  },
  {
    icon: "/icons/infoIcn2.svg",
    title: "Unlock Property Value",
    subtitle: "Expert Valuations",
    description: "Get precise, expert valuations.",
  },
  {
    icon: "/icons/infoIcn3.svg",
    title: "Effortless Property Management",
    subtitle: "Full-Service Handling",
    description: "We handle everything for you.",
  },
  {
    icon: "/icons/highlightIcn.svg",
    title: "Smart Investments: Informed Decisions",
    subtitle: "Data-Driven Insights",
    description: "Data-driven insights for growth.",
  },
];
// -------------------------------

// --- IMAGE ROTATOR LOGIC ---

// 1. Define the array of image sources
const images: string[] = [
  "/heroImg.svg",
  "/heroImg2.svg",
  "/heroImg3.png",
];

// 2. Reactive state to track the index
const currentImageIndex: Ref<number> = ref(0);
const intervalDuration: number = 10000;

let rotationInterval: number | null = null;

const nextImage = (): void => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
  rotationInterval = window.setInterval(nextImage, intervalDuration);
});
onUnmounted(() => {
  if (rotationInterval !== null) {
    window.clearInterval(rotationInterval);
  }
});

const currentImageSrc = (): string => images[currentImageIndex.value]!;
// -------------------------------------------------------------
</script>

<template>
  <div>
    <div
      class="grid grid-cols-1 space-y-5 lg:space-y-0 lg:grid-cols-2 w-full items-center min-h-screen"
    >
      <div class="flex flex-col main_padding gap-y-3 lg:space-y-5 pt-6 lg:pt-0">
        <Text
          text="Your Journey to Tomorrow Begins Here"
          size="xs"
          color="primary"
          class="px-2 inline-block"
        />
        <Text
          text="Explore the Frontiers of Artificial Intelligence"
          size="2xl"
          color="white"
          class="px-2 inline-block"
        />
        <Text
          text="Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."
          size="sm"
          color="secondary"
          class="px-2 inline-block"
        />
        <Button
          text="Explore Resources"
          icon="mdi:arrow-top-right"
          color="secondary"
          class="mt-2 lg:px-20 sm:px-4"
          iconColor="yellow"
          @click="() => router.push('/view-blog')"
        />
        <Box :stats="stats" />
      </div>

      <div class="w-full aspect-video h-full relative overflow-hidden">
        <Transition name="fade" mode="out-in">
          <NuxtImg
            :key="currentImageIndex"
            :src="currentImageSrc()"
            alt="Rotating Image"
            format="webp"
            quality="95"
            class="w-full h-full object-cover"
          > 
          </NuxtImg>
        </Transition>

        <div
          class="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 p-1 rounded"
        >
          Image {{ currentImageIndex + 1 }} of {{ images.length }}
        </div>
      </div>
    </div>

    <InfoBox :items="infoItems" />
  </div>
</template>

<style scoped>
/* Vue Transition CSS classes for a simple fade effect. */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease; /* 1000ms fade duration */
}

.fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease; /* 1000ms fade duration */
}

.fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
