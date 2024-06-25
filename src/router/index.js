import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Task1 from '../views/Task1.vue'
import Task2 from '../views/Task2.vue'
import Task3 from '../views/Task3.vue'
import Task4 from '../views/Task4.vue'
import Task5 from '../views/Task5.vue'
import Task6 from '../views/Task6.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/task1', name: 'Task1', component: Task1 },
  { path: '/task2', name: 'Task2', component: Task2 },
  { path: '/task3', name: 'Task3', component: Task3 },
  { path: '/task4', name: 'Task4', component: Task4 },
  { path: '/task5', name: 'Task5', component: Task5 },
  { path: '/task6', name: 'Task6', component: Task6 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
