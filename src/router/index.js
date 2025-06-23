import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import StudentList from "../views/StudentList.vue";
import StudentCreate from "../views/StudentCreate.vue";
import StudentEdit from "../views/StudentEdit.vue";

const routes = [
  { path: "/", redirect: "/students" },
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  { path: "/students", component: StudentList },
  { path: "/students/create", component: StudentCreate },
  { path: "/students/:id/edit", component: StudentEdit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
