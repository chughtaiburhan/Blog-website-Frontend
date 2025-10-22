<script setup lang="ts">
import Hero from '~/component/Hero.vue'
import HighlightsSection from '~/component/HighlightsSection.vue'
import ViewAllBlogs from '~/component/ViewAllBlogs.vue'

useHead({
  title: 'MyBlog',
  meta: [
    { name: 'description', content: 'Welcome to MyBlog — latest articles and stories.' }
  ]
})
</script>

<template>
  <div>
    <Hero />
    <HighlightsSection />
    <ViewAllBlogs />
  </div>
</template>
