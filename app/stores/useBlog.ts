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
    relatedBlogs: Blog[] ;
  } => ({
    blogsData: [],
    currentBlog: null,
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    relatedBlogs: [],
  }),

  actions: {
    // Fetch paginated blog list
    async fetchBlogsDataList(categorySlug?: string, page = 1, limit = 10) {
      this.loading = true;
      this.error = null;
      this.blogsData = [];

      try {
        let endpoint = `/blogs/get?page=${page}&limit=${limit}`;
        if (categorySlug)
          endpoint += `&category=${encodeURIComponent(categorySlug)}`;

        const res = await apiFetch<{ message: string; blogs: Blog[] }>(
          endpoint
        );

        this.blogsData = res.blogs.filter(
          (b) => b.authorId && b.authorId.name && b.categoryId
        );
        this.page = page;
        this.limit = limit;
      } catch (err: any) {
        this.error = err.message;
        this.blogsData = [];
      } finally {
        this.loading = false;
      }
    },

    async fetchSingleBlog(slug: string) {
      this.loading = true;
      this.error = null;
      this.currentBlog = null;
      this.relatedBlogs = [];

      try {
        const endpoint = `/blogs/${encodeURIComponent(slug)}`;
        const res = await apiFetch<{ message: string; blog: Blog }>(endpoint);

        this.currentBlog = res.blog;
        return res.blog;
      } catch (err: any) {
        this.error = err.message || "Failed to fetch blog";
        this.currentBlog = null;
      } finally {
        this.loading = false;
      }
    },

    async fetchRelatedBlog(blog: Blog) {
      if (!blog) return;
      try {
        let endpoint = `/blogs/get?exclude=${encodeURIComponent(blog._id)}`;

        if (blog.categoryId?.name)
          endpoint += `&category=${encodeURIComponent(blog.categoryId.name)}`;
        const res = await apiFetch<{ blogs: Blog[] }>(endpoint);
        this.relatedBlogs = res.blogs.filter((b) => b._id !== blog._id);
      } catch {
        this.relatedBlogs = [];
      }
    },
    clearCurrentBlog() {
      this.currentBlog = null;
    },
  },
});
