<script setup lang="ts">
import Button from "~/component/Button.vue";
import RightIllusion from "~/component/RightIllusion.vue";
import Text from "~/component/Text.vue";
</script>

<template>
  <div
    class="bg-[#0a0a0a] min-h-screen pt-20 sm:pt-16 pb-16 border-t border-[#282828] text-white"
  >
    <div
      class="main_padding px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <div class="flex flex-col justify-start items-start">
        <div class="space-y-3 mb-8">
          <Text
            text="Login"
            size="xl"
            color="white"
            class="p-1 inline-flex whitespace-nowrap font-bold"
          />
          <Text
            text="Please enter the email and password for user login to continue"
            size="xs"
            color="secondary"
            class="lg:pr-20"
          />
        </div>

        <div class="w-full max-w-xl">
          <form action="#" method="POST" class="space-y-6">
            <!-- Email -->
            <div>
              <label
                for="email"
                class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
              >
                <Icon name="mdi:email-outline" class="text-yellow-400 text-lg" />
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autocomplete="email"
                placeholder="Enter your email"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 placeholder:text-gray-500 focus:ring-yellow-400 focus:ring-2 transition duration-150 sm:text-sm/6 rounded-md"
              />
            </div>

            <!-- Password -->
            <div>
              <label
                for="password"
                class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
              >
                <Icon name="mdi:lock-outline" class="text-yellow-400 text-lg" />
                Enter Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                autocomplete="current-password"
                placeholder="Enter your password"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 placeholder:text-gray-500 focus:ring-yellow-400 focus:ring-2 transition duration-150 sm:text-sm/6 rounded-md"
              />
            </div>

            <!-- Login Button -->
            <div>
              <Button
                text="Login"
                icon="mdi:login"
                color="secondary"
                class="w-full my-2 px-10 sm:px-4 hover:bg-yellow-500/20 transition duration-300"
                iconColor="yellow"
              />
            </div>
          </form>
        </div>
      </div>

      <RightIllusion src="/loginImg.webp" />
    </div>
  </div>
</template>
