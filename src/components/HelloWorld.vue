<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4"
  >
    <div
      class="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        <span class="text-indigo-600">Vue 3</span> +
        <span class="text-purple-600">Vite</span> +
        <span class="text-emerald-500">Tailwind CSS</span>
      </h1>

      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        If you see this styled beautifully, Tailwind CSS is working perfectly!
      </p>

      <div
        class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6"
      >
        <button
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75"
        >
          Get Started
        </button>
        <button
          class="bg-transparent border-2 border-purple-500 hover:border-purple-600 text-purple-600 hover:text-purple-700 font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75"
        >
          Learn More
        </button>
      </div>

      <p class="text-sm text-gray-500 mt-8">
        Developed with ❤️ in Dhaka, Bangladesh
      </p>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
