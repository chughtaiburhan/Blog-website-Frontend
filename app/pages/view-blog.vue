<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useItemList } from "~/stores/useListItem";
import { useBlogStore } from "~/stores/useBlog";
import CategoryButton from "~/component/CategoryButton.vue";
import RelatedBlog from "~/component/RelatedBlog.vue";

const route = useRoute();
const router = useRouter();

// ---------- STORES ----------
const lIStore = useItemList();
const blogStore = useBlogStore();

// ---------- LOCAL STATE ----------
const posts = ref<any[]>([]);
const activeItemId = ref<string | null>(null);

// ---------- FETCH DATA ----------
const fetchData = async () => {
  await lIStore.fetchItemList();
  await blogStore.fetchBlogsDataList(); // Fetch all blogs initially
  posts.value = blogStore.blogsData;
};

// ---------- ON MOUNT ----------
onMounted(fetchData);

// ---------- CATEGORY SELECTION ----------
const handleCategoryRoute = async (item: { id: string; slug?: string }) => {
  activeItemId.value = item.id;
  blogStore.blogsData = [];

  await blogStore.fetchBlogsDataList(item.slug); // Fetch category blogs
  posts.value = blogStore.blogsData;
};

// ---------- BLOG CLICK ----------
const handleViewBlog = (slug: string) => {
  router.push(`/blog/${slug}`);
};

// ---------- SEO ----------
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
  <div class="bg-black min-h-screen">
    <!-- Category Buttons -->
    <CategoryButton
      :items="lIStore.items"
      :activeItemId="activeItemId"
      :onSelect="handleCategoryRoute"
    />

    <!-- Blog Listing -->
    <RelatedBlog
      :blogs="posts"
      heading="More Articles You’ll Love"
      borderColor="#ffd119"
      backgroundColor="#111"
      buttonText="Explore"
      :showImages="true" 
      class="main_padding"
    />
  </div>
</template>
