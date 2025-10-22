<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import Button from "~/component/Button.vue";
import Text from "~/component/Text.vue";
import { useBlogStore } from "~/stores/useBlog";
import { useHead } from "#imports";
import RelatedBlog from "~/component/RelatedBlog.vue";

const route = useRoute();
const blogStore = useBlogStore();

// Reactive flag for loading
const dataReady = ref(false);

// Fetch blog data
const { error } = await useAsyncData(`blog-${route.params.slug}`, () =>
  blogStore.fetchSingleBlog(route.params.slug as string)
);

// Watch for loading changes
watch(
  () => blogStore.loading,
  (isLoading) => {
    dataReady.value = !isLoading && !!blogStore.currentBlog;
  },
  { immediate: true }
);

watch(
  () => blogStore.currentBlog,
  (blog) => {
    if (blog) {
      useHead({
        title: blog.metaDescription || "Explore FutureTech Blogs",
        meta: [
          {
            name: "description",
            content:
              blog.metaDescription ||
              "Discover the latest technology and innovations.",
          },
        ],
      });
    }
  },
  { immediate: true }
);

watch(
  () => blogStore.currentBlog,
  async (blog) => {
    if (blog) {
      useHead({
        title: blog.metaDescription || "Explore FutureTech Blogs",
        meta: [
          {
            name: "description",
            content:
              blog.metaDescription ||
              "Discover the latest technology and innovations.",
          },
        ],
      });

      await blogStore.fetchRelatedBlog(blog);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="bg-transparent min-h-screen text-white relative overflow-hidden font-sans"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute top-1/3 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"
      ></div>
    </div>

    <ClientOnly>
      <div
        v-if="error || blogStore.error"
        class="relative z-10 flex items-center justify-center min-h-screen"
      >
        <div
          class="text-center bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md mx-4"
        >
          <p class="text-red-400 text-lg">
            {{ error?.message || blogStore.error }}
          </p>
        </div>
      </div>

      <article
        v-else-if="blogStore.currentBlog && dataReady"
        class="relative z-10 pb-16"
      >
        <header
          class="px-4 sm:px-6 lg:px-8 pt-12 pb-5 lg:pt-20 lg:pb-32 max-w-7xl mx-auto"
        >
          <div class="relative mb-12 lg:mb-16">
            <NuxtImg
              format="webp"
              quality="80"
              loading="lazy"
              :src="blogStore.currentBlog.image"
              :alt="blogStore.currentBlog.title"
              class="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
            />
            <div
              class="absolute inset-0 bg-transparent rounded-3xl flex items-end"
            >
              <div class="p-6 sm:p-8 lg:p-12 w-full flex justify-center">
                <Text
                  :text="blogStore.currentBlog.title"
                  size="2xl"
                  color="white"
                  class="px-2 inline-block font-bold"
                />
              </div>
            </div>
          </div>
          <div
            class="relative flex lg:hidden justify-center space-x-4 rounded-full"
          >
            <div class="flex items-center text-sm">
              <Button
                :text="String(blogStore.currentBlog.likes?.length || 0)"
                icon="mdi:heart"
                color="secondary"
                class="sm:px-4"
                iconColor="yellow"
                @click="console.log('blog liked')"
              />
            </div>
            <div class="flex items-center">
              <Button
                :text="String(blogStore.currentBlog.comments?.length || 0)"
                icon="mdi:comment-text"
                color="secondary"
                class="sm:px-4"
                iconColor="yellow"
                @click="console.log('blog comment')"
              />
            </div>
          </div>
        </header>

        <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div class="lg:grid lg:grid-cols-3 lg:gap-12 xl:gap-16">
            <div class="lg:col-span-2 space-y-8">
              <section
                id="introduction"
                class="mb-8 border-b border-[#282828] py-5"
              >
                <div
                  class="text-xl font-bold text-white border-l-4 border-[#ffd119] pl-2"
                >
                  <h2 class="mb-4">Description</h2>
                </div>
                <Text
                  :text="blogStore.currentBlog.description"
                  size="sm"
                  color="text-white"
                  class="pl-2"
                />
              </section>

              <aside
                class="lg:hidden border-b border-[#282828] pb-4 flex flex-col shadow-inner space-y-4 mb-8"
              >
                <div
                  class="grid grid-cols-2 gap-y-4 border-b border-[#282828] py-4 shadow-lg"
                >
                  <div>
                    <p class="text-gray-400 font-extralight mb-1">
                      Publication Date
                    </p>
                    <Text
                      :text="blogStore.currentBlog.createdAt"
                      size="xs"
                      color="primary"
                    />
                  </div>
                  <div>
                    <p class="text-gray-400 font-extralight mb-1">Category</p>
                    <Text
                      :text="blogStore.currentBlog.categoryId.name"
                      size="xs"
                      color="primary"
                    />
                  </div>
                  <div>
                    <p class="text-gray-400 font-extralight mb-1">
                      Author Name
                    </p>
                    <Text
                      :text="blogStore.currentBlog.authorId.name"
                      size="xs"
                      color="primary"
                    />
                  </div>
                </div>
                <div class="flex-col justify-center">
                  <div
                    class="text-xl font-bold text-white border-l-4 border-[#ffd119] pl-2"
                  >
                    <h2 class="mb-4">Meta Information</h2>
                  </div>
                  <Text
                    :text="blogStore.currentBlog.metaDescription"
                    size="xs"
                    color="primary"
                    class="pl-2"
                  />
                </div>
              </aside>

              <section id="ai" class="py-2 border-b border-[#282828]">
                <div
                  class="text-xl font-bold text-white border-l-4 border-[#ffd119] pl-2"
                >
                  <h2 class="mb-4">Content</h2>
                </div>
                <Text
                  :text="blogStore.currentBlog.content"
                  size="xs"
                  color="secondary"
                  class="pl-2"
                />
              </section>
            </div>
            <aside
              class="hidden lg:block lg:col-span-1 lg:sticky lg:top-8 self-start p-6 rounded-xl shadow-2xl space-y-6"
            >
              <div class="relative flex justify-start space-x-4 rounded-full">
                <div class="flex items-center text-sm">
                  <Button
                    :text="String(blogStore.currentBlog.likes?.length || 0)"
                    icon="mdi:heart"
                    color="secondary"
                    class="sm:px-4"
                    iconColor="yellow"
                    @click="console.log('blog liked')"
                  />
                </div>
                <div class="flex items-center">
                  <Button
                    :text="String(blogStore.currentBlog.comments?.length || 0)"
                    icon="mdi:comment-text"
                    color="secondary"
                    class="sm:px-4"
                    iconColor="yellow"
                    @click="console.log('blog comment')"
                  />
                </div>
              </div>
              <div class="space-y-4 text-sm">
                <div
                  class="grid grid-cols-2 gap-y-4 gap-x-10 border-b border-[#282828]"
                >
                  <div class="border-b border-[#282828]">
                    <p class="text-gray-400 font-semibold">Publication Date</p>
                    <Text
                      :text="blogStore.currentBlog.createdAt"
                      size="xs"
                      color="primary"
                    />
                  </div>
                  <div class="border-b border-[#282828]">
                    <p class="text-gray-400 font-semibold">Category</p>
                    <Text
                      :text="blogStore.currentBlog.categoryId.name"
                      size="xs"
                      color="primary"
                    />
                  </div>
                  <div>
                    <p class="text-gray-400 font-semibold">Author Name</p>
                    <Text
                      :text="blogStore.currentBlog.authorId.name"
                      size="xs"
                      color="primary"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-col justify-center">
                <div
                  class="text-xl font-bold text-white border-l-4 border-[#ffd119] pl-2"
                >
                  <h2 class="mb-4">Meta Information</h2>
                </div>
                <Text
                  :text="blogStore.currentBlog.metaDescription"
                  size="xs"
                  color="primary"
                  class="pl-2"
                />
              </div>
            </aside>
          </div>
        </div>
        <RelatedBlog
          :blogs="blogStore.relatedBlogs"
          heading="More Articles You’ll Love"
          borderColor="#00ffff"
          backgroundColor="#111"
          buttonText="Explore"
          :showImages="true"
        />
      </article>
    </ClientOnly>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-2000 {
  animation-delay: 2s;
}
</style>
