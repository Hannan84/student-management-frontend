<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-xl mb-4">Add New Student</h2>
    <form @submit.prevent="handleCreate">
      <input
        v-model="form.name"
        type="text"
        placeholder="Name"
        class="border w-full p-2 mb-2"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="border w-full p-2 mb-2"
      />
      <input
        v-model="form.department"
        type="text"
        placeholder="Department"
        class="border w-full p-2 mb-2"
      />
      <button class="bg-blue-600 text-white px-4 py-2">Create</button>
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "../axios";
import { useRouter } from "vue-router";

const form = ref({
  name: "",
  email: "",
  department: "",
});

const error = ref("");
const router = useRouter();

const handleCreate = async () => {
  try {
    await axios.post("/students", form.value);
    router.push("/students");
  } catch (err) {
    error.value = err.response?.data?.message || "Failed to create student";
  }
};
</script>
