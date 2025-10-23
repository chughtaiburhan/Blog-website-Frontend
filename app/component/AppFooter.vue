<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Logo from './Logo.vue'
import Text from './Text.vue'
</script>

<template>
  <footer class="bg-black border-t border-[#282828] text-gray-400">
    <div class="main_padding py-10">
      <div class="flex-1 xl:flex xl:justify-between">
        <!-- Brand Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group pb-10">
          <Logo />
        </NuxtLink>

        <!-- Footer Links -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <!-- Resources -->
          <div>
            <Text
              text="Resources"
              size="sm"
              icon="mdi:book-open-page-variant-outline"
              color="white"
              class="font-semibold pb-5"
            />
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/blogs" class="flex items-center gap-2 hover:text-[#ffd119] transition-colors">
                  <Icon icon="mdi:file-document-outline" class="w-4 h-4" />
                  Blogs
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ebooks" class="flex items-center gap-2 hover:text-[#ffd119] transition-colors">
                  <Icon icon="mdi:book-outline" class="w-4 h-4" />
                  Ebooks
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Follow Us -->
          <div>
            <Text
              text="Follow Us"
              size="sm"
              icon="mdi:account-group-outline"
              color="white"
              class="font-semibold pb-5"
            />
            <ul class="space-y-2">
              <li>
                <a href="https://github.com/" target="_blank" class="flex items-center gap-2 hover:text-[#ffd119] transition-colors">
                  <Icon icon="mdi:github" class="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" class="flex items-center gap-2 hover:text-[#ffd119] transition-colors">
                  <Icon icon="mdi:twitter" class="w-4 h-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <Text
              text="Legal"
              size="sm"
              icon="mdi:shield-check-outline"
              color="white"
              class="font-semibold pb-5"
            />
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/privacy" class="flex items-center gap-2 hover:text-[#ffd119] transition-colors">
                  <Icon icon="mdi:lock-outline" class="w-4 h-4" />
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms" class="flex items-center gap-2 hover:text-[#ffd119] transition-colors">
                  <Icon icon="mdi:scale-balance" class="w-4 h-4" />
                  Terms & Conditions
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="my-8 border-[#282828]" />

      <!-- Footer Bottom -->
      <div class="flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
        <Text
          :text="`© ${new Date().getFullYear()} FutureTech™. All rights reserved.`"
          size="xs"
          color="gray"
          class="text-center sm:text-left"
        />

        <!-- Social Icons -->
        <div class="flex space-x-5 mt-4 sm:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            class="hover:text-[#ffd119] transition-colors transform hover:scale-110"
          >
            <Icon icon="mdi:facebook" class="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            class="hover:text-[#ffd119] transition-colors transform hover:scale-110"
          >
            <Icon icon="mdi:twitter" class="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="hover:text-[#ffd119] transition-colors transform hover:scale-110"
          >
            <Icon icon="mdi:github" class="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            class="hover:text-[#ffd119] transition-colors transform hover:scale-110"
          >
            <Icon icon="mdi:linkedin" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
