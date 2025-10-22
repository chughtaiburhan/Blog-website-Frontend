<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useItemList } from "~/stores/useListItem";
import { useBlogStore } from "~/stores/useBlog";
import Button from "./Button.vue";
import Text from "./Text.vue";
import CategoryButton from "./CategoryButton.vue";
import BlogSkeleton from "./BlogSkeleton.vue";

const route = useRoute();
const router = useRouter();

// ---------- STORES ----------
const lIStore = useItemList();
const blogStore = useBlogStore();

// ---------- LOCAL STATE ----------
const categories = ref<string[]>([]);
const posts = ref<any[]>([]);

const fetchData = async () => {
  await lIStore.fetchItemList();
  await blogStore.fetchBlogsDataList();

  posts.value = blogStore.blogsData;
  categories.value = blogStore.blogsData.map((b) => b.categoryId?.name);
};

onMounted(fetchData);

const selectedItem = computed(() =>
  lIStore.items.find((item) => item.slug === route.params.slug)
);

const displayedBlogs = computed(() => {
  const allPosts = posts.value;
  const currentCategory = selectedItem.value;

  if (!currentCategory) return allPosts;

  return allPosts.filter((post) => {
    const categoryName = post.categoryId?.name || "";
    const selectedCategory = currentCategory.name || "";
    return categoryName.includes(selectedCategory);
  });
});

const activeItemId = ref<string | null>(null);

const handleCategoryRoute = async (item: {
  id: string;
  slug?: string;
  name?: string;
}) => {
  activeItemId.value = item.id;
  const listItem = lIStore.items.find((val) =>
    item.slug ? val.slug === item.slug : val.id === item.id
  );
  if (!listItem) return;

  if (route.path === "/") {
    blogStore.blogsData = [];
    await blogStore.fetchBlogsDataList(listItem.slug);
    posts.value = blogStore.blogsData;
  };
};

const handleViewBlog = (slug: string) => {
  router.push(`/blog/${slug}`);
};

useHead(() => {
  const first = lIStore.items[0];
  return {
    title: first?.seoTitle || "Explore FutureTech Blogs",
    meta: [
      {
        name: "description",
        content:
          first?.seoDescription ||
          "Discover the latest technology and innovations.",
      },
    ],
  };
});
</script>

<template>
  <div
    class="main_padding border-b border-[#282828] py-10 sm:py-16 lg:py-20 space-y-2 sm:space-y-5 flex-1 lg:flex items-center justify-between"
  >
    <div class="shrink-0">
      <Text
        text="A Knowledge Treasure Trove"
        size="sm"
        color="white"
        class="px-2 p-1 inline-block bg-[#282828]"
      />
      <Text
        text="Explore FutureTech's In-Depth Blog Posts"
        size="xl"
        color="white"
        class="font-semibold"
      />
    </div>
    <div class="flex justify-center sm:justify-start">
      <Button
        text="View All Blogs"
        icon="mdi:arrow-top-right"
        color="secondary"
        class="mt-2 px-20 sm:px-4"
        iconColor="yellow"
        @click="() => router.push('/view-blog')"
      />
    </div>
  </div>

  <div class="bg-black">
    <CategoryButton
      :items="lIStore.items"
      :activeItemId="activeItemId"
      :onSelect="handleCategoryRoute"
    />
    <template v-if="blogStore.loading || displayedBlogs.length === 0">
      <BlogSkeleton :show="true" :count="3" />
    </template>
    
    <div v-else>
      <div
        v-for="blog in displayedBlogs"
        :key="blog._id"
        class="main_padding flex flex-col lg:flex-row justify-between items-center lg:items-center h-auto space-y-5 lg:space-y-0 lg:space-x-12 py-10 border-b border-[#282828]"
      >
        <div class="w-full lg:w-[30%] px-2 lg:px-0">
          <div
            v-if="!blog.image"
            role="status"
            class="flex items-center justify-center h-56 max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
          >
            <svg
              class="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path
                d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
              />
              <path
                d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <NuxtImg
            v-else
            format="webp"
            quality="80"
            loading="lazy"
            :src="blog.image || ''"
            :alt="blog.title"
            class="w-4/4 lg:w-[100%] rounded-2xl"
          />
        </div>

        <div
          class="w-full lg:w-[50%] flex flex-col items-start justify-start space-y-1"
        >
          <Text
            :text="`${blog.authorId.name} • ${blog.createdAt}`"
            size="sm"
            color="secondary"
            class="px-2 inline-block"
          />
          <Text
            :text="blog.title"
            size="2xl"
            color="white"
            class="px-2 inline-block"
          />
          <Text
            :text="blog.description"
            size="sm"
            color="white"
            class="px-2 inline-block"
          />
          <Text
            :text="blog.categoryId?.name"
            size="sm"
            color="primary"
            class="px-2 inline-block"
          />
        </div>

        <div
          class="w-full px-2 lg:hidden space-x-3 items-start justify-start flex"
        >
          <Button
            :text="String(blog.likes?.length || 0)"
            icon="mdi:heart"
            color="secondary"
            class="sm:px-4"
            iconColor="yellow"
            @click="() => handleViewBlog(blog._id)"
          />
          <Button
            :text="String(blog.comments?.length || 0)"
            icon="mdi:comment-text"
            color="secondary"
            class="sm:px-4"
            iconColor="yellow"
            @click="() => handleViewBlog(blog._id)"
          />
        </div>
        <div class="w-full lg:w-[20%]">
          <Button
            text="View Blog"
            icon="mdi:arrow-top-right"
            color="secondary"
            class="sm:px-4 w-full"
            iconColor="yellow"
            @click="() => handleViewBlog(blog._id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
