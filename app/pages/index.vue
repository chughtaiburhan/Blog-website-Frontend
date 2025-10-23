<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// Lazy load large or below-the-fold components
const EBookes = defineAsyncComponent(() => import('~/component/EBookes.vue'))
const Testimonials = defineAsyncComponent(() => import('~/component/Testimonials.vue'))
const ViewAllBlogs = defineAsyncComponent(() => import('~/component/ViewAllBlogs.vue'))

// Components that should load immediately (above the fold)
import Hero from '~/component/Hero.vue'
import HighlightsSection from '~/component/HighlightsSection.vue'

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

    <!-- Lazy load these with suspense fallback -->
    <Suspense>
      <template #default>
        <ViewAllBlogs />
      </template>
      <template #fallback>
        <div class="text-center text-white py-10">Loading blogs...</div>
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <EBookes />
      </template>
      <template #fallback>
        <div class="text-center text-white py-10">Loading eBooks...</div>
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Testimonials />
      </template>
      <template #fallback>
        <div class="text-center text-white py-10">Loading testimonials...</div>
      </template>
    </Suspense>
  </div>
</template>
