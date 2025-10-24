import { defineStore } from "pinia";
import type { User, UserData } from "~/types/user";
import { apiFetch } from "~/utils/api";
import { useCookie } from "#app";

export const useUserStore = defineStore("user", {
  state: (): UserData & { loading: boolean; error: string | null } => ({
    user: null,
    loading: false,
    error: null,
  }),

  actions: {
    async signup(formData: {
      name: string;
      email: string;
      number: string;
      password: string;
    }) {
      this.loading = true;
      this.error = null;
      try {
        const res = await apiFetch<{ message: string }>("/users/signup", {
          method: "POST",
          body: formData,
        });
        return res;
      } catch (err: any) {
        this.error = err.message || "Signup failed";
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async verifyOtp({ email, otp }: { email: string; otp: string }) {
      this.loading = true;
      this.error = null;
      try {
        const res = await apiFetch<{ user: User; token: string }>(
          "/users/verify-otp",
          {
            method: "POST",
            body: { email, otp },
          }
        );

        const token = useCookie("token");
        token.value = res.token;

        this.user = res.user;

        return res.user;
      } catch (err: any) {
        this.error = err.message || "OTP verification failed";
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async login({ email, password }: { email: string; password: string }) {
      this.loading = true;
      this.error = null;
      try {
        const res = await apiFetch<{ user: User; token: string }>(
          "/users/login",
          {
            method: "POST",
            body: { email, password },
          }
        );

        const token = useCookie("token");
        token.value = res.token;

        this.user = res.user;

        return res.user;
      } catch (err: any) {
        this.error = err.message || "Login failed";
        console.error("Login failed:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async forgotPassword({ email }: { email: string }) {
      this.loading = true;
      this.error = null;
      try {
        const res = await apiFetch<{ message: string }>(
          "/users/forgot-password",
          {
            method: "POST",
            body: { email },
          }
        );
        return res;
      } catch (err: any) {
        this.error = err.message || "Failed to send reset OTP";
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async verifyResetOtp({ email, otp }: { email: string; otp: string }) {
      this.loading = true;
      this.error = null;
      try {
        const res = await apiFetch<{ message: string }>(
          "/users/verify-reset-otp",
          {
            method: "POST",
            body: { email, otp },
          }
        );
        return res;
      } catch (err: any) {
        this.error = err.message || "OTP verification failed";
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async resetPassword({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) {
      this.loading = true;
      this.error = null;
      try {
        const res = await apiFetch<{ message: string }>(
          "/users/reset-password",
          {
            method: "POST",
            body: { email, password },
          }
        );
        return res;
      } catch (err: any) {
        this.error = err.message || "Password reset failed";
        throw err;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      const token = useCookie("token");
      token.value = null;
      this.user = null;
    },
  },
});
