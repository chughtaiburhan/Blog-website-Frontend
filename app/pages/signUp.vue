<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import Text from "~/component/Text.vue";
import Button from "~/component/Button.vue";
import RightIllusion from "~/component/RightIllusion.vue";
import { useUserStore } from "~/stores/useUser";

const passwordShown = ref(false);
const auth = useUserStore();

const name = ref("");
const email = ref("");
const number = ref("");
const password = ref("");

const handleSignUp = async () => {
  try {
    await auth.signup({
      name: name.value,
      email: email.value,
      number: number.value,
      password: password.value,
    });
    navigateTo(`/email-verify?email=${encodeURIComponent(email.value)}`);
  } catch (error) {
    console.error("Signup error:", error);
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
      <!-- Left Side -->
      <div class="flex flex-col justify-start items-start">
        <div class="space-y-3 mb-8 lg:pr-20">
          <Text
            text="Create an Account"
            size="xl"
            color="white"
            class="p-1 inline-flex whitespace-nowrap font-bold"
          />
          <Text
            text="Access your account to explore features, connect with others, and continue your journey."
            size="xs"
          />
        </div>

        <div class="w-full max-w-xl">
          <form @submit.prevent="handleSignUp" class="space-y-6">
            <div>
              <label
                for="name"
                class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
              >
                <Icon
                  icon="mdi:account-outline"
                  class="text-yellow-400 text-lg"
                />
                Full Name
              </label>
              <input
                v-model="name"
                id="name"
                type="text"
                name="name"
                required
                autocomplete="name"
                placeholder="Enter your full name"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 ring-[#191919] placeholder:text-gray-500 focus:ring-yellow-400 focus:ring-2 transition duration-150 sm:text-sm/6 rounded-md"
              />
            </div>

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

            <div>
              <label
                for="number"
                class="flex items-center gap-2 text-sm font-medium text-gray-100 mb-2"
              >
                <Icon
                  icon="mdi:phone-outline"
                  class="text-yellow-400 text-lg"
                />
                Phone Number
              </label>
              <input
                v-model="number"
                id="number"
                type="tel"
                name="number"
                required
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="tel"
                placeholder="e.g. +92 300 1234567"
                class="block w-full border-0 bg-white/5 px-4 py-2 text-base text-white ring-1 ring-[#191919] placeholder:text-gray-500 focus:ring-yellow-400 focus:ring-2 transition duration-150 sm:text-sm/6 rounded-md"
              />
            </div>

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

            <div>
              <Button
                type="submit"
                text="CONTINUE"
                icon="mdi:account-arrow-right"
                color="secondary"
                class="w-full my-2 px-10 sm:px-4 hover:bg-yellow-500/20 transition duration-300"
                iconColor="yellow"
              />
            </div>
          </form>

          <p class="mt-2 text-center text-sm text-gray-400">
            Already have an account?
            <NuxtLink
              to="/login"
              class="font-semibold text-[#ffd119] hover:text-indigo-300 transition duration-150 ml-1"
            >
              Login
            </NuxtLink>
          </p>
        </div>
      </div>

      <RightIllusion src="/forgotPasswordImg.webp" />
    </div>
  </div>
</template>
