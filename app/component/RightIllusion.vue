<template>
  <div
    :class="[
      'hidden md:flex relative justify-center items-center h-full min-h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-xl backdrop-blur-sm',
      props.class,
    ]"
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

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  class: {
    type: [String, Array, Object],
    default: "",
  },
})
</script>
