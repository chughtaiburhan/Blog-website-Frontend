<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? undefined : type"
    :class="[
      'inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      colorClasses,
      sizeClasses,
      customClass
    ]"
    @click="emit('click', $event)"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      :class="['w-4 h-4 xl:w-5 xl:h-5  ml-2', iconColorClass]"
    />

    <span>{{ text }}</span>

    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      :class="['w-4 h-4 xl:w-5 xl:h-5 ml-2', iconColorClass]"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps({
  text: { type: String, required: true },
  type: { type: String, default: 'button' },
  color: { type: String, default: 'secondary' },
  size: { type: String, default: 'md' },
  icon: { type: String, default: '' },
  iconPosition: { type: String, default: 'right' },
  iconColor: { type: String, default: 'white' },
  to: { type: String, default: '' },
  customClass: { type: String, default: '' }
})

const emit = defineEmits(['click'])

const colorClasses = computed(() => {
  switch (props.color) {
    case 'secondary':
      return 'bg-transparent  border border-[#282828] text-white hover:border-[#ffd119]'
    default:
      return 'bg-[#ffd119] text-black focus:ring-[#ffd119]'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm px-3 py-1.5'
    case 'lg':
      return 'text-lg px-6 py-3'
    default:
      return 'text-sm xl:text-base px-4 py-2'
  }
})

const iconColorClass = computed(() => {
  switch (props.iconColor) {
    case 'yellow':
      return 'text-[#ffd119]'
    case 'gray':
      return 'text-gray-400'
    case 'white':
      return 'text-white'
    case 'black':
      return 'text-black'
    default:
      return props.iconColor 
  }
})
</script>

<style scoped>
button, a {
  cursor: pointer;
}
</style>
