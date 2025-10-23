<template>
  <div
    class="hidden md:flex relative justify-center items-center h-full min-h-[400px] bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-xl backdrop-blur-sm"
  >
    <NuxtImg
      :src="src"
      alt="Illustration"
      loading="lazy"
      format="webp"
      quality="90"
      class="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>
