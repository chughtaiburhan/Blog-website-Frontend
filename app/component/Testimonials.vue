<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Text from './Text.vue'
import { Icon } from '@iconify/vue'

// Type definition
interface Testimonial {
  name: string
  location: string
  avatarUrl: string
  rating: number
  quote: string
}

// Dummy testimonials
const testimonials = ref<Testimonial[]>([
  {
    name: 'Sarah Thompson',
    location: 'San Francisco, USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    quote:
      'The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.',
  },
  {
    name: 'Raj Patel',
    location: 'Mumbai, India',
    avatarUrl: 'https://i.pravatar.cc/150?img=68',
    rating: 4,
    quote:
      'The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.',
  },
  {
    name: 'Emily Adams',
    location: 'London, UK',
    avatarUrl: 'https://i.pravatar.cc/150?img=50',
    rating: 5,
    quote:
      'The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.',
  },
  {
    name: 'Alan Jackson',
    location: 'Houston, USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    rating: 4,
    quote:
      'The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.',
  },
  {
    name: 'Jessica Miller',
    location: 'Boston, USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    quote:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    name: 'Diego Lopez',
    location: 'Barcelona, Spain',
    avatarUrl: 'https://i.pravatar.cc/150?img=65',
    rating: 4,
    quote:
      'The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.',
  },
])

// Helper for stars
const getStars = (count: number) => Array(count).fill(true)

// Carousel logic (for mobile)
const currentIndex = ref(0)
const carouselRef = ref<HTMLDivElement | null>(null)

const nextSlide = () => {
  if (currentIndex.value < testimonials.value.length - 1) {
    currentIndex.value++
    scrollToSlide()
  }
}
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    scrollToSlide()
  }
}

const scrollToSlide = () => {
  const container = carouselRef.value
  if (container) {
    const child = container.children[currentIndex.value] as HTMLElement
    child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }
}
</script>

<template> 
    <!-- Header -->
    <div class="main_padding py-10 sm:py-16 lg:py-20 space-y-5 flex-1 lg:flex items-center justify-between">
      <div class="shrink-0 space-y-2 sm:space-y-5">
        <Text
          text="What Our Readers Say"
          size="sm"
          color="white"
          class="px-2 p-1 inline-block bg-[#282828]"
        />
        <Text
          text="Real Words from Real Readers"
          size="xl"
          color="white"
          class="font-semibold"
        />
      </div>
    </div>

    <!-- Desktop Grid -->
    <div class="hidden md:grid main_padding bg-[#0a0a0a] py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="p-6 rounded-lg bg-[#1a1a1a] shadow-xl h-full flex flex-col justify-between"
      >
        <div class="flex items-center space-x-4 mb-4">
          <img
            :src="testimonial.avatarUrl"
            :alt="testimonial.name"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p class="text-white font-semibold text-base">{{ testimonial.name }}</p>
            <p class="text-gray-400 text-sm">{{ testimonial.location }}</p>
          </div>
        </div>

        <div class="mb-4 flex space-x-1">
          <svg
            v-for="(star, i) in getStars(5)"
            :key="i"
            :class="{
              'text-yellow-400': i < testimonial.rating,
              'text-gray-600': i >= testimonial.rating,
            }"
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </div>

        <p class="text-gray-300 text-sm leading-relaxed flex-grow">
          {{ testimonial.quote }}
        </p>
      </div>
    </div>

    <!-- Mobile Carousel -->
    <div class="relative md:hidden bg-[#0a0a0a] py-10 overflow-hidden">
      <!-- Arrow Left -->
      <button
  @click="prevSlide"
  class="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white hover:text-[#ffd119] active:text-[#ffd119] p-2 rounded-full z-10 transition-colors duration-200"
  :disabled="currentIndex === 0"
>
  <Icon icon="mdi:arrow-left-circle" class="w-6 h-6" />
</button>


      <!-- Carousel container -->
      <div
        ref="carouselRef"
        class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 px-6"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="snap-center shrink-0 w-[85%] p-6 rounded-lg bg-[#1a1a1a] shadow-xl"
        >
          <div class="flex items-center space-x-4 mb-4">
            <img
              :src="testimonial.avatarUrl"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p class="text-white font-semibold text-base">{{ testimonial.name }}</p>
              <p class="text-gray-400 text-sm">{{ testimonial.location }}</p>
            </div>
          </div>

          <div class="mb-4 flex space-x-1">
            <svg
              v-for="(star, i) in getStars(5)"
              :key="i"
              :class="{
                'text-yellow-400': i < testimonial.rating,
                'text-gray-600': i >= testimonial.rating,
              }"
              class="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          </div>

          <p class="text-gray-300 text-sm leading-relaxed">
            {{ testimonial.quote }}
          </p>
        </div>
      </div>

      <!-- Arrow Right -->
     <button
  @click="nextSlide"
  class="absolute right-2 top-1/2 -translate-y-1/2 
         bg-[#1a1a1a] text-white 
         hover:text-[#ffd119] active:text-[#ffd119] 
         p-2 rounded-full z-10 
         transition-colors duration-200"
  :disabled="currentIndex === testimonials.length - 1"
>
  <Icon icon="mdi:arrow-right-circle" class="w-6 h-6" />
</button>
 
  </div>
</template>
