import { createRouter, createWebHistory } from 'vue-router'
import main from '../Pages/main.vue'
import UserPages from '../Pages/UserPages.vue'
import PostIdPages from '../Pages/PostIdPages.vue'
import PostPageWithStore from '../Pages/PostPageWithStore.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/posts',
    name: 'UserPages',
    component: UserPages
  },
  {
    path: '/posts/:id',
    name: 'PostIdPages',
    component: PostIdPages
  },
  {
    path: '/store',
    name: 'PostPageWithStore',
    component: PostPageWithStore
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
