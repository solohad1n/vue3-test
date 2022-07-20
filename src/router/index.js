import { createRouter, createWebHistory } from 'vue-router'
import main from '../Pages/main.vue'
import UserPages from '../Pages/UserPages.vue'
import PostIdPages from '../Pages/PostIdPages.vue'
import PostPageWithStore from '../Pages/PostPageWithStore.vue'
import PostPageComposition from '../Pages/PostPageComposition.vue'

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
  {
    path: '/composition',
    name: 'PostPageComposition',
    component: PostPageComposition
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
