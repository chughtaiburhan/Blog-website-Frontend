<script setup lang="ts">
import Button from "./Button.vue";
import Text from "./Text.vue";
</script>

<template>
  <div class="main_padding bg-black">
    <div
      class="py-10 sm:py-16 lg:py-20 space-y-5 flex-1 lg:flex items-center justify-between"
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

    <div
      class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center border-y border-[#282828]"
    >
      <div
        class="flex flex-col justify-center items-start space-y-2 border-b sm:border-b lg:border-r border-[#282828] h-full py-5"
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
        <Button
          text="Download Book Now"
          icon="mdi:download"
          color="secondary"
          class="mt-2 px-10 sm:px-4"
          iconColor="yellow"
        />
      </div>

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
                text="Preview"
                icon="mdi:eye"
                color="secondary"
                class="px-20 sm:px-4"
                iconColor="yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
