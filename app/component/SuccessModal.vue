<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center flex flex-col items-center relative animate-pop"
      >
        <!-- Success Icon -->
        <div
          class="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4 animate-bounce-slow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <!-- Text -->
        <h2 class="text-2xl font-bold text-gray-800 mb-2 animate-fade-up">
          Welcome Back!
        </h2>
        <p class="text-gray-500 mb-6 animate-fade-up delay-100">
          You have successfully logged in.
        </p>

        <!-- Button -->
        <button
          @click="closeModal"
          class="bg-yellow-400 hover:bg-yellow-500 transition-colors text-white px-6 py-2 rounded-full font-semibold shadow-md animate-fade-up delay-200"
        >
          Continue
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<style scoped>
/* Fade transition for modal background */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Pop-in animation for modal */
@keyframes pop {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-pop {
  animation: pop 0.3s ease-out;
}

/* Bounce animation for success icon */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}

/* Fade-up animations */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.5s ease forwards;
}
.animate-fade-up.delay-100 {
  animation-delay: 0.1s;
}
.animate-fade-up.delay-200 {
  animation-delay: 0.2s;
}
</style>
