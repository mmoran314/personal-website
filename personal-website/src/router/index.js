import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import TheAbout from '@/components/views/TheAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Try to follow naming conventions for routes.
    // This means lower case and use dashes instead of spaces. -Mike
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'TheAbout',
      component: TheAbout
    }
  ]
})

export default router
