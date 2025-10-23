<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import Text from "~/component/Text.vue";
import Button from "~/component/Button.vue";
import RightIllusion from "~/component/RightIllusion.vue";

const passwordShown = ref(false);

const togglePasswordVisibility = () => {
  passwordShown.value = !passwordShown.value;
};
</script>

<template>
  <div
    class="bg-[#0a0a0a] min-h-screen pt-10 sm:pt-16 pb-16 border-t border-[#282828] text-white"
  >
    <div
      class="main_padding px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <div
        class="flex flex-col justify-start items-start"
      >
        <div class="space-y-3 mb-8">
          <Text
            text="Create an Account"
            size="xl"
            color="white"
            class="p-1 inline-flex whitespace-nowrap font-bold"
          />
          <Text
            text="Access your account to explore features, connect with others, and continue your journey."
            size="xs"
            color="secondary"
            class="lg:pr-20"
          />
        </div>

        <div class="w-full max-w-xl">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-100 mb-2"
                >Full Name</label
              >
              <input
                id="name"
                type="name"
                name="name"
                required
                autocomplete="name"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 placeholder:text-gray-500 focus:ring-[#191919] transition duration-150 sm:text-sm/6"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-100 mb-2"
                >Email address</label
              >
              <input
                id="email"
                type="email"
                name="email"
                required
                autocomplete="email"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 placeholder:text-gray-500 focus:ring-[#191919] transition duration-150 sm:text-sm/6"
              />
            </div>
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-100 mb-2"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                required
                inputmode="tel"
                autocomplete="tel"
                placeholder="e.g. +92 300 1234567"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 placeholder:text-gray-500 focus:ring-[#191919] transition duration-150 sm:text-sm/6"
              />
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-100 mb-2"
                  >Password</label
                >
                <div class="text-sm">
                  <NuxtLink
                    to="/forgot-password"
                    class="font-semibold text-[#ffd119] transition duration-150"
                  >
                    Forgot password?
                  </NuxtLink>
                </div>
              </div>

              <div class="mt-1 relative">
                <input
                  id="password"
                  :type="passwordShown ? 'text' : 'password'"
                  name="password"
                  required
                  autocomplete="current-password"
                  class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 placeholder:text-gray-500 focus:ring-[#191919] transition duration-150 sm:text-sm/6"
                />
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition duration-150"
                  aria-label="Toggle password visibility"
                >
                  <Icon
                    :icon="passwordShown ? 'mdi:eye' : 'mdi:eye-off'"
                    class="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            <div>
              <Button
                text="Create an Account"
                icon="mdi:account-arrow-right"
                color="secondary"
                class="w-full my-2 px-10 sm:px-4"
                iconColor="yellow"
              />
            </div>
          </form>

          <!-- Sign-up link -->
          <p class="mt-2 text-center text-sm text-gray-400">
            If have an account?
            <NuxtLink
              to="/login"
              class="font-semibold text-[#ffd119] hover:text-indigo-300 transition duration-150 ml-1"
            >
              Login
            </NuxtLink>
          </p>
        </div>
      </div>
      <RightIllusion />
    </div>
  </div>
</template>
