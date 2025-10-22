<script setup lang="ts">
import { defineProps } from "vue";
import Button from "~/component/Button.vue";
import Text from "~/component/Text.vue";
import { NuxtImg } from "#components";

const props = defineProps<{
  blogs: any[];
}>();
</script>

<template>
  <section v-if="blogs.length" class="px-4 sm:px-6 lg:px-8 pt-12 pb-5 lg:pt-20 lg:pb-32 max-w-7xl mx-auto">
    <div class="text-xl font-bold text-white border-l-4 border-[#ffd119] pl-2">
                  <h2 class="mb-4">Related Blogs</h2>
                </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="related in blogs"
        :key="related._id"
        class="bg-[#1a1a1a] p-4 rounded-xl hover:shadow-lg transition"
      >
        <NuxtImg
          format="webp"
          quality="80"
          loading="lazy"
          :src="related.image"
          :alt="related.title"
          class="w-full h-40 object-cover rounded-lg mb-3"
        />
        <Text
          :text="related.title"
          size="sm"
          color="white"
          class="font-semibold mb-1 pb-2 border-b border-[#282828]"
        />
        <Text :text="related.metaDescription" size="xs" color="secondary" class="py-2" />
        <Button
          :text="'Read More'"
          class="mt-2"
          @click="$router.push(`/blog/${related._id}`)"
        />
      </div>
    </div>
  </section>
</template>
