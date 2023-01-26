import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ItemList from '../components/ItemList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/items/:week',
      name : 'items',
      component: ItemList,
      props : true
    }
  ]
})

export default router
