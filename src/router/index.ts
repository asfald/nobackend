import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path: '/',
      name: 'Home',
      component: () => import('./../pages/Home.vue')
   },
    {
      path: '/galleryview',
      name: 'GalleryView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./../pages/GalleryView.vue')
    },
    
    {
      path: '/workpage',
      name: 'WorkPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./../pages/WorkPage.vue')
    },
    {
      path: '/contactpage',
      name: 'ContactPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./../pages/ContactPage.vue')
    },
  ]
})

export default router

