<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · MyBlog` : 'FutureTech — Thoughts and Stories';
  },
  link:[
 { rel: 'icon', type: 'logo/svg', href: '/icons/logo.svg' },
  ],
  meta: [
    { name: 'description', content: 'A modern blogging platform built with Nuxt.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})
</script>

<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
