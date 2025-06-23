<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-xl mb-4">Register</h2>
    <form @submit.prevent="register">
      <input
        v-model="name"
        type="text"
        placeholder="Name"
        class="border w-full p-2 mb-2"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border w-full p-2 mb-2"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border w-full p-2 mb-2"
      />
      <input
        v-model="password_confirmation"
        type="password"
        placeholder="Confirm Password"
        class="border w-full p-2 mb-2"
      />
      <button class="bg-green-600 text-white px-4 py-2">Register</button>
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "../axios";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const error = ref("");
const router = useRouter();

const register = async () => {
  try {
    const res = await axios.post("/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    });
    localStorage.setItem("token", res.data.token);
    router.push("/students");
  } catch (err) {
    error.value = err.response?.data?.message || "Registration failed";
  }
};
</script>
