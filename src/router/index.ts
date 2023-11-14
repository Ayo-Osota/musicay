import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue"
import CollectionsPage from "@/pages/CollectionsPage.vue"
import SingleMusicPage from "@/pages/SingleMusicPage.vue"
import NotFoundPage from "@/pages/NotFoundPage.vue"

const routes = [
  {
    name: 'Home',
    path: "/",
    component: HomePage
  },
  {
    name: 'Collections',
    path: "/collections",
    component: CollectionsPage
  },
  {
    name: 'Radio',
    path: "/radio",
    component: NotFoundPage
  },
  {
    name: 'Videos',
    path: "/videos",
    component: NotFoundPage
  },
  {
    name: 'SingleMusic',
    path: "/m/:id",
    component: SingleMusicPage
  },
  {
    path: "/:catchAll(.*)*",
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
