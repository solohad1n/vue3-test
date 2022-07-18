import { createRouter, createWebHistory } from 'vue-router'
import main from '../Pages/main.vue'
import UserPages from '../Pages/UserPages.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/users',
    name: 'UserPages',
    component: UserPages
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
