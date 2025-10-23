<script setup lang="ts">
import { ref, watch } from "vue";
import Logo from "./Logo.vue";
import Button from "./Button.vue";

const ListItem = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact Us", href: "/contactUs" },
  { title: "Resources", href: "/resources" },
];

const isMenuOpen = ref(false);

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
</script>

<template>
  <nav
    class="main_padding py-3 w-full bg-[#1A1A1A] border-y border-[#282828] text-white flex items-center justify-between relative z-50"
  > 
    <Logo />

    <ul class="hidden md:flex items-center space-x-8 ">
      <li v-for="(item, index) in ListItem" :key="index">
        <NuxtLink
          :to="item.href"
          class="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-xs xl:text-base"
        >
          {{ item.title }}
        </NuxtLink>
      </li> 
    </ul>
    <div class="hidden md:flex">
        <Button
        text="Sign Up"
        icon="mdi:send"
        color="primary" 
        iconColor="black"
        to="/signUp"
        @click="() => console.log('SignUp clicked')"
        /> 
    </div>

    <button
      class="md:hidden focus:outline-none"
      @click="isMenuOpen = !isMenuOpen"
      aria-label="Toggle menu"
    >
      <Icon
        :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
        class="text-2xl text-gray-200"
      />
    </button>

    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 top-[90px] bg-[#1A1A1A] border-t border-gray-700 md:hidden z-40
               overflow-y-auto flex flex-col items-center"
      >
        <ul class="w-full flex flex-col items-center py-6 space-y-6">
          <li
            v-for="(item, index) in ListItem"
            :key="index"
            @click="isMenuOpen = false"
          >
            <NuxtLink
              :to="item.href"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-200"
            >
              {{ item.title }}
            </NuxtLink>
          </li>

          <li>
            <Button
              text="Sign Up"
              icon="mdi:send"
              color="primary"
              iconColor="black"
              class="w-72"
              to="/signUp"
              @click="() => { isMenuOpen = false; console.log('SignUp clicked') }"
            />
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
