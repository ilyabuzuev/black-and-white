import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import HomeView from '@/views/HomeView.vue';
import ServicesView from '@/views/ServicesView.vue';
import ShopView from '@/views/ShopView.vue';
import ContactsView from '@/views/ContactsView.vue';
import NewsView from '@/views/NewsView.vue';
import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsView
    },
    {
      path: '/news',
      name: 'News',
      component: NewsView
    },
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
