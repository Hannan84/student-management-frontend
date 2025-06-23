<template>
  <nav class="bg-gray-800 text-white p-4 flex justify-between">
    <router-link to="/students" class="mr-4">Students</router-link>
    <div>
      <template v-if="token">
        <button @click="logout">Logout</button>
      </template>
      <template v-else>
        <router-link to="/login" class="mr-2">Login</router-link>
        <router-link to="/register">Register</router-link>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const token = localStorage.getItem("token");

const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>
