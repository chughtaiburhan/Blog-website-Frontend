<script setup lang="ts">
import Text from "./Text.vue";

defineProps<{
  stats: {
    value: string;
    label: string;
  }[];
}>();
</script>

<template>
  <div
    class="flex flex-row border border-[#282828] py-2 justify-center items-center divide-y-0 divide-x divide-[#282828]"
  >
    <div
      v-for="(item, index) in stats"
      :key="index"
      class="flex flex-col sm:px-4  flex-1 justify-center items-center px-2"
    >
      <Text
        :text="item.value"
        size="xs"
        color="white"
        class="inline-block "
      />
 <p class="text-center font-extralight text-gray-400  text-xs">
  {{ item.label }}
 </p> 
    </div>
  </div>
</template>
