import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ItemDetails from '@/components/ItemDetails.vue';

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/items/:itemId',
    name: 'ItemDetails',
    component: ItemDetails,
  },
  {
    path: '/subitems/:itemId',
    name: 'ItemDetails',
    component: ItemDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});