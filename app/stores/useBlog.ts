// ~/stores/useBlog.ts
import { defineStore } from "pinia";
import { apiFetch } from "~/utils/api";
import type { Blog, BlogsData } from "~/types/blogs";

export const useBlogStore = defineStore("blog", {
  state: (): BlogsData & { 
    page: number; 
    limit: number; 
    currentBlog: Blog | null; 
    loading: boolean; 
    error: string | null;
    isCached: boolean; // ✅ New state to track cache status
  } => ({
    blogsData: [],
    currentBlog: null,
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    isCached: false, // ✅ default false
  }),

  actions: {
    // ✅ Fetch paginated blog list
    async fetchBlogsDataList(categorySlug?: string, page = 1, limit = 10) {
      this.loading = true;
      this.error = null;
      this.blogsData = [];
      this.isCached = false;

      try {
        let endpoint = `/blogs/get?page=${page}&limit=${limit}`;
        if (categorySlug)
          endpoint += `&category=${encodeURIComponent(categorySlug)}`;

        const res = await apiFetch<{ 
          message: string; 
          blogs: Blog[];
          cache?: boolean; // ✅ handle backend cache flag
        }>(endpoint);

        this.blogsData = res.blogs.filter(
          (b) => b.authorId && b.authorId.name && b.categoryId
        );
        this.page = page;
        this.limit = limit;
        this.isCached = !!res.cache; // ✅ true if cached
      } catch (err: any) {
        this.error = err.message;
        this.blogsData = [];
      } finally {
        this.loading = false;
      }
    },
 
    // ✅ Fetch single blog
    async fetchSingleBlog(slug: string) {
      this.loading = true;
      this.error = null;
      this.currentBlog = null;
      this.isCached = false;

      try {
        const endpoint = `/blogs/${encodeURIComponent(slug)}`;
        const res = await apiFetch<{ 
          message: string; 
          blog: Blog; 
          cache?: boolean; 
        }>(endpoint);

        this.currentBlog = res.blog;
        this.isCached = !!res.cache; // ✅ set true if from Redis
        return res.blog;
      } catch (err: any) {
        this.error = err.message || "Failed to fetch blog";
        this.currentBlog = null;
      } finally {
        this.loading = false;
      }
    }, 

    clearCurrentBlog() {
      this.currentBlog = null;
      this.isCached = false;
    },
  },
});
