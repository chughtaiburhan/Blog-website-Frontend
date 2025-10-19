<template>
  <component
    :is="tag"
    :class="[
      baseClass,
      colorClass,
      weightClass,
      sizeClass,
      alignClass,
      extraClass
    ]"
  >
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'p' },
  color: { type: String, default: 'white' },
  weight: { type: String, default: 'normal' },
  size: { type: String, default: 'md' },
  align: { type: String, default: 'left' },
  extraClass: { type: String, default: '' }
})

const baseClass = 'tracking-wide transition-all duration-200'

const colorClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'text-[#ffd119]'
    case 'secondary':
      return 'text-gray-400'
    case 'black':
      return 'text-black'
    case 'white':
      return 'text-white'
    default:
      return props.color 
  }
})

const weightClass = computed(() => {
  switch (props.weight) {
    case 'bold':
      return 'font-bold'
    case 'medium':
      return 'font-medium'
    case 'light':
      return 'font-light'
    default:
      return ''
  }
})

const sizeClass = computed(() => {
  switch (props.size) { 
    case 'sm':
      return 'font-normal text-xs md:text-sm lg:text-sm xl:text-lg'
    case 'md':
      return 'text-xs sm:text-sm xl:text-base'
    case 'lg':
      return 'text-lg sm:text-2xl md:text-3xl'
    case 'xl':
      return 'text-xl sm:text-2xl md:text-3xl xl:text-4xl'
    case '2xl':
      return 'text-xl sm:text-2xl py-2 xl:text-4xl leading-normal'
    default:
      return props.size
  }
})

const alignClass = computed(() => {
  switch (props.align) {
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-left'
  }
})
</script>

<style scoped>
</style>
