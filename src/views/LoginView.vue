<template>
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="input mb-2 w-full"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="input mb-2 w-full"
      />
      <button type="submit" class="btn bg-blue-500 text-white w-full">
        Login
      </button>
      <p class="text-red-500 mt-2" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:8000/api/login", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("token", res.data.token);
    router.push("/students");
  } catch (err) {
    error.value = "Invalid credentials";
  }
};
</script>
