<script setup lang="ts">
import { defineProps } from "vue";
import Button from "./Button.vue";

const props = defineProps<{
  items: any[];
  activeItemId: string | null;
  onSelect: (item: any) => void;
}>();
</script>

<template>
  <div class="py-8 border-b border-[#282828]">
    <div class="flex justify-center space-x-10">
      <Button
        v-for="item in props.items"
        :key="item.id"
        :text="item.name"
        :color="props.activeItemId === item.id ? 'yellow' : 'secondary'"
        class="py-4 px-8 font-normal"
        @click="() => props.onSelect(item)"
      />
    </div>
  </div>
</template>
