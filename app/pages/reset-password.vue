<script setup lang="ts">
import Button from "~/component/Button.vue";
import RightIllusion from "~/component/RightIllusion.vue";
import Text from "~/component/Text.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useUserStore } from "~/stores/useUser";

const passwordShown = ref(false);
const auth = useUserStore();
const route = useRoute();

const email = ref();
const password = ref("");

onMounted(() => {
  const queryEmail = route.query.email as string | undefined;
  if (queryEmail) {
    email.value = queryEmail;
  } else {
    email.value = auth.user?.email;
  }
});

const handleResetPassword = async () => {
  try {
    await auth.verifyOtp({ email: email.value, otp: password.value });
    navigateTo("/login");
  } catch (err) {
    console.error("Verification failed:", err);
  }
};

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
      <!-- Left Section -->
      <div class="flex flex-col justify-start items-start">
        <div class="space-y-3 mb-8">
          <Text
            text="New Password"
            size="xl"
            color="white"
            class="p-1 inline-flex whitespace-nowrap font-bold"
          />
          <Text
            text="Please enter the new password for user login successfully!"
            size="xs"
            color="secondary"
            class="lg:pr-20"
          />
        </div>

        <!-- Form Section -->
        <div class="w-full max-w-xl">
          <form
            @submit.prevent="handleResetPassword"
            method="POST"
            class="space-y-6"
          >
            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
              >
                <Icon
                  icon="mdi:email-outline"
                  class="text-yellow-400 text-lg"
                />
                Email address
              </label>
              <input
                v-model="email"
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
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
                >
                  <Icon
                    icon="mdi:lock-outline"
                    class="text-yellow-400 text-lg"
                  />
                  Password
                </label>
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
                  v-model="password"
                  id="password"
                  :type="passwordShown ? 'text' : 'password'"
                  name="password"
                  required
                  autocomplete="current-password"
                  placeholder="Enter your password"
                  class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 ring-[#191919] placeholder:text-gray-500 focus:ring-yellow-400 focus:ring-2 transition duration-150 sm:text-sm/6 rounded-md"
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

            <!-- Submit Button -->
            <div>
              <Button
                type="submit"
                text="SIGN IN"
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
      <RightIllusion src="/signupImg.svg" />
    </div>
  </div>
</template>
