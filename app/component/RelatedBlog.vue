<script setup lang="ts">
import { defineProps } from "vue";
import Button from "~/component/Button.vue";
import Text from "~/component/Text.vue";
import { NuxtImg } from "#components";

const props = defineProps<{
  blogs: any[];
  heading?: string;
  borderColor?: string;
  backgroundColor?: string;
  buttonText?: string;
  showImages?: boolean;
  columns?: number;
}>();
</script>

<template>
  <section
    v-if="blogs?.length"
    class="px-4 sm:px-6 lg:px-10 pt-10 pb-12 lg:pt-20 lg:pb-24"
  >
    <!-- ✅ Heading -->
    <div
      class="text-xl sm:text-2xl font-bold text-white border-l-4 pl-3 mb-8"
      :style="{ borderColor: borderColor || '#ffd119' }"
    >
      <h2>{{ heading || "Related Blogs" }}</h2>
    </div>

    <!-- ✅ Responsive Grid -->
    <div
      class="grid gap-8 sm:gap-10 lg:gap-12"
      :class="{
        'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3': !columns,
        [`grid-cols-${columns}`]: !!columns,
      }"
    >
      <!-- ✅ Blog Card -->
      <div
        v-for="related in blogs"
        :key="related._id"
        class="p-5 sm:p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        :style="{ backgroundColor: backgroundColor || '#1a1a1a' }"
      >
        <!-- Image -->
        <NuxtImg
          v-if="showImages !== false"
          format="webp"
          quality="80"
          loading="lazy"
          :src="related.image"
          :alt="related.title"
          class="w-full h-44 sm:h-52 lg:h-56 object-cover rounded-xl mb-4"
        />

        <!-- ✅ Content -->
        <div class="flex flex-col flex-grow">
          <!-- Title -->
          <Text
            :text="related.title"
            size="base"
            color="white"
            class="font-semibold mb-2 border-b border-[#282828] pb-2 text-sm sm:text-base"
          />

          <!-- Description -->
          <Text
            :text="related.metaDescription"
            size="xs"
            color="secondary"
            class="mb-4 text-gray-300 leading-relaxed line-clamp-3"
          />

          <!-- ✅ Metadata (Category, Date, Author) -->
          <div
            class="flex flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 mb-4"
          >
            <div class="flex flex-col">
              <h5 class="text-[12px] text-gray-400">Category</h5>
              <Text
                :text="related.categoryId?.name || 'Uncategorized'"
                size="xs"
                color="secondary"
              />
            </div>

            <div class="flex flex-col">
              <h5 class="text-[12px] text-gray-400">Date</h5>
              <Text
                :text="
                  new Date(related.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                "
                size="xs"
                color="secondary"
              />
            </div>

            <div class="flex flex-col">
              <h5 class="text-[12px] text-gray-400">Author</h5>
              <Text
                :text="related.authorId?.name || 'Unknown'"
                size="xs"
                color="secondary"
              />
            </div>
          </div>

          <!-- ✅ Actions (Left: Likes + Comments, Right: Read More) -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 space-y-3 sm:space-y-0"
          >
            <div class="flex space-x-3 sm:space-x-5">
              <Button
                :text="String(related.likes?.length || 0)"
                icon="mdi:heart"
                class="w-fit"
                iconColor="yellow"
              />
              <Button
                :text="String(related.comments?.length || 0)"
                icon="mdi:comment-text"
                color="secondary"
                class="w-fit"
                iconColor="yellow"
                @click="console.log('blog comment')"
              />
            </div>

            <Button
              :text="buttonText || 'Read More'"
              class="w-full sm:w-fit self-end sm:self-auto"
              @click="$router.push(`/blog/${related._id}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Limit text lines for description */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
