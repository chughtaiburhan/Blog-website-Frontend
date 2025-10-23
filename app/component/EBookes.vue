<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";
import Text from "./Text.vue";

// Toggle for modal visibility
const showModal = ref(false);

// Google Drive file info
const fileId = "1O6T9RE_SJ_XG-noR6G9tEeebEN_sRhMZ";
const previewLink = `https://drive.google.com/file/d/${fileId}/preview`;
const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

// Safe open function for TypeScript
const openDownload = () => {
  if (typeof window !== "undefined") {
    window.open(downloadLink, "_blank");
  }
};
</script>

<template> 
    <!-- Top Section -->
    <div
      class="main_padding  py-10 sm:py-16 lg:py-20 space-y-5 flex-1 lg:flex items-center justify-between"
    >
      <div class="shrink-0 space-y-2 sm:space-y-5 lg:w-[70%]">
        <Text
          text="Your Gateway to In-Depth Information"
          size="sm"
          color="white"
          class="px-2 p-1 inline-block bg-[#282828]"
        />
        <Text
          text="Unlock Valuable Knowledge with FutureTech's Resources"
          size="xl"
          color="white"
          class="font-semibold"
        />
      </div>
      <div class="flex justify-start sm:justify-start pt-5 lg:pt-0">
        <Button
          text="View All Blogs"
          icon="mdi:text-box-multiple-outline"
          color="secondary"
          class="mt-2 px-10 sm:px-4"
          iconColor="yellow"
        />
      </div>
    </div>

    <!-- EBook Section -->
    <div
      class="main_padding bg-[#0a0a0a] grid grid-cols-1 lg:grid-cols-2 justify-center items-center border-t border-[#282828]"
    >
      <!-- Left Side -->
      <div
        class="flex flex-col justify-center items-start space-y-2 border-b sm:border-b lg:border-b-0 lg:border-r border-[#282828] h-full py-5"
      >
        <NuxtImg
          src="/icons/highlightIcn.svg"
          height="200"
          width="200"
          format="webp"
          quality="80"
          loading="lazy"
          class="pb-4 sm:mx-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
        />
        <Text text="Ebooks" size="xl" color="white" class="p-1 inline-block" />
        <Text
          text="Explore our collection of ebooks covering a wide spectrum of future technology topics."
          size="sm"
          color="secondary"
          class="p-1 inline-block"
        />

        <!-- Download Button -->
        <Button
          text="Download Book Now"
          icon="mdi:download"
          color="secondary"
          class="mt-2 px-10 sm:px-4"
          iconColor="yellow"
          @click="openDownload"
        />
      </div>

      <!-- Right Side -->
      <div
        class="flex flex-col justify-center items-start py-10 lg:px-5 space-y-5"
      >
        <div
          class="flex-1 flex flex-col space-y-2 sm:space-y-0 sm:space-x-5 justify-start items-start"
        >
          <Text
            text="Variety of Topics"
            size="md"
            color="white"
            class="p-1 inline-flex w-auto whitespace-nowrap font-bold"
          />
          <Text
            text="Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%)."
            size="xs"
            color="secondary"
            class="p-1 inline-block"
          />
        </div>

        <div class="aspect-auto border border-[#282828] rounded-xl w-full">
          <NuxtImg
            src="/eBookImg.svg"
            alt="EBookImg"
            loading="lazy"
            format="webp"
            quality="80"
            class="w-full object-contain"
          />
        </div>

        <div
          class="flex-1 flex flex-col space-y-5 lg:space-y-0 sm:flex-row sm:space-x-5 w-full"
        >
          <div
            class="flex flex-col w-full sm:w-auto justify-center lg:justify-start items-start border border-[#282828] bg-[#191919] py-1 px-3 rounded-xl"
          >
            <Text
              text="Total EBooks"
              size="sm"
              color="secondary"
              class="p-1 inline-flex whitespace-nowrap"
            />
            <Text
              text="Over 100 EBooks"
              size="xs"
              color="white"
              class="p-1 inline-flex whitespace-nowrap"
            />
          </div>

          <!-- Preview Button -->
          <div
            class="px-3 py-2 lg:space-y-2 h-auto flex-1 xl:flex items-center justify-between bg-[#191919] border border-[#282828] rounded-xl"
          >
            <div class="shrink-0 space-y-1 py-1">
              <Text text="Format Download" size="sm" color="secondary" />
              <Text text="PDF format for access" size="xs" color="white" />
            </div>
            <div
              class="flex justify-start md:justify-start lg:justify-start w-full xl:justify-end pb-2 sm:pb-0"
            >
              <Button
                text="Preview eBook"
                icon="mdi:eye"
                color="secondary"
                class="px-20 sm:px-4"
                iconColor="yellow"
                @click="showModal = true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for PDF Preview -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
      >
        <div
          class="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl relative"
        >
          <!-- Close Button -->
          <button
            @click="showModal = false"
            class="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
          >
            ✕ Close
          </button>

          <!-- PDF Frame -->
          <iframe
            :src="previewLink"
            width="100%"
            height="600"
            allow="autoplay"
            class="w-full rounded-b-2xl"
          ></iframe>
        </div>
      </div>
    </transition>
 </template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
