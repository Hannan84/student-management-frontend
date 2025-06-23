<template>
  <div class="p-4">
    <h2 class="text-2xl mb-4">All Students</h2>
    <router-link
      to="/students/create"
      class="bg-blue-500 text-white px-4 py-2 mb-4 inline-block"
      >Add Student</router-link
    >
    <ul>
      <li
        v-for="student in students"
        :key="student.id"
        class="border-b py-2 flex justify-between"
      >
        <div>
          {{ student.name }} — {{ student.email }} ({{ student.department }})
        </div>
        <div>
          <router-link
            :to="`/students/${student.id}/edit`"
            class="text-blue-600 mr-2"
            >Edit</router-link
          >
          <button @click="deleteStudent(student.id)" class="text-red-600 mr-2">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "../axios";

const students = ref([]);

onMounted(async () => {
  const res = await axios.get("/students");
  students.value = res.data.students;
});

const deleteStudent = async (id) => {
  if (confirm("Are you sure you?")) {
    try {
      await axios.delete(`/students/${id}`);
      students.value = students.value.filter((s) => s.id !== id);
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete student.");
    }
  }
};
</script>
