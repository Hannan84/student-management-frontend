<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-xl mb-4">Edit Student</h2>
    <form @submit.prevent="handleUpdate">
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
      <button class="bg-green-600 text-white px-4 py-2">Update</button>
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "../axios";
import { useRouter, useRoute } from "vue-router";

const form = ref({
  name: "",
  email: "",
  department: "",
});
const error = ref("");
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  try {
    const res = await axios.get(`/students/${route.params.id}`);
    form.value = res.data.student;
  } catch (err) {
    error.value = "Student not found";
  }
});

const handleUpdate = async () => {
  try {
    await axios.put(`/students/${route.params.id}`, form.value);
    router.push("/students");
  } catch (err) {
    error.value = err.response?.data?.message || "Failed to update student";
  }
};
</script>
