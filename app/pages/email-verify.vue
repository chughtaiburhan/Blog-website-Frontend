<script setup lang="ts">
import Button from "~/component/Button.vue";
import RightIllusion from "~/component/RightIllusion.vue";
import Text from "~/component/Text.vue";
import { Icon } from "@iconify/vue"; // ✅ import Iconify for icons
</script>

<template>
  <div
    class="bg-[#0a0a0a] min-h-screen pt-10 sm:pt-16 pb-16 border-t border-[#282828] text-white"
  >
    <div
      class="main_padding px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <!-- Left Section -->
      <div class="flex flex-col justify-start items-start">
        <div class="space-y-3 mb-8">
          <Text
            text="Verify Your Email"
            size="xl"
            color="white"
            class="p-1 inline-flex whitespace-nowrap font-bold"
          />
          <Text
            text="Please enter the OTP sent to your email to continue"
            size="xs"
            color="secondary"
            class="lg:pr-20"
          />
        </div>

        <!-- Form Section -->
        <div class="w-full max-w-xl">
          <form action="#" method="POST" class="space-y-6">
            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
              >
                <Icon icon="mdi:email-outline" class="text-yellow-400 text-lg" />
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autocomplete="email"
                placeholder="Enter your email"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 ring-[#191919] placeholder:text-gray-500 focus:ring-yellow-400 focus:ring-2 transition duration-150 sm:text-sm/6 rounded-md"
              />
            </div>

            <!-- OTP Field -->
            <div>
              <label
                for="otp"
                class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
              >
                <Icon
                  icon="mdi:shield-key-outline"
                  class="text-yellow-400 text-lg"
                />
                Enter OTP
              </label>
              <input
                id="otp"
                type="text"
                name="otp"
                required
                inputmode="numeric"
                autocomplete="one-time-code"
                placeholder="Enter the OTP"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 ring-[#191919] placeholder:text-gray-500 focus:ring-yellow-400 focus:ring-2 transition duration-150 sm:text-sm/6 rounded-md"
              />
            </div>

            <!-- Submit Button -->
            <div>
              <Button
                text="Verify OTP"
                icon="mdi:check-circle-outline"
                color="secondary"
                class="w-full my-2 px-10 sm:px-4 hover:bg-yellow-500/20 transition duration-300"
                iconColor="yellow"
              />
            </div>
          </form>
        </div>
      </div>

      <!-- Right Image -->
      <RightIllusion src="/emailImg.webp" />
    </div>
  </div>
</template>
